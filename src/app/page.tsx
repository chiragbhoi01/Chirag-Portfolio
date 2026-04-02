import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Philosophy } from "@/components/sections/philosophy";
import { Footer } from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";
import { PersonJsonLd } from "@/components/seo/json-ld";

export const revalidate = 86400; // revalidate homepage once per day

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#2dd4bf] selection:text-black">
      <PersonJsonLd />
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 md:space-y-28">
        {/* 1. Hero — value prop, stats, CTAs */}
        <Hero />
        <Separator />
        {/* 2. Featured Projects — top 2 production apps */}
        <Projects />
        {/* 3. Currently Building — live momentum signal */}
        <CurrentlyBuilding />
        {/* 4. Tech Stack — compact, scannable */}
        <Skills />
        {/* 5. Experience — impact bullets */}
        <Experience />
        {/* 6. Philosophy — differentiation */}
        <Philosophy />
        {/* 7. Footer / Contact CTA */}
        <Footer />
      </main>
    </div>
  );
}
