"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Header() {
  const { totalItems, dispatch } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="font-serif text-2xl lg:text-3xl tracking-wider text-luxury-gold uppercase group">
          <span className="group-hover:text-luxury-lightGold transition-colors duration-300">Aura</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-light tracking-widest uppercase">
          <Link href="/" className="hover:text-luxury-gold transition-colors duration-300">Home</Link>
          <Link href="/collections" className="hover:text-luxury-gold transition-colors duration-300">Collections</Link>
          <Link href="/about" className="hover:text-luxury-gold transition-colors duration-300">Our Story</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-luxury-gold transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun strokeWidth={1.5} className="w-5 h-5" /> : <Moon strokeWidth={1.5} className="w-5 h-5" />}
            </button>
          )}

          <button
            onClick={() => dispatch({ type: "TOGGLE_CART" })}
            className="relative group hover:text-luxury-gold transition-colors duration-300"
            aria-label="Toggle Cart"
          >
            <ShoppingBag strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-luxury-gold text-luxury-dark text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden hover:text-luxury-gold transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X strokeWidth={1.5} className="w-5 h-5" /> : <Menu strokeWidth={1.5} className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-8 gap-6 md:hidden border-t border-luxury-border/10"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-light tracking-widest uppercase hover:text-luxury-gold transition-colors duration-300">Home</Link>
            <Link href="/collections" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-light tracking-widest uppercase hover:text-luxury-gold transition-colors duration-300">Collections</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-light tracking-widest uppercase hover:text-luxury-gold transition-colors duration-300">Our Story</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
