import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "How I Built This Portfolio",
  description:
    "A deep dive into the system design, database architecture, SEO strategy, and automation behind Chirag Bhoi's developer portfolio — built with Next.js 15, Appwrite, TypeScript, and Framer Motion.",
  alternates: {
    canonical: "https://chiragbhoimarshal.netlify.app/how-i-built-this",
  },
};

const TECH_BADGES = [
  "Next.js 15", "App Router", "Appwrite", "TypeScript",
  "Tailwind CSS", "Framer Motion", "ISR", "JSON-LD", "Netlify",
];

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function CaseSection({ number, title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-[#2dd4bf] font-mono text-sm font-bold">{number}</span>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="pl-8 space-y-3">{children}</div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="rounded-xl border border-border bg-card/80 p-4 text-xs font-mono text-muted-foreground overflow-x-auto whitespace-pre">
      {children}
    </pre>
  );
}

export default function HowIBuiltThis() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#2dd4bf] selection:text-black">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to portfolio
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest">
            Case Study
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            How I Built This Portfolio
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most portfolios are static pages with hardcoded data. This one is a
            production system — database-driven, SEO-first, and automated. Here&apos;s
            exactly how it&apos;s engineered.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {TECH_BADGES.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="text-xs border-[#2dd4bf]/30 text-[#2dd4bf] bg-[#2dd4bf]/5"
              >
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            <a
              href="https://chiragbhoimarshal.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 h-9 rounded-lg bg-[#2dd4bf] text-black font-semibold text-xs hover:bg-[#2dd4bf]/90 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Site
            </a>
            <a
              href="https://github.com/chiragbhoi01/Chirag-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 h-9 rounded-lg border border-border text-xs hover:bg-accent transition-colors"
            >
              Source Code
            </a>
          </div>
        </header>

        <div className="border-t border-border" />

        {/* 01 — Problem */}
        <CaseSection number="01" title="The Problem with Static Portfolios">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Standard portfolios hard-code project data in a TypeScript file.
            Adding a new project requires editing code, committing, and
            re-deploying. That&apos;s not how production systems work.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I wanted a portfolio where I could <strong className="text-foreground">add a project from a README file
            in under 2 minutes</strong> — with full SEO, dynamic routing, and case-study
            pages generated automatically.
          </p>
        </CaseSection>

        {/* 02 — Architecture */}
        <CaseSection number="02" title="System Architecture">
          <p className="text-muted-foreground text-sm leading-relaxed">
            The portfolio is a hybrid static/dynamic Next.js 15 App Router
            application deployed on Netlify. Key architectural decisions:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Server Components for all data-fetching — zero client bundle cost for project data",
              "Appwrite as the database — schema-validated, self-hostable, with a REST SDK",
              "Static fallback in data.ts — if Appwrite is unreachable, the site still works perfectly",
              "ISR (revalidate: 3600) on project pages, daily on homepage",
              "generateStaticParams() pre-renders all project slugs at build time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#2dd4bf] mt-1 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <CodeBlock>{`// app/projects/[slug]/page.tsx
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();       // fetched from Appwrite
  return slugs.map((slug) => ({ slug }));       // pre-rendered at build time
}

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);
  return {
    title: project.title,
    description: project.description,
    openGraph: { type: "article", ... },
  };
}`}</CodeBlock>
        </CaseSection>

        {/* 03 — Database */}
        <CaseSection number="03" title="Appwrite Database Design">
          <p className="text-muted-foreground text-sm leading-relaxed">
            The <code className="text-[#2dd4bf] bg-[#2dd4bf]/5 px-1 rounded text-xs">projects</code> collection
            schema was designed for two consumers: the UI and search engines.
          </p>
          <CodeBlock>{`// projects collection schema
{
  title:            string   // required
  slug:             string   // unique — used as URL path
  description:      string   // 160 chars max — used as meta description
  content:          string   // full markdown case study
  techStack:        string[] // e.g. ["Next.js", "MongoDB"]
  features:         string[] // bullet list for SEO + UI
  category:         enum     // saas | ai | ecommerce | other
  status:           enum     // production | building | archived
  featured:         boolean  // controls homepage section
  problemStatement: string   // for case study UX
  challenges:       string   // markdown — challenges & solutions
  githubUrl:        url      // optional
  liveUrl:          url      // optional
  coverImage:       string   // Appwrite storage file ID
  createdAt:        datetime // ISO — used in sitemap lastModified
}`}</CodeBlock>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The queries layer (<code className="text-[#2dd4bf] bg-[#2dd4bf]/5 px-1 rounded text-xs">src/lib/appwrite/queries.ts</code>) wraps all
            Appwrite calls with graceful fallback to static data — making the
            system resilient to database downtime.
          </p>
        </CaseSection>

        {/* 04 — SEO */}
        <CaseSection number="04" title="SEO Strategy">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Three layers of SEO — each one independently valuable:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Per-page generateMetadata() — title, description, canonical URL, OG image all from Appwrite data",
              "JSON-LD structured data — Person schema on homepage, SoftwareSourceCode schema on project pages",
              "Dynamic sitemap.ts — includes all /projects/[slug] routes fetched from Appwrite at build time",
              "robots.ts — programmatic robots file allowing all pages, disallowing /api/",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#2dd4bf] mt-1 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* 05 — Automation */}
        <CaseSection number="05" title="Automation Script: README → Database">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Adding a project is a single command. The script parses a README,
            extracts structured data, prompts for missing fields, and pushes
            to Appwrite:
          </p>
          <CodeBlock>{`node scripts/seed-project.mjs ./path/to/README.md

# Pipeline:
# 1. Read README.md
# 2. Extract H1 as title, first paragraph as description (≤160 chars)
# 3. Detect tech stack against a 30-item whitelist
# 4. Extract features from bullet lists
# 5. Generate slug from title (kebab-case)
# 6. Prompt interactively: category, liveUrl, githubUrl, featured
# 7. Push to Appwrite via node-appwrite SDK
# 8. Print the created document $id`}</CodeBlock>
          <p className="text-muted-foreground text-sm leading-relaxed">
            This means a new project — complete with case study page, SEO
            metadata, and sitemap entry — can be live in under 2 minutes.
          </p>
        </CaseSection>

        {/* 06 — Performance */}
        <CaseSection number="06" title="Performance Decisions">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "System font stack — no Google Fonts network request, no layout shift",
              "All data fetching in Server Components — zero client-side waterfall",
              "ProjectFilter is the only client component — minimal JS hydration",
              "next/image with explicit width/height everywhere — no CLS",
              "RevealOnScroll uses Framer Motion useInView — no scroll event listeners",
              "GitHub stats API cached at 1-hour revalidate — never blocks page render",
              "Static fallback means the site works with or without Appwrite configured",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#2dd4bf] mt-1 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* 07 — What I learned */}
        <CaseSection number="07" title="What This Demonstrates">
          <p className="text-muted-foreground text-sm leading-relaxed">
            This isn&apos;t about the tech choices. It&apos;s about the thinking:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "System design before coding — schema decisions made for both UI and SEO needs",
              "Resilient architecture — the system degrades gracefully, never breaks",
              "Automation mindset — removing manual steps from repetitive workflows",
              "Performance as a constraint — Lighthouse scores treated as requirements",
              "SEO as engineering — structured data and canonical URLs are code, not configuration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#2dd4bf] mt-1 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        <div className="border-t border-border" />
        <Footer />
      </main>
    </div>
  );
}
