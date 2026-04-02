import { RESUME_DATA } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

export function Skills() {
  return (
    <section className="space-y-8">
      <RevealOnScroll>
        <div>
          <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
            Technical Skills
          </p>
          <h2 className="text-3xl font-bold">Tech Stack</h2>
        </div>
      </RevealOnScroll>

      <div className="grid sm:grid-cols-2 gap-6">
        {RESUME_DATA.technicalSkills.map((category, i) => (
          <RevealOnScroll key={category.category} delay={i * 0.08}>
            <div className="space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm border border-border px-3 py-1 rounded-md bg-secondary/40 text-secondary-foreground font-medium hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
