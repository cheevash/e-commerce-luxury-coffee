import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface RecommendationSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function RecommendationSection({ 
  products, 
  title = "Curated For You",
  subtitle = "Discover our masterfully roasted selections" 
}: RecommendationSectionProps) {
  
  if (!products || products.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-white mb-4 tracking-wider">
            {title}
          </h2>
          <p className="text-luxury-gray text-sm tracking-widest uppercase">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
