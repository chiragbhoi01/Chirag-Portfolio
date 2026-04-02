import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { GitHubSignal } from "@/components/sections/github-signal";
import { SystemThinking } from "@/components/sections/system-thinking";
import { Philosophy } from "@/components/sections/philosophy";
import { Footer } from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";
import { PersonJsonLd } from "@/components/seo/json-ld";

export const revalidate = 86400; // revalidate homepage once per day

export default async function Home() {
  // Fetch GitHub stats server-side; fail gracefully so the page still renders
  let ghStats = { totalStars: 0, publicRepos: 0, followers: 0 };
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ?? "https://chiragbhoimarshal.netlify.app";
    const res = await fetch(`${baseUrl}/api/github-stats`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      ghStats = {
        totalStars: data.totalStars ?? 0,
        publicRepos: data.publicRepos ?? 0,
        followers: data.followers ?? 0,
      };
    }
  } catch {
    // silently fall back to zero values shown as "—"
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#2dd4bf] selection:text-black">
      <PersonJsonLd />
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 md:space-y-28">
        {/* 1. Hero — value prop, stats, CTAs */}
        <Hero />
        <Separator />
        {/* 2. Featured Projects — top production apps */}
        <Projects />
        {/* 3. Currently Building — momentum signal */}
        <CurrentlyBuilding />
        {/* 4. Skills — compact grouped grid */}
        <Skills />
        {/* 5. Experience — impact bullets */}
        <Experience />
        {/* 6. GitHub Signal — active developer proof */}
        <GitHubSignal
          totalStars={ghStats.totalStars}
          publicRepos={ghStats.publicRepos}
          followers={ghStats.followers}
        />
        {/* 7. How I Build Systems — systems thinking differentiator */}
        <SystemThinking />
        {/* 8. Philosophy — engineer branding */}
        <Philosophy />
        {/* 9. Footer — strong CTA + contact */}
        <Footer />
      </main>
    </div>
  );
}
