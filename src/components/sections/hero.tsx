"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Phone, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export function Hero() {
  return (
    <section className="space-y-6">
      <motion.div variants={fadeUpVariants} initial="hidden" animate="visible" custom={0}>
        <Badge variant="outline" className="border-[#2dd4bf] text-[#2dd4bf] px-3 py-1" aria-label="Available for work">
          Available for work
        </Badge>
      </motion.div>

      <motion.h1
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="text-4xl md:text-7xl font-bold tracking-tight leading-tight"
      >
        {RESUME_DATA.personal.role}
      </motion.h1>

      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl"
      >
        {RESUME_DATA.personal.summary}
      </motion.p>

      <motion.div variants={fadeUpVariants} initial="hidden" animate="visible" custom={0.3} className="flex flex-wrap gap-4 pt-4">
        <Button
          size="lg"
          className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold"
          asChild
        >
          <a href={`mailto:${RESUME_DATA.personal.email}`} aria-label="Send email">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-input hover:bg-accent"
          asChild
        >
          <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <section className="border-t border-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-6">
            Currently looking for new opportunities in Full Stack Development.
          </p>
          <div className="space-y-3 text-sm text-zinc-400">
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="flex items-center gap-3 hover:text-[#2dd4bf] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#2dd4bf]" />
              {RESUME_DATA.personal.email}
            </a>
            <a
              href={`https://wa.me/${RESUME_DATA.personal.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#2dd4bf] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2dd4bf]" />
              {RESUME_DATA.personal.phone}
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#2dd4bf]" />
              {RESUME_DATA.personal.location}
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-700 text-zinc-300 hover:text-[#2dd4bf]"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-700 text-zinc-300 hover:text-[#2dd4bf]"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex items-end justify-center md:justify-end text-xs text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} {RESUME_DATA.personal.name}. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
