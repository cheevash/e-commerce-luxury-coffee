"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { state, dispatch, totalPrice } = useCart();
  const router = useRouter();

  const handleClose = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const proceedToCheckout = () => {
    handleClose();
    router.push("/cart");
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-luxury-charcoal shadow-2xl z-50 flex flex-col border-l border-luxury-border/5"
          >
            {/* Header */}
            <div className="px-6 py-6 border-b border-luxury-border/10 flex items-center justify-between">
              <h2 className="font-serif text-xl text-luxury-gold tracking-widest uppercase">Your Bag</h2>
              <button 
                onClick={handleClose}
                className="p-2 text-luxury-gray hover:text-white transition-colors rounded-full hover:bg-luxury-border/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {state.items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-luxury-gray space-y-4">
                  <p className="tracking-widest uppercase text-sm">Your bag is empty</p>
                  <button onClick={handleClose} className="text-luxury-gold underline underline-offset-4 hover:text-luxury-lightGold transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-24 h-24 rounded-md overflow-hidden bg-black/50 border border-luxury-border/5">
                      <Image
                        src={item.image_url || "/placeholder-coffee.jpg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="96px"
                      />
                    </div>
                    
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-medium tracking-wide leading-tight group-hover:text-luxury-gold transition-colors">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                            className="text-luxury-gray hover:text-red-400 transition-colors pl-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-luxury-gold text-sm font-serif mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 border border-luxury-border/20 rounded-full w-fit px-2 py-1">
                        <button
                          onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } })}
                          className="text-luxury-gray hover:text-white p-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}
                          className="text-luxury-gray hover:text-white p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-luxury-border/10 p-6 bg-black/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-luxury-gray tracking-widest text-sm uppercase">Subtotal</span>
                  <span className="font-serif text-xl tracking-wider text-luxury-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-luxury-gray mb-6 tracking-wide">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  onClick={proceedToCheckout}
                  className="w-full bg-luxury-gold text-black py-4 uppercase tracking-widest text-sm font-semibold hover:bg-luxury-lightGold transition-colors duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Proceed to Checkout</span>
                  <div className="absolute inset-0 bg-luxury-border/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
