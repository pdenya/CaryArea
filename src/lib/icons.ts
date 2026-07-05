import type { CategoryKey } from './site';

/**
 * Inner SVG markup for a compact set of stroked glyphs. Rendered inside a
 * shared <svg> (fill:none, stroke:currentColor) by Icon.astro, so each glyph is
 * just its shapes. Kept intentionally small and reused across many activities.
 */
export const ICONS: Record<string, string> = {
  droplet: '<path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.4 0z"/>',
  waves:
    '<path d="M2 8c1.6 0 1.6-1.6 3.2-1.6S6.8 8 8.4 8 10 6.4 11.6 6.4 13.2 8 14.8 8s1.6-1.6 3.2-1.6S19.6 8 21.2 8"/><path d="M2 13c1.6 0 1.6-1.6 3.2-1.6S6.8 13 8.4 13 10 11.4 11.6 11.4 13.2 13 14.8 13s1.6-1.6 3.2-1.6S19.6 13 21.2 13"/><path d="M2 18c1.6 0 1.6-1.6 3.2-1.6S6.8 18 8.4 18 10 16.4 11.6 16.4 13.2 18 14.8 18s1.6-1.6 3.2-1.6S19.6 18 21.2 18"/>',
  boat:
    '<path d="M3 15h18l-2.2 4.5a1 1 0 0 1-.9.5H6.1a1 1 0 0 1-.9-.5z"/><path d="M12 2 6 13h6z"/><path d="M12 5l5 8h-5"/>',
  sun:
    '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"/>',
  tree: '<path d="M12 2 7 10h3l-4 6h5v4h2v-4h5l-4-6h3z"/>',
  mountain: '<path d="M3 20l6-11 4 6 2.5-4 5.5 9z"/>',
  fork:
    '<path d="M6 2v6a2.5 2.5 0 0 0 5 0V2"/><path d="M8.5 8v14"/><path d="M17 2c-1.7 0-3 2-3 5s1.3 4 3 4v11"/>',
  icecream: '<rect x="6.5" y="2" width="11" height="15" rx="5.5"/><path d="M12 17v4.5"/>',
  cup:
    '<path d="M18 8h1a3.3 3.3 0 0 1 0 6.6h-1"/><path d="M3 8h15v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M7 2v2.5M11 2v2.5M15 2v2.5"/>',
  film:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v18M16 3v18M3 8h5M16 8h5M3 12h18M3 16h5M16 16h5"/>',
  music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  ticket:
    '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.6a2.4 2.4 0 0 0 0 4.8V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.6a2.4 2.4 0 0 0 0-4.8z"/><path d="M13 6.5v11" stroke-dasharray="1.5 2.5"/>',
  gamepad:
    '<rect x="2" y="7" width="20" height="11" rx="5.5"/><path d="M6.5 11v3M5 12.5h3"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="13.5" r="1"/>',
  car:
    '<path d="M5 11l1.6-4.2A2 2 0 0 1 8.5 5.5h7a2 2 0 0 1 1.9 1.3L19 11"/><path d="M3.5 11h17a1 1 0 0 1 1 1v4.5h-2.5M6 16.5H2.5V12a1 1 0 0 1 1-1"/><circle cx="7" cy="16.5" r="1.8"/><circle cx="17" cy="16.5" r="1.8"/>',
  flag: '<path d="M5 22V3"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
  snow:
    '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/><path d="M12 6 9.8 3.8M12 6l2.2-2.2M12 18l-2.2 2.2M12 18l2.2 2.2M6 12 3.8 9.8M6 12l-2.2 2.2M18 12l2.2-2.2M18 12l2.2 2.2"/>',
  target: '<circle cx="12" cy="12" r="9.2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  landmark:
    '<path d="M3 21h18"/><path d="M4 10 12 4l8 6"/><path d="M5 21V10M19 21V10M9.5 21V10M14.5 21V10"/>',
  paw:
    '<circle cx="6.5" cy="12" r="1.7"/><circle cx="10" cy="8.5" r="1.7"/><circle cx="14" cy="8.5" r="1.7"/><circle cx="17.5" cy="12" r="1.7"/><path d="M12 12.5c-2.4 0-4.3 1.9-4.3 4S9.3 20 12 20s4.3-1.4 4.3-3.5-1.9-4-4.3-4z"/>',
  leaf: '<path d="M4 20C4 10 12 4 20 4c0 8-6 16-16 16z"/><path d="M4 20 13 11"/>',
  sparkles:
    '<path d="M12 3l1.8 4.9L18.7 10l-4.9 1.8L12 17l-1.8-5.2L5.3 10l4.9-1.8z"/><path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  key: '<circle cx="8" cy="8" r="4.5"/><path d="M11.2 11.2 20 20M17 17l2.2-2.2M14.5 14.5l2.2-2.2"/>',
  plane: '<path d="M22 3 2 11l7 2.5L11.5 21 15 12z"/><path d="M22 3 9 13.5"/>',
};

const CATEGORY_ICON: Record<CategoryKey, string> = {
  events: 'ticket',
  water: 'droplet',
  indoor: 'snow',
  outdoor: 'sun',
  hikes: 'tree',
  food: 'fork',
  daytrips: 'car',
};

/** First matching rule wins; falls back to the category glyph. */
const RULES: [RegExp, string][] = [
  [/boba|milk-lab|cha-house|coffee/, 'cup'],
  [/dessert|\btreat|sunni|custard|goodberr/, 'icecream'],
  [/bbq|barbecue|hibachi|kanki|sushi|iwa|korean|five-spice|taipei|prime|superica|players|boxyard|state-farmers-market-rest/, 'fork'],
  [/fireworks|boardwalk-blast|blast/, 'sparkles'],
  [/car-showcase|showcase/, 'car'],
  [/kart|racing|rush-hour/, 'car'],
  [/wheels|topgolf|putt|golf|adventure-landing|moonwalk/, 'flag'],
  [/drive-in|movie|theater|theatre|imax|cinebistro|cinema|reels|wicked|wells-fargo/, 'film'],
  [/dpac|koka|sidecar|concert/, 'music'],
  [/wrestling|baseball/, 'ticket'],
  [/farmers|saturday-farmers/, 'leaf'],
  [/market|iron-works/, 'ticket'],
  [/arcade|pinball|dave-and-busters|boxcar|defy|spare-time|frankie|galaxy/, 'gamepad'],
  [/rdu|observation/, 'plane'],
  [/skat|polar-ice|sportsplex|united-skates/, 'snow'],
  [/climb|rock-club/, 'mountain'],
  [/escape|cipher|xcape/, 'key'],
  [/axe|rage|wreck-it|paintball|gel|xtreme/, 'target'],
  [/zoo|tiger|lemur/, 'paw'],
  [/gem|blue-diamond|panning/, 'mountain'],
  [/farm|buckwheat|vollmer|berry|oak-view/, 'leaf'],
  [/yates|videri|chocolate|museum|nasher|ncma|natural-sciences|marbles|history|morehead|planetarium|southpoint|streets|mall|chapel/, 'landmark'],
  [/boat|kayak|paddle|pontoon|millpond|crosswinds|frog-hollow/, 'boat'],
  [/beach|seaforth|ebenezer|jordan|haw|tube|lake|fantasy/, 'waves'],
  [/pool|splash|aquatic|ymca|wet-n-wild|holding|buffaloe-road|jack-smith|neighborhood/, 'droplet'],
  [/occoneechee|raven|mountain|bluffs/, 'mountain'],
  [/garden|arboretum|duke-gardens|jc-raulston|sarah-p/, 'leaf'],
  [/hemlock|preserve|forest|johnston|umstead|eno|neuse|swift-creek|durant|white-pines|saxapahaw/, 'tree'],
  [/park|pullen|downtown|fenton|dix|american-tobacco|go-ape/, 'tree'],
];

export function iconFor(id: string, category: CategoryKey): string {
  for (const [re, name] of RULES) if (re.test(id)) return name;
  return CATEGORY_ICON[category];
}
