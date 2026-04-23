import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import { CARDS, CATEGORY_FILTERS, TEAM, type CardCategory } from '@/data/game';
import { GameCard } from '@/components/GameCard';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { InteractiveRules } from '@/components/InteractiveRules';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Вехи Времени — карточная стратегия эпохи Древней Руси' },
      {
        name: 'description',
        content:
          'Вехи Времени — настольная карточная игра о княжествах, дружинах и великих событиях Древней Руси. Правила, карты, команда.',
      },
      { property: 'og:title', content: 'Вехи Времени — карточная стратегия' },
      { property: 'og:description', content: 'Эпоха Древней Руси в карточной стратегии для 2–7 игроков.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Index,
});

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-4 sm:px-8 py-20 md:py-28 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center mb-10">
      <div className="text-gold/70 tracking-[0.4em] text-xs font-display uppercase mb-3">{kicker}</div>
      <h2 className="text-4xl md:text-5xl font-display animate-shimmer">{title}</h2>
      <OrnamentDivider />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#about', label: 'Об игре' },
    { href: '#gallery', label: 'Карты' },
    { href: '#rules', label: 'Правила' },
    { href: '#team', label: 'Команда' },
    { href: '#contacts', label: 'Контакты' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink-deep/70 border-b border-gold/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="text-gold text-2xl">✦</span>
          <div className="leading-none">
            <div className="font-display text-gold text-lg">Вехи</div>
            <div className="font-display text-gold/70 text-[10px] tracking-[0.3em]">ВРЕМЕНИ</div>
          </div>
        </a>
        <div className="hidden md:flex gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-parchment-dark hover:text-gold transition-smooth font-display text-sm tracking-widest uppercase">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold text-2xl" aria-label="Меню">
          {open ? '✕' : '☰'}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gold/20 bg-ink-deep/95">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-parchment hover:text-gold border-b border-gold/10 font-display text-sm tracking-widest uppercase">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <div id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><path d='M40 4l6 18h18l-15 11 6 18-15-11-15 11 6-18-15-11h18z' fill='none' stroke='%23c9a84c' stroke-opacity='0.18' stroke-width='1'/></svg>\")",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <div className="font-display text-gold/70 tracking-[0.5em] text-xs uppercase mb-6">
          Карточная стратегия · Эпоха Древней Руси
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-none">
          <span className="block animate-shimmer">Вехи</span>
          <span className="block text-parchment mt-2">Времени</span>
        </h1>
        <p className="font-script text-3xl text-gold mt-8">«От призвания варягов до Мономаха»</p>
        <p className="text-parchment-dark mt-6 max-w-xl mx-auto leading-relaxed">
          Управляйте княжеством, собирайте дружину, переживайте набеги печенегов и крещение Руси. Кто из вас оставит
          след в летописи?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#rules"
            className="font-display tracking-widest text-sm px-8 py-3 rounded-md bg-gradient-burgundy text-gold border border-gold/40 hover:shadow-glow transition-smooth uppercase"
          >
            Узнать правила
          </a>
          <a
            href="#gallery"
            className="font-display tracking-widest text-sm px-8 py-3 rounded-md border border-gold/40 text-gold hover:bg-gold/10 transition-smooth uppercase"
          >
            Посмотреть карты
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
          {[
            { v: '2–7', l: 'игроков' },
            { v: '60′', l: 'партия' },
            { v: '12+', l: 'возраст' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-gold-bright text-3xl">{s.v}</div>
              <div className="text-parchment-dark/70 text-xs tracking-widest uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/50 text-sm animate-bounce">▼</div>
    </div>
  );
}

function About() {
  const features = [
    { icon: '⚔️', title: 'Историческая глубина', desc: 'Реальные события: призвание варягов, восстание древлян, крещение Руси, набеги печенегов.' },
    { icon: '🤝', title: 'Живое взаимодействие', desc: 'Прямые конфликты, союзы и закрытые аукционы за карты Наследия.' },
    { icon: '🎯', title: 'Глубокая стратегия', desc: 'Балансируйте Еду, Монеты и Военную мощь. Стройте синергии в своей Семье.' },
    { icon: '📜', title: 'Красивые компоненты', desc: 'Иллюстрированные карты в эстетике древнерусских летописей и икон.' },
  ];
  return (
    <Section id="about">
      <SectionHeading kicker="Об игре" title="Что такое Вехи Времени?" />
      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-gold/20 bg-ink-deep/60 backdrop-blur p-6 hover:border-gold/60 hover:shadow-glow transition-smooth"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-display text-gold text-xl mb-2">{f.title}</h3>
            <p className="text-parchment-dark/85 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<CardCategory | 'Все'>('Все');
  const cards = filter === 'Все' ? CARDS : CARDS.filter((c) => c.type === filter);

  const scroll = (dir: 'left' | 'right') => {
    ref.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };

  return (
    <Section id="gallery">
      <SectionHeading kicker="Колода" title="Карты игры" />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORY_FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-display text-xs tracking-widest uppercase px-4 py-2 rounded-md border transition-smooth ${
                active
                  ? 'border-gold bg-gradient-burgundy text-gold shadow-glow'
                  : 'border-gold/25 bg-ink-deep/60 text-parchment-dark hover:border-gold/60'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-ink-deep/90 border border-gold/40 text-gold items-center justify-center hover:bg-burgundy/60 transition-smooth"
          aria-label="Назад"
        >
          ←
        </button>
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto pb-6 px-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin]"
        >
          {cards.map((card) => (
            <div key={card.id} className="snap-start shrink-0">
              <GameCard card={card} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-ink-deep/90 border border-gold/40 text-gold items-center justify-center hover:bg-burgundy/60 transition-smooth"
          aria-label="Вперёд"
        >
          →
        </button>
      </div>
    </Section>
  );
}

function Rules() {
  return (
    <Section id="rules">
      <SectionHeading kicker="Свод" title="Правила игры" />
      <InteractiveRules />
    </Section>
  );
}

function Team() {
  return (
    <Section id="team">
      <SectionHeading kicker="Летописцы" title="Команда" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {TEAM.map((m, i) => (
          <div
            key={m.id}
            className="group relative rounded-2xl border border-gold/20 bg-ink-deep/70 p-6 text-center hover:border-gold/60 hover:shadow-glow transition-smooth"
          >
            <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center text-4xl font-display text-gold mb-4 bg-gradient-burgundy border-2 border-gold/40">
              {m.name.charAt(0)}
            </div>
            <div className="font-display text-gold/60 text-xs tracking-[0.3em] mb-2">
              ✦ {String(i + 1).padStart(2, '0')} ✦
            </div>
            <h3 className="font-display text-gold text-lg leading-tight">{m.name}</h3>
            <p className="text-parchment-dark/80 text-xs mt-2 italic">{m.role}</p>
            <p className="text-parchment-dark/70 text-sm mt-3 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contacts() {
  return (
    <Section id="contacts">
      <SectionHeading kicker="Связь" title="Контакты" />
      <div className="max-w-2xl mx-auto rounded-2xl border border-gold/30 bg-ink-deep/70 p-8 md:p-12 text-center shadow-card">
        <p className="font-script text-3xl text-gold mb-4">«Пишите нам, как писали летописцы»</p>
        <p className="text-parchment-dark/85 leading-relaxed">
          Хотите поддержать проект, заказать копию игры или предложить сотрудничество? Свяжитесь с нашей командой.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
          <div className="rounded-lg border border-gold/20 bg-burgundy/10 p-4">
            <div className="font-display text-gold/70 text-xs tracking-widest uppercase mb-1">Электронная почта</div>
            <a href="mailto:vehi.vremeni@example.ru" className="text-parchment hover:text-gold transition-smooth">
              vehi.vremeni@example.ru
            </a>
          </div>
          <div className="rounded-lg border border-gold/20 bg-burgundy/10 p-4">
            <div className="font-display text-gold/70 text-xs tracking-widest uppercase mb-1">Telegram</div>
            <a href="#" className="text-parchment hover:text-gold transition-smooth">@vehi_vremeni</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink-deep/80 py-8 text-center">
      <div className="text-gold text-xl mb-2">✦</div>
      <p className="text-parchment-dark/70 text-sm font-display tracking-widest uppercase">
        Вехи Времени · {new Date().getFullYear()}
      </p>
      <p className="font-script text-gold mt-2">«Слово о полку игроцем»</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Rules />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}
