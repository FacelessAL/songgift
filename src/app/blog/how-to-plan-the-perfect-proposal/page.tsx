import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'How to Plan the Perfect Proposal — A Step-by-Step Guide | SongGift',
  description: 'From choosing the ring to planning the moment, this comprehensive proposal planning guide covers everything — including how to add a custom song.',
  keywords: 'how to plan proposal, proposal planning guide, perfect proposal ideas, custom song proposal, proposal tips, engagement planning',
  openGraph: { title: 'How to Plan the Perfect Proposal — A Step-by-Step Guide', description: 'Comprehensive proposal planning including how to add a custom song.', url: 'https://www.songgift.app/blog/how-to-plan-the-perfect-proposal', type: 'article' },
};

export default function HowToPlanThePerfectProposal() {
  return (
    <BlogArticle slug="how-to-plan-the-perfect-proposal" title="How to Plan the Perfect Proposal — A Step-by-Step Guide" description="From choosing the ring to planning the moment, this comprehensive proposal planning guide covers everything — including how to add a custom song." publishDate="2027-04-08" readTime="11 min read" tags={['Tips & Guides', 'Occasions']}
      keyTakeaways={[
        { text: 'A great proposal is about the moment, not the spectacle — personalization beats grandiosity.' },
        { text: 'A custom song playing during the proposal creates the most emotional, shareable moment possible.' },
        { text: 'Plan 4–6 weeks out to allow time for the ring, song, and logistics.' },
        { text: 'Record everything — you\'ll want to relive this moment forever.' },
      ]}
      faqs={[
        { question: 'How far in advance should I plan?', answer: '4–6 weeks minimum. This gives time for ring shopping, ordering a custom song, scouting the location, and coordinating any helpers (photographer, friends for a surprise).' },
        { question: 'Should I use a custom song during the proposal?', answer: 'It creates the most powerful proposal moment: your love story in music, playing as you get down on one knee. Order 3+ weeks before to allow for revisions.' },
        { question: 'Public or private proposal?', answer: 'Know your partner. Some love the spotlight; others prefer intimacy. When in doubt, go private — the moment is about you two, not an audience.' },
        { question: 'How do I keep it a secret?', answer: 'Use a separate email for ring/song correspondence. Enlist one trusted friend for logistics. Never discuss details near their phone. Pay with a card they don\'t monitor.' },
      ]}
      relatedLinks={[
        { href: '/blog/proposal-ideas-that-include-music', label: 'Proposal Ideas With Music' },
        { href: '/blog/engagement-party-gift-ideas', label: 'Engagement Party Gift Ideas' },
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write a Song Brief' },
        { href: '/create', label: 'Create Your Song — $79' },
      ]}
    >
      <p>You know you want to spend your life with this person. Now you need to plan a moment worthy of that decision. No pressure. Here&apos;s a step-by-step guide to planning a proposal that&apos;s as thoughtful and intentional as your relationship deserves.</p>

      <h2>The Proposal Timeline</h2>
      <h3>6 Weeks Out</h3>
      <p>Start ring shopping (if applicable). Begin <Link href="/create">custom song brief</Link> notes — jot down your love story highlights, inside jokes, and the memories you want immortalized.</p>

      <h3>4 Weeks Out</h3>
      <p>Order the <Link href="/create">custom song</Link> ($79). Scout 2–3 potential locations. Begin the cover story for why you&apos;ll be at that place on that day.</p>

      <h3>2 Weeks Out</h3>
      <p>Receive and review the song. Request revisions if needed. Confirm the location. Arrange a photographer if desired. Brief your helper(s).</p>

      <h3>1 Week Out</h3>
      <p>Finalize all logistics. Test the speaker/audio setup at the location. Write down what you want to say (even bullet points help when nerves hit).</p>

      <h3>Day Of</h3>
      <p>Breathe. Arrive early. Set up the audio. When the moment is right: play the song, say the words, ask the question. Record everything.</p>

      <h2>Adding Music to the Proposal</h2>
      <p>Play the custom song as you walk to the spot, during your speech, or immediately after the &quot;yes.&quot; The music elevates the emotion from memorable to <strong>legendary</strong>. <Link href="/blog/proposal-ideas-that-include-music">See proposal music ideas</Link>.</p>

      <blockquote><p>&quot;I played the custom song on a Bluetooth speaker hidden behind a bench at our favorite park. When she heard her name in the lyrics, she knew. By the time I got down on one knee, she was already crying. The video has been watched by our entire family about a thousand times.&quot;</p></blockquote>

      <h2>Make It Perfect</h2>
      <p>A <Link href="/create">custom song starting at $79</Link> turns your proposal into the story you&apos;ll tell forever. <Link href="/blog/how-to-write-a-song-brief">Write the brief</Link> and plan the moment that changes everything.</p>
    </BlogArticle>
  );
}
