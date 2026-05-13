import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Custom Song Genres Explained — Pop, Country, R&B, Acoustic & More | SongGift',
  description: 'Not sure which genre to pick? This comprehensive guide breaks down every available genre with examples, mood descriptions, and occasion recommendations.',
  keywords: 'custom song genres, song genre guide, pop vs acoustic, country custom song, R&B song, genre selection guide, music genre explained',
  openGraph: { title: 'Custom Song Genres Explained — Pop, Country, R&B, Acoustic & More', description: 'Comprehensive guide breaking down every genre with mood descriptions and recommendations.', url: 'https://www.songgift.app/blog/custom-song-genres-explained', type: 'article' },
};

export default function CustomSongGenresExplained() {
  return (
    <BlogArticle slug="custom-song-genres-explained" title="Custom Song Genres Explained — Pop, Country, R&B, Acoustic & More" description="Not sure which genre to pick? This comprehensive guide breaks down every available genre with examples, mood descriptions, and occasion recommendations." publishDate="2027-01-02" readTime="10 min read" tags={['Custom Songs', 'Tips & Guides']}
      keyTakeaways={[
        { text: 'Each genre carries its own emotional signature — choosing the right one amplifies the song\'s impact.' },
        { text: 'When in doubt, acoustic and pop are the safest choices for most occasions.' },
        { text: 'Match the genre to the recipient\'s taste AND the occasion\'s mood for the best result.' },
        { text: 'You can always describe the vibe you want and let us recommend the genre.' },
      ]}
      faqs={[
        { question: 'What\'s the most popular genre for custom songs?', answer: 'Acoustic and pop are the most requested. Acoustic works for heartfelt, intimate songs. Pop works for upbeat celebrations. Together they cover most occasions.' },
        { question: 'Can I mix genres?', answer: 'Yes! Many custom songs blend elements — acoustic verses with pop choruses, country storytelling with cinematic production. Describe the vibe and we\'ll craft the right blend.' },
        { question: 'What if I don\'t know genres?', answer: 'No problem! Describe the mood you want (happy, emotional, funny, epic) and mention any artists the recipient likes. We\'ll recommend the perfect genre match.' },
        { question: 'Does genre affect delivery time?', answer: 'No — all genres follow the same timeline: 3–5 days standard, 24 hours express.' },
      ]}
      relatedLinks={[
        { href: '/blog/how-to-choose-the-right-song-genre', label: 'How to Choose the Right Genre' },
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write a Song Brief' },
        { href: '/blog/how-custom-songs-are-made', label: 'How Custom Songs Are Made' },
        { href: '/create', label: 'Create Your Song — $79' },
      ]}
    >
      <p>Choosing a genre for your <Link href="/create">custom song</Link> can feel overwhelming — especially if you&apos;re not a music expert. But genre isn&apos;t about technical knowledge. It&apos;s about <strong>feeling</strong>. This guide breaks down each option so you can confidently choose the sound that fits your story.</p>

      <h2>Genre Breakdown</h2>
      <h3>Acoustic</h3>
      <p><strong>Feels like:</strong> A quiet conversation by a fireplace. Intimate, warm, stripped-back. <strong>Best for:</strong> Love songs, parent tributes, memorials, wedding dances. <strong>Think:</strong> Ed Sheeran, John Mayer acoustic sessions.</p>

      <h3>Pop</h3>
      <p><strong>Feels like:</strong> A radio hit written just for them. Modern, catchy, polished. <strong>Best for:</strong> Birthdays, graduations, celebrations, friendship songs. <strong>Think:</strong> Taylor Swift, Bruno Mars.</p>

      <h3>Country</h3>
      <p><strong>Feels like:</strong> A front-porch story set to music. Storytelling, warm, nostalgic. <strong>Best for:</strong> Dad songs, family tributes, weddings, milestone celebrations. <strong>Think:</strong> Luke Combs, Kacey Musgraves.</p>

      <h3>R&amp;B / Soul</h3>
      <p><strong>Feels like:</strong> A slow dance in the living room. Smooth, emotional, groovy. <strong>Best for:</strong> Romantic songs, anniversaries, proposals. <strong>Think:</strong> John Legend, Daniel Caesar.</p>

      <h3>Hip-Hop</h3>
      <p><strong>Feels like:</strong> A hype track with personal bars. Energetic, rhythmic, bold. <strong>Best for:</strong> Birthday celebrations, funny tributes, friend songs. <strong>Think:</strong> Drake, Chance the Rapper.</p>

      <h3>Rock</h3>
      <p><strong>Feels like:</strong> An anthem that captures their spirit. Powerful, driving, emotional. <strong>Best for:</strong> Dad gifts, milestone birthdays, retirement songs. <strong>Think:</strong> Foo Fighters, Coldplay.</p>

      <h3>Cinematic / Orchestral</h3>
      <p><strong>Feels like:</strong> A movie soundtrack about their life. Epic, sweeping, dramatic. <strong>Best for:</strong> Memorials, milestone anniversaries, legacy songs. <strong>Think:</strong> Hans Zimmer, film scores.</p>

      <blockquote><p>&quot;I had no idea what genre to pick. I just told them my dad loves Springsteen and fishing. They created a country-rock song that sounded exactly right. Sometimes you just need to describe the person and let the music follow.&quot;</p></blockquote>

      <h2>Not Sure? Just Describe the Vibe</h2>
      <p>When you <Link href="/create">order your custom song for $79</Link>, describe the mood you want and the recipient&apos;s taste. We&apos;ll match the perfect genre to your story.</p>
    </BlogArticle>
  );
}
