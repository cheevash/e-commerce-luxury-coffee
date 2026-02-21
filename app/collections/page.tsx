import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export const revalidate = 60; // ISR revalidation every 60s

export const metadata = {
  title: "Shop All Collections | Aura Luxury Coffee",
  description: "Explore our entire collection of meticulously sourced luxury coffee beans.",
};

async function getAllProducts() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
  if (url === "https://placeholder-url.supabase.co") return [];
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

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

export default async function CollectionsPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block">Our Complete Range</span>
          <h1 className="font-serif text-4xl md:text-6xl text-luxury-white mb-6 leading-tight">Masterfully <br /> Crafted Roasts</h1>
          <p className="text-luxury-gray font-light leading-relaxed text-lg">
            Discover the full spectrum of Aura profiles. From bright, floral microlots to deep, complex signature blends, every offering represents the pinnacle of coffee artistry.
          </p>
        </div>

        {/* Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border border-luxury-border/5 rounded-2xl glass">
            <p className="text-luxury-gray tracking-widest uppercase mb-4">No products found</p>
            <p className="font-light text-sm text-luxury-gray/70">Please check back later as we replenish our exclusive reserves.</p>
          </div>
        )}
      </div>
    </div>
  );
}
