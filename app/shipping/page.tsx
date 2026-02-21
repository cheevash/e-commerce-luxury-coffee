export const metadata = {
  title: "Shipping & Returns | Aura Luxury Coffee",
  description: "Information on our global shipping policies.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block text-center animate-fade-in-up">Logistics</span>
        <h1 className="font-serif text-4xl md:text-5xl text-luxury-white mb-16 leading-tight text-center animate-fade-in-up animation-delay-200">
          Shipping & Returns
        </h1>

        <div className="prose prose-invert prose-lg max-w-none text-luxury-gray font-light leading-relaxed animate-fade-in-up animation-delay-400">
          <h3 className="text-luxury-gold font-serif text-2xl mb-4">Domestic Shipping (USA)</h3>
          <p>
            We offer complimentary standard shipping on all orders over $150. For orders under $150, a flat rate of $10 applies. We utilize premium courier services to ensure your freshly roasted beans arrive securely. Standard delivery takes 2-4 business days post-roast. Expedited overnight options are available at checkout.
          </p>

          <h3 className="text-luxury-gold font-serif text-2xl mb-4 mt-12">International Shipping</h3>
          <p>
            Aura proudly ships to discerning clients worldwide via DHL Express. International shipping rates are calculated dynamically at checkout based on destination and weight. Please allow 4-7 business days for global transit. Note that international clients are responsible for any local customs duties or taxes import.
          </p>

          <h3 className="text-luxury-gold font-serif text-2xl mb-4 mt-12">Roast & Dispatch Schedule</h3>
          <p>
            To guarantee absolute freshness, we do not warehouse roasted coffee. Orders placed by Sunday 10 PM EST are roasted Monday and dispatched Tuesday. Orders placed by Tuesday 10 PM EST are roasted Wednesday and dispatched Thursday.
          </p>
          
          <h3 className="text-luxury-gold font-serif text-2xl mb-4 mt-12">Return Policy</h3>
          <p>
             Our coffee is a perishable, craft product. As out of dedication to quality, we cannot accept returns on roasted beans. If your order arrives damaged or if there is an issue with your equipment purchase, please contact our Concierge within 48 hours with photographic evidence, and we will arrange a swift replacement.
          </p>
        </div>
      </div>
    </div>
  );
}
