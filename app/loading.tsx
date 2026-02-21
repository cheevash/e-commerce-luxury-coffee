export default function Loading() {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center py-32 space-y-8 animate-pulse">
      {/* Spinner */}
      <div className="w-12 h-12 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin" />
      
      {/* Skeletons to mimic content */}
      <div className="w-48 h-4 bg-luxury-border/5 rounded-full" />
      <div className="w-64 h-3 bg-luxury-border/5 rounded-full" />
      
      {/* Fake grid */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full max-w-7xl">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-[4/5] bg-luxury-border/5 rounded-xl block" />
        ))}
      </div>
    </div>
  );
}
