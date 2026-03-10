import Link from 'next/link';

export default function FabricCard({ fabric }) {
  return (
    <div className="fabric-card group cursor-pointer">
      <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: '3/4' }}>
        <img
          src={fabric.image}
          alt={fabric.name}
          className="fabric-img w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="fabric-overlay absolute inset-0 bg-charcoal/60 flex items-center justify-center">
          <Link
            href="/collections"
            className="btn-outline border-warm-white text-warm-white hover:bg-warm-white hover:text-charcoal"
            style={{ fontSize: '10px', padding: '10px 24px', letterSpacing: '0.2em' }}
          >
            View Details
          </Link>
        </div>
        {/* Badge */}
        {fabric.badge && (
          <div className="absolute top-4 left-4 bg-gold text-deep px-3 py-1" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>
            {fabric.badge}
          </div>
        )}
      </div>
      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg text-charcoal group-hover:text-stone transition-colors" style={{ fontWeight: 400 }}>
              {fabric.name}
            </h3>
            <p className="text-stone mt-1" style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {fabric.material}
            </p>
          </div>
          {fabric.price && (
            <p className="font-display text-base text-charcoal mt-1">
              {fabric.price}
            </p>
          )}
        </div>
        {fabric.description && (
          <p className="text-stone mt-2" style={{ fontSize: '13px', lineHeight: '1.6' }}>
            {fabric.description}
          </p>
        )}
      </div>
    </div>
  );
}
