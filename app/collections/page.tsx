import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export const metadata = {
  title: "Shop All Collections | Aura Luxury Coffee",
  description: "Explore our entire collection of meticulously sourced luxury coffee beans.",
};

export default function CollectionsPage() {
  const products = getProducts();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
