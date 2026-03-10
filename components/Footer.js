import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep text-warm-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 border border-gold flex items-center justify-center">
                <span className="text-xs font-display font-medium text-gold">P</span>
              </div>
              <span className="font-display text-xl tracking-widest uppercase text-warm-white" style={{ letterSpacing: '0.3em' }}>
                Profabrics
              </span>
            </Link>
            <p className="text-stone text-sm leading-relaxed font-light" style={{ fontSize: '13px' }}>
              Premium fabrics and textile solutions for Kathmandu's fashion industry. Quality woven into every thread.
            </p>
            <span className="gold-line mt-6"></span>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {['Facebook', 'Instagram', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-stone hover:text-gold transition-colors duration-300 text-xs tracking-wider"
                  style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-6" style={{ letterSpacing: '0.22em', fontSize: '10px' }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/collections', label: 'Collections' },
                { href: '/wholesale', label: 'Wholesale' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-warm-white transition-colors duration-300"
                    style={{ fontSize: '13px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fabric Types */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-6" style={{ letterSpacing: '0.22em', fontSize: '10px' }}>
              Collections
            </h4>
            <ul className="flex flex-col gap-3">
              {['Silk & Satin', 'Cotton & Linen', 'Wool & Tweed', 'Chiffon & Georgette', 'Velvet & Brocade', 'Denim & Canvas'].map((item) => (
                <li key={item}>
                  <Link href="/collections" className="text-stone hover:text-warm-white transition-colors duration-300" style={{ fontSize: '13px' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-6" style={{ letterSpacing: '0.22em', fontSize: '10px' }}>
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-stone" style={{ fontSize: '13px', lineHeight: '1.7' }}>
                  New Road, Kathmandu<br />
                  Bagmati Province, Nepal
                </p>
              </div>
              <div>
                <a href="tel:+97714XXXXXX" className="text-stone hover:text-warm-white transition-colors" style={{ fontSize: '13px' }}>
                  +977 1-4XXXXXX
                </a>
              </div>
              <div>
                <a href="mailto:hello@profabrics.com.np" className="text-stone hover:text-warm-white transition-colors" style={{ fontSize: '13px' }}>
                  hello@profabrics.com.np
                </a>
              </div>
              <div>
                <p className="text-stone" style={{ fontSize: '12px' }}>
                  Mon–Sat: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone text-center md:text-left" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Profabrics. All rights reserved. Kathmandu, Nepal.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-stone hover:text-warm-white transition-colors" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
