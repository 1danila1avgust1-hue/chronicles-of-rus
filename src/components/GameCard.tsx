import { CATEGORY_COLORS, type GameCardData } from '@/data/game';

export function GameCard({ card }: { card: GameCardData }) {
  const cat = CATEGORY_COLORS[card.type];
  return (
    <div className="group relative w-full max-w-[280px] [perspective:1200px]">
      <div className="relative h-[420px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(8deg)_translateY(-8px)]">
        <div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col shadow-card transition-smooth"
          style={{
            background:
              'linear-gradient(180deg, oklch(0.16 0.03 40) 0%, oklch(0.12 0.02 40) 100%)',
            border: `1px solid ${cat.border}55`,
          }}
        >
          {/* Type badge */}
          <div className="flex items-center justify-between px-4 pt-3">
            <span
              className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded font-display"
              style={{ background: `${cat.bg}cc`, color: cat.text, border: `1px solid ${cat.border}` }}
            >
              {card.type}
            </span>
            <span className="text-[10px] tracking-widest text-gold/60 font-display">№{String(card.id).padStart(2, '0')}</span>
          </div>

          {/* Illustration */}
          <div
            className="relative mx-4 mt-3 h-44 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
              background: `radial-gradient(ellipse at center, ${cat.bg}aa, oklch(0.1 0.02 40))`,
              border: `1px solid ${cat.border}40`,
            }}
          >
            <div className="text-7xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] animate-float">{card.glyph}</div>
            {card.cost && (
              <div className="absolute top-2 right-2 px-2 py-1 rounded-md text-[11px] font-display bg-ink-deep/90 text-gold border border-gold/40">
                {card.cost}
              </div>
            )}
          </div>

          {/* Name */}
          <h3 className="text-center text-gold font-display text-lg mt-4 px-3 leading-tight">{card.name}</h3>

          {/* Description */}
          <p className="text-parchment-dark/85 text-[12.5px] leading-relaxed text-center px-5 mt-2 italic flex-1">
            {card.desc}
          </p>

          {/* Bonus footer */}
          <div
            className="mx-4 mb-3 mt-2 py-2 text-center text-sm font-display rounded"
            style={{ background: `${cat.bg}80`, color: cat.text, border: `1px solid ${cat.border}60` }}
          >
            {card.bonus}
          </div>

          {/* Corner marks */}
          {(['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'] as const).map((p) => (
            <span key={p} className={`absolute ${p} text-gold/40 text-[10px]`}>◆</span>
          ))}
        </div>
      </div>
    </div>
  );
}
