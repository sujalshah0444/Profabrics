'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FabricCard from '../../components/FabricCard';
import { fabrics, categories } from '../../data/fabrics';

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? fabrics
    : fabrics.filter(f => f.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cream"></div>
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=1400&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Our Range
            </p>
            <h1 className="font-display text-charcoal" style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300 }}>
              Fabric Collections
            </h1>
            <p className="text-stone mt-4 max-w-lg" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Explore our curated selection of premium fabrics. From bridal silks to everyday cottons, every fabric is chosen for quality and character.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-20 z-30 bg-warm-white/95 backdrop-blur-sm border-b border-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex gap-0 overflow-x-auto hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-6 py-5 text-xs tracking-widest uppercase transition-all duration-300 border-b-2 ${
                    activeCategory === cat
                      ? 'border-charcoal text-charcoal'
                      : 'border-transparent text-stone hover:text-charcoal'
                  }`}
                  style={{ letterSpacing: '0.15em', fontSize: '11px' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Fabric Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <p className="text-stone" style={{ fontSize: '13px' }}>
                Showing {filtered.length} fabric{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((fabric, i) => (
                <div
                  key={fabric.id}
                  className="animate-scale-in"
                  style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: `${i * 0.05}s` }}
                >
                  <FabricCard fabric={fabric} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-24">
                <p className="font-display text-2xl text-stone" style={{ fontWeight: 300 }}>No fabrics found</p>
                <p className="text-stone mt-2" style={{ fontSize: '13px' }}>Try a different category</p>
              </div>
            )}
          </div>
        </section>

        {/* Wholesale CTA */}
        <section className="bg-charcoal py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-gold mb-4" style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Tailors & Brands
            </p>
            <h2 className="font-display text-warm-white mb-6" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300 }}>
              Need Fabric in Bulk?
            </h2>
            <p className="text-warm-white/60 mb-8" style={{ fontSize: '14px', lineHeight: 1.8 }}>
              We offer competitive wholesale pricing for tailors, boutiques, and clothing manufacturers. Get in touch for a custom quote.
            </p>
            <a href="/wholesale" className="btn-primary" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--deep)' }}>
              Wholesale Enquiry
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
