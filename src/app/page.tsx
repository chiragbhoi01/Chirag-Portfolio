import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
// import { Testimonials } from "@/components/sections/testimonials";
// import { Blog } from "@/components/sections/blog";
// import { Demos } from "@/components/sections/demos";
import { Footer } from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#2dd4bf] selection:text-black">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 md:space-y-32">
        <Hero />
        <Separator />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        <Experience />
        {/* <Blog /> */}
        {/* <Demos /> */}
        <Footer />
      </main>
    </div>
  );
}