import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { ProjectFilter } from "@/components/project/project-filter";
import { getProjects } from "@/lib/appwrite/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full Stack projects by Chirag Bhoi — production-grade e-commerce platforms, SaaS apps, and MERN stack applications built with Next.js, Node.js, and MongoDB.",
  alternates: {
    canonical: "https://chiragbhoimarshal.netlify.app/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Build deduplicated tech list for filter UI
  const allTechStack = Array.from(
    new Set(projects.flatMap((p) => p.techStack))
  ).sort();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#2dd4bf] selection:text-black">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <div>
          <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold">All Projects</h1>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Production apps, experiments, and open-source work. Filter by tech
            stack or category.
          </p>
        </div>

        <ProjectFilter projects={projects} allTechStack={allTechStack} />

        <Footer />
      </main>
    </div>
  );
}
