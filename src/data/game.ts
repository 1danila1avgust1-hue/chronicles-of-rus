import krestyaninImg from '@/assets/cards/krestyanin.jpg';
import druzhinnikImg from '@/assets/cards/druzhinnik.jpg';
import kupetsImg from '@/assets/cards/kupets.jpg';
import horomyImg from '@/assets/cards/horomy.jpg';
import krepostImg from '@/assets/cards/krepost.jpg';
import nabegImg from '@/assets/cards/nabeg.jpg';
import urozhayImg from '@/assets/cards/urozhay.jpg';
import vosstanieImg from '@/assets/cards/vosstanie.jpg';
import kreshenieImg from '@/assets/cards/kreshenie.jpg';
import pechenegiImg from '@/assets/cards/pechenegi.jpg';
import ryurikImg from '@/assets/cards/ryurik.jpg';
import monomakhImg from '@/assets/cards/monomakh.jpg';

export type CardCategory = 'Люди' | 'Сооружения' | 'Действия' | 'События' | 'Наследие';

export interface GameCardData {
  id: number;
  name: string;
  type: CardCategory;
  desc: string;
  cost: string;
  bonus: string;
  image: string;
}

export const TEAM = [
  { id: 1, name: 'Головина Ксения', role: 'Лидер команды, гейм-дизайнер', desc: 'Концепция игры, опросы, краудфандинг, связь с куратором.' },
  { id: 2, name: 'Давыденко Климентий', role: 'Аналитик, со-гейм-дизайнер', desc: 'Совместная разработка концепции, расчёты рентабельности.' },
  { id: 3, name: 'Седова София', role: 'Продюсер вёрстки, редактор правил', desc: 'Правила игры, физическая версия карт, расчёты рентабельности.' },
  { id: 4, name: 'Петренко Данила', role: 'Арт-директор, веб-разработчик', desc: 'Дизайн карт, разработка сайта игры.' },
];

export const CARDS: GameCardData[] = [
  { id: 1,  name: 'Крестьянин',         type: 'Люди',       desc: 'Бородатый мужчина в льняной рубахе с серпом. На заднем плане — изба и поле со снопами. Приносит 2 Еды каждый раунд — основа любого поселения.', cost: '0',       bonus: '+2 🌾',       image: krestyaninImg },
  { id: 2,  name: 'Дружинник',          type: 'Люди',       desc: 'Воин в кольчуге и шлеме, с круглым щитом, мечом и копьём. За ним — крепостная стена. Даёт 1 Военную мощь и защищает от направленных Действий.', cost: '1 🌾',    bonus: '+1 ⚔️',       image: druzhinnikImg },
  { id: 3,  name: 'Купец',              type: 'Люди',       desc: 'Богато одетый мужчина в кафтане и меховой шапке. На поясе кошель, за спиной — ладья на реке. Приносит 2 Монеты, синергия с Торжищем удваивает доход.', cost: '2 💰',  bonus: '+2 💰',       image: kupetsImg },
  { id: 4,  name: 'Хоромы',             type: 'Сооружения', desc: 'Большой деревянный дом боярина с резными наличниками и высоким крыльцом. За ним — сад. Даёт +1 ПЗ и бонус к найму Людей.',                       cost: '3 💰',     bonus: '+1 ПЗ',       image: horomyImg },
  { id: 5,  name: 'Крепость',           type: 'Сооружения', desc: 'Мощная крепостная стена из брёвен с башнями и воротами. На башнях — дозорные. Даёт +2 Военной мощи и защищает от Набегов.',                     cost: '4 💰',     bonus: '+2 ⚔️',       image: krepostImg },
  { id: 6,  name: 'Набег',              type: 'Действия',   desc: 'Конные степняки с кривыми саблями атакуют обоз — повозки опрокинуты. Выберите цель: соперник теряет 1 Военную мощь. Дружинник может отразить.', cost: '1 ⚔️',    bonus: '−1 ⚔️ врагу', image: nabegImg },
  { id: 7,  name: 'Урожай',             type: 'Действия',   desc: 'Сжатое золотое поле, крестьяне с серпами под ярким солнцем. Соберите богатый урожай — получите 3 Еды немедленно.',                              cost: '0',         bonus: '+3 🌾',       image: urozhayImg },
  { id: 8,  name: 'Восстание Древлян',  type: 'События',    desc: 'Разъярённые древляне в звериных шкурах с топорами окружают князя Игоря. Игрок с наибольшим числом Сооружений теряет 2 Еды или 1 Дружинника, остальные платят 1 Монету.', cost: '—', bonus: 'Штраф',  image: vosstanieImg },
  { id: 9,  name: 'Крещение Руси',      type: 'События',    desc: '988 г. Владимир и священники крестят народ в Днепре, на берегу — поверженный идол. Выбор: принять веру (+2 ПЗ, −1 ВМ) или заплатить 2 Монеты.', cost: '—',     bonus: 'Выбор',       image: kreshenieImg },
  { id: 10, name: 'Набег Печенегов',    type: 'События',    desc: 'Степные всадники с луками скачут к стенам Киева, горящие дома. Каждый игрок теряет 1 Военную мощь; кто не может — теряет 2 Монеты.',           cost: '—',         bonus: '−1 ⚔️ всем',  image: pechenegiImg },
  { id: 11, name: 'Рюрик',              type: 'Наследие',   desc: 'Варяжский князь в шлеме и кольчуге, с мечом в руке. За спиной — ладья. Раз за раунд можно взять 1 дополнительную карту бесплатно. +3 ПЗ в финале.', cost: 'Аукцион', bonus: '+3 ПЗ',     image: ryurikImg },
  { id: 12, name: 'Мономах',            type: 'Наследие',   desc: 'Князь в воинском облачении с крестом: в одной руке меч, в другой — книга. Игнорируй одно Событие за игру; каждое Сооружение даёт +1 ПЗ.',       cost: 'Аукцион',   bonus: '+2 ПЗ',       image: monomakhImg },
];

export const CATEGORY_FILTERS: { key: CardCategory | 'Все'; label: string }[] = [
  { key: 'Все', label: 'Все карты' },
  { key: 'Люди', label: 'Люди' },
  { key: 'Сооружения', label: 'Сооружения' },
  { key: 'Действия', label: 'Действия' },
  { key: 'События', label: 'События' },
  { key: 'Наследие', label: 'Наследие' },
];

export const CATEGORY_COLORS: Record<CardCategory, { bg: string; text: string; border: string }> = {
  'Люди':       { bg: '#2d5a3d', text: '#a8d5b5', border: '#4a7c59' },
  'Сооружения': { bg: '#5a4a1a', text: '#d5c07a', border: '#8a7030' },
  'Действия':   { bg: '#1a2d5a', text: '#7aabde', border: '#2a4a8a' },
  'События':    { bg: '#5a1a1a', text: '#de7a7a', border: '#8a2a2a' },
  'Наследие':   { bg: '#3d1a5a', text: '#c87add', border: '#6a2a8a' },
};

export const RULES_ACTIONS = [
  { action: 'Взять 2 карты',           icon: '🃏', desc: 'Возьмите 2 карты из колоды Ресурсов. Если на руке более 9 — сбросьте лишние.' },
  { action: 'Разыграть Люди',          icon: '👥', desc: 'Положите карту в Семью и немедленно получите ресурсы. Синергии активируются сразу.' },
  { action: 'Разыграть Сооружение',    icon: '🏰', desc: 'Заплатите стоимость постройки, выложите карту в Семью и получите бонус.' },
  { action: 'Разыграть Действие',      icon: '⚔️', desc: 'Выберите одного игрока-цель, примените эффект карты, затем карта уходит в сброс.' },
  { action: 'Активировать способность',icon: '✨', desc: 'Используйте активную способность карты из Семьи. Только один раз за раунд.' },
  { action: 'Сбросить карту',          icon: '🗑️', desc: 'Сбросьте 1 карту с руки — получите взамен 1 Монету.' },
  { action: 'Обмен ресурсов',          icon: '🔄', desc: '3 Еды → 2 Монеты; 3 Монеты → 2 ВМ; 3 ВМ → 2 Еды. Один обмен за ход.' },
  { action: 'Пропустить',              icon: '⏭️', desc: 'Пропустите свой ход. Когда все игроки подряд пропустили — фаза Развития завершается.' },
];

export type RuleTab = 'goal' | 'components' | 'preparation' | 'phase1' | 'phase2' | 'phase3' | 'special';

export const RULE_TABS: { key: RuleTab; label: string; icon: string }[] = [
  { key: 'goal',        label: 'Цель',        icon: '🌟' },
  { key: 'components',  label: 'Компоненты',  icon: '🎲' },
  { key: 'preparation', label: 'Подготовка',  icon: '📋' },
  { key: 'phase1',      label: 'Фаза I',      icon: '📜' },
  { key: 'phase2',      label: 'Фаза II',     icon: '⚔️' },
  { key: 'phase3',      label: 'Фаза III',    icon: '🏆' },
  { key: 'special',     label: 'Особые',      icon: '📌' },
];
