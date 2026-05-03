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
      publishDate="2026-05-03"
      readTime="10 min read"
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
        Ordering a <strong>custom song</strong> might feel mysterious if you&apos;ve never done it before. What happens after you click &quot;order&quot;? How does a form full of memories become a fully produced, studio-quality track? In this in-depth guide, we pull back the curtain on every stage of the <strong>custom song creation process</strong> at <Link href="/">SongGift</Link> — so you know exactly what to expect.
      </p>

      {/* Process overview */}
      <div className="not-prose grid grid-cols-4 gap-2 my-10">
        {[
          { num: '1', label: 'Brief', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> },
          { num: '2', label: 'Write', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg> },
          { num: '3', label: 'Produce', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M2 16.1A5 5 0 0115.9 6L10 16.1M15.9 6L22 16.1A5 5 0 018.1 6" /></svg> },
          { num: '4', label: 'Deliver', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg> },
        ].map((item) => (
          <div key={item.num} className="text-center p-3 bg-bg-light rounded-xl border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-2">{item.icon}</div>
            <span className="text-[10px] font-bold text-accent">Step {item.num}</span>
            <span className="block text-xs font-semibold text-text-dark">{item.label}</span>
          </div>
        ))}
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
        Step 1: Share Your Story
      </h2>

      <p>
        Everything begins with your story. When you <Link href="/create">start your order</Link>, you&apos;ll fill out a simple form that takes about 2 minutes. We ask questions designed to capture the emotional essence of your relationship and the memories that matter most.
      </p>

      <h3>What We Ask You</h3>

      <ul>
        <li><strong>The recipient:</strong> Who is this song for, and what&apos;s your <Link href="/custom-song-for-wife">relationship</Link>?</li>
        <li><strong>The emotions:</strong> What <Link href="/love-song-gift">feelings</Link> should the song capture — joy, gratitude, love, humor?</li>
        <li><strong>The memories:</strong> Are there specific moments, inside jokes, or turning points you want included?</li>
        <li><strong>The genre:</strong> What style of music do they love? Pop, acoustic, country, R&amp;B, rap, worship?</li>
        <li><strong>The details:</strong> Names, nicknames, phrases, or words that should appear in the lyrics</li>
      </ul>

      <p>
        This brief is the blueprint for your song. The more detail you share, the more personal the final result. Don&apos;t worry about being a poet — we take raw emotions and stories and transform them into lyrics. Check out our <Link href="/blog/how-to-write-a-song-brief">guide to writing the perfect song brief</Link> for tips.
      </p>

      <blockquote>
        <p>&quot;I just told them about the time we got lost in the rain and how I fell in love in that moment. They turned it into the most beautiful verse I&apos;ve ever heard.&quot;</p>
      </blockquote>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
        Step 2: Songwriting — Turning Memories Into Lyrics
      </h2>

      <p>
        This is where the magic happens. Using the details you shared, we begin crafting <strong>original lyrics</strong> that tell your unique story. Every line is written from scratch — no templates, no recycled phrases.
      </p>

      <p>
        We focus on capturing the emotional arc of your relationship: the moments that defined it, the feelings that run deepest, and the words you&apos;ve maybe always wanted to say but couldn&apos;t find the right way to express.
      </p>

      <div className="not-prose bg-gradient-to-br from-accent/5 to-pink-50 rounded-2xl p-6 my-10 border border-accent/10">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <h3 className="font-bold text-text-dark text-sm">What Makes Our Lyrics Different</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: '100% Original', desc: 'Written from your story, never reused', icon: <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { label: 'Emotionally Authentic', desc: 'Real feelings, not greeting card clichés', icon: <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg> },
            { label: 'Your Words, Elevated', desc: 'We turn your raw input into polished poetry', icon: <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
            { label: 'Detail-Perfect', desc: 'Names, pronunciations, and phrases respected', icon: <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
              <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <span className="text-xs font-bold text-text-dark">{item.label}</span>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
        Step 3: Composition — Building the Melody and Arrangement
      </h2>

      <p>
        With lyrics in hand, we compose the <strong>melody, chord progressions, and arrangement</strong>. The genre you selected — whether it&apos;s pop, acoustic, <Link href="/funny-song-gift">comedy</Link>, country, R&amp;B, or cinematic — shapes every musical decision.
      </p>

      <h3>How Genre Shapes Your Song</h3>

      <p>
        We match the emotional vibe to the instrumentation: upbeat and joyful gets bright guitars and driving drums; heartfelt and intimate gets soft piano and ambient strings. A <Link href="/wedding-song-gift">wedding song</Link> might feature romantic acoustic guitar, while a <Link href="/birthday-song-gift">birthday anthem</Link> gets upbeat production with energy.
      </p>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
        Step 4: Recording — Bringing It to Life
      </h2>

      <p>
        Next comes recording. Vocals are tracked with care to match the emotional tone — warm and tender for a <Link href="/memorial-song-gift">memorial tribute</Link>, energetic and celebratory for a birthday anthem. Every instrument is laid down with studio-grade precision, creating a track that sounds like it belongs on your favorite streaming playlist.
      </p>

      <h3>Vocal Matching</h3>

      <p>
        We select vocal approaches that match the mood of your song. A heartfelt <Link href="/custom-song-for-mom">song for Mom</Link> gets intimate, emotional delivery. A <Link href="/funny-song-gift">funny song</Link> gets playful, energetic vocals. The voice becomes the emotional vehicle for your story.
      </p>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M2 16.1A5 5 0 0115.9 6L10 16.1M15.9 6L22 16.1A5 5 0 018.1 6" /></svg>
        Step 5: Mixing &amp; Mastering — The Final Polish
      </h2>

      <p>
        Mixing balances every element — vocals, instruments, effects — so nothing competes and everything shines. Mastering then optimizes the final track for playback on any device: phone speakers, car stereos, headphones, or party speakers. The result is a song that sounds polished and complete, ready to stand alongside music from any streaming service.
      </p>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
        Step 6: Delivery — Your Song Arrives
      </h2>

      <p>
        Within <strong>3–5 business days</strong> (or <strong>24 hours</strong> with <Link href="/checkout">express delivery</Link>), your finished song lands in your inbox. Here&apos;s everything you receive:
      </p>

      <div className="not-prose grid sm:grid-cols-3 gap-3 my-10">
        {[
          { title: 'MP3 & WAV Files', desc: 'High-quality audio files that play anywhere — phone, car, speakers, headphones', icon: <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg> },
          { title: 'Album Cover', desc: 'A standard album cover to go with your song. Add custom artwork for +$20', icon: <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg> },
          { title: 'Lyric Sheet', desc: 'Every word beautifully formatted so they can read along and sing along', icon: <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
        ].map((item) => (
          <div key={item.title} className="text-center p-5 bg-bg-light rounded-xl border border-gray-100">
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="font-bold text-text-dark text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        Step 7: Revisions — Until It&apos;s Perfect
      </h2>

      <p>
        Not 100% in love with it? No problem. Every order includes <strong>unlimited revisions</strong>. We&apos;ll tweak lyrics, adjust the melody, change instrumentation, alter vocal style — whatever it takes until you&apos;re absolutely thrilled with the result. There&apos;s no limit on how many changes you can request, and there&apos;s no extra charge.
      </p>

      <h3>Common Revision Requests</h3>

      <ul>
        <li><strong>Lyric tweaks:</strong> Changing a word, adding a detail, or adjusting how something is phrased</li>
        <li><strong>Tempo changes:</strong> Making the song faster or slower to match the desired mood</li>
        <li><strong>Vocal adjustments:</strong> Changing the emotional delivery or vocal style</li>
        <li><strong>Instrumentation:</strong> Adding or removing specific instruments</li>
      </ul>

      <div className="not-prose relative bg-gradient-to-br from-footer via-gray-800 to-footer text-white rounded-2xl p-7 my-10 overflow-hidden">
        <svg className="absolute top-0 right-0 w-32 h-32 text-white/5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <h3 className="font-bold text-sm">The Complete Timeline</h3>
          </div>
          <div className="space-y-4">
            {[
              { step: 'Order', time: '~2 minutes', desc: 'Fill out the song creation form with your story and preferences', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> },
              { step: 'Creation', time: '1–4 days', desc: 'Songwriting, recording, mixing & mastering by our team', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg> },
              { step: 'Delivery', time: '3–5 business days', desc: 'Song, album cover, and lyric sheet delivered to your email', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg> },
              { step: 'Revisions', time: 'As needed', desc: 'Unlimited changes until you\'re completely satisfied', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0 text-accent-light">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{item.step}</span>
                    <span className="text-[10px] font-semibold text-accent-light bg-accent/20 px-2 py-0.5 rounded-full">{item.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        Quality Guarantees
      </h2>

      <p>
        Every custom song comes with a <strong>30-day money-back guarantee</strong>. If for any reason you&apos;re not satisfied — even after revisions — you get a full refund. We also offer <strong>unlimited revisions</strong> at no extra cost, because we&apos;re not done until you&apos;re thrilled. Learn more about the value comparison in our article on <Link href="/blog/custom-song-vs-traditional-gifts">custom songs vs traditional gifts</Link>.
      </p>

      <p>
        The entire experience is designed to be effortless for you. You bring the story; we bring the talent and turn it into something your recipient will listen to on repeat. <Link href="/create">Start creating your custom song today</Link> — it takes just 2 minutes to begin, and the memory lasts a lifetime.
      </p>
    </BlogArticle>
  );
}
