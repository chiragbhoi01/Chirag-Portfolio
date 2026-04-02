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
import { Client, Databases, ID } from "node-appwrite";
import matter from "gray-matter";

// ─── Config (loaded from env) ────────────────────────────────────────────────
const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1";
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.APPWRITE_PROJECTS_COLLECTION_ID ?? "";
const API_KEY = process.env.APPWRITE_API_KEY ?? "";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Extract H1 title */
function extractTitle(content) {
  const match = content.match(/^#\s+(.+)/m);
  return match ? match[1].trim() : "";
}

/** Extract first non-heading paragraph as description */
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

/** Extract bullet-list items under a heading */
function extractSection(content, heading) {
  const regex = new RegExp(
    `##\\s+${heading}[\\s\\S]*?\\n([\\s\\S]*?)(?=\\n##|$)`,
    "i"
  );
  const match = content.match(regex);
  if (!match) return [];
  return match[1]
    .split("\n")
    .map((l) => l.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean);
}

/** Detect tech stack from content using a known-tech whitelist */
const KNOWN_TECH = [
  "Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript",
  "JavaScript", "Tailwind", "Firebase", "Appwrite", "Prisma",
  "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Vercel",
  "Netlify", "JWT", "OAuth", "GraphQL", "REST", "Vite", "Webpack",
  "OpenAI", "Framer Motion", "Shadcn", "Zustand", "Redux",
];

function detectTechStack(content) {
  return KNOWN_TECH.filter((tech) =>
    new RegExp(`\\b${tech}\\b`, "i").test(content)
  );
}

/** Extract URLs from markdown */
function extractUrls(content) {
  const github = content.match(/https?:\/\/github\.com\/[^\s)>\"]+/)?.[0] ?? "";
  const live = content.match(/https?:\/\/(?!github)[^\s)>\"]+/)?.[0] ?? "";
  return { githubUrl: github, liveUrl: live };
}

// ─── Interactive prompt ───────────────────────────────────────────────────────

function prompt(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// ─── Appwrite push ───────────────────────────────────────────────────────────

async function pushToAppwrite(projectData) {
  if (!API_KEY || !PROJECT_ID || !DATABASE_ID || !COLLECTION_ID) {
    console.log("\n⚠️  Appwrite credentials not set. Printing JSON instead:\n");
    console.log(JSON.stringify(projectData, null, 2));
    return;
  }

  const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

  const databases = new Databases(client);

  const doc = await databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    projectData
  );

  console.log(`\n✅ Project created! Document ID: ${doc.$id}`);
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

  // Parse README
  const title = frontmatter.title ?? extractTitle(content);
  const description = frontmatter.description ?? extractDescription(content);
  const techStack = frontmatter.techStack ?? detectTechStack(content);
  const features = frontmatter.features ?? extractSection(content, "features");
  const { githubUrl, liveUrl } = extractUrls(content);

  // Interactive prompts for fields we can't infer
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  console.log(`\n📄 Parsed from README:`);
  console.log(`  Title       : ${title}`);
  console.log(`  Description : ${description}`);
  console.log(`  Tech Stack  : ${techStack.join(", ")}`);
  console.log(`  Features    : ${features.slice(0, 3).join(", ")}${features.length > 3 ? "..." : ""}`);
  console.log(`  GitHub URL  : ${githubUrl}`);
  console.log(`  Live URL    : ${liveUrl}`);
  console.log("");

  const confirmedTitle = (await prompt(rl, `Title [${title}]: `)) || title;
  const confirmedSlug = (await prompt(rl, `Slug [${slugify(confirmedTitle)}]: `)) || slugify(confirmedTitle);
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
    problemStatement: "",
    challenges: "",
    coverImage: "",
    createdAt: new Date().toISOString(),
  };

  await pushToAppwrite(projectData);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
