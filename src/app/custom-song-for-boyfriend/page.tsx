import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Boyfriend | Personalized Song Gift for Him | SongGift',
  description: "Surprise your boyfriend with a custom song that captures your love story. We, personalized lyrics, delivered in 24–3�5 business days. The most thoughtful gift he'll ever receive.",
  openGraph: { title: 'Custom Song for Boyfriend | Personalized Song Gift | SongGift', description: 'Create a one-of-a-kind song for your boyfriend from your real love story.', url: 'https://www.songgift.app/custom-song-for-boyfriend' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-boyfriend"
      breadcrumbTitle="Custom Song for Boyfriend"
      heroTitle="Surprise Your Boyfriend With a Song He'll Never Forget"
      heroDescription="He's the one who makes you laugh, holds you close, and makes every day better. Turn your love story into a personalized song that shows him exactly how much he means to you."
      ctaText="Create His Song Now"
      stepsTitle="How to Create the Perfect Song for Your Boyfriend"
      steps={[
        { title: 'Tell Your Story', description: "Share how you met, your favorite memories, his quirks you love, and why he's the one who makes your heart skip." },
        { title: 'We Create the Magic', description: 'We transform your relationship into a romantic, personalized song that captures your unique connection.' },
        { title: 'Watch Him Melt', description: "Present him with a song that's yours and only yours. Get ready for the best reaction you've ever seen." },
      ]}
      benefitsTitle="Why Your Boyfriend Will Love This Gift"
      benefitsSubtitle="The Most Thoughtful Gift You Can Give Him"
      benefits={[
        { title: 'Proves You Pay Attention', description: "A custom song shows you remember the little things — his smile, your first date, the moments that matter. It's the ultimate proof of how well you know and love him." },
        { title: 'Becomes Your Song', description: "Every couple needs \"their song.\" Instead of claiming a random track, create one that's literally about your relationship — a soundtrack to your love story." },
      ]}
      benefitsCta="Skip the cologne and watches. Give him something that comes straight from your heart and tells the world he's yours."
      benefitsCtaText="Start Creating His Song"
      testimonialsTitle="Boyfriends Are Blown Away by Their Custom Songs"
      testimonialsLink="Read more love stories →"
      readyCta="Ready to Create His Song?"
      readyDescription="Make your next date night, anniversary, or just-because moment unforgettable with a personalized song that captures everything you love about him."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-girlfriend', title: 'Custom Song for Girlfriend', description: 'Turn your love story into a song she\'ll treasure forever' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your journey together with a personalized song' },
        { href: '/valentines-day-song-gift', title: "Valentine's Day Song Gift", description: "The most romantic Valentine's Day gift" },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song for a good laugh' },
        { href: '/proposal-song-gift', title: 'Proposal Song', description: 'Pop the question with a custom song' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their experiences" },
      ]}
      seoTitle="The Most Thoughtful Gift You Can Give Your Boyfriend"
      seoContent={`<p>Tired of giving the same old gifts? A <strong>custom song for your boyfriend</strong> is the unexpected, deeply personal gift that shows him exactly how much he means to you. We turn your relationship into a one-of-a-kind song he can listen to anytime.</p>
<p>Share your story — how you met, your favorite moments, what makes him special — and we'll craft a <strong>personalized song in his favorite genre</strong>. Pop, R&B, acoustic, rap, country — every style is available. <strong>Delivered in 24–3�5 business days</strong> with express options for last-minute surprises.</p>
<p>A <strong>personalized song gift for your boyfriend</strong> works for any occasion: <strong>birthdays, anniversaries, Valentine's Day</strong>, or just because. It's the gift he never knew he wanted — and the one he'll play on repeat.</p>`}
      faqs={[
        { question: 'What makes a custom song a unique gift for my boyfriend?', answer: 'Unlike store-bought gifts, a custom song is created entirely from your real relationship. It includes your memories, inside jokes, and feelings — making it the most personal gift possible.' },
        { question: 'Can I choose the genre for his song?', answer: 'Yes! Choose from pop, R&B, acoustic, rap/spoken word, country, worship, cinematic, and more to match his musical taste.' },
        { question: 'How fast can I get the song?', answer: 'Standard delivery is 24–3�5 business days. Express delivery within 24 hours is available for an additional fee.' },
      ]}
    />
  );
}
