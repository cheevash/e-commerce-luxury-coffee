import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";
import RecommendationSection from "@/components/RecommendationSection";

export const revalidate = 60; // ISR revalidation every 60s

async function getFeaturedProducts() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
  if (url === "https://placeholder-url.supabase.co") return [];
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("rating", { ascending: false })
      .limit(8);

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    // Only log actual fetch errors, ignore missing config errors
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
       console.error("Failed to fetch products:", error?.message || error);
    }
    return [];
  }
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-luxury-dark/60 z-10" />
        <Image
          src="/images/photo-1497935586351-b67a49e012bf.jpg"
          alt="Luxury Coffee Beans Loading..."
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-luxury-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-6 block animate-fade-in-up">
            The Pinnacle of Taste
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-luxury-white mb-8 tracking-wider leading-tight animate-fade-in-up animation-delay-200">
            A Symphony in Every Cup
          </h1>
          <p className="text-luxury-gray text-sm md:text-base md:text-lg mb-12 max-w-2xl font-light leading-relaxed animate-fade-in-up animation-delay-400">
            Experience our masterfully roasted, rare microlot collections. Sourced from the world's most exclusive estates for the discerning palate.
          </p>
          <Link
            href="#collections"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border border-luxury-gold text-luxury-gold hover:text-luxury-dark uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-500 animate-fade-in-up animation-delay-600"
          >
            <span className="relative z-10">Explore Collections</span>
            <div className="absolute inset-0 bg-luxury-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-luxury-white rotate-90 mb-4 block">Scroll</span>
          <div className="w-[1px] h-12 bg-luxury-white" />
        </div>
      </section>

      {/* Featured Collections */}
      <section id="collections" className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl text-luxury-white mb-6">Signature Roasts</h2>
              <p className="text-luxury-gray font-light leading-relaxed">
                Curated exclusively for Aura, our signature roasts represent the highest echelon of coffee craftsmanship. Each batch is a testament to our relentless pursuit of perfection.
              </p>
            </div>
            <Link href="/collections" className="text-luxury-gold uppercase tracking-widest text-sm hover:text-luxury-white transition-colors border-b border-luxury-gold pb-1 whitespace-nowrap">
              View All Roasts
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
             <div className="text-center py-20 border border-luxury-border/5 rounded-2xl glass">
                <p className="text-luxury-gray tracking-widest uppercase mb-4">No products found</p>
                <p className="font-light text-sm text-luxury-gray/70">Please configure your Supabase database and run the setup scripts.</p>
             </div>
          )}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-luxury-charcoal relative border-y border-luxury-border/5">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-stretch gap-16">
          <div className="lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/photo-1442512595331-e89e73853f31.jpg"
              alt="Artisan Roasting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-white mb-8 leading-tight">Artisan Craft at <br/> Uncompromising Standards</h2>
            <div className="space-y-6 text-luxury-gray font-light leading-relaxed">
              <p>
                True luxury is found in the meticulous details. From the moment our beans are hand-selected at altitude to the precise second they reach optimal roast temp, every step is rigorously monitored by our master roasters.
              </p>
              <p>
                We believe in honoring the farmer, the soil, and the bean. This harmony creates a transcendent experience in your cup—notes that dance, bodies that envelop, and finishes that linger long after the final sip.
              </p>
            </div>
            <div className="mt-12">
              <Link href="/about" className="inline-flex items-center gap-2 text-luxury-gold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
                Discover Our Story <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <RecommendationSection 
          products={products.slice(0, 4)} 
          title="The Reserve Selection" 
          subtitle="Highly limited micro-lots currently available"
        />
      </div>
    </div>
  );
}
