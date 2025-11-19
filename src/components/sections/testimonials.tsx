import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/lib/data";

export function Testimonials() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {RESUME_DATA.testimonials.map((t, i) => (
                    <Card key={i} className="bg-card border-border h-full">
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarFallback className="bg-[#2dd4bf]/20 text-[#2dd4bf]">{t.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}