import { Query } from "node-appwrite";
import { createAdminClient } from "./server";
import type { Project } from "@/types/project";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.APPWRITE_PROJECTS_COLLECTION_ID ?? "";

function toProject(doc: Record<string, unknown>): Project {
  return {
    $id: String(doc.$id ?? ""),
    title: String(doc.title ?? ""),
    slug: String(doc.slug ?? ""),
    description: String(doc.description ?? ""),
    content: String(doc.content ?? ""),
    techStack: Array.isArray(doc.techStack) ? doc.techStack.map((x) => String(x)) : [],
    features: Array.isArray(doc.features) ? doc.features.map((x) => String(x)) : [],
    category: (doc.category as Project["category"]) ?? "other",
    githubUrl: typeof doc.githubUrl === "string" ? doc.githubUrl : undefined,
    liveUrl: typeof doc.liveUrl === "string" ? doc.liveUrl : undefined,
    coverImage: typeof doc.coverImage === "string" ? doc.coverImage : undefined,
    featured: Boolean(doc.featured),
    status: (doc.status as Project["status"]) ?? "production",
    problemStatement: typeof doc.problemStatement === "string" ? doc.problemStatement : undefined,
    challenges: typeof doc.challenges === "string" ? doc.challenges : undefined,
    createdAt: String(doc.createdAt ?? new Date(0).toISOString()),
  };
}

function isAppwriteConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID &&
      process.env.APPWRITE_DATABASE_ID &&
      process.env.APPWRITE_PROJECTS_COLLECTION_ID &&
      process.env.APPWRITE_API_KEY
  );
}

export async function getProjects(): Promise<Project[]> {
  if (!isAppwriteConfigured()) return [];

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("createdAt"),
      Query.limit(50),
    ]);
    return response.documents.map((doc) => toProject(doc as unknown as Record<string, unknown>));
  } catch {
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!isAppwriteConfigured()) return [];

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("featured", true),
      Query.orderDesc("createdAt"),
      Query.limit(6),
    ]);
    return response.documents.map((doc) => toProject(doc as unknown as Record<string, unknown>));
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isAppwriteConfigured()) return null;

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("slug", slug),
      Query.limit(1),
    ]);
    if (response.documents.length === 0) return null;
    return toProject(response.documents[0] as unknown as Record<string, unknown>);
  } catch {
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  if (!isAppwriteConfigured()) return [];

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
    return response.documents.map((doc) => toProject(doc as unknown as Record<string, unknown>));
  } catch {
    return [];
  }
}
