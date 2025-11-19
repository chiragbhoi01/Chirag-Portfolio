"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="border-[#2dd4bf] text-[#2dd4bf] px-3 py-1">
          Available for work
        </Badge>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-7xl font-bold tracking-tight leading-tight"
      >
        {RESUME_DATA.personal.role}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl"
      >
        {RESUME_DATA.personal.summary}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        <Button size="lg" className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold">
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
        <Button size="lg" variant="outline" className="border-input hover:bg-accent">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Button>
      </motion.div>
    </section>
  );
}