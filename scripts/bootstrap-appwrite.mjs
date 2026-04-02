#!/usr/bin/env node

import { existsSync, readFileSync } from "fs";
import { Client, Databases } from "node-appwrite";

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;

  const raw = readFileSync(filePath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const equalIndex = trimmed.indexOf("=");
    if (equalIndex === -1) continue;

    const key = trimmed.slice(0, equalIndex).trim();
    let value = trimmed.slice(equalIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1";
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";
const API_KEY = process.env.APPWRITE_API_KEY ?? "";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID ?? "portfolio_db";
const COLLECTION_ID = process.env.APPWRITE_PROJECTS_COLLECTION_ID ?? "projects";

const DATABASE_NAME = "Portfolio Database";
const COLLECTION_NAME = "Projects";

const REQUIRED_ATTRIBUTES = [
  { type: "string", key: "title", size: 255, required: true },
  { type: "string", key: "slug", size: 255, required: true },
  { type: "string", key: "description", size: 500, required: true },
  { type: "string", key: "content", size: 50000, required: true },
  { type: "string", key: "techStack", size: 100, required: true, array: true },
  { type: "string", key: "features", size: 200, required: true, array: true },
  {
    type: "enum",
    key: "category",
    elements: ["saas", "ai", "ecommerce", "other"],
    required: true,
  },
  { type: "string", key: "githubUrl", size: 500, required: false },
  { type: "string", key: "liveUrl", size: 500, required: false },
  { type: "string", key: "coverImage", size: 500, required: false },
  { type: "boolean", key: "featured", required: true },
  {
    type: "enum",
    key: "status",
    elements: ["production", "building", "archived"],
    required: true,
  },
  { type: "string", key: "problemStatement", size: 5000, required: false },
  { type: "string", key: "challenges", size: 5000, required: false },
  { type: "datetime", key: "createdAt", required: true },
];

const REQUIRED_INDEXES = [
  { key: "slug_unique", type: "unique", attributes: ["slug"] },
  { key: "createdAt_desc", type: "key", attributes: ["createdAt"], orders: ["DESC"] },
  { key: "status_idx", type: "key", attributes: ["status"] },
  { key: "featured_idx", type: "key", attributes: ["featured"] },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

async function ensureDatabase(databases) {
  try {
    await databases.get(DATABASE_ID);
    console.log(`Database exists: ${DATABASE_ID}`);
  } catch (err) {
    if (err?.code !== 404) throw err;
    await databases.create(DATABASE_ID, DATABASE_NAME, true);
    console.log(`Database created: ${DATABASE_ID}`);
  }
}

async function ensureCollection(databases) {
  try {
    await databases.getCollection(DATABASE_ID, COLLECTION_ID);
    console.log(`Collection exists: ${COLLECTION_ID}`);
  } catch (err) {
    if (err?.code !== 404) throw err;
    await databases.createCollection(DATABASE_ID, COLLECTION_ID, COLLECTION_NAME, [], false, true);
    console.log(`Collection created: ${COLLECTION_ID}`);
  }
}

async function ensureAttributes(databases) {
  const existing = await databases.listAttributes(DATABASE_ID, COLLECTION_ID);
  const existingKeys = new Set(existing.attributes.map((a) => a.key));

  for (const attr of REQUIRED_ATTRIBUTES) {
    if (existingKeys.has(attr.key)) continue;

    if (attr.type === "string") {
      await databases.createStringAttribute(
        DATABASE_ID,
        COLLECTION_ID,
        attr.key,
        attr.size,
        attr.required,
        undefined,
        Boolean(attr.array)
      );
    }

    if (attr.type === "enum") {
      await databases.createEnumAttribute(
        DATABASE_ID,
        COLLECTION_ID,
        attr.key,
        attr.elements,
        attr.required,
        attr.default,
        Boolean(attr.array)
      );
    }

    if (attr.type === "boolean") {
      await databases.createBooleanAttribute(
        DATABASE_ID,
        COLLECTION_ID,
        attr.key,
        attr.required,
        attr.default
      );
    }

    if (attr.type === "datetime") {
      await databases.createDatetimeAttribute(
        DATABASE_ID,
        COLLECTION_ID,
        attr.key,
        attr.required
      );
    }

    console.log(`Attribute created: ${attr.key}`);
  }
}

async function waitForAttributes(databases) {
  for (let i = 0; i < 20; i++) {
    const result = await databases.listAttributes(DATABASE_ID, COLLECTION_ID);
    const pending = result.attributes.filter((a) => a.status !== "available" && a.status !== "stuck");
    if (pending.length === 0) return;
    await sleep(1500);
  }
}

async function ensureIndexes(databases) {
  const existing = await databases.listIndexes(DATABASE_ID, COLLECTION_ID);
  const existingKeys = new Set(existing.indexes.map((idx) => idx.key));

  for (const idx of REQUIRED_INDEXES) {
    if (existingKeys.has(idx.key)) continue;
    await databases.createIndex(
      DATABASE_ID,
      COLLECTION_ID,
      idx.key,
      idx.type,
      idx.attributes,
      idx.orders
    );
    console.log(`Index created: ${idx.key}`);
  }
}

async function main() {
  if (!PROJECT_ID) fail("NEXT_PUBLIC_APPWRITE_PROJECT_ID is missing");
  if (!API_KEY) fail("APPWRITE_API_KEY is missing");

  const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);
  const databases = new Databases(client);

  await ensureDatabase(databases);
  await ensureCollection(databases);
  await ensureAttributes(databases);
  await waitForAttributes(databases);
  await ensureIndexes(databases);

  console.log("\nSet these values in .env.local:");
  console.log(`APPWRITE_DATABASE_ID=${DATABASE_ID}`);
  console.log(`APPWRITE_PROJECTS_COLLECTION_ID=${COLLECTION_ID}`);
}

main().catch((err) => {
  console.error("Bootstrap failed:", err?.message ?? err);
  process.exit(1);
});
