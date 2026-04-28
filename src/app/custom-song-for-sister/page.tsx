import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Sister | Personalized Song Gift for Siblings | SongGift',
  description: "Create a personalized song for your sister that celebrates your bond. We, 3–5 day delivery. Perfect for birthdays, weddings, or just because.",
  openGraph: { title: 'Custom Song for Sister | Personalized Song Gift | SongGift', description: 'Celebrate your sister with a custom song made from your shared memories.', url: 'https://www.songgift.app/custom-song-for-sister' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-sister"
      breadcrumbTitle="Custom Song for Sister"
      heroTitle="Create a Custom Song That Celebrates the Bond You Share With Your Sister"
      heroDescription="She's your first best friend, your lifelong confidante, and the one person who truly gets you. Turn your sisterhood into a song she'll treasure forever."
      ctaText="Create Her Song Now"
      stepsTitle="How to Create the Perfect Song for Your Sister"
      steps={[
        { title: 'Share Your Bond', description: "Tell us about your sister — your childhood memories, inside jokes, the fights that made you stronger, and the love that ties you together." },
        { title: 'We Craft Her Song', description: 'We create a beautiful song that captures the unique, irreplaceable bond between sisters.' },
        { title: 'Celebrate Your Sisterhood', description: "Give her a song that says everything you feel — and watch her ugly-cry in the best way possible." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Your Sister"
      benefitsSubtitle="Because Sisters Deserve the World"
      benefits={[
        { title: 'Captures Your Unique Bond', description: "Nobody else in the world shares the memories, the jokes, and the history you have with your sister. A custom song celebrates that one-of-a-kind connection." },
        { title: 'Stronger Than Any Card', description: "A greeting card gets thrown away. A custom song becomes the thing she plays when she misses you, needs a pick-me-up, or just wants to smile." },
      ]}
      benefitsCta="Your sister has been your ride-or-die since day one. Show her what that means with a song that's as special as your bond."
      benefitsCtaText="Start Creating Her Song"
      testimonialsTitle="Sisters Love Their Custom Songs"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Song for Your Sister?"
      readyDescription="Whether it's her birthday, her wedding, or just because — give your sister a song that celebrates the bond only sisters understand."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-brother', title: 'Custom Song for Brother', description: 'Create a meaningful song for your brother' },
        { href: '/custom-song-for-best-friend', title: 'Song for Best Friend', description: 'Celebrate your friendship with a custom song' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift they'll remember forever" },
        { href: '/wedding-song-gift', title: 'Wedding Song Gift', description: 'The perfect gift for her special day' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: 'What is the best personalized gift for my sister?', answer: 'A custom song is one of the most unique and meaningful personalized gifts for a sister. It celebrates your bond with music she can listen to forever.' },
        { question: 'Can I surprise my sister with a custom song at her wedding?', answer: 'Absolutely! Many siblings gift custom songs at weddings, birthdays, and milestone celebrations for maximum emotional impact.' },
        { question: 'How much does a custom song for my sister cost?', answer: 'Custom songs start at $79 with our current promotion. Express delivery is available for an additional $39.' },
      ]}
    />
  );
}
