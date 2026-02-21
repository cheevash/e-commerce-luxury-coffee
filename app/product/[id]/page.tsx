import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Carousel from "@/components/Carousel";
import RecommendationSection from "@/components/RecommendationSection";
import ProductDetailsClient from "./ProductDetailsClient";
import type { Metadata } from 'next';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for static export
export async function generateStaticParams() {
  const { data: products } = await supabase
    .from("products")
    .select("id");
    
  if (!products) return [];
  
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const { data: product } = await supabase
    .from("products")
    .select("name, description, image_url")
    .eq("id", id)
    .single();

  if (!product) {
    return { title: 'Product Not Found | Aura Coffee' };
  }

  return {
    title: `${product.name} | Aura Luxury Coffee`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Aura Luxury Coffee`,
      description: product.description,
      images: [product.image_url],
    },
  };
}

async function getProduct(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data;
}

async function getRecommendations(productId: string) {
  // Try to fetch specific recommendations for this product
  let { data, error } = await supabase
    .from("recommendations")
    .select(`
      recommended_product_id,
      products:recommended_product_id (*)
    `)
    .eq("product_id", productId);

  let recProducts = data?.map((d: any) => d.products) || [];

  // If no explicit recommendations, fetch fallback products (excluding current)
  if (recProducts.length === 0) {
    const { data: fallbackData } = await supabase
      .from("products")
      .select("*")
      .neq("id", productId)
      .limit(4);
    recProducts = fallbackData || [];
  }

  return recProducts;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const recommendations = await getRecommendations(product.id);
  // Simulating multiple images if only one is provided in the DB
  const images = [product.image_url, "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800", "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"];

  return (
    <div className="min-h-screen pb-24">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-32">
              <Carousel images={images} />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8 border-b border-luxury-border/10 pb-8">
              <span className="text-luxury-gold tracking-[0.2em] text-xs uppercase mb-4 block animate-fade-in-up">Reserve Collection</span>
              <h1 className="font-serif text-4xl md:text-5xl text-luxury-white mb-4 leading-tight animate-fade-in-up animation-delay-200">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-sm animate-fade-in-up animation-delay-400">
                <div className="flex text-luxury-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "opacity-100" : "opacity-30"}>★</span>
                  ))}
                </div>
                <span className="text-luxury-gray">({product.rating} Rating)</span>
              </div>
            </div>

            <p className="text-luxury-gray font-light leading-relaxed mb-12 text-lg animate-fade-in-up animation-delay-400">
              {product.description}
            </p>

            <div className="flex items-end gap-2 mb-10 animate-fade-in-up animation-delay-600">
              <span className="font-serif text-4xl text-luxury-white">${product.price.toFixed(2)}</span>
              <span className="text-luxury-gray text-sm mb-1">/ 250g Box</span>
            </div>

            {/* Interactive Client Component for Add to Cart */}
            <div className="animate-fade-in-up animation-delay-800">
              <ProductDetailsClient product={product} />
            </div>

            <div className="mt-16 space-y-6 border-t border-luxury-border/10 pt-12 animate-fade-in-up animation-delay-1000">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-luxury-gold text-lg">⛰</span>
                </div>
                <div>
                  <h4 className="text-luxury-white text-sm font-medium tracking-wide mb-1">High Altitude Grown</h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">Cultivated above 1,800m for exceptional density and complex flavor development.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-luxury-gold text-lg">🔥</span>
                </div>
                <div>
                  <h4 className="text-luxury-white text-sm font-medium tracking-wide mb-1">Master Roasted</h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">Small batches roasted to order ensuring peak freshness upon arrival.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-luxury-border/5">
        <RecommendationSection 
          products={recommendations} 
          title="Perfect Companions" 
          subtitle="Expand your tasting journey with these selections"
        />
      </div>
    </div>
  );
}
