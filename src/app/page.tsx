import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { GitHubSignal } from "@/components/sections/github-signal";
import { SystemThinking } from "@/components/sections/system-thinking";
import { Philosophy } from "@/components/sections/philosophy";
import { Footer } from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";
import { PersonJsonLd } from "@/components/seo/json-ld";
import { getFeaturedProjects } from "@/lib/appwrite/queries";
import { getGitHubStats } from "@/lib/github";

export const revalidate = 86400; // revalidate homepage once per day

export default async function Home() {
  // Fetch featured projects from Appwrite (falls back to FALLBACK_PROJECTS if unconfigured)
  const featuredProjects = await getFeaturedProjects();

  // Fetch GitHub stats; fail gracefully so the page always renders
  let ghStats = { totalStars: 0, publicRepos: 0, followers: 0 };
  try {
    const data = await getGitHubStats();
    ghStats = {
      totalStars: data.totalStars,
      publicRepos: data.publicRepos,
      followers: data.followers,
    };
  } catch {
    // silently fall back to static values displayed as "—"
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#2dd4bf] selection:text-black">
      <PersonJsonLd />
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 md:space-y-28">
        {/* 1. Hero — value prop, stats, CTAs */}
        <Hero />
        <Separator />
        {/* 2. Featured Projects — fetched from Appwrite */}
        <Projects projects={featuredProjects} />
        {/* 3. Skills — compact grouped grid */}
        <Skills />
        {/* 4. Experience — impact bullets */}
        <Experience />
        {/* 5. GitHub Signal — active developer proof */}
        <GitHubSignal
          totalStars={ghStats.totalStars}
          publicRepos={ghStats.publicRepos}
          followers={ghStats.followers}
        />
        {/* 6. How I Build Systems — systems thinking differentiator */}
        <SystemThinking />
        {/* 7. Philosophy — engineer branding */}
        <Philosophy />
        {/* 8. Footer — strong CTA + contact */}
        <Footer />
      </main>
    </div>
  );
}
