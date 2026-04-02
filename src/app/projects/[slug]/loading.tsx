import { ProjectsGridSkeleton } from "@/components/project/project-skeleton";

export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      <div className="h-4 w-24 bg-muted rounded animate-pulse" />
      <div className="space-y-3">
        <div className="h-10 w-2/3 bg-muted rounded animate-pulse" />
        <div className="h-4 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
      </div>
      <ProjectsGridSkeleton count={3} />
    </div>
  );
}
