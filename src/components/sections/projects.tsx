import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/lib/data";

export function Projects() {
    return (
        <section className="space-y-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RESUME_DATA.featuredProjects.map((project) => (
                    <Card
                        key={project.title}
                        className="flex flex-col h-full overflow-hidden border-border bg-card transition-all hover:border-[#2dd4bf]/50 hover:shadow-lg"
                    >
                        <div className="h-40 w-full bg-muted/50 flex items-center justify-center border-b border-border">
                            <span className="text-muted-foreground font-mono text-xs">
                                [Preview: {project.title}]
                            </span>
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                            </div>
                            <Badge
                                variant="outline"
                                className="w-fit text-[#2dd4bf] border-[#2dd4bf]/30 bg-[#2dd4bf]/10 mt-2"
                            >
                                {project.highlights}
                            </Badge>
                        </CardHeader>
                        <CardContent className="grow">
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] border border-border px-2 py-1 rounded bg-secondary/50 text-secondary-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="gap-3 pt-0 pb-6 flex flex-col">
                            <Button
                                asChild
                                className="w-full bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold h-9 text-xs"
                            >
                                <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="w-full h-9 text-xs"
                            >
                                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    Code
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
