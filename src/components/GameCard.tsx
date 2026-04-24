import { CATEGORY_COLORS, type GameCardData } from '@/data/game';
import cardBack from '@/assets/card-back.png';

export function GameCard({ card }: { card: GameCardData }) {
  const cat = CATEGORY_COLORS[card.type];
  return (
    <div className="group relative w-[280px] h-[420px] [perspective:1400px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* BACK (shown by default) */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-card [backface-visibility:hidden]"
          style={{ border: '1px solid rgba(201,168,76,0.5)' }}
        >
          <img
            src={cardBack}
            alt="Рубашка карты «Вехи Времени»"
            className="w-full h-full object-cover"
            loading="lazy"
            width={280}
            height={420}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink-deep/40 via-transparent to-transparent" />
        </div>

        {/* FRONT (revealed on hover) */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{
            background:
              'linear-gradient(180deg, oklch(0.16 0.03 40) 0%, oklch(0.12 0.02 40) 100%)',
            border: `1px solid ${cat.border}88`,
          }}
        >
          {/* Type badge */}
          <div className="flex items-center justify-between px-3 pt-3">
            <span
              className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded font-display"
              style={{ background: `${cat.bg}cc`, color: cat.text, border: `1px solid ${cat.border}` }}
            >
              {card.type}
            </span>
            <span className="text-[10px] tracking-widest text-gold/60 font-display">
              №{String(card.id).padStart(2, '0')}
            </span>
          </div>

          {/* Illustration */}
          <div
            className="relative mx-3 mt-3 h-44 rounded-lg overflow-hidden"
            style={{ border: `1px solid ${cat.border}60` }}
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover"
              loading="lazy"
              width={512}
              height={512}
            />
            {card.cost && (
              <div className="absolute top-2 right-2 px-2 py-1 rounded-md text-[11px] font-display bg-ink-deep/90 text-gold border border-gold/40">
                {card.cost}
              </div>
            )}
          </div>

          {/* Name */}
          <h3 className="text-center text-gold font-display text-lg mt-3 px-3 leading-tight">
            {card.name}
          </h3>

          {/* Description */}
          <p className="text-parchment-dark/90 text-[11.5px] leading-snug text-center px-4 mt-2 italic flex-1 overflow-hidden">
            {card.desc}
          </p>

          {/* Bonus footer */}
          <div
            className="mx-3 mb-3 mt-2 py-1.5 text-center text-sm font-display rounded"
            style={{ background: `${cat.bg}80`, color: cat.text, border: `1px solid ${cat.border}60` }}
          >
            {card.bonus}
          </div>

          {/* Corner marks */}
          {(['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'] as const).map((p) => (
            <span key={p} className={`absolute ${p} text-gold/40 text-[10px] pointer-events-none`}>
              ◆
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
