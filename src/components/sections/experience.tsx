import { RESUME_DATA } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section className="space-y-8">
      <RevealOnScroll>
        <div>
          <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
            Work History
          </p>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
      </RevealOnScroll>

      <div className="space-y-8">
        {RESUME_DATA.professionalExperience.map((job, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8">
              {/* Left: timeline meta */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-muted-foreground">{job.period}</span>
                <Badge
                  variant="outline"
                  className="block w-fit text-[10px] border-border text-muted-foreground"
                >
                  {job.type}
                </Badge>
                <p className="text-xs text-muted-foreground">{job.location}</p>
              </div>

              {/* Right: role + achievements */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-[#2dd4bf] text-sm font-medium">{job.company}</p>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
