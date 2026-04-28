import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: "New Year's Song Gift | Custom Personalized New Year Song | SongGift",
  description: "Ring in the New Year with a personalized song gift. We craft a custom song celebrating the year ahead. Perfect for New Year's Eve parties. 3–5 day delivery.",
  openGraph: { title: "New Year's Song Gift | Custom Personalized New Year Song | SongGift", description: "Celebrate the New Year with a custom personalized song.", url: 'https://www.songgift.app/new-years-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="new-years-song-gift"
      breadcrumbTitle="New Year's Song Gift"
      heroTitle="Ring in the New Year With a Custom Song That Celebrates Your Journey"
      heroDescription="A new year deserves a new anthem. Create a personalized song that celebrates the year you've had, the memories you've made, and the exciting future ahead."
      ctaText="Create a New Year's Song"
      stepsTitle="How to Create the Perfect New Year's Song"
      steps={[
        { title: 'Reflect on the Year', description: "Tell us about the highlights, the milestones, the challenges you overcame, and the people who made this year special." },
        { title: 'We Create Your Anthem', description: "We craft a celebratory song that captures the spirit of your year and the excitement of what's to come." },
        { title: 'Celebrate at Midnight', description: "Drop your custom song at your New Year's party and start the year with a bang. It's the ultimate countdown soundtrack." },
      ]}
      benefitsTitle="Why a Custom New Year's Song Is the Perfect Celebration"
      benefitsSubtitle="Start the Year With Your Own Anthem"
      benefits={[
        { title: 'Captures the Year in Music', description: "Every year has its own story. A custom song preserves the highlights, the growth, and the moments that made this year yours." },
        { title: 'The Ultimate Party Starter', description: "Forget the generic countdown playlist. Drop a custom song at midnight that's actually about your crew, your year, and your future." },
      ]}
      benefitsCta="Make this New Year's unforgettable. Create a custom song that celebrates everything you've accomplished and everything that's ahead."
      benefitsCtaText="Start Your New Year's Song"
      testimonialsTitle="New Year's Songs That Started the Year Right"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a New Year's Song?"
      readyDescription="Celebrate the year that was and the one ahead with a personalized song that captures your journey and your dreams."
      relatedTitle="More Celebration Song Ideas"
      relatedLinks={[
        { href: '/christmas-song-gift', title: 'Christmas Song Gift', description: 'Holiday songs for the family' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: 'Celebrate with a custom song' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Start the year with laughs' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your love story' },
        { href: '/thanksgiving-song-gift', title: 'Thanksgiving Song', description: 'Give thanks with music' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Is a custom song a good New Year's gift?", answer: "Yes! A personalized New Year's song celebrates the year behind and the possibilities ahead. It's perfect for couples, families, or friends." },
        { question: "Can I play it at a New Year's Eve party?", answer: "Absolutely! A custom song is the ultimate midnight surprise. We deliver high-quality audio files for any sound system." },
        { question: "When should I order for New Year's?", answer: "We recommend ordering by December 28th for standard delivery. Express delivery is available through December 30th." },
      ]}
    />
  );
}
