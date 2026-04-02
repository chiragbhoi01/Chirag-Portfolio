import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-[#2dd4bf] text-sm font-medium uppercase tracking-widest">
        404 — Not Found
      </p>
      <h1 className="text-3xl font-bold">Project not found</h1>
      <p className="text-muted-foreground max-w-md">
        This project doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-5 h-10 rounded-lg border border-border text-sm hover:bg-accent transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>
    </div>
  );
}
