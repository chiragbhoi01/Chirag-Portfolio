"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, FileText, ArrowRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

const EASE_OUT: Easing = "easeOut";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE_OUT },
});

export function Hero() {
  return (
    <section className="space-y-7 pt-4">
      {/* Status badge */}
      <motion.div {...fadeUp(0)}>
        <Badge
          variant="outline"
          className="border-[#2dd4bf] text-[#2dd4bf] bg-[#2dd4bf]/5 px-3 py-1 text-xs font-medium"
          aria-label="Open to work"
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
          Open to Full Stack / Backend roles
        </Badge>
      </motion.div>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.08)}
        className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
      >
        {RESUME_DATA.personal.name}
      </motion.h1>

      {/* Specific positioning */}
      <motion.p
        {...fadeUp(0.14)}
        className="text-xl md:text-2xl font-medium text-muted-foreground leading-snug max-w-2xl"
      >
        {RESUME_DATA.personal.headline}
      </motion.p>

      {/* One-line proof */}
      <motion.p
        {...fadeUp(0.20)}
        className="text-sm text-muted-foreground/70 leading-relaxed max-w-xl"
      >
        {RESUME_DATA.personal.summary}
      </motion.p>

      {/* Credibility stats */}
      <motion.div
        {...fadeUp(0.26)}
        className="flex flex-wrap gap-x-6 gap-y-2 py-1"
      >
        {RESUME_DATA.stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-1.5">
            <span className="text-[#2dd4bf] font-bold text-sm tabular-nums">{stat.value}</span>
            <span className="text-muted-foreground text-xs">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.32)}
        className="flex flex-wrap items-center gap-3 pt-1"
      >
        <Button
          size="lg"
          className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold h-11 px-6"
          asChild
        >
          <Link href="#projects">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-input hover:bg-accent h-11 px-6"
          asChild
        >
          <Link href="/resume" aria-label="View resume">
            <FileText className="mr-2 h-4 w-4" /> Resume
          </Link>
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="h-11 px-4 text-muted-foreground hover:text-foreground"
          asChild
        >
          <a href={`mailto:${RESUME_DATA.personal.email}`} aria-label="Send email">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </a>
        </Button>
        <a
          href={RESUME_DATA.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex items-center justify-center h-11 w-11 rounded-md border border-input hover:bg-accent transition-colors"
        >
          <Github className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
