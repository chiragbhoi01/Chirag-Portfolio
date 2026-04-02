import { Query } from "node-appwrite";
import { createAdminClient } from "./server";
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

/**
 * Static fallback projects — used when Appwrite credentials are absent.
 * Matches the 4 real projects; no old/removed projects (Rajmahal, Miss Gypsy).
 */
const FALLBACK_PROJECTS: Project[] = [
  {
    $id: "luxora",
    title: "Luxora",
    slug: "luxora",
    description:
      "Full-stack rental e-commerce platform for a local Udaipur business. Secure admin dashboard with JWT authentication, role-based access control, and end-to-end order management. Handles real customer transactions in production.",
    content:
      "Luxora is a full-stack MERN e-commerce rental platform built for a real Udaipur business. The system includes a complete admin CMS, JWT-based authentication, RBAC for staff roles, and a customer-facing storefront with product filtering and order tracking.",
    techStack: ["Next.js 14", "Node.js", "Express.js", "MongoDB", "TypeScript", "JWT"],
    features: [
      "Role-based access control (admin, staff, customer)",
      "Secure JWT authentication with refresh tokens",
      "Admin CMS: product, order, and user management",
      "Real-time order status updates",
      "Mobile-first responsive storefront",
    ],
    category: "ecommerce",
    githubUrl: "https://github.com/chiragbhoi01/luxora",
    liveUrl: "https://chirag-rajmahaludaipur.vercel.app",
    featured: true,
    status: "production",
    problemStatement:
      "Local rental businesses manage orders manually via WhatsApp — no inventory visibility, no order tracking, and no way to scale. Luxora solves this with a full CMS and customer portal.",
    challenges:
      "Designing a multi-role auth system where admins, staff, and customers see different UI states without duplicating route logic. Solved with a middleware-based RBAC layer and shared layout components with conditional rendering.",
    createdAt: "2024-01-01T00:00:00.000Z",
  },
  {
    $id: "ecoguard-lakecity",
    title: "EcoGuard LakeCity",
    slug: "ecoguard-lakecity",
    description:
      "AI-powered SaaS platform that automates waste classification and optimizes municipal collection routing using real-time sensor data. Built for Udaipur's lake conservation initiative.",
    content:
      "EcoGuard LakeCity is an AI-driven waste management SaaS targeting civic environmental problems. The platform uses OpenAI's vision API to classify waste types from sensor images, then feeds that data into a route-optimization engine for municipal collection vehicles.",
    techStack: ["Next.js 15", "OpenAI API", "MongoDB", "WebSockets", "Node.js"],
    features: [
      "AI waste classification via OpenAI vision API",
      "Real-time sensor data ingestion over WebSockets",
      "Collection route optimization dashboard",
      "Multi-tenant SaaS architecture",
      "Alert system for overflow/critical zones",
    ],
    category: "ai",
    githubUrl: "https://github.com/chiragbhoi01/ecoguard-lakecity",
    liveUrl: "https://github.com/chiragbhoi01/ecoguard-lakecity",
    featured: true,
    status: "building",
    problemStatement:
      "Manual waste tracking in Udaipur is slow and error-prone, contributing to lake pollution. EcoGuard automates classification and routing so the city can respond in real time.",
    challenges:
      "Handling high-frequency WebSocket data from multiple sensors without overloading the DB. Implemented a buffer queue that batches writes every 5 seconds and uses MongoDB TTL indexes to auto-expire stale sensor readings.",
    createdAt: "2026-03-01T00:00:00.000Z",
  },
  {
    $id: "marshal-tracker",
    title: "Marshal Tracker",
    slug: "marshal-tracker",
    description:
      "Full-stack productivity tracker with activity logging, data visualization, and exportable reports. Built around a clean REST API — authentication, CRUD operations, and analytics in one system.",
    content:
      "Marshal Tracker is a personal productivity tool with a full REST API backend, React dashboard, and Chart.js visualizations. Supports activity categories, date-range queries, and CSV export.",
    techStack: ["React.js", "Node.js", "MongoDB", "Chart.js", "Express.js"],
    features: [
      "REST API with JWT authentication",
      "Activity logging with categories and timestamps",
      "Dashboard with Chart.js visualizations",
      "Date-range filtering and query API",
      "CSV export for reports",
    ],
    category: "saas",
    githubUrl: "https://github.com/chiragbhoi01/marshal-tracker",
    liveUrl: "https://github.com/chiragbhoi01/marshal-tracker",
    featured: false,
    status: "production",
    problemStatement:
      "Existing productivity apps are over-engineered for simple activity tracking. Marshal Tracker is minimal, API-first, and self-hostable.",
    challenges:
      "Building flexible date-range aggregation queries in MongoDB without complex pipelines. Used $match + $group with dynamic date boundaries derived from query parameters.",
    createdAt: "2024-06-01T00:00:00.000Z",
  },
  {
    $id: "visit-vagad",
    title: "Visit Vagad",
    slug: "visit-vagad",
    description:
      "Tourism discovery platform for the Vagad region of Rajasthan — curated place listings, route planning, and local recommendations. Demonstrates location-based data architecture and content management.",
    content:
      "Visit Vagad is a Next.js tourism platform that statically generates pages for each destination in the Vagad region. Content is managed through a structured data layer with TypeScript schemas, making it easy to add new places without touching layout code.",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript"],
    features: [
      "Static site generation (SSG) for all destination pages",
      "Location-based search and filtering",
      "Curated itinerary and route planning",
      "SEO-optimized per-page metadata",
      "Responsive image galleries",
    ],
    category: "other",
    githubUrl: "https://github.com/chiragbhoi01/visit-vagad",
    liveUrl: "https://github.com/chiragbhoi01/visit-vagad",
    featured: false,
    status: "production",
    problemStatement:
      "The Vagad region has rich cultural heritage but no modern digital guide. Visit Vagad fills this gap with a fast, SEO-first tourism platform.",
    challenges:
      "Maintaining good Lighthouse scores with large image galleries. Solved with next/image lazy loading, explicit dimension props, and WebP format conversion at build time.",
    createdAt: "2024-09-01T00:00:00.000Z",
  },
  {
    $id: "developer-portfolio",
    title: "Developer Portfolio",
    slug: "developer-portfolio",
    description:
      "This portfolio — built as a production system with Appwrite database, dynamic project pages, JSON-LD structured data, ISR, and a CLI script that seeds projects from README files.",
    content:
      "A database-driven portfolio using Next.js 15 App Router, Appwrite for project storage, and ISR for performance. Projects are seeded from README files via a CLI automation script.",
    techStack: ["Next.js 15", "Appwrite", "TypeScript", "Framer Motion", "Tailwind CSS"],
    features: [
      "Appwrite database-driven project pages",
      "ISR with 1-hour revalidation",
      "JSON-LD structured data for SEO",
      "Dynamic sitemap generation",
      "README → DB automation script",
    ],
    category: "other",
    githubUrl: "https://github.com/chiragbhoi01/Chirag-Portfolio",
    liveUrl: "https://chiragbhoimarshal.netlify.app/",
    featured: false,
    status: "production",
    problemStatement:
      "Static portfolios require code deploys to update content. This portfolio is database-driven so new projects can be published without touching source code.",
    challenges:
      "Making the portfolio resilient when Appwrite is unreachable. Implemented a static fallback that mirrors the DB schema so the site always renders correctly, with or without database access.",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
];

export async function getProjects(): Promise<Project[]> {
  if (!isAppwriteConfigured()) return FALLBACK_PROJECTS;

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("createdAt"),
      Query.limit(50),
    ]);
    return response.documents as unknown as Project[];
  } catch {
    return FALLBACK_PROJECTS;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!isAppwriteConfigured()) {
    return FALLBACK_PROJECTS.filter((p) => p.featured);
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
    return FALLBACK_PROJECTS.filter((p) => p.featured);
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isAppwriteConfigured()) {
    return FALLBACK_PROJECTS.find((p) => p.slug === slug) ?? null;
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
    return FALLBACK_PROJECTS.map((p) => p.slug);
  }

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.select(["slug"]),
      Query.limit(100),
    ]);
    return response.documents.map((d) => d.slug as string);
  } catch {
    return FALLBACK_PROJECTS.map((p) => p.slug);
  }
}

export async function getCurrentlyBuilding(): Promise<Project[]> {
  if (!isAppwriteConfigured()) {
    return FALLBACK_PROJECTS.filter((p) => p.status === "building");
  }

  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("status", "building"),
      Query.limit(3),
    ]);
    return response.documents as unknown as Project[];
  } catch {
    return FALLBACK_PROJECTS.filter((p) => p.status === "building");
  }
}
