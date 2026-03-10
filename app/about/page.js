import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative pt-48 pb-32 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=1600&q=80"
            alt="Profabrics workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/65"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Who We Are
            </p>
            <h1 className="font-display text-warm-white" style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 300, lineHeight: 1.05 }}>
              Woven with<br /><em>Purpose.</em>
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                  Our Story
                </p>
                <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(32px, 3vw, 44px)', fontWeight: 300, lineHeight: 1.2 }}>
                  From a Small Shop on<br /><em>New Road to Nepal's</em><br />Trusted Fabric Supplier
                </h2>
                <span className="gold-line"></span>
              </div>
              <div className="lg:col-span-7">
                <p className="text-stone leading-relaxed mb-6" style={{ fontSize: '15px', lineHeight: 1.9 }}>
                  Profabrics began in 2009 as a small fabric shop on New Road, Kathmandu — a single passionate individual with a vision: to bring world-class fabrics to Nepal's growing fashion industry. What started as a modest retail space quickly grew into the region's most trusted fabric supplier.
                </p>
                <p className="text-stone leading-relaxed mb-6" style={{ fontSize: '15px', lineHeight: 1.9 }}>
                  Over fifteen years, we have built relationships with premium textile mills across India, China, Italy, and Japan. We carefully curate every fabric in our collection, testing for quality, durability, and aesthetic appeal before it reaches our shelves.
                </p>
                <p className="text-stone leading-relaxed" style={{ fontSize: '15px', lineHeight: 1.9 }}>
                  Today, Profabrics serves over 2,000 clients — from individual tailors and home sewers to major clothing brands and fashion houses across Nepal. Our commitment remains the same: exceptional fabrics, honest service, and a deep respect for the craft of fashion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-gold mb-3" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                What We Stand For
              </p>
              <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 300 }}>
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '◈',
                  title: 'Quality First',
                  desc: 'Every fabric is hand-selected and tested for weave density, colorfastness, and durability. We never compromise on quality.',
                },
                {
                  icon: '◇',
                  title: 'Honest Pricing',
                  desc: 'Transparent, fair pricing for retail and wholesale. No hidden fees. Special rates for loyal clients and bulk orders.',
                },
                {
                  icon: '◉',
                  title: 'Local Expertise',
                  desc: 'Deep knowledge of Nepal\'s fashion industry, climate, and cultural preferences. We know what works here.',
                },
                {
                  icon: '◫',
                  title: 'Sustainability',
                  desc: 'We increasingly source from eco-certified mills and prioritize natural fibers. Fashion should have a lighter footprint.',
                },
              ].map((val) => (
                <div key={val.title} className="group">
                  <p className="text-gold mb-4" style={{ fontSize: '20px' }}>{val.icon}</p>
                  <h3 className="font-display text-charcoal text-xl mb-3" style={{ fontWeight: 400 }}>{val.title}</h3>
                  <p className="text-stone leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.8 }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Split Image Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                  alt="Fabric details"
                  className="w-full object-cover mt-12"
                  style={{ aspectRatio: '2/3' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&q=80"
                  alt="Fabric rolls"
                  className="w-full object-cover"
                  style={{ aspectRatio: '2/3' }}
                />
              </div>

              <div>
                <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                  Our Mission
                </p>
                <h2 className="font-display text-charcoal mb-6" style={{ fontSize: 'clamp(30px, 3vw, 42px)', fontWeight: 300, lineHeight: 1.2 }}>
                  Elevating Nepal's<br /><em>Fashion Industry,</em><br />One Fabric at a Time
                </h2>
                <p className="text-stone leading-relaxed mb-6" style={{ fontSize: '15px', lineHeight: 1.9 }}>
                  Our mission is simple: to be the fabric partner that Nepal's fashion creators deserve. We believe that access to high-quality materials should not be limited to major fashion cities — Kathmandu's designers and tailors deserve the same resources as their peers in Mumbai or Milan.
                </p>
                <p className="text-stone leading-relaxed mb-10" style={{ fontSize: '15px', lineHeight: 1.9 }}>
                  We work closely with our clients, offering fabric consultations, sample services, and custom sourcing for specialty projects.
                </p>
                <Link href="/contact" className="btn-outline">Book a Consultation</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Come Visit
            </p>
            <h2 className="font-display text-warm-white mb-6" style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 300 }}>
              Visit Our Showroom in Kathmandu
            </h2>
            <p className="text-warm-white/60 mb-8" style={{ fontSize: '14px', lineHeight: 1.8 }}>
              Experience the fabrics in person. Our knowledgeable team is ready to help you find exactly what you need for your next project.
            </p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--deep)' }}>
              Get Directions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
