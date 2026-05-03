import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.songgift.app';
  const now = new Date();

  const pages = [
    // Core
    { path: '', freq: 'weekly' as const, priority: 1 },
    { path: '/create', freq: 'monthly' as const, priority: 0.9 },
    // Relationship pages
    { path: '/custom-song-for-wife', freq: 'monthly' as const, priority: 0.9 },
    { path: '/custom-song-for-girlfriend', freq: 'monthly' as const, priority: 0.9 },
    { path: '/custom-song-for-husband', freq: 'monthly' as const, priority: 0.9 },
    { path: '/custom-song-for-boyfriend', freq: 'monthly' as const, priority: 0.9 },
    { path: '/custom-song-for-mom', freq: 'monthly' as const, priority: 0.9 },
    { path: '/custom-song-for-dad', freq: 'monthly' as const, priority: 0.9 },
    { path: '/custom-song-for-son', freq: 'monthly' as const, priority: 0.8 },
    { path: '/custom-song-for-daughter', freq: 'monthly' as const, priority: 0.8 },
    { path: '/custom-song-for-grandparents', freq: 'monthly' as const, priority: 0.8 },
    { path: '/custom-song-for-sister', freq: 'monthly' as const, priority: 0.8 },
    { path: '/custom-song-for-brother', freq: 'monthly' as const, priority: 0.8 },
    { path: '/custom-song-for-best-friend', freq: 'monthly' as const, priority: 0.8 },
    { path: '/custom-song-for-teacher', freq: 'monthly' as const, priority: 0.7 },
    { path: '/custom-song-for-pet', freq: 'monthly' as const, priority: 0.7 },
    // Occasion pages
    { path: '/birthday-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/anniversary-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/wedding-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/valentines-day-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/mothers-day-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/fathers-day-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/christmas-song-gift', freq: 'monthly' as const, priority: 0.9 },
    { path: '/graduation-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/retirement-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/memorial-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/proposal-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/engagement-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/baby-shower-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/halloween-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/fourth-of-july-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/thanksgiving-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/easter-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/new-years-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/sweet-16-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/quinceanera-song-gift', freq: 'monthly' as const, priority: 0.7 },
    // Style/vibe pages
    { path: '/funny-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/love-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/friendship-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/apology-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/thank-you-song-gift', freq: 'monthly' as const, priority: 0.7 },
    { path: '/corporate-song-gift', freq: 'monthly' as const, priority: 0.7 },
    // Blog
    { path: '/blog', freq: 'weekly' as const, priority: 0.8 },
    { path: '/blog/best-personalized-gift-ideas', freq: 'monthly' as const, priority: 0.8 },
    { path: '/blog/how-custom-songs-are-made', freq: 'monthly' as const, priority: 0.8 },
    { path: '/blog/custom-song-vs-traditional-gifts', freq: 'monthly' as const, priority: 0.8 },
    { path: '/blog/occasions-for-custom-song-gift', freq: 'monthly' as const, priority: 0.8 },
    { path: '/blog/how-to-write-a-song-brief', freq: 'monthly' as const, priority: 0.8 },
    { path: '/blog/why-personalized-music-gifts', freq: 'monthly' as const, priority: 0.8 },
    // Utility pages
    { path: '/playlist', freq: 'weekly' as const, priority: 0.8 },
    { path: '/reviews', freq: 'weekly' as const, priority: 0.8 },
    { path: '/checkout', freq: 'yearly' as const, priority: 0.7 },
    { path: '/contact', freq: 'monthly' as const, priority: 0.6 },
    { path: '/faq', freq: 'monthly' as const, priority: 0.6 },

    { path: '/terms', freq: 'yearly' as const, priority: 0.3 },
    { path: '/privacy-policy', freq: 'yearly' as const, priority: 0.3 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.freq,
    priority: page.priority,
  }));
}
