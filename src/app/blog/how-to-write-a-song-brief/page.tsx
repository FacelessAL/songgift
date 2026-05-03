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
      publishDate="2026-05-03"
      readTime="10 min read"
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
        Your <strong>song brief</strong> is the single most important factor in how your <Link href="/">custom song</Link> turns out. Think of it as the blueprint — the more specific and emotionally honest you are, the more personal and powerful the final track becomes. In this comprehensive 2026 guide, we cover everything you need to know to write a brief that leads to an incredible, tear-jerking custom song.
      </p>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
        What Is a Song Brief?
      </h2>

      <p>
        When you <Link href="/create">order a custom song</Link>, you fill out a form that captures details about the recipient, your relationship, key memories, emotional tone, and musical preferences. This is your song brief. It gives us everything we need to write lyrics and compose a melody that feels authentically <em>yours</em>. The entire form takes about 2 minutes — but those 2 minutes determine the quality of the entire song.
      </p>

      <blockquote>
        <p>&quot;The difference between a good custom song and an unforgettable one almost always comes down to the brief.&quot;</p>
      </blockquote>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        The 5 Elements of a Great Brief
      </h2>

      <div className="not-prose space-y-4 my-10">
        {[
          { num: '1', title: 'Specific Memories', desc: 'Don\'t say "we\'ve had great times." Say "the night we got caught in the rain in Savannah and danced in the parking lot." Specific details become the lyrics that make someone cry.', color: 'bg-pink-50 border-pink-100', icon: <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg> },
          { num: '2', title: 'Emotional Truth', desc: 'Tell us how the moment FELT, not just what happened. "I felt like the luckiest person alive" or "I knew in that moment that everything had changed" gives us the emotional core of your song.', color: 'bg-blue-50 border-blue-100', icon: <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg> },
          { num: '3', title: 'Names, Places & Details', desc: 'Include the recipient\'s name (with pronunciation if unusual), places that matter, dates, nicknames, and inside jokes. These details make the song unmistakably theirs.', color: 'bg-green-50 border-green-100', icon: <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg> },
          { num: '4', title: 'Musical Direction', desc: 'Tell us your genre preference and list 1–3 artists or songs you love. Even saying "she loves Adele and Sam Smith" gives us a powerful direction for the production style.', color: 'bg-orange-50 border-orange-100', icon: <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg> },
          { num: '5', title: 'The Core Message', desc: 'What\'s the ONE thing you most want them to feel? "I want her to know she saved me" or "I want him to feel how proud I am." That single sentence guides every creative decision we make.', color: 'bg-purple-50 border-purple-100', icon: <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
        ].map((item) => (
          <div key={item.num} className={`rounded-2xl p-5 border ${item.color}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-xl bg-accent text-white text-xs font-bold flex items-center justify-center shadow-sm">{item.num}</span>
              <span className="flex-shrink-0">{item.icon}</span>
              <h3 className="font-bold text-text-dark text-sm">{item.title}</h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed ml-11">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
        Real Brief Examples (Good vs Bad)
      </h2>

      <p>
        The best way to understand what makes a great brief is to see the difference side-by-side. Here are real examples of briefs we receive — and why specificity matters so much:
      </p>

      <div className="not-prose grid sm:grid-cols-2 gap-4 my-10">
        <div className="rounded-2xl p-5 border border-red-100 bg-red-50/30">
          <h3 className="font-bold text-red-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
            Too Vague
          </h3>
          <p className="text-xs text-text-muted italic leading-relaxed">&quot;She&apos;s amazing and I love her so much. We&apos;ve been together for a while and she makes me happy.&quot;</p>
          <p className="text-[10px] text-red-400 mt-2 font-medium">Problem: No specific memories, no unique details, could describe anyone.</p>
        </div>
        <div className="rounded-2xl p-5 border border-green-100 bg-green-50/30">
          <h3 className="font-bold text-green-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Specific &amp; Emotional
          </h3>
          <p className="text-xs text-text-muted italic leading-relaxed">&quot;We met at a coffee shop in Austin — I spilled my latte and she laughed instead of being annoyed. That was 7 years ago. She still makes fun of me for it. I want her to know that her laugh is the reason I fell in love.&quot;</p>
          <p className="text-[10px] text-green-500 mt-2 font-medium">Why it works: Scene, emotion, detail, and a clear core message.</p>
        </div>
      </div>

      <h3>Another Example: Memorial Brief</h3>

      <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
        <div className="rounded-2xl p-5 border border-red-100 bg-red-50/30">
          <h3 className="font-bold text-red-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
            Too General
          </h3>
          <p className="text-xs text-text-muted italic leading-relaxed">&quot;My grandpa was the best. He loved us all and we miss him.&quot;</p>
        </div>
        <div className="rounded-2xl p-5 border border-green-100 bg-green-50/30">
          <h3 className="font-bold text-green-600 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Rich &amp; Specific
          </h3>
          <p className="text-xs text-text-muted italic leading-relaxed">&quot;Grandpa Joe always smelled like sawdust from his workshop. He taught me to build birdhouses when I was 8. His favorite saying was &#39;measure twice, cut once.&#39; He passed last March but I still hear his voice every time I pick up a hammer.&quot;</p>
        </div>
      </div>

      <p>
        See the difference? Specific briefs give us scenes, emotions, and details that become unforgettable lyrics. Vague briefs, while sweet, give us nothing unique to work with.
      </p>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
        Common Mistakes to Avoid
      </h2>

      <ul>
        <li><strong>Being too generic.</strong> &quot;She&apos;s the best wife ever&quot; is sweet but not unique. What makes <em>your</em> wife the best? That&apos;s the song. See our <Link href="/custom-song-for-wife">custom song for wife</Link> page for ideas.</li>
        <li><strong>Listing facts without feelings.</strong> &quot;We got married in 2018&quot; is a fact. &quot;When I saw her walking down the aisle, I couldn&apos;t breathe&quot; is a feeling. We need both, but feelings matter more.</li>
        <li><strong>Overthinking it.</strong> You don&apos;t need perfect prose. Raw, honest, even messy input is <em>perfect</em> input. We&apos;re the ones who turn it into polished lyrics.</li>
        <li><strong>Forgetting pronunciation.</strong> If the recipient&apos;s name is unusual, include a phonetic spelling. Nothing breaks the magic faster than a mispronounced name in a song.</li>
        <li><strong>Skipping musical direction.</strong> If you say &quot;any genre is fine,&quot; you might get something that doesn&apos;t match their taste. Even naming one or two favorite artists gives us a powerful direction.</li>
      </ul>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></svg>
        Brief Tips for Different Relationships
      </h2>

      <div className="not-prose grid sm:grid-cols-2 gap-3 my-10">
        {[
          { relationship: 'Romantic Partners', tips: 'Focus on the journey — how you met, what you\'ve built together, and what they mean to you today.', links: 'Anniversary songs & love songs thrive on emotional arc.', icon: <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg> },
          { relationship: 'Parents', tips: 'Share childhood memories, lessons they taught you, and the gratitude you feel now that you understand their sacrifices.', links: 'Songs for Mom & Dad work best with real, specific memories.', icon: <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></svg> },
          { relationship: 'Friends', tips: 'Lean into inside jokes, shared adventures, and the moments that solidified your bond. Can be hilarious, heartfelt, or both.', links: 'Best friend songs are some of our funniest and most touching.', icon: <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg> },
          { relationship: 'Memorial Tributes', tips: 'Focus on celebrating the person\'s life, their personality, quirks, impact, and the love that remains after they\'re gone.', links: 'Memorial songs honor a legacy through music.', icon: <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> },
        ].map((item) => (
          <div key={item.relationship} className="bg-bg-light rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              {item.icon}
              <h3 className="text-xs font-bold text-text-dark">{item.relationship}</h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed mb-1">{item.tips}</p>
            <p className="text-[10px] text-accent font-medium">{item.links}</p>
          </div>
        ))}
      </div>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        Quick-Start Prompts to Get You Writing
      </h2>

      <p>
        Stuck staring at a blank form? Use these prompts to jumpstart your brief:
      </p>

      <ol>
        <li>&quot;The moment I knew this person was special was when...&quot;</li>
        <li>&quot;If I could describe our relationship in one scene, it would be...&quot;</li>
        <li>&quot;The thing most people don&apos;t know about them is...&quot;</li>
        <li>&quot;When I hear their name, the first memory that comes to mind is...&quot;</li>
        <li>&quot;The one thing I&apos;ve always wanted to tell them but haven&apos;t is...&quot;</li>
      </ol>

      <h2>
        <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
        What Happens After You Submit
      </h2>

      <p>
        Once your brief is submitted, we begin the <Link href="/blog/how-custom-songs-are-made">songwriting process</Link>. Your details become lyrics, your musical preferences shape the production, and your emotional truth becomes the heartbeat of the track. Within 3–5 business days (or 24 hours with <Link href="/checkout">express delivery</Link>), your finished song lands in your inbox. Every order includes unlimited revisions — so if something isn&apos;t quite right, we&apos;ll adjust until it&apos;s perfect.
      </p>

      <p>
        Ready to write your brief? <Link href="/create">Start creating your custom song now</Link>. It takes about 2 minutes, and the result is a gift they&apos;ll treasure forever. Read about <Link href="/blog/why-personalized-music-gifts">why personalized music is the most meaningful gift</Link> or explore the <Link href="/blog/best-personalized-gift-ideas">best personalized gift ideas</Link> for more inspiration.
      </p>
    </BlogArticle>
  );
}
