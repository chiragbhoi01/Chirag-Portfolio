import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { RESUME_DATA } from "@/lib/data";

export function Footer() {
    return (
        <section className="space-y-0">
            {/* Strong CTA block */}
            <div className="rounded-xl border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 p-8 mb-12 space-y-5">
                <div>
                    <p className="text-[#2dd4bf] text-xs font-semibold uppercase tracking-widest mb-2">
                        Available Now
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold">{RESUME_DATA.ctaHeadline}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {RESUME_DATA.ctaDescription}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                    <a
                        href={`mailto:${RESUME_DATA.personal.email}`}
                        className="inline-flex items-center gap-2 px-5 h-10 rounded-lg bg-[#2dd4bf] text-black font-semibold text-sm hover:bg-[#2dd4bf]/90 transition-colors"
                    >
                        <Mail className="h-4 w-4" /> Email Me
                    </a>
                    <Link
                        href="/resume"
                        className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
                    >
                        View Resume
                    </Link>
                    <a
                        href={RESUME_DATA.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
                    >
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                        href={RESUME_DATA.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
                    >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="border-t border-border pt-8 pb-4 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
                <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#2dd4bf]" />
                        {RESUME_DATA.personal.location}
                    </span>
                    <a
                        href={`tel:${RESUME_DATA.personal.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-1.5 hover:text-[#2dd4bf] transition-colors"
                    >
                        <Phone className="h-3.5 w-3.5 text-[#2dd4bf]" />
                        {RESUME_DATA.personal.phone}
                    </a>
                </div>
                <p className="font-mono">
                    © {new Date().getFullYear()} {RESUME_DATA.personal.name}. Built with Next.js &amp; Tailwind.
                </p>
            </div>
        </section>
    );
}
