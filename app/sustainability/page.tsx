import Image from "next/image";

export const metadata = {
  title: "Sustainability | Aura Luxury Coffee",
  description: "Our commitment to ethical sourcing, environmental responsibility, and community support.",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 bg-luxury-dark/60 z-10" />
        <Image
          src="/images/photo-1542601906990-b4d3fb778b09.jpg"
          alt="Coffee field at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block animate-fade-in-up">Our Promise</span>
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-white mb-6 tracking-wider leading-tight animate-fade-in-up animation-delay-200">
            A Sustainable Future
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Intro */}
        <div className="text-center mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-luxury-white mb-8">Harmony with Nature</h2>
          <p className="text-luxury-gray font-light leading-relaxed text-lg">
            At Aura, we believe that true luxury cannot exist at the expense of our planet. Our commitment to sustainability is woven into every aspect of our process—from the soil where our beans are grown to the cup in your hands.
          </p>
        </div>

        {/* Pillars of Sustainability */}
        <div className="space-y-32">
          {/* Pillar 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 text-luxury-gray font-light">
                <h3 className="text-2xl text-luxury-gold font-serif mb-4">Ethical Sourcing</h3>
                <p className="mb-4">
                  We partner directly with farmers, bypassing traditional commodity markets. This direct-trade model ensures that the artisans who cultivate our coffee receive well above fair-trade premiums.
                </p>
                <p>
                  By fostering long-term relationships, we provide financial stability that allows farmers to invest in their families, communities, and sustainable agricultural practices.
                </p>
             </div>
             <div className="order-1 md:order-2 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-luxury-border/5">
                <Image
                  src="/images/photo-1511920170033-f8396924c348.jpg"
                  alt="Farmer holding coffee cherries"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
             </div>
          </div>

          {/* Pillar 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-luxury-border/5">
                <Image
                  src="/images/photo-1541167760496-1628856ab772.jpg"
                  alt="Lush green coffee farm"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
             </div>
             <div className="text-luxury-gray font-light">
                <h3 className="text-2xl text-luxury-gold font-serif mb-4">Environmental Stewardship</h3>
                <p className="mb-4">
                  Our partner farms utilize shade-grown methods and preserve local biodiversity. This natural canopy protects migratory birds, enriches the soil, and requires little to no synthetic fertilizers.
                </p>
                <p>
                  We are actively transitioning all our operations to minimize our carbon footprint, from energy-efficient roasting equipment to zero-emission local deliveries.
                </p>
             </div>
          </div>

          {/* Pillar 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 text-luxury-gray font-light">
                <h3 className="text-2xl text-luxury-gold font-serif mb-4">100% Compostable Packaging</h3>
                <p className="mb-4">
                  The final step in our coffee’s journey should not end in a landfill. All Aura coffee bags, shipping materials, and labels are fully compostable or recyclable.
                </p>
                <p>
                  We continually research and implement the latest material sciences to ensure our packaging protects the delicate aromatics of our coffee while respecting the earth.
                </p>
             </div>
             <div className="order-1 md:order-2 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-luxury-border/5 bg-luxury-charcoal flex items-center justify-center p-12">
                <Image
                  src="/images/photo-1559525839-b184a4d698c7.jpg"
                  alt="Eco friendly packaging material"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80"
                />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
