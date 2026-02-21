export const metadata = {
  title: "Privacy Policy | Aura Luxury Coffee",
  description: "Our privacy policy and terms of service.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block text-center animate-fade-in-up">Legal</span>
        <h1 className="font-serif text-4xl md:text-5xl text-luxury-white mb-16 leading-tight text-center animate-fade-in-up animation-delay-200">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-lg max-w-none text-luxury-gray font-light leading-relaxed animate-fade-in-up animation-delay-400">
          <p className="text-sm uppercase tracking-widest text-luxury-gray/50 mb-12">Last Updated: October 2023</p>
          
          <h3 className="text-luxury-white font-serif text-2xl mb-4">1. Information We Collect</h3>
          <p className="mb-8">
            Aura ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. We collect personal data that you provide directly to us, such as when you create an account, subscribe to our Reserve newsletter, or make a purchase. This may include your name, email address, postal address, phone number, and payment information handled securely by our payment processors.
          </p>

          <h3 className="text-luxury-white font-serif text-2xl mb-4">2. How We Use Your Information</h3>
          <p className="mb-8">
            We use the information we collect to fulfill your orders, provide concierge services, communicate with you about exclusive microlot drops, and improve our website experience. We do not sell your personal data to third parties.
          </p>

          <h3 className="text-luxury-white font-serif text-2xl mb-4">3. Data Security</h3>
          <p className="mb-8">
            We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology and processed through secure, PCI-compliant gateways.
          </p>

          <h3 className="text-luxury-white font-serif text-2xl mb-4">4. Cookies</h3>
          <p className="mb-8">
            Our website uses cookies (and similar technologies) to enhance your browsing experience, remember your cart items (such as the `cart_id` cookie for anonymous carts), and analyze site traffic.
          </p>

          <h3 className="text-luxury-white font-serif text-2xl mb-4">5. Contact Us</h3>
          <p className="mb-8">
            If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our concierge at <a href="mailto:privacy@auracoffee.com" className="text-luxury-gold hover:underline">privacy@auracoffee.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
