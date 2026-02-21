export const metadata = {
  title: "FAQ | Aura Luxury Coffee",
  description: "Frequently asked questions regarding our coffee, roasting, and orders.",
};

const faqs = [
  {
    question: "When is my coffee roasted?",
    answer: "Every order is roasted on-demand in small batches. We roast on Mondays and Wednesdays, shipping the following morning to ensure the beans arrive at their peak degassing phase (typically 5-7 days post-roast)."
  },
  {
    question: "Do you sell ground coffee?",
    answer: "To preserve the volatile aromatics and delicate flavor notes of our luxury microlots, we exclusively sell whole bean coffee. We highly recommend a quality burr grinder to maximize your experience."
  },
  {
    question: "How should I store my Aura beans?",
    answer: "Keep your beans in their original Aura valved bag or an airtight, opaque container. Store in a cool, dark cabinet away from extreme temperature fluctuations. Never store coffee in the refrigerator or freezer."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the perishable nature of freshly roasted coffee, we cannot accept returns on beans. However, if there is an error with your order or the product arrives damaged, please contact our concierge team within 48 hours for a replacement."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block text-center animate-fade-in-up">Support</span>
        <h1 className="font-serif text-4xl md:text-5xl text-luxury-white mb-16 leading-tight text-center animate-fade-in-up animation-delay-200">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8 animate-fade-in-up animation-delay-400">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-luxury-border/10 pb-8">
              <h3 className="text-xl text-luxury-white font-serif mb-4">{faq.question}</h3>
              <p className="text-luxury-gray font-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center glass p-10 rounded-2xl border border-luxury-border/5 animate-fade-in-up animation-delay-600">
          <p className="text-luxury-gray mb-6">Still have questions? Our concierge team is ready to assist you.</p>
          <a href="/contact" className="inline-block border border-luxury-gold text-luxury-gold px-8 py-3 uppercase tracking-[0.2em] text-xs hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
            Contact Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
