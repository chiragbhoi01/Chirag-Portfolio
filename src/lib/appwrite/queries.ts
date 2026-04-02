import { Query } from "node-appwrite";
import { createAdminClient } from "./server";
import { RESUME_DATA } from "@/lib/data";
import type { Project } from "@/types/project";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.APPWRITE_PROJECTS_COLLECTION_ID ?? "";

function isAppwriteConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID &&
      process.env.APPWRITE_DATABASE_ID &&
      process.env.APPWRITE_PROJECTS_COLLECTION_ID &&
      process.env.APPWRITE_API_KEY
  );
}

/** Convert static data.ts projects into the Project shape for fallback */
function staticProjectsAsFallback(): Project[] {
  return RESUME_DATA.allProjects.map((p, i) => ({
    $id: String(i),
    title: p.title,
    slug: p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    description: p.description,
    content: p.metrics,
    techStack: p.tech,
    features: p.tags,
    category: p.category,
    githubUrl: p.githubLink,
    liveUrl: p.demoLink,
    featured: p.featured,
    status: p.status,
    createdAt: new Date().toISOString(),
  }));
}

export async function getProjects(): Promise<Project[]> {
  if (!isAppwriteConfigured()) return staticProjectsAsFallback();

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("createdAt"),
      Query.limit(50),
    ]);
    return response.documents as unknown as Project[];
  } catch {
    return staticProjectsAsFallback();
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!isAppwriteConfigured()) {
    return staticProjectsAsFallback().filter((p) => p.featured);
  }

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("featured", true),
      Query.orderDesc("createdAt"),
      Query.limit(6),
    ]);
    return response.documents as unknown as Project[];
  } catch {
    return staticProjectsAsFallback().filter((p) => p.featured);
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isAppwriteConfigured()) {
    return staticProjectsAsFallback().find((p) => p.slug === slug) ?? null;
  }

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("slug", slug),
      Query.limit(1),
    ]);
    if (response.documents.length === 0) return null;
    return response.documents[0] as unknown as Project;
  } catch {
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  if (!isAppwriteConfigured()) {
    return staticProjectsAsFallback().map((p) => p.slug);
  }

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.select(["slug"]),
      Query.limit(100),
    ]);
    return response.documents.map((d) => d.slug as string);
  } catch {
    return [];
  }
}

export async function getCurrentlyBuilding(): Promise<Project[]> {
  if (!isAppwriteConfigured()) return [];

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("status", "building"),
      Query.limit(3),
    ]);
    return response.documents as unknown as Project[];
  } catch {
    return [];
  }
}
