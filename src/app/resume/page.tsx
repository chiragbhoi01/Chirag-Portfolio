import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { RESUME_DATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Chirag Bhoi — Full Stack Developer specializing in Next.js, Node.js, and MongoDB.",
  alternates: {
    canonical: "https://chiragbhoimarshal.netlify.app/resume",
  },
  robots: { index: false, follow: false },
};

/** Convert a Google Drive /view URL to an embeddable /preview URL */
function toPreviewUrl(url: string): string {
  return url.replace(/\/view(\?.*)?$/, "/preview");
}

export default function ResumePage() {
  const previewUrl = toPreviewUrl(RESUME_DATA.personal.resumeLink);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#2dd4bf] selection:text-black flex flex-col">
      <Navbar />

      {/* Toolbar */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>

          <span className="text-sm font-medium truncate">
            {RESUME_DATA.personal.name} — Resume
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={RESUME_DATA.personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open in Google Drive"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Open in Drive</span>
            </a>
            <a
              href={RESUME_DATA.personal.resumeLink.replace(/\/view(\?.*)?$/, "/export?format=pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-[#2dd4bf] text-black text-xs font-semibold hover:bg-[#2dd4bf]/90 transition-colors"
              aria-label="Download PDF"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </div>
        </div>
      </div>

      {/* Iframe viewer */}
      <main className="flex-1 flex flex-col">
        <iframe
          src={previewUrl}
          title={`${RESUME_DATA.personal.name} Resume`}
          className="flex-1 w-full border-0"
          style={{ minHeight: "calc(100vh - 7rem)" }}
          allowFullScreen
        />
      </main>
    </div>
  );
}
