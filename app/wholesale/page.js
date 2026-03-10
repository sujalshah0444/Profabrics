import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Wholesale() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-48 pb-32 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1600&q=80"
            alt="Wholesale fabrics"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/70"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              For Professionals
            </p>
            <h1 className="font-display text-warm-white" style={{ fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.1 }}>
              Wholesale &<br /><em>Trade Accounts</em>
            </h1>
            <p className="text-warm-white/70 mt-6 max-w-xl" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Preferential pricing, priority stock access, and dedicated support for tailors, boutiques, and clothing manufacturers.
            </p>
          </div>
        </section>

        {/* Why Wholesale */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                  Trade Benefits
                </p>
                <h2 className="font-display text-charcoal mb-8" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.2 }}>
                  Why Open a<br /><em>Profabrics Trade Account?</em>
                </h2>
                <div className="flex flex-col gap-8">
                  {[
                    {
                      num: '01',
                      title: 'Competitive Pricing',
                      desc: 'Up to 30% below retail prices for qualifying trade accounts. Tiered discounts based on volume.',
                    },
                    {
                      num: '02',
                      title: 'Priority Stock Access',
                      desc: 'First access to new arrivals and limited edition fabrics before they hit the general floor.',
                    },
                    {
                      num: '03',
                      title: 'Flexible Payment Terms',
                      desc: 'Net 30 credit terms available for established business accounts. Custom payment arrangements for large orders.',
                    },
                    {
                      num: '04',
                      title: 'Dedicated Account Manager',
                      desc: 'A personal point of contact who understands your business needs and can source specific fabrics on request.',
                    },
                    {
                      num: '05',
                      title: 'Free Delivery',
                      desc: 'Complimentary delivery within Kathmandu for orders above NPR 15,000. Valley-wide delivery available.',
                    },
                  ].map((benefit) => (
                    <div key={benefit.num} className="flex gap-6">
                      <span className="font-display text-muted text-3xl flex-shrink-0 mt-1" style={{ fontWeight: 300, minWidth: '40px' }}>
                        {benefit.num}
                      </span>
                      <div>
                        <h3 className="font-display text-charcoal text-lg mb-2" style={{ fontWeight: 400 }}>{benefit.title}</h3>
                        <p className="text-stone" style={{ fontSize: '14px', lineHeight: 1.7 }}>{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&q=80"
                  alt="Wholesale fabrics"
                  className="w-full object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute -bottom-6 -left-6 bg-cream p-8 max-w-xs hidden lg:block">
                  <p className="font-display text-charcoal text-4xl mb-1" style={{ fontWeight: 300 }}>30%</p>
                  <p className="text-stone" style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Max savings on wholesale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-gold mb-3" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                Who We Work With
              </p>
              <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300 }}>
                Built for Fashion Professionals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '✂',
                  title: 'Tailors & Darzi',
                  desc: 'From home-based tailors to established tailoring shops. We stock the fabrics your clients request.',
                },
                {
                  icon: '◈',
                  title: 'Fashion Designers',
                  desc: 'Local and national designers building collections. Custom sourcing available for unique design requirements.',
                },
                {
                  icon: '◎',
                  title: 'Clothing Brands',
                  desc: 'Nepal-based clothing labels needing consistent, high-volume fabric supply with reliable quality.',
                },
                {
                  icon: '◫',
                  title: 'Boutiques & Retailers',
                  desc: 'Boutique owners who carry cut-fabric or finished goods. Stock our most popular fabrics under your brand.',
                },
              ].map((client) => (
                <div key={client.title} className="bg-warm-white p-8 hover:shadow-md transition-shadow duration-300">
                  <p className="text-gold mb-4" style={{ fontSize: '24px' }}>{client.icon}</p>
                  <h3 className="font-display text-charcoal text-xl mb-3" style={{ fontWeight: 400 }}>{client.title}</h3>
                  <p className="text-stone" style={{ fontSize: '13px', lineHeight: 1.8 }}>{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-gold mb-3" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                Pricing Tiers
              </p>
              <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300 }}>
                Simple Volume Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tier: 'Retail',
                  range: '1 – 9 metres',
                  discount: '0%',
                  desc: 'Standard retail pricing. Walk-in or order online.',
                  highlighted: false,
                },
                {
                  tier: 'Trade',
                  range: '10 – 49 metres',
                  discount: 'Up to 15% off',
                  desc: 'For registered tailors and designers. Account required.',
                  highlighted: true,
                },
                {
                  tier: 'Wholesale',
                  range: '50+ metres',
                  discount: 'Up to 30% off',
                  desc: 'For clothing brands and bulk manufacturers.',
                  highlighted: false,
                },
              ].map((plan) => (
                <div
                  key={plan.tier}
                  className={`p-8 ${plan.highlighted ? 'bg-charcoal' : 'bg-cream border border-muted'}`}
                >
                  <p
                    className={`text-xs tracking-widest uppercase mb-2 ${plan.highlighted ? 'text-gold' : 'text-stone'}`}
                    style={{ letterSpacing: '0.2em', fontSize: '10px' }}
                  >
                    {plan.tier}
                  </p>
                  <p
                    className={`font-display text-3xl mb-1 ${plan.highlighted ? 'text-warm-white' : 'text-charcoal'}`}
                    style={{ fontWeight: 300 }}
                  >
                    {plan.discount}
                  </p>
                  <p className={`mb-6 ${plan.highlighted ? 'text-warm-white/50' : 'text-stone'}`} style={{ fontSize: '12px' }}>
                    {plan.range}
                  </p>
                  <hr className={`mb-6 ${plan.highlighted ? 'border-warm-white/10' : 'border-muted'}`} />
                  <p className={`${plan.highlighted ? 'text-warm-white/70' : 'text-stone'}`} style={{ fontSize: '13px', lineHeight: 1.7 }}>
                    {plan.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Apply Now
            </p>
            <h2 className="font-display text-warm-white mb-6" style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 300 }}>
              Open Your Trade Account
            </h2>
            <p className="text-warm-white/60 mb-8" style={{ fontSize: '14px', lineHeight: 1.8 }}>
              Applying takes 5 minutes. Our team will verify your details and activate your account within 24 hours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--deep)' }}>
                Apply for Trade Account
              </Link>
              <Link href="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--warm-white)' }}>
                Contact Us First
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
