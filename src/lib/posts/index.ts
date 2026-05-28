export type { Post } from './types';
import { stories } from './stories';
import { hooks } from './hooks';
import { engagement } from './engagement';
import { seasonalEmotional } from './seasonal-emotional';
import { relatable } from './relatable';
import { deepEmotional } from './deep-emotional';
import { scenario } from './scenario';

export const allPosts = [
  ...stories,
  ...hooks,
  ...engagement,
  ...seasonalEmotional,
  ...relatable,
  ...deepEmotional,
  ...scenario,
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
