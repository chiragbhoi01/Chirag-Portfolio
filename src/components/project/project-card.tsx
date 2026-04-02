"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

const STATUS_LABELS: Record<string, string> = {
  production: "Production",
  building: "Building",
  archived: "Archived",
};

const STATUS_COLORS: Record<string, string> = {
  production: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  building: "text-yellow-500 border-yellow-500/30 bg-yellow-500/10",
  archived: "text-zinc-500 border-zinc-500/30 bg-zinc-500/10",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden border-border bg-card hover:border-[#2dd4bf]/50 hover:shadow-lg transition-colors duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-bold leading-snug">{project.title}</CardTitle>
            <Badge
              variant="outline"
              className={`shrink-0 text-[10px] font-medium ${STATUS_COLORS[project.status] ?? ""}`}
            >
              {STATUS_LABELS[project.status] ?? project.status}
            </Badge>
          </div>
          <Badge
            variant="outline"
            className="w-fit text-[10px] text-[#2dd4bf] border-[#2dd4bf]/30 bg-[#2dd4bf]/10 capitalize"
          >
            {project.category}
          </Badge>
        </CardHeader>

        <CardContent className="grow space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[10px] border border-border px-2 py-0.5 rounded bg-secondary/50 text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="text-[10px] text-muted-foreground px-2 py-0.5">
                +{project.techStack.length - 5} more
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 pt-0 pb-5">
          <Link
            href={`/projects/${project.slug}`}
            className="w-full flex items-center justify-center gap-2 h-9 rounded-md bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold text-xs transition-colors"
          >
            Case Study <ArrowRight className="h-3 w-3" />
          </Link>
          <div className="flex gap-2 w-full">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-md border border-border text-xs hover:bg-accent transition-colors"
              >
                <ExternalLink className="h-3 w-3" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-md border border-border text-xs hover:bg-accent transition-colors"
              >
                <Github className="h-3 w-3" /> Code
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
