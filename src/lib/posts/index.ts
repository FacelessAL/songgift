export type { Post } from './types';
import { emotional } from './emotional';
import { emotional2 } from './emotional2';
import { wife, husband, girlfriend, boyfriend, momPosts, dad } from './relationships';
import { wedding, birthday, graduation, memorial, proposal, retirement } from './occasions';
import { valentines, mothersDay, fathersDay, christmas, otherHolidays } from './holidays';
import { funny, friendship, family, trust } from './family-misc';
import { moreWife, moreHusband, moreMom, moreBirthday, moreHolidays, moreFunny, moreTrust } from './more-content';
import { moreProposal, seasonal, moreFamily, loveSong, moreWedding, moreGraduation, moreMemorial } from './extra';
import { emotional3 } from './emotional3';
import { finalWife, finalHusband, finalGirlfriend, finalBoyfriend, finalMom, finalDad, finalValentines, finalChristmas, finalFunny, finalTrust } from './final-batch';

export const allPosts = [
  ...emotional,
  ...emotional2,
  ...wife,
  ...moreWife,
  ...husband,
  ...moreHusband,
  ...girlfriend,
  ...boyfriend,
  ...momPosts,
  ...moreMom,
  ...dad,
  ...wedding,
  ...moreWedding,
  ...birthday,
  ...moreBirthday,
  ...graduation,
  ...moreGraduation,
  ...memorial,
  ...moreMemorial,
  ...funny,
  ...moreFunny,
  ...friendship,
  ...valentines,
  ...mothersDay,
  ...fathersDay,
  ...christmas,
  ...otherHolidays,
  ...moreHolidays,
  ...proposal,
  ...moreProposal,
  ...family,
  ...moreFamily,
  ...retirement,
  ...trust,
  ...moreTrust,
  ...seasonal,
  ...loveSong,
  ...emotional3,
  ...finalWife,
  ...finalHusband,
  ...finalGirlfriend,
  ...finalBoyfriend,
  ...finalMom,
  ...finalDad,
  ...finalValentines,
  ...finalChristmas,
  ...finalFunny,
  ...finalTrust,
];

/**
 * Pick n unique random posts, diversified across categories (max 2 per category).
 * Uses a date-based seed so results are deterministic per day.
 */
export function pickDailyPosts(count: number, seed?: number): typeof allPosts {
  const shuffled = [...allPosts];
  const s = seed ?? new Date().setHours(0, 0, 0, 0);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.abs(((s * (i + 1) * 9301 + 49297) % 233280)) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const picked: typeof allPosts = [];
  const categoryCount: Record<string, number> = {};

  for (const post of shuffled) {
    if (picked.length >= count) break;
    const cc = categoryCount[post.category] || 0;
    if (cc >= 2) continue;
    picked.push(post);
    categoryCount[post.category] = cc + 1;
  }

  return picked;
}
