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
  { label: string; num: string; color: string; grad: string; desc: string }
> = {
  events: {
    label: 'On This Week',
    num: '01',
    color: 'var(--plum)',
    grad: 'linear-gradient(105deg, #ff6aa8, #c2185b)',
    desc: 'Pinned to actual dates — this exact week only.',
  },
  water: {
    label: 'Get Wet',
    num: '02',
    color: 'var(--aqua)',
    grad: 'linear-gradient(105deg, #33d0d6, #0f7c8c)',
    desc: 'The heat stops mattering the moment you’re in it.',
  },
  indoor: {
    label: 'Indoor & Air-Conditioned',
    num: '03',
    color: 'var(--denim)',
    grad: 'linear-gradient(105deg, #6d8bff, #3e5f8a)',
    desc: 'Climate-controlled fun for the 12–5pm furnace hours.',
  },
  outdoor: {
    label: 'Mornings & Evenings',
    num: '04',
    color: 'var(--gold-deep)',
    grad: 'linear-gradient(105deg, #ffcf3a, #e5901f)',
    desc: 'Fine outside — before 10am or after 5pm.',
  },
  hikes: {
    label: 'Shady Hikes',
    num: '05',
    color: 'var(--pine)',
    grad: 'linear-gradient(105deg, #8ad46a, #3f7a43)',
    desc: 'Full canopy, riverside, ten degrees cooler than town.',
  },
  food: {
    label: 'Eat & Drink',
    num: '06',
    color: 'var(--terra)',
    grad: 'linear-gradient(105deg, #ff8f3a, #e6186c)',
    desc: 'Feeding a hungry crew is its own activity.',
  },
  daytrips: {
    label: 'Day Trips & Overnights',
    num: '07',
    color: 'var(--clay)',
    grad: 'linear-gradient(105deg, #ffb35a, #e5652f)',
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

/**
 * Per-pick ordering weight, higher first. Applied within each category to lead
 * with the strongest bets for a big, mixed-age crew (grade-schoolers through
 * teens) that leans toward water, active/novelty fun, cars, and shared food.
 * Never displayed. Unknown slugs sort last.
 */
export const APPEAL: Record<string, number> = {
  // events
  'boardwalk-blast-fireworks': 95,
  'wake-county-speedway': 88,
  'nc-courage': 85,
  'wicked-moore-square': 82,
  'dix-park-car-showcase': 80,
  'deadlock-pro-wrestling': 78,
  'wilson-warbirds': 72,
  'zebulon-devil-dogz': 68,
  'comedyworx': 65,
  'raleigh-astronomy-club': 62,
  'rhythm-and-reels': 60,
  'carolina-theatre-retro-days': 58,
  'first-flight-archery': 56,
  'usa-baseball-14u': 55,
  'cary-theater-family-series': 52,
  'koka-booth-sidecar': 50,
  'raleigh-iron-works-market': 48,
  'wake-county-libraries': 44,
  'dpac-shows': 42,
  'saturday-farmers-markets': 40,
  // water
  'fantasy-lake-adventure-park': 95,
  'wet-n-wild-emerald-pointe': 92,
  'buffaloe-road-aquatic-center': 85,
  'haw-river-tubing': 78,
  'crosswinds-boating-center': 75,
  'seaforth-beach': 72,
  'jordan-lake-ebenezer': 70,
  'holding-park-aquatic-center': 68,
  'apex-splashlantis': 66,
  'frog-hollow-outdoors': 64,
  'neighborhood-pool': 60,
  'bond-park-boathouse': 58,
  'robertson-millpond': 55,
  'jack-smith-splash-pad': 50,
  'ymca-trial-pass': 45,
  // indoor
  'andretti-karting-durham': 96,
  'dave-and-busters-cary': 95,
  'hooky-entertainment': 90,
  'rush-hour-karting': 93,
  'defy-raleigh': 92,
  'apex-racing-lab': 88,
  'frankies-fun-park': 86,
  'triangle-rock-club': 82,
  'wreck-it-rage-room': 80,
  'xcape-reality': 78,
  'polar-ice-cary': 76,
  'museum-of-life-and-science': 75,
  'partee-shack': 75,
  'moonwalk-mini-golf': 74,
  'bull-city-escape': 73,
  'boxcar-bar-arcade': 72,
  'buffaloe-lanes-cary': 71,
  'triangle-pinball-collective': 70,
  'marbles-kids-museum': 69,
  'united-skates-of-america': 68,
  'cipher-escape': 67,
  'orange-county-sportsplex': 66,
  'wells-fargo-imax': 65,
  'nc-museum-natural-sciences': 64,
  'videri-chocolate-factory': 63,
  'epic-axe': 62,
  'morehead-planetarium': 60,
  'cmx-cinebistro': 55,
  'streets-at-southpoint': 52,
  'museum-of-durham-history': 50,
  'ncma-museum-park': 42,
  'nasher-museum': 40,
  'shopspace-blacksmithing': 38,

  'candle-pour-bars': 34,
  'pins-mechanical': 32,
  'urban-air-morrisville': 30,
  'meeples-brew': 28,
  'altitude-trampoline-park': 26,
  'game-on-escapes': 24,
  'flour-power-cooking': 22,
  'color-me-mine': 20,
  'x-golf-cary': 18,
  'drive-shack-puttery': 16,
  'whole-brain-escape': 14,
  'rock-solid-warrior': 12,
  // outdoor
  'gipson-play-plaza': 96,
  'topgolf-durham': 95,
  'xtreme-park-adventures': 88,
  'go-ape-blue-jay-point': 85,
  'carolina-tiger-rescue': 82,
  'duke-lemur-center': 78,
  'adventure-landing-putt-putt': 76,
  'wheels-fun-park': 74,
  'pullen-park': 72,
  'blue-diamond-gem-panning': 68,
  'dix-park-trolls': 70,
  'rdu-observation-park': 66,
  'fenton': 64,
  'downtown-cary-park': 62,
  'downtown-apex': 54,
  'buckwheat-farm': 52,
  'vollmer-farm': 50,
  'american-tobacco-campus': 48,
  'historic-oak-view': 46,
  'nc-zoo': 44,
  'sarah-p-duke-gardens': 42,
  'jc-raulston-arboretum': 40,
  'duke-chapel': 38,
  'historic-yates-mill': 36,
  'spring-haven-farm': 34,
  'knights-play-golf': 32,
  // hikes
  'eno-fews-ford': 90,
  'eno-cole-mill': 88,
  'white-pines-preserve': 80,
  'duke-forest-new-hope-creek': 78,
  'durant-nature-preserve': 76,
  'neuse-river-greenway': 70,
  'occoneechee-mountain': 68,
  'umstead-company-mill': 66,
  'johnston-mill': 64,
  'swift-creek-bluffs': 56,
  'hemlock-bluffs': 54,
  'raven-rock': 48,
  // food
  'kanki-hibachi': 95,
  'crooked-hammock-brewery': 90,
  'five-spice-korean-bbq': 88,
  'boba-crawl': 82,
  'cary-dessert-crawl': 80,
  'sushi-iwa': 74,
  'boxyard-rtp': 72,
  'superica': 70,
  'durham-treat-crawl': 68,
  'botiwalla': 69,
  'lawrence-barbecue': 67,
  'prime-barbecue': 66,
  'sunni-skys': 64,
  'taipei-101': 60,
  'state-farmers-market-restaurant': 52,
  'players-retreat': 48,
  // daytrips
  'carolina-beach-overnight': 95,
  'nc-aquarium-fort-fisher': 78,
  'nc-transportation-museum': 72,
  'conservators-center': 70,
  'raleigh-road-drive-in': 68,
  'sylvan-heights-bird-park': 64,
  'aloha-safari-park': 62,
  'saxapahaw-day-trip': 60,
};

/** Ordering weight for a pick; unknown slugs sink to the bottom. */
export const appeal = (id: string) => APPEAL[id] ?? 0;
