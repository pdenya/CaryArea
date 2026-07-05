/** Prefix an absolute path with the configured base (e.g. /CaryArea on GitHub Pages). */
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const SITE = {
  title: 'The Cary Area Field Guide',
  tagline: 'Heat Wave Edition · July 7–11, 2026',
};

export type CategoryKey =
  | 'events'
  | 'water'
  | 'indoor'
  | 'outdoor'
  | 'hikes'
  | 'food'
  | 'daytrips';

export const CATEGORY_ORDER: CategoryKey[] = [
  'events',
  'water',
  'indoor',
  'outdoor',
  'hikes',
  'food',
  'daytrips',
];

export const CATEGORIES: Record<
  CategoryKey,
  { label: string; num: string; color: string; desc: string }
> = {
  events: {
    label: 'On This Week',
    num: '01',
    color: 'var(--plum)',
    desc: 'Pinned to actual dates — this exact week only.',
  },
  water: {
    label: 'Get Wet',
    num: '02',
    color: 'var(--aqua)',
    desc: 'The heat stops mattering the moment you’re in it.',
  },
  indoor: {
    label: 'Indoor & Air-Conditioned',
    num: '03',
    color: 'var(--denim)',
    desc: 'Climate-controlled fun for the 12–5pm furnace hours.',
  },
  outdoor: {
    label: 'Mornings & Evenings',
    num: '04',
    color: 'var(--gold-deep)',
    desc: 'Fine outside — before 10am or after 5pm.',
  },
  hikes: {
    label: 'Shady Hikes',
    num: '05',
    color: 'var(--pine)',
    desc: 'Full canopy, riverside, ten degrees cooler than town.',
  },
  food: {
    label: 'Eat & Drink',
    num: '06',
    color: 'var(--terra)',
    desc: 'Feeding a hungry crew is its own activity.',
  },
  daytrips: {
    label: 'Day Trips & Overnights',
    num: '07',
    color: 'var(--clay)',
    desc: 'Worth the drive — including one night at the beach.',
  },
};

export const HEAT: Record<string, { label: string; color: string }> = {
  ac: { label: 'A/C', color: 'var(--denim)' },
  water: { label: 'Gets you wet', color: 'var(--aqua)' },
  shade: { label: 'Full shade', color: 'var(--pine)' },
  timing: { label: 'AM / PM only', color: 'var(--gold-deep)' },
};

/** Sort events chronologically by the first "Jul N" found in the date string; undated last. */
export function eventDay(date?: string): number {
  const m = date?.match(/Jul\s+(\d+)/);
  return m ? parseInt(m[1], 10) : 99;
}
