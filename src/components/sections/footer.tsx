import { Mail, Phone, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

export function Footer() {
    return (
        <section className="border-t border-border pt-16 pb-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                    <p className="text-muted-foreground mb-6">
                        Currently looking for new opportunities in Full Stack Development.
                    </p>
                    <div className="space-y-3 text-sm text-zinc-400">
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#2dd4bf]" /> {RESUME_DATA.personal.email}
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#2dd4bf]" /> 
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-[#2dd4bf]" /> {RESUME_DATA.personal.location}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}