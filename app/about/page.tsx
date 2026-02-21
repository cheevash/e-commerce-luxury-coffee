import Image from "next/image";

export const metadata = {
  title: "Our Story | Aura Luxury Coffee",
  description: "Learn about the heritage, philosophy, and uncompromising standards behind Aura.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-12">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-luxury-dark/60 z-10" />
        <Image
          src="/images/photo-1511920170033-f8396924c348.jpg"
          alt="Our Origin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase mb-6 block animate-fade-in-up">The Aura Standard</span>
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-white mb-6 tracking-wider leading-tight animate-fade-in-up animation-delay-200">
            A Legacy of Excellence
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none text-luxury-gray font-light leading-relaxed">
            <p className="text-xl md:text-2xl text-luxury-white font-serif mb-12 text-center leading-snug">
              "We don't just roast coffee; we curate transformative sensory experiences meant to pause time, if only for a few sips."
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <p className="mb-6">
                  Founded on a relentless pursuit of perfection, Aura represents the convergence of high-altitude terroir, meticulous farming practices, and artisanal roasting techniques. We travel the globe to build direct relationships with the most dedicated farmers, ensuring access to ultra-rare microlots.
                </p>
                <p>
                  Our roasting facility is a sanctuary of precision. Here, technology and instinct blend seamlessly. Every batch is precisely monitored to highlight the intrinsic characteristics of the bean, rather than masking them with over-roasting.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden glass border border-luxury-border/10 p-2">
                 <Image
                    src="/images/photo-1442512595331-e89e73853f31.jpg"
                    alt="Roasting Process"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl"
                  />
              </div>
            </div>

            <h3 className="text-2xl text-luxury-white font-serif mb-6">Our Commitment</h3>
            <p>
              Luxury is inherently tied to responsibility. True quality cannot exist where exploitation or environmental degradation occur. That's why we pay significantly above fair-trade minimums, invest in community infrastructure at origin, and utilize 100% compostable packaging for all our shipments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
