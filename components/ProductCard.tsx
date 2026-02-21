"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Loader2 } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { dispatch } = useCart();
  const { addToast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if clicked inside anchor
    setIsAdding(true);

    // Simulate network request for loading state effect
    setTimeout(() => {
      dispatch({ type: "ADD_ITEM", payload: product });
      addToast(`${product.name} added to your bag`);
      setIsAdding(false);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col h-full bg-luxury-charcoal/30 hover:bg-luxury-charcoal/50 rounded-xl overflow-hidden backdrop-blur-sm border border-luxury-border/5 hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-gold-glow"
    >
      <Link href={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-black/40 block">
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 z-10 glass px-3 py-1 rounded-full text-xs font-medium text-luxury-gold flex items-center gap-1 shadow-md">
          <span className="text-[10px]">★</span> {product.rating.toFixed(1)}
        </div>

        <Image
          src={product.image_url || "/placeholder-coffee.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </Link>

      <div className="p-6 flex flex-col flex-1 justify-between z-10 -mt-8 bg-gradient-to-t from-luxury-charcoal to-transparent pt-12">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-serif text-xl tracking-wide group-hover:text-luxury-gold transition-colors duration-300 line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-luxury-gray text-sm mt-2 line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-luxury-border/10">
          <span className="font-serif text-xl tracking-wider text-luxury-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
              isAdding 
                ? "bg-luxury-charcoal text-luxury-gold cursor-not-allowed" 
                : "bg-luxury-gold text-luxury-dark hover:bg-luxury-lightGold hover:scale-105 shadow-md shadow-luxury-gold/20"
            }`}
            aria-label="Add to cart"
          >
            {isAdding ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <ShoppingBag className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
