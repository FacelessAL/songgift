import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'A Custom Song as a Wedding Gift — The Complete Guide | SongGift',
  description: 'Thinking of gifting the couple a custom song? This guide covers timing, how to gather details secretly, genre selection, and the perfect reveal.',
  keywords: 'custom song wedding gift, wedding gift ideas, personalized wedding song, wedding music gift, unique wedding gift',
  openGraph: { title: 'A Custom Song as a Wedding Gift — The Complete Guide', description: 'This guide covers timing, how to gather details secretly, genre selection, and the perfect reveal.', url: 'https://www.songgift.app/blog/custom-song-as-wedding-gift', type: 'article' },
};

export default function CustomSongAsWeddingGift() {
  return (
    <BlogArticle slug="custom-song-as-wedding-gift" title="A Custom Song as a Wedding Gift — The Complete Guide" description="Thinking of gifting the couple a custom song? This guide covers timing, how to gather details secretly, genre selection, and the perfect reveal." publishDate="2026-09-16" readTime="10 min read" tags={['Custom Songs', 'Occasions']}
      keyTakeaways={[
        { text: 'A custom wedding song is one of the most memorable gifts a couple can receive — far beyond registry items.' },
        { text: 'Order 2–3 weeks before the wedding for standard delivery, or use 24-hour express for last-minute orders.' },
        { text: 'Secretly gather love story details from mutual friends, family, or the couple\'s social media.' },
        { text: 'The reveal moment — during the reception, toast, or privately — determines the emotional impact.' },
      ]}
      faqs={[
        { question: 'When should I order a wedding song?', answer: '2–3 weeks before the wedding for standard delivery. This gives time for revisions. Express 24-hour delivery available for last-minute orders.' },
        { question: 'How do I gather details without the couple knowing?', answer: 'Ask mutual friends, parents, or siblings for love story details. Check social media captions and anniversary posts. The more specific details, the better the song.' },
        { question: 'Should I play it at the reception or give it privately?', answer: 'Both work! Reception reveals create a shared moment. Private gifts create an intimate one. For maximum impact, coordinate with the DJ for a reception reveal.' },
        { question: 'What genre works best for wedding songs?', answer: 'Acoustic ballads and soft pop are most popular. R&B adds warmth. Country tells great stories. Match the couple\'s music taste for the best result.' },
      ]}
      relatedLinks={[
        { href: '/wedding-song-gift', label: 'Wedding Song Gift' },
        { href: '/blog/wedding-first-dance-song-ideas', label: 'Wedding First Dance Song Ideas' },
        { href: '/blog/custom-song-for-wedding-party', label: 'Custom Song for Wedding Party' },
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write a Song Brief' },
        { href: '/create', label: 'Create Your Song — $79' },
      ]}
    >
      <p>You&apos;ve been invited to a wedding and you want to give a gift that actually matters — not just another blender or towel set that gets returned. A <Link href="/create">custom song</Link> that tells the couple&apos;s love story is the wedding gift that becomes a lifelong keepsake.</p>
      <p>This complete guide walks you through everything: timing your order, gathering details secretly, choosing the right genre, and planning the perfect reveal.</p>

      <h2>Step 1: Gather the Love Story</h2>
      <p>The best wedding songs are built on specific details. Ask mutual friends and family for: how they met, the proposal story, inside jokes, their quirks as a couple, and what makes their relationship special. Check their social media for anniversary captions and shared memories.</p>

      <h2>Step 2: Choose the Genre</h2>
      <p>Match the couple&apos;s taste. If they love country music, go country. If they&apos;re a pop couple, go pop. Acoustic works universally for weddings. <Link href="/blog/how-to-choose-the-right-song-genre">See the complete genre guide</Link>.</p>

      <h2>Step 3: Time Your Order</h2>
      <p>Order at least 2–3 weeks before the wedding. Standard delivery is 3–5 business days, plus time for revisions. Express 24-hour delivery available if you&apos;re cutting it close. <Link href="/create">Order here</Link>.</p>

      <h2>Step 4: Plan the Reveal</h2>
      <p>Coordinate with the DJ or venue for a reception reveal during toasts. Or present it privately in a card with a QR code. <Link href="/blog/how-to-surprise-someone-with-a-custom-song">See 7 creative reveal ideas</Link>.</p>

      <blockquote><p>&quot;Our friend gifted us a custom song at our wedding. It played during cocktail hour and the whole room went silent listening. People were crying before the second verse. We play it every anniversary now.&quot;</p></blockquote>

      <h2>Give the Gift They&apos;ll Keep Forever</h2>
      <p>Registry items get used and replaced. A <Link href="/create">custom wedding song starting at $79</Link> becomes a permanent part of their love story. <Link href="/wedding-song-gift">Explore wedding songs</Link>.</p>
    </BlogArticle>
  );
}
