import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '@/components/BlogArticle';

export const metadata: Metadata = {
  title: 'Custom Song Revision Tips — How to Get Your Song Exactly Right | SongGift',
  description: "Not 100% happy with the first draft? These revision tips help you communicate feedback effectively so your final song is absolutely perfect.",
  keywords: 'custom song revision tips, song feedback, custom song changes, song revision guide, how to revise custom song',
  openGraph: { title: 'Custom Song Revision Tips — How to Get Your Song Exactly Right', description: 'Communicate feedback effectively for a perfect final song.', url: 'https://www.songgift.app/blog/custom-song-revision-tips', type: 'article' },
};

export default function CustomSongRevisionTips() {
  return (
    <BlogArticle slug="custom-song-revision-tips" title="Custom Song Revision Tips — How to Get Your Song Exactly Right" description="Not 100% happy with the first draft? These revision tips help you communicate feedback effectively so your final song is absolutely perfect." publishDate="2027-03-07" readTime="8 min read" tags={['Custom Songs', 'Tips & Guides']}
      keyTakeaways={[
        { text: 'Specific feedback leads to better revisions — "the chorus feels too fast" beats "I don\'t like it."' },
        { text: 'Reference specific timestamps when requesting changes for clarity.' },
        { text: 'Focus on the emotion you want rather than technical music terms you may not know.' },
        { text: 'A great first draft + clear feedback = a perfect final song.' },
      ]}
      faqs={[
        { question: 'How do I give good feedback on a custom song?', answer: 'Be specific. Reference timestamps ("at 1:30, the tempo feels fast"), describe the emotion you want ("I want the chorus to feel more bittersweet"), and mention what you love too.' },
        { question: 'What if I like the song but want small changes?', answer: 'That\'s normal! Most revisions are small tweaks: a lyric adjustment, a tempo change, or a mood shift in one section. Communicate exactly what and where.' },
        { question: 'How many revisions can I request?', answer: 'We want you to love the final product. Communicate your feedback clearly and we\'ll work together to get it perfect.' },
        { question: 'What if I don\'t know music terminology?', answer: 'No worries! Describe in feelings: "I want it to feel slower here," "this part should be more emotional," "can the ending feel more hopeful?" We speak emotion fluently.' },
      ]}
      relatedLinks={[
        { href: '/blog/how-to-write-a-song-brief', label: 'How to Write a Song Brief' },
        { href: '/blog/how-to-choose-the-right-song-genre', label: 'Choosing the Right Genre' },
        { href: '/blog/custom-song-genres-explained', label: 'Genres Explained' },
        { href: '/create', label: 'Create Your Song — $79' },
      ]}
    >
      <p>You ordered a <Link href="/create">custom song</Link>, received the first draft, and... it&apos;s 90% there. The lyrics are great, the melody is beautiful, but something needs adjusting. How do you communicate feedback effectively to get the final 10% right? Here&apos;s your guide.</p>

      <h2>How to Give Great Feedback</h2>
      <h3>Be Specific, Not Vague</h3>
      <ul>
        <li><strong>Vague:</strong> &quot;I don&apos;t love it.&quot;</li>
        <li><strong>Specific:</strong> &quot;The second verse feels too upbeat for the lyrics about missing her. Can it feel more reflective?&quot;</li>
      </ul>

      <h3>Use Timestamps</h3>
      <p>Reference exact moments: &quot;At 0:45, the energy picks up too quickly.&quot; &quot;The section from 1:15–1:45 is perfect — don&apos;t change that.&quot;</p>

      <h3>Describe Emotions, Not Techniques</h3>
      <p>You don&apos;t need to know music terms. &quot;I want the ending to feel more hopeful&quot; gives us everything we need. &quot;Make it more pianissimo with a ritardando&quot; is unnecessary.</p>

      <h3>Tell Us What You Love</h3>
      <p>Positive feedback is just as important. It tells us what to protect while making changes. &quot;I love the chorus — don&apos;t change that. The verses need to match that energy.&quot;</p>

      <h3>Share the Recipient&apos;s Perspective</h3>
      <p>&quot;My wife would prefer...&quot; or &quot;Knowing my dad, he&apos;d connect more with...&quot; helps us understand who we&apos;re creating for.</p>

      <h2>Common Revision Requests</h2>
      <ul>
        <li><strong>Lyric tweaks</strong> — changing a name spelling, adjusting a specific reference, rephrasing a line.</li>
        <li><strong>Tempo adjustments</strong> — faster, slower, or varied pacing in specific sections.</li>
        <li><strong>Mood shifts</strong> — making a section more emotional, more upbeat, or more bittersweet.</li>
        <li><strong>Vocal tone</strong> — softer, more powerful, more intimate, more energetic.</li>
      </ul>

      <blockquote><p>&quot;The first draft was great but the ending felt abrupt. I said: &apos;Can the last 20 seconds feel like a warm hug fading out?&apos; They knew exactly what I meant. The final version was perfect.&quot;</p></blockquote>

      <h2>Get It Perfect</h2>
      <p><Link href="/create">Order your custom song for $79</Link> and use these tips to ensure the final product is exactly what you envisioned.</p>
    </BlogArticle>
  );
}
