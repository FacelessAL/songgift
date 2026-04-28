import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Love Song Gift | Custom Personalized Love Song | SongGift',
  description: "Create a personalized love song for your significant other. We craft a custom romantic song from your real love story. 3–5 day delivery. Starting at $79.",
  openGraph: { title: 'Love Song Gift | Custom Personalized Love Song | SongGift', description: "Turn your love story into a custom personalized love song.", url: 'https://www.songgift.app/love-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="love-song-gift"
      breadcrumbTitle="Love Song Gift"
      heroTitle="Turn Your Love Story Into a Beautiful, Personalized Love Song"
      heroDescription="Every love story is unique — your song should be too. Create a personalized love song that captures the magic of your relationship, the depth of your feelings, and the moments that make your love extraordinary."
      ctaText="Create Your Love Song"
      stepsTitle="How to Create the Perfect Love Song"
      steps={[
        { title: 'Share Your Love Story', description: "Tell us about your relationship — how you met, your favorite memories, what makes them irreplaceable, and the feelings you want to express." },
        { title: 'We Write Your Love Song', description: 'We craft a romantic, beautiful song that turns your love story into music — every note filled with the emotions you feel.' },
        { title: 'Share the Love', description: "Play it for them and watch the magic happen. Your love story now has its own soundtrack — and it's absolutely beautiful." },
      ]}
      benefitsTitle="Why a Custom Love Song Is the Most Romantic Gift"
      benefitsSubtitle="Because Your Love Deserves Its Own Melody"
      benefits={[
        { title: 'More Romantic Than Anything', description: "Nothing says \"I love you\" like a song that's literally about YOUR love story. It's the most romantic, thoughtful, and creative gift you can give." },
        { title: 'Your Love in Music', description: "This song becomes the soundtrack to your relationship — the song you dance to, cry to, and play on every anniversary. It's YOUR song, in the truest sense." },
      ]}
      benefitsCta="Your love story is beautiful. Turn it into a song that captures every emotion, every memory, and every reason they're the one."
      benefitsCtaText="Start Your Love Song"
      testimonialsTitle="Love Songs That Captured Hearts"
      testimonialsLink="Read more love stories →"
      readyCta="Ready to Create a Love Song?"
      readyDescription="Whether it's for a partner, a crush, or a lifelong love — create a personalized song that expresses what your heart feels."
      relatedTitle="More Romantic Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-wife', title: 'Song for Wife', description: 'A romantic song for her' },
        { href: '/custom-song-for-husband', title: 'Song for Husband', description: 'Show him your love' },
        { href: '/custom-song-for-girlfriend', title: 'Song for Girlfriend', description: 'She\'ll treasure it forever' },
        { href: '/custom-song-for-boyfriend', title: 'Song for Boyfriend', description: 'Surprise him with music' },
        { href: '/proposal-song-gift', title: 'Proposal Song', description: 'Pop the question with a song' },
        { href: '/wedding-song-gift', title: 'Wedding Song', description: 'Create a wedding song' },
      ]}
      faqs={[
        { question: "What is a personalized love song?", answer: "A personalized love song is a custom-produced song created from your real love story — your memories, feelings, and relationship details woven into custom lyrics and music." },
        { question: "Is a custom love song better than a generic love song?", answer: "Absolutely! A personalized love song mentions your real names, memories, and details. It's YOUR song — not someone else's." },
        { question: "What genres are available for love songs?", answer: "We offer pop, R&B/soul, acoustic, country, worship, cinematic, Latin, and more. You choose the perfect sound for your love song." },
      ]}
    />
  );
}
