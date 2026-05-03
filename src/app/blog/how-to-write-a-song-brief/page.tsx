import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'How to Write the Perfect Custom Song Brief — Tips, Examples & Mistakes to Avoid | SongGift',
  description: 'Your brief is the blueprint for your personalized song. Learn exactly what to include, see real examples of great briefs, and discover the mistakes that lead to disappointing results.',
  keywords: 'custom song brief, how to order a custom song, personalized song tips, song brief examples, what to include in a song order, custom song writing guide',
  openGraph: {
    title: 'How to Write the Perfect Custom Song Brief — Tips, Examples & Mistakes to Avoid',
    description: 'Your brief is the blueprint for your song. Learn what to include, see real examples, and avoid common mistakes.',
    url: 'https://www.songgift.app/blog/how-to-write-a-song-brief',
    type: 'article',
  },
};

export default function HowToWriteASongBrief() {
  return (
    <BlogArticle
      slug="how-to-write-a-song-brief"
      title="How to Write the Perfect Custom Song Brief — Tips, Examples & Mistakes to Avoid"
      description="Your brief is the blueprint for your song. Learn exactly what to include, see real examples, and avoid the most common mistakes people make."
      publishDate="2025-05-03"
      readTime="7 min read"
      tags={['Tips & Guides', 'How-To']}
      keyTakeaways={[
        { text: 'Specific details create better songs — names, places, and real moments matter.' },
        { text: 'Emotions are more important than facts. Tell us how the moment FELT.' },
        { text: 'You don\'t need to be a writer. Raw, honest input is the best input.' },
        { text: 'Including musical inspiration (artists/songs you like) helps us nail the vibe.' },
      ]}
      faqs={[
        { question: 'What if I\'m not good with words?', answer: 'That\'s exactly why we exist. You don\'t need to be a writer — just share real memories, feelings, and details. We turn raw material into polished lyrics.' },
        { question: 'How long should my brief be?', answer: 'There\'s no minimum or maximum. Some of our best songs came from 3-sentence briefs, and some from 3-paragraph stories. Quality of emotion matters more than word count.' },
        { question: 'Can I change the brief after I submit?', answer: 'Yes! If you think of something after ordering, email support@songgift.app and we\'ll incorporate it before we start writing.' },
        { question: 'Should I include things that happened a long time ago?', answer: 'Absolutely. Some of the most powerful lyrics come from childhood memories, first meetings, or moments that happened decades ago. Time doesn\'t diminish emotional resonance.' },
      ]}
      relatedLinks={[
        { href: '/create', label: 'Start Your Song Brief' },
        { href: '/blog/how-custom-songs-are-made', label: 'How Custom Songs Are Made' },
        { href: '/playlist', label: 'Hear Sample Songs' },
        { href: '/faq', label: 'Full FAQ' },
        { href: '/blog/occasions-for-custom-song-gift', label: '10 Occasions for a Song Gift' },
      ]}
    >
      <p>
        Your <strong>song brief</strong> is the single most important factor in how your <Link href="/">custom song</Link> turns out. Think of it as the blueprint — the more specific and emotionally honest you are, the more personal and powerful the final track becomes. Here&apos;s everything you need to know to write a brief that leads to an incredible song.
      </p>

      <h2>What Is a Song Brief?</h2>

      <p>
        When you <Link href="/create">order a custom song</Link>, you fill out a form that captures details about the recipient, your relationship, key memories, emotional tone, and musical preferences. This is your song brief. It gives us everything we need to write lyrics and compose a melody that feels authentically <em>yours</em>.
      </p>

      <h2>The 5 Elements of a Great Brief</h2>

      <div className="not-prose space-y-4 my-8">
        {[
          { num: '1', title: 'Specific Memories', desc: 'Don\'t say "we\'ve had great times." Say "the night we got caught in the rain in Savannah and danced in the parking lot." Specific details become the lyrics that make someone cry.', color: 'bg-pink-50 border-pink-100' },
          { num: '2', title: 'Emotional Truth', desc: 'Tell us how the moment FELT, not just what happened. "I felt like the luckiest person alive" or "I knew in that moment that everything had changed" gives us the emotional core of your song.', color: 'bg-blue-50 border-blue-100' },
          { num: '3', title: 'Names, Places & Details', desc: 'Include the recipient\'s name (with pronunciation), places that matter, dates, nicknames, and inside jokes. These details make the song unmistakably theirs.', color: 'bg-green-50 border-green-100' },
          { num: '4', title: 'Musical Direction', desc: 'Tell us your genre preference and list 1–3 artists or songs you love. This helps us match the production style to your taste.', color: 'bg-orange-50 border-orange-100' },
          { num: '5', title: 'The Core Message', desc: 'What\'s the ONE thing you most want them to feel when they hear this song? "I want her to know she saved me" or "I want him to feel how proud I am." That single sentence guides every creative decision.', color: 'bg-purple-50 border-purple-100' },
        ].map((item) => (
          <div key={item.num} className={`rounded-xl p-5 border ${item.color}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">{item.num}</span>
              <h3 className="font-semibold text-text-dark text-sm">{item.title}</h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Real Brief Examples (Good vs Bad)</h2>

      <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
        <div className="rounded-xl p-5 border border-red-100 bg-red-50/30">
          <h3 className="font-semibold text-red-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            Too Vague
          </h3>
          <p className="text-xs text-text-muted italic leading-relaxed">&quot;She&apos;s amazing and I love her so much. We&apos;ve been together for a while and she makes me happy.&quot;</p>
        </div>
        <div className="rounded-xl p-5 border border-green-100 bg-green-50/30">
          <h3 className="font-semibold text-green-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
            Specific & Emotional
          </h3>
          <p className="text-xs text-text-muted italic leading-relaxed">&quot;We met at a coffee shop in Austin — I spilled my latte and she laughed instead of being annoyed. That was 7 years ago. She still makes fun of me for it. I want her to know that her laugh is the reason I fell in love.&quot;</p>
        </div>
      </div>

      <p>
        See the difference? The second brief gives us a <em>scene</em>, an <em>emotion</em>, and a <em>detail</em> that can become a lyric. The first brief, while sweet, gives us nothing to grab onto.
      </p>

      <h2>Common Mistakes to Avoid</h2>

      <ul>
        <li><strong>Being too generic.</strong> &quot;She&apos;s the best wife ever&quot; is sweet but not unique. What makes <em>your</em> wife the best? That&apos;s the song. See our <Link href="/custom-song-for-wife">custom song for wife</Link> page for ideas.</li>
        <li><strong>Listing facts without feelings.</strong> &quot;We got married in 2018&quot; is a fact. &quot;When I saw her walking down the aisle, I couldn&apos;t breathe&quot; is a feeling. We need feelings.</li>
        <li><strong>Overthinking it.</strong> You don&apos;t need perfect prose. Raw, honest, even messy input is <em>perfect</em> input. We&apos;re the ones who turn it into lyrics.</li>
        <li><strong>Forgetting pronunciation.</strong> If the recipient&apos;s name is unusual, include a phonetic spelling. Nothing breaks the magic faster than a mispronounced name.</li>
        <li><strong>Skipping musical direction.</strong> If you say &quot;any genre is fine,&quot; you might get something that doesn&apos;t match their taste. Even saying &quot;she likes Taylor Swift and Ed Sheeran&quot; gives us a powerful direction.</li>
      </ul>

      <h2>Tips for Different Relationships</h2>

      <ul>
        <li><strong>Romantic partners:</strong> Focus on the journey — how you met, what you&apos;ve built, and what they mean to you today. <Link href="/anniversary-song-gift">Anniversary songs</Link> and <Link href="/love-song-gift">love songs</Link> thrive on emotional arc.</li>
        <li><strong>Parents:</strong> Share childhood memories, lessons they taught you, and the gratitude you feel now. A <Link href="/custom-song-for-mom">song for Mom</Link> or <Link href="/custom-song-for-dad">Dad</Link> that references a real memory is devastating (in the best way).</li>
        <li><strong>Friends:</strong> Lean into inside jokes, shared adventures, and the moments that solidified your bond. <Link href="/custom-song-for-best-friend">Best friend songs</Link> can be hilarious, heartfelt, or both.</li>
        <li><strong>Memorials:</strong> Focus on celebrating the person&apos;s life, their impact, and the love that remains. <Link href="/memorial-song-gift">Memorial songs</Link> are about honoring a legacy.</li>
      </ul>

      <h2>What Happens After You Submit</h2>

      <p>
        Once your brief is submitted, we begin the <Link href="/blog/how-custom-songs-are-made">songwriting process</Link>. Your details become lyrics, your musical preferences shape the production, and your emotional truth becomes the heartbeat of the track. Within 3–5 business days, your finished song lands in your inbox.
      </p>

      <p>
        Ready to write your brief? <Link href="/create">Start creating your custom song now</Link>. It takes about 2 minutes, and the result is a gift they&apos;ll treasure forever.
      </p>
    </BlogArticle>
  );
}
