import { Query } from "node-appwrite";
import { createAdminClient } from "./server";
import type { Project } from "@/types/project";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.APPWRITE_PROJECTS_COLLECTION_ID ?? "";

const FALLBACK_PROJECTS: Project[] = [
  {
    $id: "luxora",
    title: "Luxora – Full-Stack E-Commerce Platform",
    slug: "luxora",
    description:
      "Fully responsive rental e-commerce platform with an admin CMS for product and order management. Custom Node.js/Express REST API with MongoDB handling complex data models.",
    content: "",
    techStack: ["Next.js 14", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "shadcn/ui", "JWT", "ImageKit"],
    features: ["Admin CMS", "JWT Auth", "RBAC", "REST API"],
    category: "fullstack",
    githubUrl: "https://github.com/chiragbhoi01/luxora",
    liveUrl: undefined,
    coverImage: undefined,
    featured: true,
    status: "production",
    problemStatement: "End-to-end e-commerce with secure auth and role-based admin dashboard",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
  {
    $id: "ecoguard",
    title: "EcoGuard LakeCity – AI Waste Management SaaS",
    slug: "ecoguard-lakecity",
    description:
      "AI-powered SaaS that classifies waste and optimises municipal collection routes using real-time sensor feeds. State Finalist at Viksit Bharat Summit.",
    content: "",
    techStack: ["Next.js 15", "Gemini 2.5 Flash", "MongoDB", "WebSockets", "Node.js"],
    features: ["AI Classification", "Real-time Sensors", "WebSocket Alerts", "State Finalist"],
    category: "fullstack",
    githubUrl: "https://github.com/chiragbhoi01/ecoguard-lakecity",
    liveUrl: undefined,
    coverImage: undefined,
    featured: true,
    status: "production",
    problemStatement: "AI-driven waste classification with real-time municipal route optimization",
    createdAt: "2025-03-01T00:00:00.000Z",
  },
  {
    $id: "marshal-tracker",
    title: "Marshal Tracker – Productivity Analytics SaaS",
    slug: "marshal-tracker",
    description:
      "Productivity tracker with activity logging, analytics charts, and exportable reports backed by a REST API.",
    content: "",
    techStack: ["React.js", "Node.js", "MongoDB", "Chart.js", "Express.js"],
    features: ["Analytics Dashboard", "Activity Logging", "Exportable Reports", "REST API"],
    category: "fullstack",
    githubUrl: "https://github.com/chiragbhoi01",
    liveUrl: undefined,
    coverImage: undefined,
    featured: true,
    status: "production",
    problemStatement: "Personal productivity tracking with visual analytics",
    createdAt: "2024-12-01T00:00:00.000Z",
  },
  {
    $id: "visit-vagad",
    title: "Visit Vagad – Regional Tourism Platform",
    slug: "visit-vagad",
    description:
      "Tourism discovery platform for the Vagad region with destination filtering, curated itineraries, local listings, RBAC admin panel, and ImageKit-powered visuals.",
    content: "",
    techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "ImageKit"],
    features: ["RBAC Admin", "JWT Auth", "ImageKit Uploads", "Filterable Grid"],
    category: "fullstack",
    githubUrl: "https://github.com/visitvagad/visitvagad",
    liveUrl: undefined,
    coverImage: undefined,
    featured: true,
    status: "building",
    problemStatement: "Premium tourism platform for Vagad region heritage discovery",
    createdAt: "2025-05-01T00:00:00.000Z",
  },
];

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
  if (!isAppwriteConfigured()) return FALLBACK_PROJECTS;

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("featured", true),
      Query.orderDesc("createdAt"),
      Query.limit(6),
    ]);
    const projects = response.documents.map((doc) => toProject(doc as unknown as Record<string, unknown>));
    return projects.length > 0 ? projects : FALLBACK_PROJECTS;
  } catch {
    return FALLBACK_PROJECTS;
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
