export function ProjectSkeleton() {
  return (
    <div className="flex flex-col h-full border border-border rounded-lg overflow-hidden animate-pulse bg-card">
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="h-5 w-2/3 bg-muted rounded" />
          <div className="h-5 w-16 bg-muted rounded" />
        </div>
        <div className="h-4 w-20 bg-muted rounded" />
      </div>
      <div className="px-5 pb-5 grow space-y-3">
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-4/5 bg-muted rounded" />
        <div className="h-3 w-3/5 bg-muted rounded" />
        <div className="flex gap-2 pt-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-5 w-16 bg-muted rounded" />
          ))}
        </div>
      </div>
      <div className="px-5 pb-5 space-y-2">
        <div className="h-9 w-full bg-muted rounded-md" />
        <div className="flex gap-2">
          <div className="h-9 flex-1 bg-muted rounded-md" />
          <div className="h-9 flex-1 bg-muted rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  );
}
