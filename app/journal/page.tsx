import Image from "next/image";

export const metadata = {
  title: "The Journal | Aura Luxury Coffee",
  description: "Insights, brewing guides, and stories from the estates.",
};

const articles = [
  {
    id: 1,
    title: "The Art of the Pour Over",
    excerpt: "Mastering the v60 for high-altitude floral microlots to unlock hidden aromatics.",
    date: "October 12, 2023",
    category: "Brewing Guide",
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800",
  },
  {
    id: 2,
    title: "A Journey to Panama",
    excerpt: "Discovering the elusive Geisha varietal on the misty slopes of Volcán Barú.",
    date: "September 28, 2023",
    category: "Origin Story",
    imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800",
  },
  {
    id: 3,
    title: "Understanding Processing Methods",
    excerpt: "How Washed, Natural, and Honey processes dictate the final profile in your cup.",
    date: "September 05, 2023",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800",
  },
  {
    id: 4,
    title: "Water Chemistry for Coffee",
    excerpt: "Why dialing in your water is just as important as your grind size.",
    date: "August 21, 2023",
    category: "Geek Out",
    imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800",
  }
];

export default function JournalPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block">The Journal</span>
          <h1 className="font-serif text-4xl md:text-6xl text-luxury-white mb-6 leading-tight">Stories & Insights</h1>
          <p className="text-luxury-gray font-light leading-relaxed text-lg">
            Delve deeper into the world of specialty coffee. Expert brewing techniques, origin travelogues, and reflections on the craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-16 animate-fade-in-up animation-delay-400">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/9] w-full bg-black/50 border border-luxury-border/5 rounded-2xl mb-6 relative overflow-hidden">
                 <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-transparent to-transparent opacity-60 z-10" />
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs tracking-widest uppercase">
                <span className="text-luxury-gold">{article.category}</span>
                <span className="text-luxury-gray/50">•</span>
                <span className="text-luxury-gray">{article.date}</span>
              </div>
              <h2 className="text-2xl font-serif text-luxury-white mb-3 group-hover:text-luxury-gold transition-colors">{article.title}</h2>
              <p className="text-luxury-gray font-light text-sm leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
