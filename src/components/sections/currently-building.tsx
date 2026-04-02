import Link from "next/link";
import { RESUME_DATA } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Hammer, Github } from "lucide-react";

export function CurrentlyBuilding() {
  const { currentlyBuilding } = RESUME_DATA;

  return (
    <RevealOnScroll>
      <section className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
              Currently Building
            </span>
          </div>
          {currentlyBuilding.githubLink && (
            <Link
              href={currentlyBuilding.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-yellow-500 transition-colors"
            >
              <Github className="h-3.5 w-3.5" /> Follow progress
            </Link>
          )}
        </div>

        {/* Title + subtitle */}
        <div className="flex items-start gap-3">
          <Hammer className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h3 className="font-bold text-base">{currentlyBuilding.title}</h3>
            <p className="text-xs text-yellow-600/80 dark:text-yellow-400/80 font-medium">
              {currentlyBuilding.subtitle}
            </p>
          </div>
        </div>

        {/* Problem-focused description */}
        <p className="text-muted-foreground text-sm leading-relaxed pl-8">
          {currentlyBuilding.description}
        </p>

        {/* Tech + date */}
        <div className="flex flex-wrap items-center gap-2 pt-1 pl-8">
          {currentlyBuilding.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] border border-yellow-500/20 px-2 py-0.5 rounded bg-yellow-500/5 text-yellow-600 dark:text-yellow-400"
            >
              {t}
            </span>
          ))}
          <span className="text-xs text-muted-foreground ml-auto">Started {currentlyBuilding.startedAt}</span>
        </div>
      </section>
    </RevealOnScroll>
  );
}
