"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { state, dispatch, totalPrice, totalItems } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <div className="w-24 h-24 mx-auto border border-luxury-gold/30 rounded-full flex items-center justify-center mb-8">
            <span className="text-luxury-gold text-3xl font-serif tracking-widest">A</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-luxury-white tracking-widest uppercase">Your Bag is Empty</h1>
          <p className="text-luxury-gray max-w-md mx-auto font-light leading-relaxed">
            Begin your journey by exploring our highly curated selection of luxury coffee beans and equipment.
          </p>
          <Link
            href="/collections"
            className="inline-block mt-8 border border-luxury-gold text-luxury-gold px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
          >
            Discover Collections
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 min-h-screen">
      <div className="mb-12">
        <h1 className="font-serif text-3xl md:text-5xl text-luxury-white tracking-widest uppercase mb-4">Checkout</h1>
        <p className="text-luxury-gray tracking-wide">Review your rare selections before finalizing your order.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items List */}
        <div className="w-full lg:w-2/3">
          <div className="border border-luxury-border/10 rounded-2xl bg-luxury-charcoal/30 backdrop-blur-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 border-b border-luxury-border/10 bg-black/20 text-xs tracking-widest text-luxury-gray uppercase">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            <div className="divide-y divide-luxury-border/5">
              {state.items.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 md:p-8 group"
                >
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                    <button
                      onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                      className="text-luxury-gray hover:text-red-400 transition-colors p-2 hidden md:block"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-black/50 overflow-hidden rounded-lg border border-luxury-border/5">
                      <Image
                        src={item.image_url || "/placeholder-coffee.jpg"}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <h3 className="text-luxury-white font-medium tracking-wide text-base md:text-lg mb-1">{item.name}</h3>
                      <p className="text-luxury-gold font-serif text-sm">${item.price.toFixed(2)}</p>
                      <button
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                        className="text-luxury-gray hover:text-red-400 transition-colors mt-3 text-xs uppercase tracking-widest md:hidden border-b border-transparent hover:border-red-400 pb-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-3 flex justify-start md:justify-center">
                    <div className="flex items-center justify-between border border-luxury-border/20 rounded-full w-32 p-1 bg-black/20">
                      <button
                        onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } })}
                        className="w-8 h-8 flex items-center justify-center text-luxury-gray hover:text-luxury-white transition-colors rounded-full"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-serif text-lg">{item.quantity}</span>
                      <button
                        onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}
                        className="w-8 h-8 flex items-center justify-center text-luxury-gray hover:text-luxury-white transition-colors rounded-full"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 md:col-span-3 text-left md:text-right">
                    <span className="font-serif text-xl md:text-2xl text-luxury-white tracking-wider">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32 glass rounded-2xl p-8 border border-luxury-border/10">
            <h2 className="font-serif text-2xl text-luxury-white tracking-widest uppercase mb-8 pb-4 border-b border-luxury-border/10">Order Summary</h2>
            
            <div className="space-y-4 text-sm tracking-wide text-luxury-gray mb-8">
              <div className="flex justify-between items-center">
                <span>Subtotal ({totalItems} items)</span>
                <span className="text-luxury-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Complimentary Shipping</span>
                <span className="text-luxury-white">$0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Estimated Tax</span>
                <span className="text-luxury-white">Calculated at next step</span>
              </div>
            </div>

            <div className="border-t border-luxury-border/10 pt-6 mb-10 flex justify-between items-end">
              <span className="text-luxury-white tracking-widest uppercase">Total</span>
              <span className="font-serif text-3xl md:text-4xl text-luxury-gold">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-luxury-gold text-luxury-dark py-5 uppercase tracking-widest text-sm font-bold hover:bg-luxury-lightGold transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2">
              <span className="relative z-10">Proceed to Payment</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-luxury-border/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>

            <div className="mt-6 text-center">
              <Link href="/collections" className="text-luxury-gray text-xs tracking-widest uppercase hover:text-luxury-white transition-colors underline-offset-4 hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
