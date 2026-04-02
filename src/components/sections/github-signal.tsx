import { Github, Star, GitFork, BookOpen, Users } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { RESUME_DATA } from "@/lib/data";

interface Props {
  totalStars?: number;
  publicRepos?: number;
  followers?: number;
}

// Rendered as a server component — stats passed from page level
export function GitHubSignal({ totalStars = 0, publicRepos = 0, followers = 0 }: Props) {
  const displayStats = [
    { icon: BookOpen, label: "Public Repos", value: publicRepos > 0 ? publicRepos : "10+", color: "text-[#2dd4bf]" },
    { icon: Star, label: "Total Stars", value: totalStars > 0 ? totalStars : "—", color: "text-yellow-500" },
    { icon: GitFork, label: "Total Forks", value: "—", color: "text-blue-400" },
    { icon: Users, label: "Followers", value: followers > 0 ? followers : "—", color: "text-purple-400" },
  ];

  return (
    <RevealOnScroll>
      <section className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest mb-1">
              Developer Activity
            </p>
            <h2 className="text-3xl font-bold">GitHub Signal</h2>
          </div>
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 h-9 hover:bg-accent"
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {displayStats.map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border border-border bg-card text-center"
            >
              <Icon className={`h-5 w-5 ${color}`} />
              <span className="text-2xl font-bold tabular-nums">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Active on GitHub · regularly pushing commits · open-source friendly
        </p>
      </section>
    </RevealOnScroll>
  );
}
