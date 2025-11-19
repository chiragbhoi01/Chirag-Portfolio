import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Demos() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold">Live Code & Demos</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {RESUME_DATA.demos.map((demo, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-4 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold">{demo.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">// Demo placeholder code</p>
                        </div>
                        <Button asChild variant="outline" size="sm" className="w-fit">
                            <Link href={demo.link}>
                                Open CodePen <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}