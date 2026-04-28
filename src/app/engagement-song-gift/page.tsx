import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Engagement Song Gift | Custom Song for Engagements | SongGift',
  description: "Celebrate their engagement with a custom song gift. Perfect for engagement parties, proposals, or the couple. We, 3–5 day delivery.",
  openGraph: { title: 'Engagement Song Gift | Custom Song for Engagements | SongGift', description: "Mark their engagement with a personalized song.", url: 'https://www.songgift.app/engagement-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="engagement-song-gift"
      breadcrumbTitle="Engagement Song Gift"
      heroTitle="Celebrate Their Engagement With a Custom Song That Captures the Excitement"
      heroDescription="They said yes! Now celebrate this incredible milestone with a personalized song that captures their love story, the excitement of their engagement, and the beautiful journey ahead."
      ctaText="Create an Engagement Song"
      stepsTitle="How to Create the Perfect Engagement Song"
      steps={[
        { title: 'Share Their Love Story', description: "Tell us about the couple — how they met, what makes them perfect together, and the magic of their engagement moment." },
        { title: 'We Celebrate Their Love', description: 'We create a beautiful song that captures the joy and excitement of their engagement and the love that brought them here.' },
        { title: 'Celebrate Together', description: "Play it at the engagement party, share it with family, or gift it to the couple. It's the perfect way to honor this milestone." },
      ]}
      benefitsTitle="Why a Custom Engagement Song Is the Perfect Gift"
      benefitsSubtitle="The Best Way to Celebrate 'She/He Said Yes!'"
      benefits={[
        { title: 'Captures the Magic', description: "The engagement period is one of the most exciting times in a couple's life. A custom song preserves that magic in a way they can relive forever." },
        { title: 'Perfect for the Engagement Party', description: "Surprise the happy couple at their engagement party with a song that tells their story. It becomes the highlight of the celebration." },
      ]}
      benefitsCta="They're starting the most exciting chapter of their lives. Give them a song that celebrates this beautiful beginning."
      benefitsCtaText="Start Their Engagement Song"
      testimonialsTitle="Engagement Songs That Made the Party"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create an Engagement Song?"
      readyDescription="Celebrate the happy couple with a personalized song that captures the joy of their engagement and the love that makes them perfect together."
      relatedTitle="More Love & Celebration Ideas"
      relatedLinks={[
        { href: '/proposal-song-gift', title: 'Proposal Song', description: 'Pop the question with music' },
        { href: '/wedding-song-gift', title: 'Wedding Song Gift', description: 'Create a song for the big day' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate their love story' },
        { href: '/custom-song-for-wife', title: 'Song for Wife', description: 'A romantic personalized song' },
        { href: '/custom-song-for-husband', title: 'Song for Husband', description: 'Honor the man you love' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can I use a custom song for a proposal?", answer: "Yes! Many customers use SongGift songs as the backdrop to their proposal. Check our Proposal Song page for more details." },
        { question: "Is an engagement song a good gift for the couple?", answer: "Absolutely! A custom engagement song celebrates their love story and becomes a keepsake they treasure through their wedding and beyond." },
        { question: "How fast can I get an engagement song?", answer: "Standard delivery is 24–3�5 business days. Express delivery within 24 hours is available for surprise proposals or last-minute gifts." },
      ]}
    />
  );
}
