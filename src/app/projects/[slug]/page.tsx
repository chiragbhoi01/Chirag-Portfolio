import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { ProjectJsonLd } from "@/components/seo/json-ld";
import { getProjectBySlug, getProjectSlugs } from "@/lib/appwrite/queries";

export const revalidate = 3600;

const baseUrl = "https://chiragbhoimarshal.netlify.app";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${baseUrl}/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${baseUrl}/projects/${slug}`,
      type: "article",
      ...(project.coverImage
        ? { images: [{ url: project.coverImage, width: 1200, height: 630 }] }
        : {}),
    },
  };
}

const STATUS_STYLE: Record<string, string> = {
  production: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  building: "text-yellow-500 border-yellow-500/30 bg-yellow-500/10",
  archived: "text-zinc-500 border-zinc-500/30 bg-zinc-500/10",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#2dd4bf] selection:text-black">
      <ProjectJsonLd project={project} />
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Projects
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className={`text-xs ${STATUS_STYLE[project.status] ?? ""}`}
            >
              {project.status}
            </Badge>
            <Badge
              variant="outline"
              className="text-xs capitalize border-[#2dd4bf]/30 text-[#2dd4bf] bg-[#2dd4bf]/5"
            >
              {project.category}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.description}
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-10 rounded-lg bg-[#2dd4bf] text-black font-semibold text-sm hover:bg-[#2dd4bf]/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
          </div>
        </header>

        {/* Tech stack */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm border border-border px-3 py-1 rounded-md bg-secondary/40 text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem statement */}
        {project.problemStatement && (
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.problemStatement}
            </p>
          </section>
        )}

        {/* Key features */}
        {project.features.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-[#2dd4bf] mt-1">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Full content / case study body */}
        {project.content && (
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Overview</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
              <p className="leading-relaxed whitespace-pre-line">{project.content}</p>
            </div>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && (
          <section className="space-y-3">
            <h2 className="text-xl font-bold">Challenges & Solutions</h2>
            <div className="rounded-xl border border-border p-5 bg-card">
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {project.challenges}
              </p>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="flex flex-wrap gap-3 border-t border-border pt-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-10 rounded-lg bg-[#2dd4bf] text-black font-semibold text-sm hover:bg-[#2dd4bf]/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
            >
              <Github className="h-4 w-4" /> Source Code
            </a>
          )}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
}
