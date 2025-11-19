import { RESUME_DATA } from "@/lib/data";

export function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="space-y-10">
        {RESUME_DATA.professionalExperience.map((job, i) => (
          <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4">
            <span className="text-muted-foreground text-sm font-mono">{job.period}</span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {job.title}{" "}
                <span className="text-muted-foreground font-normal">at {job.company}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {job.achievements?.map((achievement, idx) => (
                  <span key={idx} className="block">
                    {achievement}
                  </span>
                )) || ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
