#!/usr/bin/env node
/**
 * seed-project.mjs
 * Usage: node scripts/seed-project.mjs ./path/to/README.md
 *
 * Parses a README.md into a structured project object and pushes it to Appwrite.
 * Falls back to printing the JSON if APPWRITE_API_KEY is not set.
 */

import { readFileSync } from "fs";
import { createInterface } from "readline";
import { Client, Databases, ID, Query } from "node-appwrite";
import matter from "gray-matter";

// ─── Config ──────────────────────────────────────────────────────────────────
const ENDPOINT    = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1";
const PROJECT_ID  = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.APPWRITE_PROJECTS_COLLECTION_ID ?? "";
const API_KEY     = process.env.APPWRITE_API_KEY ?? "";

// ─── Appwrite client helper ───────────────────────────────────────────────────
function getDbClient() {
  const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);
  return new Databases(client);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)/m);
  return match ? match[1].trim() : "";
}

function extractDescription(content) {
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("!") && !trimmed.startsWith("```")) {
      return trimmed.replace(/\*\*/g, "").replace(/\*/g, "").slice(0, 160);
    }
  }
  return "";
}

/** Escape regex special characters in a string */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Extract bullet-list items under a heading (case-insensitive).
 * Returns an array of strings.
 */
function extractSection(content, heading) {
  const regex = new RegExp(
    `##\\s+${escapeRegex(heading)}[\\s\\S]*?\\n([\\s\\S]*?)(?=\\n##|$)`,
    "i"
  );
  const match = content.match(regex);
  if (!match) return [];
  return match[1]
    .split("\n")
    .map((l) => l.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean);
}

/**
 * Extract a prose block under a heading as a single string.
 * Used for problemStatement and challenges.
 */
function extractProseSection(content, heading) {
  const regex = new RegExp(
    `##\\s+${escapeRegex(heading)}[\\s\\S]*?\\n([\\s\\S]*?)(?=\\n##|$)`,
    "i"
  );
  const match = content.match(regex);
  if (!match) return "";
  return match[1]
    .split("\n")
    .map((l) => l.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean)
    .join(" ")
    .trim();
}

const KNOWN_TECH = [
  "Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript",
  "JavaScript", "Tailwind", "Firebase", "Appwrite", "Prisma",
  "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Vercel",
  "Netlify", "JWT", "OAuth", "GraphQL", "REST", "Vite", "Webpack",
  "OpenAI", "Framer Motion", "Shadcn", "Zustand", "Redux",
  "WebSockets", "Chart.js",
];

function detectTechStack(content) {
  return KNOWN_TECH.filter((tech) =>
    new RegExp(`\\b${tech}\\b`, "i").test(content)
  );
}

function extractUrls(content) {
  const github = content.match(/https?:\/\/github\.com\/[^\s)>\"]+/)?.[0] ?? "";
  const live = content.match(/https?:\/\/(?!github)[^\s)>\"]+/)?.[0] ?? "";
  return { githubUrl: github, liveUrl: live };
}

function prompt(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ─── Slug uniqueness check ────────────────────────────────────────────────────
async function isSlugUnique(slug) {
  if (!API_KEY || !PROJECT_ID || !DATABASE_ID || !COLLECTION_ID) return true; // can't check without creds

  try {
    const db = getDbClient();
    const result = await db.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("slug", slug),
      Query.limit(1),
    ]);
    return result.total === 0;
  } catch {
    return true; // assume unique if check fails
  }
}

// ─── Appwrite push ────────────────────────────────────────────────────────────
async function pushToAppwrite(projectData) {
  if (!API_KEY || !PROJECT_ID || !DATABASE_ID || !COLLECTION_ID) {
    console.log("\n⚠️  Appwrite credentials not set. Printing JSON instead:\n");
    console.log(JSON.stringify(projectData, null, 2));
    return;
  }

  const db = getDbClient();

  const doc = await db.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    projectData
  );

  console.log(`\n✅ Project created! Document ID: ${doc.$id}`);
  console.log(`   Slug: ${projectData.slug}`);
  console.log(`   Live at: https://chiragbhoimarshal.netlify.app/projects/${projectData.slug}`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("Usage: node scripts/seed-project.mjs ./path/to/README.md");
    process.exit(1);
  }

  const raw = readFileSync(filePath, "utf-8");
  const { content, data: frontmatter } = matter(raw);

  // Parse README — auto-detect all fields
  const title = frontmatter.title ?? extractTitle(content);
  const description = frontmatter.description ?? extractDescription(content);
  const techStack = frontmatter.techStack ?? detectTechStack(content);
  const features = frontmatter.features ?? extractSection(content, "features");

  // Auto-extract problem statement from common headings
  const problemStatement =
    frontmatter.problemStatement ??
    extractProseSection(content, "problem") ||
    extractProseSection(content, "problem statement") ||
    extractProseSection(content, "motivation") ||
    extractProseSection(content, "why") ||
    "";

  // Auto-extract challenges section
  const challenges =
    frontmatter.challenges ??
    extractProseSection(content, "challenges") ||
    extractProseSection(content, "challenges & solutions") ||
    extractProseSection(content, "technical challenges") ||
    "";

  const { githubUrl, liveUrl } = extractUrls(content);

  const rl = createInterface({ input: process.stdin, output: process.stdout });

  console.log(`\n📄 Parsed from README:`);
  console.log(`  Title            : ${title}`);
  console.log(`  Description      : ${description}`);
  console.log(`  Tech Stack       : ${techStack.join(", ")}`);
  console.log(`  Features         : ${features.slice(0, 3).join(", ")}${features.length > 3 ? "..." : ""}`);
  console.log(`  Problem Statement: ${problemStatement ? problemStatement.slice(0, 80) + "..." : "(not detected)"}`);
  console.log(`  Challenges       : ${challenges ? challenges.slice(0, 80) + "..." : "(not detected)"}`);
  console.log(`  GitHub URL       : ${githubUrl}`);
  console.log(`  Live URL         : ${liveUrl}`);
  console.log("");

  const confirmedTitle = (await prompt(rl, `Title [${title}]: `)) || title;

  // Slug: suggest, then check uniqueness
  let defaultSlug = slugify(confirmedTitle);
  let confirmedSlug = (await prompt(rl, `Slug [${defaultSlug}]: `)) || defaultSlug;

  const unique = await isSlugUnique(confirmedSlug);
  if (!unique) {
    console.log(`\n⚠️  Slug "${confirmedSlug}" already exists in Appwrite.`);
    confirmedSlug = await prompt(rl, `Enter a different slug: `);
    if (!confirmedSlug) {
      console.error("Slug is required. Aborting.");
      rl.close();
      process.exit(1);
    }
  }

  const confirmedLiveUrl = (await prompt(rl, `Live URL [${liveUrl}]: `)) || liveUrl;
  const confirmedGithubUrl = (await prompt(rl, `GitHub URL [${githubUrl}]: `)) || githubUrl;

  const categoryInput = await prompt(rl, "Category (saas/ai/ecommerce/other) [other]: ");
  const category = ["saas", "ai", "ecommerce", "other"].includes(categoryInput.toLowerCase())
    ? categoryInput.toLowerCase()
    : "other";

  const statusInput = await prompt(rl, "Status (production/building/archived) [production]: ");
  const status = ["production", "building", "archived"].includes(statusInput.toLowerCase())
    ? statusInput.toLowerCase()
    : "production";

  const featuredInput = await prompt(rl, "Featured on homepage? (y/n) [n]: ");
  const featured = featuredInput.toLowerCase() === "y";

  // Allow manual override of auto-detected fields
  const confirmedProblem =
    (await prompt(rl, `Problem Statement [${problemStatement ? "auto-detected, press Enter to keep" : "enter manually"}]: `)) ||
    problemStatement;

  rl.close();

  const projectData = {
    title: confirmedTitle,
    slug: confirmedSlug,
    description,
    content,
    techStack,
    features,
    category,
    githubUrl: confirmedGithubUrl,
    liveUrl: confirmedLiveUrl,
    featured,
    status,
    problemStatement: confirmedProblem,
    challenges,
    coverImage: "",
    createdAt: new Date().toISOString(),
  };

  await pushToAppwrite(projectData);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
