import type { Project } from "@/types/project";

const PROJECTS: Project[] = [
  {
    $id: "luxora",
    title: "Luxora – Full-Stack E-Commerce Platform",
    slug: "luxora",
    description:
      "Fully responsive rental e-commerce platform with an admin CMS for product and order management. Custom Node.js/Express REST API with MongoDB handling complex data models.",
    content: "Built a complete e-commerce platform with secure cookie-based JWT authentication, role-based access control protecting customer routes and admin dashboard, and ImageKit for optimized image delivery.",
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
    content: "Integrated Gemini 2.5 Flash API for waste classification. Implemented WebSocket-based live sensor ingestion and overflow alerting. Prototype presented at Viksit Bharat State Summit; achieved State Finalist recognition.",
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
    content: "Full-stack productivity application with Chart.js powered analytics dashboard, activity logging with timestamps, and exportable PDF/CSV reports. REST API built with Express.js and MongoDB.",
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
    content: "Premium tourism web application for the Vagad region (Banswara & Dungarpur). Features editorial UI, secure JWT authentication, centralized RBAC with 13 granular permissions, audit logging, and direct-to-ImageKit uploads with real-time transformations.",
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

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return PROJECTS.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export async function getProjectSlugs(): Promise<string[]> {
  return PROJECTS.map((p) => p.slug);
}

export async function getCurrentlyBuilding(): Promise<Project[]> {
  return PROJECTS.filter((p) => p.status === "building");
}
