import { useState } from 'react';
import { RULE_TABS, RULES_ACTIONS, type RuleTab } from '@/data/game';

function Goal() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🌟</div>
        <div>
          <h3 className="text-gold font-display text-2xl">Цель игры</h3>
          <p className="text-parchment-dark mt-1">Накопить больше всех Победных Звёзд (ПЗ) после четырёх эпох.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: '🌾', title: '3 ресурса', sub: '= 1 Победная Звезда' },
          { icon: '🏰', title: 'Сооружение', sub: '= +1 Победная Звезда' },
          { icon: '👑', title: 'Карта Наследия', sub: '= бонусные ПЗ в финале' },
        ].map((i) => (
          <div key={i.title} className="rounded-lg border border-gold/25 bg-ink-deep/60 p-4 text-center">
            <div className="text-3xl mb-2">{i.icon}</div>
            <div className="font-display text-gold">{i.title}</div>
            <div className="text-parchment-dark/80 text-sm mt-1">{i.sub}</div>
          </div>
        ))}
      </div>
      <p className="text-parchment-dark/90 italic border-l-2 border-gold/50 pl-4">
        После финальной (4-й) эпохи все игроки подсчитывают общее число ПЗ. Тот, у кого их больше всего — побеждает и
        вписывает своё имя в историю Древней Руси.
      </p>
    </div>
  );
}

function Components() {
  const items = [
    { icon: '🃏', count: '110', label: 'Карт Ресурсов', sub: 'Люди, Сооружения, Действия' },
    { icon: '📜', count: '20',  label: 'Карт Событий', sub: 'Отдельная колода' },
    { icon: '👑', count: '12',  label: 'Карт Наследия', sub: 'Уникальные вечные бонусы' },
    { icon: '🌾', count: '∞',   label: 'Жетонов Еды', sub: 'Лимит 10 у каждого' },
    { icon: '💰', count: '∞',   label: 'Жетонов Монет', sub: 'Лимит 10 у каждого' },
    { icon: '⚔️', count: '∞',   label: 'Жетонов ВМ', sub: 'Военная мощь, лимит 10' },
    { icon: '📊', count: '4',   label: 'Раунда (Эпохи)', sub: 'Трек раундов' },
    { icon: '🎯', count: '6',   label: 'Цветов маркеров', sub: 'Для 2–7 игроков' },
  ];
  return (
    <div>
      <h3 className="text-gold font-display text-2xl mb-5">Компоненты игры</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((c) => (
          <div key={c.label} className="rounded-lg border border-gold/20 bg-ink-deep/60 p-4 flex gap-3 items-center">
            <div className="text-3xl">{c.icon}</div>
            <div>
              <div className="font-display text-gold-bright text-xl leading-none">{c.count}</div>
              <div className="text-parchment text-sm">{c.label}</div>
              <div className="text-parchment-dark/70 text-xs">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Preparation() {
  const steps = [
    { n: '1', icon: '🃏', title: 'Раздать стартовые карты', desc: 'Перемешайте колоду Ресурсов. Каждый игрок получает «Усадьбу»: 1 Крестьянин (бесплатно в Семью) + 4 случайные карты на руку.' },
    { n: '2', icon: '🌾', title: 'Раздать стартовые ресурсы', desc: 'Каждый игрок получает: 3 Еды, 3 Монеты, 1 Военную мощь.' },
    { n: '3', icon: '👑', title: 'Выложить карты Наследия', desc: 'На стол кладётся карт Наследия равное числу игроков минус 1.' },
    { n: '4', icon: '📜', title: 'Положить колоду Событий', desc: 'Перемешать и положить рядом с колодой Ресурсов.' },
    { n: '5', icon: '🎲', title: 'Определить первого игрока', desc: 'Бросьте кубик. Наибольший результат — начинает игру.' },
  ];
  return (
    <div>
      <h3 className="text-gold font-display text-2xl mb-5">Подготовка к игре</h3>
      <ol className="space-y-3">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-4 rounded-lg border border-gold/20 bg-ink-deep/50 p-4">
            <div className="font-display text-gold-bright text-2xl w-8 text-center">{s.n}</div>
            <div>
              <div className="flex items-center gap-2 font-display text-gold">{s.icon} {s.title}</div>
              <p className="text-parchment-dark/85 text-sm mt-1">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PhaseHeader({ icon, num, title }: { icon: string; num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="text-5xl">{icon}</div>
      <div>
        <div className="text-gold/60 text-xs tracking-[0.3em] font-display">{num}</div>
        <h3 className="text-gold font-display text-2xl">{title}</h3>
      </div>
    </div>
  );
}

function Phase1() {
  return (
    <div>
      <PhaseHeader icon="📜" num="ФАЗА ПЕРВАЯ" title="Событие" />
      <p className="text-parchment-dark mb-4">
        Открывается верхняя карта колоды Событий. Историческое событие касается всех игроков одновременно.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg p-4 border border-burgundy/60 bg-burgundy/15">
          <div className="font-display text-gold mb-1">⚡ Вариант А</div>
          <p className="text-parchment-dark/85 text-sm">Принять штраф события (указан на карте).</p>
        </div>
        <div className="rounded-lg p-4 border border-gold/40 bg-gold/5">
          <div className="font-display text-gold mb-1">💰 Вариант Б</div>
          <p className="text-parchment-dark/85 text-sm">Заплатить ресурсами, если карта предоставляет альтернативу.</p>
        </div>
      </div>
      <p className="mt-4 text-sm italic text-parchment-dark/80 border-l-2 border-gold/40 pl-3">
        💡 Карта Наследия Мономах позволяет полностью игнорировать одно Событие за игру.
      </p>
    </div>
  );
}

function Phase2() {
  return (
    <div>
      <PhaseHeader icon="⚔️" num="ФАЗА ВТОРАЯ" title="Развитие" />
      <p className="text-parchment-dark mb-4">В свой ход каждый игрок выбирает одно действие. Ходы идут по кругу.</p>
      <div className="space-y-2">
        {RULES_ACTIONS.map((row) => (
          <div key={row.action} className="flex gap-3 rounded-lg border border-gold/15 bg-ink-deep/50 p-3">
            <div className="text-2xl">{row.icon}</div>
            <div>
              <div className="font-display text-gold text-sm">{row.action}</div>
              <p className="text-parchment-dark/85 text-sm">{row.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Phase3() {
  const items = [
    { icon: '🍖', title: 'Содержание войск', desc: 'Каждый Дружинник «съедает» 1 Еду. Если Еды не хватает — сбросьте Дружинника или заплатите 2 Монеты.' },
    { icon: '⭐', title: 'Подсчёт ПЗ',       desc: 'Каждые 3 ресурса = 1 ПЗ. Каждое Сооружение = +1 ПЗ. Карты Наследия дают бонусы.' },
    { icon: '📝', title: 'Аукцион',          desc: 'Игроки тайно записывают ставку Монет. Победители выбирают карты Наследия по убыванию ставок.' },
    { icon: '🎁', title: 'Утешительный приз',desc: 'Кто ничего не купил на аукционе — получает 2 Монеты компенсации.' },
    { icon: '🗑️', title: 'Сброс',           desc: 'Все карты Семьи и руки (кроме Наследия) уходят в общий сброс. Начинается следующая эпоха.' },
  ];
  return (
    <div>
      <PhaseHeader icon="🏆" num="ФАЗА ТРЕТЬЯ" title="Подсчёт и Аукцион Наследия" />
      <div className="space-y-3">
        {items.map((s) => (
          <div key={s.title} className="flex gap-3 rounded-lg border border-gold/20 bg-ink-deep/50 p-4">
            <div className="text-3xl">{s.icon}</div>
            <div>
              <div className="font-display text-gold">{s.title}</div>
              <p className="text-parchment-dark/85 text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Special() {
  const rules = [
    { icon: '🔒', title: 'Лимит хранилища', desc: 'Нельзя хранить более 10 единиц каждого ресурса. Излишки сгорают в конце фазы Подсчёта.' },
    { icon: '🔄', title: 'Муллиган',        desc: 'Один раз за игру (со 2-го раунда): сбросьте всю руку и возьмите 5 новых карт.' },
    { icon: '🤝', title: 'Синергии',        desc: 'Работают только если все нужные карты находятся в Семье одновременно.' },
    { icon: '🛡️', title: 'Защита Дружинника', desc: 'Раз за раунд игрок может сбросить Дружинника, чтобы отменить направленное на него Действие.' },
  ];
  return (
    <div>
      <h3 className="text-gold font-display text-2xl mb-5">Важные правила</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {rules.map((r) => (
          <div key={r.title} className="rounded-lg p-4 border border-gold/20 bg-ink-deep/50">
            <div className="font-display text-gold mb-1">{r.icon} {r.title}</div>
            <p className="text-parchment-dark/85 text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-gold/40 bg-gold/5 p-4 text-parchment-dark/90 text-sm">
        🎯 Лимит руки — 9 карт. При взятии сверх лимита сбросьте лишние. Карты Наследия не занимают место в руке.
      </div>
    </div>
  );
}

const RENDERERS: Record<RuleTab, () => React.ReactElement> = {
  goal: Goal,
  components: Components,
  preparation: Preparation,
  phase1: Phase1,
  phase2: Phase2,
  phase3: Phase3,
  special: Special,
};

export function InteractiveRules() {
  const [active, setActive] = useState<RuleTab>('goal');
  const Render = RENDERERS[active];
  const idx = RULE_TABS.findIndex((t) => t.key === active);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {RULE_TABS.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`font-display text-xs tracking-widest px-4 py-2 rounded-md border transition-smooth flex items-center gap-2 ${
                isActive
                  ? 'border-gold bg-gradient-burgundy text-gold shadow-glow'
                  : 'border-gold/25 bg-ink-deep/60 text-parchment-dark hover:border-gold/60'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-gold/30 bg-ink-deep/70 backdrop-blur p-6 md:p-10 shadow-card min-h-[400px]">
        <Render />
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => idx > 0 && setActive(RULE_TABS[idx - 1].key)}
          disabled={idx === 0}
          className="font-display text-xs px-5 py-2 rounded-md border border-gold/30 bg-ink-deep/70 text-gold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-burgundy/30 transition-smooth"
        >
          ← Назад
        </button>
        <div className="text-gold/70 font-display text-sm hidden sm:block">
          {RULE_TABS[idx].icon} {RULE_TABS[idx].label}
        </div>
        <button
          onClick={() => idx < RULE_TABS.length - 1 && setActive(RULE_TABS[idx + 1].key)}
          disabled={idx === RULE_TABS.length - 1}
          className="font-display text-xs px-5 py-2 rounded-md border border-gold/30 bg-gradient-burgundy text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-smooth"
        >
          Вперёд →
        </button>
      </div>
    </div>
  );
}
