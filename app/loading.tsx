export default function Loading() {
  return (
    <div className="min-h-screen bg-white" aria-busy="true" aria-label="Loading page…">
      {/* Hero skeleton */}
      <div className="gradient-hero py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="h-6 w-48 bg-white/15 rounded-full animate-pulse" />
              <div className="space-y-3">
                <div className="h-12 w-full bg-white/15 rounded-xl animate-pulse" />
                <div className="h-12 w-4/5 bg-white/15 rounded-xl animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="flex gap-3 pt-2">
                <div className="h-12 w-44 bg-white/20 rounded-xl animate-pulse" />
                <div className="h-12 w-36 bg-white/10 rounded-xl animate-pulse" />
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 w-full bg-white/10 rounded-2xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container-main py-16 space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-100 rounded-xl animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-36 bg-slate-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
