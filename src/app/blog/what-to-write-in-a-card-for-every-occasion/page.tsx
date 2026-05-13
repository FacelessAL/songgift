import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'What to Write in a Card for Every Occasion — A Heartfelt Guide | SongGift',
  description: "Staring at a blank card? These templates and tips for every occasion help you find the right words — or inspire you to put them in a song instead.",
  keywords: 'what to write in a card, card message ideas, birthday card message, wedding card message, sympathy card message, greeting card tips',
  openGraph: { title: 'What to Write in a Card for Every Occasion — A Heartfelt Guide', description: 'Templates and tips for every occasion to find the right words.', url: 'https://www.songgift.app/blog/what-to-write-in-a-card-for-every-occasion', type: 'article' },
};

export default function WhatToWriteInACard() {
  return (
    <BlogArticle slug="what-to-write-in-a-card-for-every-occasion" title="What to Write in a Card for Every Occasion — A Heartfelt Guide" description="Staring at a blank card? These templates and tips for every occasion help you find the right words — or inspire you to put them in a song instead." publishDate="2026-11-15" readTime="9 min read" tags={['Tips & Guides', 'Gift Guide']}
      keyTakeaways={[
        { text: 'The key to a great card message is specificity — generic sentiment is forgettable, specific details are treasured.' },
        { text: 'Every card should include at least one specific memory, observation, or genuine compliment.' },
        { text: 'The same principles that make great card messages also make great custom song briefs.' },
        { text: 'When a card can\'t hold everything you want to say, a custom song can.' },
      ]}
      faqs={[
        { question: 'What should I write in a birthday card?', answer: 'Reference a specific quality you love about them, a favorite memory from the past year, and your genuine hope for the year ahead. Avoid generic "Happy birthday, hope it\'s great!" messages.' },
        { question: 'What do I write in a sympathy card?', answer: 'Acknowledge the specific person who passed, share a memory if you have one, and offer concrete support ("I\'m bringing dinner on Thursday" vs "Let me know if you need anything").' },
        { question: 'How long should a card message be?', answer: '3–5 sentences of genuine, specific content beats a page of generic filler. Quality over quantity, always.' },
        { question: 'Can I turn my card message into a song?', answer: 'Yes! The details you\'d write in a great card are exactly what we need for a custom song brief. A card says it. A song makes them feel it.' },
      ]}
      relatedLinks={[
        { href: '/blog/how-to-write-a-love-letter-in-2026', label: 'How to Write a Love Letter' },
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write a Song Brief' },
        { href: '/blog/creative-ways-to-say-thank-you', label: 'Creative Ways to Say Thank You' },
        { href: '/create', label: 'Create Your Song — $79' },
      ]}
    >
      <p>We&apos;ve all been there: card in hand, pen ready, mind blank. You want to say something meaningful, but &quot;Happy [occasion]! Love, [name]&quot; is all that comes out. Here&apos;s a guide to writing card messages that actually land — for every occasion.</p>

      <h2>The Universal Formula</h2>
      <ol>
        <li><strong>Specific compliment or observation</strong> — what you love about them.</li>
        <li><strong>Specific memory or reference</strong> — something only you share.</li>
        <li><strong>Genuine wish or hope</strong> — looking forward.</li>
      </ol>

      <h2>By Occasion</h2>
      <h3>Birthday</h3>
      <p>&quot;I love how you [specific quality]. Remember when we [specific memory]? That&apos;s the kind of joy you bring to everyone around you. Here&apos;s to another year of [specific hope].&quot;</p>

      <h3>Wedding</h3>
      <p>&quot;Watching you two [specific observation about their relationship] has been one of my favorite things. I&apos;ll never forget [specific moment]. May your marriage be filled with [specific wish].&quot;</p>

      <h3>Sympathy</h3>
      <p>&quot;[Name] was [specific quality]. I&apos;ll always remember [specific memory]. I&apos;m thinking of you, and I&apos;ll [specific offer of support].&quot;</p>

      <h3>Thank You</h3>
      <p>&quot;Thank you for [specific action]. It meant more than you know because [specific reason]. You have a gift for [specific quality].&quot;</p>

      <h3>Anniversary</h3>
      <p>&quot;[Number] years of [specific observation about their love]. My favorite memory of you two: [specific moment]. Here&apos;s to [specific wish for the future].&quot;</p>

      <h2>When a Card Isn&apos;t Enough</h2>
      <p>Sometimes what you want to say is too big for a card. When your feelings overflow the margins, a <Link href="/create">custom song starting at $79</Link> gives you three minutes of personalized music to say everything. <Link href="/blog/how-to-write-a-song-brief">Use the same details as a song brief</Link>.</p>

      <blockquote><p>&quot;I started writing a card for my mom&apos;s birthday and realized I had two pages of things I wanted to say. So I used those notes as a custom song brief instead. The card just says: &apos;Press play.&apos;&quot;</p></blockquote>
    </BlogArticle>
  );
}
