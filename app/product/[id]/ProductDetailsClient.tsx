"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { Product } from "@/types/product";
import { Minus, Plus, ShoppingBag, Loader2 } from "lucide-react";

export default function ProductDetailsClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { dispatch } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = () => {
    setIsAdding(true);
    
    setTimeout(() => {
      // Add multiple if quantity > 1
      for (let i = 0; i < quantity; i++) {
        dispatch({ type: "ADD_ITEM", payload: product });
      }
      
      addToast(`${quantity} x ${product.name} added to your bag`, "success");
      setIsAdding(false);
      setQuantity(1); // reset after adding
    }, 600);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      {/* Quantity Selector */}
      <div className="flex items-center justify-between border border-luxury-border/20 rounded-full w-full sm:w-40 p-2 bg-luxury-charcoal/50">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-10 h-10 flex items-center justify-center text-luxury-gray hover:text-luxury-white transition-colors rounded-full hover:bg-luxury-border/5"
          disabled={quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="font-serif text-xl w-10 text-center text-luxury-white">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-10 h-10 flex items-center justify-center text-luxury-gray hover:text-luxury-white transition-colors rounded-full hover:bg-luxury-border/5"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`flex-1 w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full uppercase tracking-widest text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
          isAdding ? "bg-luxury-charcoal text-luxury-gold border border-luxury-gold/50 cursor-not-allowed" : "bg-luxury-gold text-luxury-dark hover:bg-luxury-lightGold shadow-lg shadow-luxury-gold/20 hover:-translate-y-1"
        }`}
      >
        {isAdding ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Preparing...</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            <span className="relative z-10">Add to Bag</span>
            <div className="absolute inset-0 bg-luxury-border/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </>
        )}
      </button>
    </div>
  );
}
