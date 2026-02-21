"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500); // Simulate API call
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block">Concierge Services</span>
          <h1 className="font-serif text-4xl md:text-6xl text-luxury-white mb-6 leading-tight">Contact Aura</h1>
          <p className="text-luxury-gray font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Our dedicated team is available to assist you with order inquiries, exceptional coffee sourcing requests, and wholesale partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-20 animate-fade-in-up animation-delay-200">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                <MapPin className="text-luxury-gold w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-luxury-white text-lg font-serif mb-2">The Roastery</h4>
                <p className="text-luxury-gray font-light">1200 Highland Estate Blvd<br />Seattle, WA 98101<br />United States</p>
                <p className="text-xs text-luxury-gold uppercase tracking-widest mt-4">By Appointment Only</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                <Mail className="text-luxury-gold w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-luxury-white text-lg font-serif mb-2">Email</h4>
                <p className="text-luxury-gray font-light">concierge@auracoffee.com</p>
                <p className="text-xs text-luxury-gray uppercase tracking-widest mt-4">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0">
                <Phone className="text-luxury-gold w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-luxury-white text-lg font-serif mb-2">Phone</h4>
                <p className="text-luxury-gray font-light">+1 (800) 555-AURA</p>
                <p className="text-xs text-luxury-gray uppercase tracking-widest mt-4">Mon-Fri, 9am - 5pm PST</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 md:p-12 rounded-2xl border border-luxury-border/5">
            <h3 className="font-serif text-2xl text-luxury-white mb-8">Send a Message</h3>
            
            {status === "success" ? (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="w-16 h-16 mx-auto rounded-full border border-luxury-gold/30 flex items-center justify-center mb-6">
                  <span className="text-luxury-gold text-2xl">✓</span>
                </div>
                <h4 className="text-luxury-white font-serif text-xl mb-4">Message Received</h4>
                <p className="text-luxury-gray font-light">Our concierge will contact you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-luxury-gold text-xs uppercase tracking-widest hover:text-luxury-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-luxury-gray uppercase tracking-widest">First Name</label>
                    <input required className="w-full bg-black/20 border border-luxury-border/10 rounded-none px-4 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-luxury-gray uppercase tracking-widest">Last Name</label>
                    <input required className="w-full bg-black/20 border border-luxury-border/10 rounded-none px-4 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-luxury-gray uppercase tracking-widest">Email</label>
                  <input required type="email" className="w-full bg-black/20 border border-luxury-border/10 rounded-none px-4 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-luxury-gray uppercase tracking-widest">Message</label>
                  <textarea required rows={5} className="w-full bg-black/20 border border-luxury-border/10 rounded-none px-4 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors resize-none" />
                </div>
                <button 
                  disabled={status === "submitting"}
                  className="w-full bg-luxury-gold text-luxury-dark py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-luxury-lightGold transition-all duration-300 disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
