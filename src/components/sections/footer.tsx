import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

export function Footer() {
    return (
        <section className="border-t border-border pt-16 pb-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
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
                            <Phone className="w-4 h-4 text-[#2dd4bf]" /> {RESUME_DATA.personal.phone}
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-[#2dd4bf]" /> {RESUME_DATA.personal.location}
                        </div>
                    </div>
                    <div className="flex gap-4 pt-6">
                        <a
                            href={RESUME_DATA.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-700 text-zinc-300 hover:text-[#2dd4bf]"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={RESUME_DATA.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-700 text-zinc-300 hover:text-[#2dd4bf]"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex items-end justify-center md:justify-end text-xs text-zinc-600 font-mono">
                    <p>© {new Date().getFullYear()} {RESUME_DATA.personal.name}. Built with Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
}
