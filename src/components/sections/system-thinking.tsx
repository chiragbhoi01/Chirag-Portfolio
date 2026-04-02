import { RESUME_DATA } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Server, GitBranch, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Server,
  GitBranch,
  Shield,
  Zap,
};

export function SystemThinking() {
  return (
    <section className="space-y-10">
      <RevealOnScroll>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
              Engineering Approach
            </p>
            <h2 className="text-3xl font-bold">How I Build Systems</h2>
          </div>
          <Link
            href="/how-i-built-this"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#2dd4bf] transition-colors"
          >
            How I built this portfolio <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </RevealOnScroll>

      <div className="grid sm:grid-cols-2 gap-5">
        {RESUME_DATA.systemThinking.map((item, i) => {
          const Icon = ICON_MAP[item.icon] ?? Server;
          return (
            <RevealOnScroll key={item.title} delay={i * 0.08}>
              <div className="group p-5 rounded-xl border border-border bg-card hover:border-[#2dd4bf]/30 hover:bg-[#2dd4bf]/5 transition-colors space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#2dd4bf]/10 group-hover:bg-[#2dd4bf]/20 transition-colors">
                    <Icon className="h-4 w-4 text-[#2dd4bf]" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
