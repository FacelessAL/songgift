import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'How to Choose the Right Genre for Your Custom Song | SongGift',
  description: 'Pop, acoustic, R&B, country, or cinematic? This guide helps you pick the perfect genre to match the mood, occasion, and personality of your recipient.',
  keywords: 'custom song genre, choose song genre, pop vs acoustic, country custom song, R&B custom song, song genre guide, music genre for gift',
  openGraph: {
    title: 'How to Choose the Right Genre for Your Custom Song',
    description: 'This guide helps you pick the perfect genre to match the mood, occasion, and personality of your recipient.',
    url: 'https://www.songgift.app/blog/how-to-choose-the-right-song-genre',
    type: 'article',
  },
};

export default function HowToChooseGenre() {
  return (
    <BlogArticle
      slug="how-to-choose-the-right-song-genre"
      title="How to Choose the Right Genre for Your Custom Song"
      description="Pop, acoustic, R&B, country, or cinematic? This guide helps you pick the perfect genre to match the mood, occasion, and personality of your recipient."
      publishDate="2026-07-06"
      readTime="8 min read"
      tags={['Tips & Guides', 'Custom Songs']}
      keyTakeaways={[
        { text: 'Genre should match the recipient\'s personality and the occasion\'s mood — not just your personal taste.' },
        { text: 'Acoustic and pop are the most universally loved genres for custom songs.' },
        { text: 'The genre sets the emotional tone — upbeat pop for celebrations, gentle acoustic for intimate moments.' },
        { text: 'When in doubt, describe the mood you want and let the genre follow naturally.' },
      ]}
      faqs={[
        { question: 'What if I don\'t know their favorite genre?', answer: 'Describe their personality and the mood you want instead. Acoustic works for intimate, heartfelt moments. Pop works for upbeat celebrations. We can recommend the best fit based on your description.' },
        { question: 'Can I request a specific genre?', answer: 'Yes! When filling out your song brief, you can specify any genre preference. If you\'re unsure, we\'ll help match the right genre to your story and occasion.' },
        { question: 'What genre is best for a wedding song?', answer: 'Acoustic ballads and soft pop are most popular for weddings. Country works beautifully for storytelling first dance songs. R&B adds warmth and intimacy. It depends on the couple\'s style.' },
        { question: 'Can the song blend genres?', answer: 'Absolutely. Many custom songs blend elements — like acoustic verses with a pop chorus, or country storytelling with cinematic production. Let us know the vibe and we\'ll craft the right blend.' },
      ]}
      relatedLinks={[
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write a Song Brief' },
        { href: '/blog/how-custom-songs-are-made', label: 'How Custom Songs Are Made' },
        { href: '/blog/wedding-first-dance-song-ideas', label: 'Wedding First Dance Song Ideas' },
        { href: '/funny-song-gift', label: 'Funny Song Gift' },
        { href: '/love-song-gift', label: 'Love Song Gift' },
        { href: '/create', label: 'Create Your Song — $79' },
      ]}
    >
      <p>
        You&apos;ve decided to order a <Link href="/create">custom song</Link> — amazing. You know what you want to say, who it&apos;s for, and why. But then comes the question that stumps a lot of people: <strong>what genre?</strong>
      </p>
      <p>
        The genre you choose sets the entire emotional tone of the song. A love story sounds different in acoustic versus R&amp;B. A celebration hits differently in pop versus country. This guide helps you match the right genre to your occasion, your recipient, and the feeling you want to create.
      </p>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
        Genre Breakdown
      </h2>

      <div className="not-prose my-8">
        <div className="grid gap-4">
          {[
            { genre: 'Acoustic', mood: 'Intimate, warm, heartfelt', best: 'Romantic songs, parent tributes, memorials, wedding first dances', vibe: 'Like a quiet conversation by a fireplace' },
            { genre: 'Pop', mood: 'Upbeat, modern, celebratory', best: 'Birthdays, graduations, friendship songs, fun celebrations', vibe: 'Like a radio hit written just for them' },
            { genre: 'Country', mood: 'Storytelling, nostalgic, warm', best: 'Dad songs, family tributes, wedding songs, Southern charm', vibe: 'Like a front-porch story set to music' },
            { genre: 'R&B / Soul', mood: 'Smooth, emotional, groovy', best: 'Romantic songs, anniversary gifts, proposal songs', vibe: 'Like a slow dance in the living room' },
            { genre: 'Hip-Hop', mood: 'Energetic, rhythmic, bold', best: 'Birthday celebrations, funny tributes, friend songs', vibe: 'Like a hype track with personal bars' },
            { genre: 'Cinematic / Orchestral', mood: 'Epic, sweeping, dramatic', best: 'Memorials, milestone anniversaries, legacy songs', vibe: 'Like a movie soundtrack about their life' },
            { genre: 'Rock', mood: 'Powerful, driving, emotional', best: 'Dad gifts, milestone birthdays, retirement songs', vibe: 'Like an anthem that captures their spirit' },
          ].map((item) => (
            <div key={item.genre} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                </span>
                <h3 className="font-bold text-text-dark text-base m-0">{item.genre}</h3>
              </div>
              <p className="text-sm text-text-muted mb-1"><strong>Mood:</strong> {item.mood}</p>
              <p className="text-sm text-text-muted mb-1"><strong>Best for:</strong> {item.best}</p>
              <p className="text-sm text-text-muted italic">&quot;{item.vibe}&quot;</p>
            </div>
          ))}
        </div>
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        How to Decide: 3 Questions
      </h2>
      <ol>
        <li><strong>What does the recipient listen to?</strong> — If they love country music, a country custom song will feel like home. If they live on Spotify&apos;s Top 40, pop is the move.</li>
        <li><strong>What&apos;s the occasion&apos;s mood?</strong> — Celebrations lean toward upbeat (pop, hip-hop). Intimate moments lean toward gentle (acoustic, R&amp;B). Reflective occasions lean toward storytelling (country, cinematic).</li>
        <li><strong>What feeling do you want to create?</strong> — Want tears? Go acoustic or cinematic. Want smiles? Go pop. Want both? Country storytelling delivers both consistently.</li>
      </ol>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Genre by Occasion Quick Reference
      </h2>
      <ul>
        <li><strong>Wedding first dance</strong> → Acoustic, R&amp;B, or soft pop</li>
        <li><strong>Birthday celebration</strong> → Pop or hip-hop</li>
        <li><strong>Father&apos;s Day / Dad tribute</strong> → Country or rock</li>
        <li><strong>Mother&apos;s Day / Mom tribute</strong> → Acoustic or pop</li>
        <li><strong>Memorial / tribute</strong> → Cinematic or acoustic</li>
        <li><strong>Anniversary</strong> → R&amp;B, acoustic, or cinematic</li>
        <li><strong>Funny / humor song</strong> → Pop or hip-hop</li>
        <li><strong>Retirement</strong> → Country, rock, or pop</li>
        <li><strong>Graduation</strong> → Pop or cinematic</li>
      </ul>

      <blockquote>
        <p>&quot;I wasn&apos;t sure which genre to pick, so I just described my dad as a &apos;Springsteen-and-campfire kind of guy.&apos; The country-rock song they created was absolutely perfect.&quot;</p>
      </blockquote>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        Still Not Sure? That&apos;s Okay
      </h2>
      <p>
        When you <Link href="/create">order your custom song</Link>, simply describe the mood and the recipient&apos;s personality. We&apos;ll recommend the perfect genre match. And remember — with unlimited revisions, you can always adjust if the first version doesn&apos;t feel quite right. Starting at $79 with 3–5 day delivery.
      </p>
    </BlogArticle>
  );
}
