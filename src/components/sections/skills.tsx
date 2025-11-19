import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/lib/data";

export function Skills() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            {RESUME_DATA.technicalSkills.map((category) => (
                <div key={category.category}>
                    <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {category.skills.map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
