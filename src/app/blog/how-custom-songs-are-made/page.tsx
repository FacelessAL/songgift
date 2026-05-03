import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'How Custom Songs Are Made — From Your Story to a Finished Track | SongGift',
  description: 'Walk through the entire custom song creation process step by step. Learn how your story becomes lyrics, a melody, a studio recording, and a finished personalized song.',
  keywords: 'how custom songs are made, custom song process, personalized song creation, how to order a custom song, custom song production, songwriting process',
  openGraph: {
    title: 'How Custom Songs Are Made — From Your Story to a Finished Track',
    description: 'Walk through the entire custom song creation process — from filling out a brief to receiving your finished track.',
    url: 'https://www.songgift.app/blog/how-custom-songs-are-made',
    type: 'article',
  },
};

export default function HowCustomSongsAreMade() {
  return (
    <BlogArticle
      slug="how-custom-songs-are-made"
      title="How Custom Songs Are Made — From Your Story to a Finished Track"
      description="Ever wondered what goes into creating a personalized song? Walk through the entire process — from filling out a brief to receiving your finished track."
      publishDate="2025-05-03"
      readTime="7 min read"
      tags={['Behind the Scenes', 'Custom Songs']}
      keyTakeaways={[
        { text: 'The process starts with your story — a 2-minute form captures everything we need.' },
        { text: 'Every song is 100% original: custom lyrics, melody, and production.' },
        { text: 'You get unlimited revisions until the song is perfect.' },
        { text: 'Standard delivery is 3–5 business days; express is 24 hours.' },
      ]}
      faqs={[
        { question: 'Do I need musical knowledge to order a custom song?', answer: 'Not at all. You just share your story, pick a genre and mood, and we handle everything from songwriting to final production. No musical background required.' },
        { question: 'Can I request changes after I receive the song?', answer: 'Yes — every order includes unlimited revisions. We\'ll adjust lyrics, melody, tempo, instrumentation, or vocal style until you\'re completely satisfied.' },
        { question: 'What genres are available?', answer: 'We create in pop, acoustic, country, R&B, worship, rap, cinematic, and more. You can also list specific artists or songs as inspiration.' },
        { question: 'How do I know you won\'t use my story elsewhere?', answer: 'Your song is 100% yours. We never reuse your lyrics, story, or personal details. We only use anonymized excerpts for portfolio purposes, and never without consent.' },
      ]}
      relatedLinks={[
        { href: '/create', label: 'Start Creating Your Song' },
        { href: '/playlist', label: 'Listen to Sample Songs' },
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write the Perfect Brief' },
        { href: '/faq', label: 'Full FAQ' },
        { href: '/blog/best-personalized-gift-ideas', label: 'Best Personalized Gift Ideas' },
      ]}
    >
      <p>
        Ordering a <strong>custom song</strong> might feel mysterious if you&apos;ve never done it before. What happens after you click &quot;order&quot;? How does a form full of memories become a fully produced, studio-quality track? In this guide, we pull back the curtain on the entire <strong>custom song creation process</strong> at <Link href="/">SongGift</Link>.
      </p>

      <h2>Step 1: Share Your Story</h2>

      <p>
        Everything begins with your story. When you <Link href="/create">start your order</Link>, you&apos;ll fill out a simple form that takes about 2 minutes. We ask questions like:
      </p>

      <ul>
        <li>Who is this song for, and what&apos;s your <Link href="/custom-song-for-wife">relationship</Link>?</li>
        <li>What <Link href="/love-song-gift">emotions</Link> should the song capture?</li>
        <li>Are there specific memories, inside jokes, or moments you want included?</li>
        <li>What genre and mood do you prefer?</li>
        <li>Any phrases, names, or words that should appear in the lyrics?</li>
      </ul>

      <p>
        This brief is the blueprint for your song. The more detail you share, the more personal the final result. Don&apos;t worry about being a poet — we take raw emotions and stories and transform them into lyrics. Check out our <Link href="/blog/how-to-write-a-song-brief">guide to writing the perfect song brief</Link> for tips.
      </p>

      <h2>Step 2: Songwriting — Turning Memories Into Lyrics</h2>

      <p>
        This is where the magic happens. Using the details you shared, we begin crafting <strong>original lyrics</strong> that tell your unique story. Every line is written from scratch — no templates, no recycled phrases, no AI-generated filler.
      </p>

      <p>
        We focus on capturing the emotional arc of your relationship: the moments that defined it, the feelings that run deepest, and the words you&apos;ve maybe always wanted to say but couldn&apos;t find the right way to express.
      </p>

      <div className="not-prose bg-bg-light rounded-2xl p-6 my-8 border border-gray-100">
        <h3 className="font-bold text-text-dark text-sm mb-3">What Makes Our Lyrics Different</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: '100% Original', desc: 'Written from your story, never reused' },
            { label: 'Emotionally Authentic', desc: 'We capture real feelings, not clichés' },
            { label: 'Your Words, Elevated', desc: 'We turn your raw input into poetry' },
            { label: 'Name & Detail Accurate', desc: 'Pronunciations, names, and phrases respected' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
              <div>
                <span className="text-xs font-semibold text-text-dark">{item.label}</span>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>Step 3: Composition — Building the Melody and Arrangement</h2>

      <p>
        With lyrics in hand, we compose the <strong>melody, chord progressions, and arrangement</strong>. The genre you selected — whether it&apos;s pop, acoustic, <Link href="/funny-song-gift">comedy</Link>, country, R&amp;B, or cinematic — shapes every musical decision. We match the emotional vibe to the instrumentation: upbeat and joyful gets bright guitars and driving drums; heartfelt and intimate gets soft piano and ambient strings.
      </p>

      <h2>Step 4: Recording — Bringing It to Life</h2>

      <p>
        Next comes recording. Vocals are tracked with care to match the emotional tone — warm and tender for a <Link href="/memorial-song-gift">memorial tribute</Link>, energetic and celebratory for a <Link href="/birthday-song-gift">birthday anthem</Link>. Every instrument is laid down with studio-grade precision.
      </p>

      <h2>Step 5: Mixing &amp; Mastering — The Professional Polish</h2>

      <p>
        Mixing balances every element — vocals, instruments, effects — so nothing competes and everything shines. Mastering then optimizes the final track for playback on any device: phone speakers, car stereos, headphones, or party speakers. The result is a song that sounds like it belongs on a playlist next to your favorite artists.
      </p>

      <h2>Step 6: Delivery — Your Song Arrives</h2>

      <p>
        Within <strong>3–5 business days</strong> (or <strong>24 hours</strong> with <Link href="/checkout">express delivery</Link>), your finished song lands in your inbox. You receive:
      </p>

      <ul>
        <li><strong>High-quality MP3 and WAV files</strong> — play anywhere, forever</li>
        <li><strong>Standard album cover</strong> — a visual to match your song</li>
        <li><strong>Lyric sheet</strong> — every word, beautifully formatted</li>
      </ul>

      <p>
        Want hand-designed artwork? Add <strong>Custom Album Art</strong> for just +$20 at <Link href="/checkout">checkout</Link>.
      </p>

      <h2>Step 7: Revisions — Until It&apos;s Perfect</h2>

      <p>
        Not 100% in love with it? No problem. Every order includes <strong>unlimited revisions</strong>. We&apos;ll tweak lyrics, adjust the melody, change instrumentation, alter vocal style — whatever it takes until you&apos;re absolutely thrilled with the result.
      </p>

      <div className="not-prose bg-gradient-to-br from-accent/5 to-pink-50 rounded-2xl p-6 my-8 border border-accent/10">
        <h3 className="font-bold text-text-dark text-sm mb-2">The Complete Timeline</h3>
        <div className="space-y-3">
          {[
            { step: 'Order', time: '~2 minutes', desc: 'Fill out the song creation form' },
            { step: 'Creation', time: '1–4 days', desc: 'Songwriting, recording, mixing & mastering' },
            { step: 'Delivery', time: '3–5 business days', desc: 'Song, album cover, and lyric sheet delivered via email' },
            { step: 'Revisions', time: 'As needed', desc: 'Unlimited changes until you\'re happy' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="w-20 flex-shrink-0 text-xs font-bold text-accent">{item.time}</span>
              <div>
                <span className="text-xs font-semibold text-text-dark">{item.step}</span>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p>
        The entire experience is designed to be effortless for you. You bring the story; we bring the talent and turn it into something your recipient will listen to on repeat. <Link href="/create">Start creating your custom song today</Link> — it takes just 2 minutes, and the memory lasts a lifetime.
      </p>
    </BlogArticle>
  );
}
