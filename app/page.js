'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FabricCard from '../components/FabricCard';
import Link from 'next/link';
import { fabrics } from '../data/fabrics';

export default function Home() {
  const featured = fabrics.slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85"
              alt="Premium fabric"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep/50"></div>
          </div>

          {/* Decorative vertical line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-warm-white/10 hidden lg:block"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">
            <div className="max-w-2xl">
              <p
                className="text-gold mb-6 animate-fade-up"
                style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0, animationFillMode: 'forwards' }}
              >
                Kathmandu, Nepal
              </p>
              <h1
                className="font-display text-warm-white leading-none animate-fade-up delay-200"
                style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 300, lineHeight: 1.05, opacity: 0, animationFillMode: 'forwards' }}
              >
                Premium Fabrics<br />
                <em>for Modern</em><br />
                Fashion.
              </h1>
              <span className="gold-line animate-fade-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}></span>
              <p
                className="text-warm-white/70 mt-2 mb-10 animate-fade-up delay-400"
                style={{ fontSize: '15px', lineHeight: 1.8, maxWidth: '440px', opacity: 0, animationFillMode: 'forwards' }}
              >
                Curated fabrics for tailors, designers, and clothing brands across Nepal. Every thread tells a story.
              </p>
              <div className="flex gap-4 flex-wrap animate-fade-up delay-500" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <Link href="/collections" className="btn-primary" style={{ background: 'var(--warm-white)', color: 'var(--charcoal)', borderColor: 'var(--warm-white)' }}>
                  Browse Fabrics
                </Link>
                <Link href="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--warm-white)' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            <p className="text-warm-white/50" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</p>
            <div className="w-px h-10 bg-warm-white/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-warm-white/60" style={{ animation: 'scrollLine 1.5s ease infinite' }}></div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scrollLine {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(200%); }
            }
          `}</style>
        </section>

        {/* ── INTRO STRIP ── */}
        <section className="bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { num: '200+', label: 'Fabric Types' },
              { num: '15+', label: 'Years Experience' },
              { num: '2000+', label: 'Happy Clients' },
              { num: '100%', label: 'Quality Assured' },
            ].map((stat) => (
              <div key={stat.num} className="text-center">
                <p className="font-display text-3xl text-charcoal" style={{ fontWeight: 300 }}>{stat.num}</p>
                <p className="text-stone mt-1" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT INTRO ── */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border border-muted -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=800&q=80"
                  alt="Profabrics atelier"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/5' }}
                />
                <div className="absolute -bottom-8 -right-8 bg-gold p-6 hidden md:block">
                  <p className="font-display text-deep text-2xl" style={{ fontWeight: 300 }}>Est.</p>
                  <p className="font-display text-deep text-3xl">2009</p>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                  Our Story
                </p>
                <h2 className="font-display text-charcoal leading-tight" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1 }}>
                  Crafting Fashion's<br /><em>Foundation</em> Since 2009
                </h2>
                <span className="gold-line"></span>
                <p className="text-stone leading-relaxed mb-6" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  Profabrics was born from a deep love of textile craft and a vision to elevate Nepal's fashion industry. Based in the heart of Kathmandu, we source and supply the finest fabrics for tailors, designers, and clothing brands.
                </p>
                <p className="text-stone leading-relaxed mb-10" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  Every fabric in our collection is personally selected for quality, texture, and longevity — because we believe great fashion starts with exceptional material.
                </p>
                <Link href="/about" className="btn-outline">
                  Our Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED COLLECTIONS ── */}
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <p className="text-gold mb-3" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                  Featured
                </p>
                <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 300 }}>
                  This Season's Finest
                </h2>
              </div>
              <Link href="/collections" className="btn-outline self-start md:self-auto">
                View All Fabrics
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((fabric, i) => (
                <div key={fabric.id} className={`animate-fade-up delay-${(i + 1) * 100}`} style={{ opacity: 0, animationFillMode: 'forwards' }}>
                  <FabricCard fabric={fabric} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH BANNER ── */}
        <section className="relative py-32 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1800&q=80"
            alt="Fabric texture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/70"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              For Professionals
            </p>
            <h2 className="font-display text-warm-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300 }}>
              Wholesale & Bulk Orders
            </h2>
            <p className="text-warm-white/70 mb-10 mx-auto" style={{ fontSize: '15px', lineHeight: 1.8, maxWidth: '520px' }}>
              Special pricing for tailors, boutiques, and clothing manufacturers. Contact us for custom orders and trade accounts.
            </p>
            <Link href="/wholesale" className="btn-primary" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--deep)' }}>
              Learn About Wholesale
            </Link>
          </div>
        </section>

        {/* ── FABRIC CATEGORIES ── */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-gold mb-3" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                Explore
              </p>
              <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 300 }}>
                Browse by Category
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: 'Silk & Satin',
                  sub: 'Luxurious & Fluid',
                  img: 'https://images.unsplash.com/photo-1558171813-2e05b76c21a9?w=600&q=80',
                },
                {
                  label: 'Wool & Tweed',
                  sub: 'Structured & Warm',
                  img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
                },
                {
                  label: 'Cotton & Linen',
                  sub: 'Breathable & Timeless',
                  img: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&q=80',
                },
              ].map((cat) => (
                <Link key={cat.label} href="/collections" className="relative overflow-hidden group" style={{ aspectRatio: '1/1.1' }}>
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="fabric-img w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-400"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-warm-white text-2xl" style={{ fontWeight: 300 }}>{cat.label}</h3>
                    <p className="text-warm-white/60 mt-1" style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cat.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-gold mb-3" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                Testimonials
              </p>
              <h2 className="font-display text-charcoal" style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 300 }}>
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'Profabrics has been my go-to supplier for over 8 years. The quality of their silk and brocade is unmatched in Kathmandu.',
                  name: 'Priya Shrestha',
                  role: 'Fashion Designer',
                },
                {
                  quote: 'As a tailor, I need consistent quality. Profabrics delivers every time, and their wholesale pricing makes my business viable.',
                  name: 'Ram Bahadur Karki',
                  role: 'Master Tailor',
                },
                {
                  quote: 'We use Profabrics for our entire clothing line. Their fabric selection is curated, fresh, and always on-trend.',
                  name: 'Anisha Maharjan',
                  role: 'Clothing Brand Owner',
                },
              ].map((t) => (
                <div key={t.name} className="bg-warm-white p-8 relative">
                  <div className="font-display text-gold text-5xl absolute top-4 left-6" style={{ lineHeight: 1 }}>"</div>
                  <p className="text-stone mt-8 mb-8 leading-relaxed" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                    {t.quote}
                  </p>
                  <hr className="hr-thin mb-5" />
                  <p className="font-display text-charcoal" style={{ fontSize: '16px', fontWeight: 400 }}>{t.name}</p>
                  <p className="text-stone mt-1" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Let's Work Together
            </p>
            <h2 className="font-display text-charcoal mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300 }}>
              Ready to Find Your <em>Perfect Fabric?</em>
            </h2>
            <p className="text-stone mb-10 leading-relaxed" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Visit our showroom in Kathmandu or reach out online. Our team is ready to help you find the ideal fabric for your next project.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/collections" className="btn-primary">Browse Collections</Link>
              <Link href="/contact" className="btn-outline">Visit Our Showroom</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
