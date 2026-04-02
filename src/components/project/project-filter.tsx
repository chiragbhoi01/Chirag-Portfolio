"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project/project-card";
import type { Project, ProjectCategory } from "@/types/project";

const CATEGORIES: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "saas", label: "SaaS" },
  { value: "ai", label: "AI" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Other" },
];

interface ProjectFilterProps {
  projects: Project[];
  allTechStack: string[];
}

export function ProjectFilter({ projects, allTechStack }: ProjectFilterProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesTech =
        !selectedTech || p.techStack.includes(selectedTech);
      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [projects, search, selectedCategory, selectedTech]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search projects, technologies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 h-10 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]/50"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
              selectedCategory === cat.value
                ? "bg-[#2dd4bf] text-black border-[#2dd4bf]"
                : "border-border text-muted-foreground hover:border-[#2dd4bf]/50 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech stack filters */}
      <div className="flex flex-wrap gap-1.5">
        {allTechStack.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
            className={`px-2.5 py-1 rounded text-xs border transition-colors ${
              selectedTech === tech
                ? "bg-[#2dd4bf]/20 text-[#2dd4bf] border-[#2dd4bf]/50"
                : "border-border text-muted-foreground hover:border-[#2dd4bf]/30 hover:text-foreground"
            }`}
          >
            {tech}
          </button>
        ))}
        {selectedTech && (
          <button
            onClick={() => setSelectedTech(null)}
            className="px-2.5 py-1 rounded text-xs border border-border text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <X className="h-3 w-3" /> Clear
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {(search || selectedCategory !== "all" || selectedTech) && " found"}
      </p>

      {/* Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.$id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: i * 0.04 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-medium">No projects found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
