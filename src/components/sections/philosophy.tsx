import { RESUME_DATA } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Philosophy() {
  return (
    <section className="space-y-10">
      <RevealOnScroll>
        <div>
          <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
            How I Work
          </p>
          <h2 className="text-3xl font-bold">Engineer Philosophy</h2>
        </div>
      </RevealOnScroll>

      {/* Principles */}
      <div className="grid sm:grid-cols-3 gap-6">
        {RESUME_DATA.philosophy.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="space-y-3 p-5 border border-border rounded-xl bg-card hover:border-[#2dd4bf]/30 transition-colors">
              <Lightbulb className="h-5 w-5 text-[#2dd4bf]" />
              <h3 className="font-semibold text-sm leading-snug">{item.principle}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Target roles */}
      <RevealOnScroll>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted-foreground font-medium">Open to:</span>
          {RESUME_DATA.targetRoles.map((role) => (
            <Badge
              key={role}
              variant="outline"
              className="text-xs border-[#2dd4bf]/30 text-[#2dd4bf] bg-[#2dd4bf]/5 px-3 py-1"
            >
              {role}
            </Badge>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
