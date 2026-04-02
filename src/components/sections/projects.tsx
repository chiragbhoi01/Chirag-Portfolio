"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

const STATUS_DOT: Record<string, string> = {
  production: "bg-emerald-500",
  building: "bg-yellow-400",
  archived: "bg-zinc-500",
};

export function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <RevealOnScroll>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#2dd4bf] transition-colors"
          >
            View all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6">
        {RESUME_DATA.featuredProjects.map((project, i) => (
          <RevealOnScroll key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex flex-col h-full border border-border rounded-xl bg-card hover:border-[#2dd4bf]/40 hover:shadow-xl transition-all duration-200 overflow-hidden"
            >
              {/* Card header */}
              <div className="p-6 pb-4 space-y-3 grow">
                {/* Status + category row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${STATUS_DOT[project.status] ?? "bg-zinc-400"}`}
                    />
                    <span className="text-xs text-muted-foreground capitalize">{project.status}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title + subtitle */}
                <div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-[#2dd4bf] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Signal-boost metrics */}
                <p className="text-xs text-[#2dd4bf]/80 font-mono">{project.metrics}</p>

                {/* Signal-boost tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[10px] px-2 py-0.5 border-[#2dd4bf]/20 text-[#2dd4bf] bg-[#2dd4bf]/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] border border-border px-2 py-0.5 rounded bg-secondary/50 text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer links */}
              <div className="px-6 pb-6 flex gap-2">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold text-xs transition-colors"
                >
                  <ExternalLink className="h-3 w-3" /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg border border-border text-xs hover:bg-accent transition-colors"
                >
                  <Github className="h-3 w-3" /> Code
                </a>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Mobile "view all" link */}
      <RevealOnScroll>
        <div className="sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#2dd4bf] transition-colors"
          >
            View all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
