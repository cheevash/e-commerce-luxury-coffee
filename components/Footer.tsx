import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal pt-24 pb-12 mt-20 border-t border-luxury-border/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="font-serif text-3xl tracking-wider text-luxury-gold uppercase block mb-6">
            Aura
          </Link>
          <p className="text-luxury-gray text-sm leading-relaxed mb-6 max-w-sm">
            Elevating the coffee experience through meticulously sourced beans, 
            artisanal roasting, and uncompromising dedication to quality.
          </p>
          <div className="flex gap-4 text-luxury-white">
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300"><Instagram strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300"><Twitter strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300"><Facebook strokeWidth={1.5} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg text-luxury-white mb-6 tracking-wide">Explore</h4>
          <ul className="space-y-4 text-sm text-luxury-gray">
            <li><Link href="/collections" className="hover:text-luxury-gold transition-colors duration-300">Our Collections</Link></li>
            <li><Link href="/about" className="hover:text-luxury-gold transition-colors duration-300">Our Story</Link></li>
            <li><Link href="/sustainability" className="hover:text-luxury-gold transition-colors duration-300">Sustainability</Link></li>
            <li><Link href="/journal" className="hover:text-luxury-gold transition-colors duration-300">Journal</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-serif text-lg text-luxury-white mb-6 tracking-wide">Support</h4>
          <ul className="space-y-4 text-sm text-luxury-gray">
            <li><Link href="/faq" className="hover:text-luxury-gold transition-colors duration-300">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-luxury-gold transition-colors duration-300">Shipping & Returns</Link></li>
            <li><Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
          <NewsletterForm />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-luxury-border/5 flex flex-col md:flex-row justify-between items-center text-xs text-luxury-gray/50 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Aura Coffee Reserve. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Crafted in USA</span>
        </div>
      </div>
    </footer>
  );
}
