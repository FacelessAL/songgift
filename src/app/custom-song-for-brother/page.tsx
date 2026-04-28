import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Brother | Personalized Song Gift for Siblings | SongGift',
  description: "Create a personalized song for your brother that celebrates your bond. We, 3–5 day delivery. Perfect for birthdays, weddings, or just because.",
  openGraph: { title: 'Custom Song for Brother | Personalized Song Gift | SongGift', description: 'Celebrate your brother with a custom song made from your shared memories.', url: 'https://www.songgift.app/custom-song-for-brother' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-brother"
      breadcrumbTitle="Custom Song for Brother"
      heroTitle="Create a Custom Song That Celebrates the Brotherhood You Share"
      heroDescription="He's the one who had your back growing up, pushed you to be better, and shares memories nobody else will ever understand. Give your brother a song that honors your unbreakable bond."
      ctaText="Create His Song Now"
      stepsTitle="How to Create the Perfect Song for Your Brother"
      steps={[
        { title: 'Share Your Memories', description: "Tell us about your brother — the adventures, the rivalry, the inside jokes, and the moments that proved you'll always have each other's back." },
        { title: 'We Craft His Song', description: 'We create a powerful song that captures the unique bond between brothers — from childhood to now.' },
        { title: 'Surprise Your Bro', description: "Give him a gift that shows your bond goes deeper than words. Even tough guys get emotional when the song is about them." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Your Brother"
      benefitsSubtitle="Because Brothers Don't Say It Enough"
      benefits={[
        { title: 'Says What You Can\'t', description: "Brothers aren't always great with words. A custom song does the heavy lifting — expressing love, gratitude, and respect in a way that hits different." },
        { title: 'A Bond in Music', description: "This song becomes a permanent record of your brotherhood — something he can play when he needs a reminder of family, home, and the person who's always had his back." },
      ]}
      benefitsCta="Your brother has always been in your corner. Show him what that means with a song he'll never forget."
      benefitsCtaText="Start Creating His Song"
      testimonialsTitle="Brothers Are Moved by Their Custom Songs"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Song for Your Brother?"
      readyDescription="Whether it's his birthday, his wedding, or just because — give your brother a song that captures everything your bond means."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-sister', title: 'Custom Song for Sister', description: 'Celebrate your sisterhood with a custom song' },
        { href: '/custom-song-for-best-friend', title: 'Song for Best Friend', description: 'Create a song for your closest friend' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift they'll remember forever" },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song' },
        { href: '/graduation-song-gift', title: 'Graduation Song Gift', description: 'Celebrate their big achievement' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: 'What is a unique gift for my brother?', answer: 'A custom song is one of the most unexpected and meaningful gifts for a brother. It celebrates your bond with personalized lyrics set to original music.' },
        { question: 'Can I make the song funny?', answer: 'Yes! Many siblings request funny, lighthearted songs that include inside jokes and roast-style humor. Just let us know the tone you want.' },
        { question: 'How fast can I get a custom song for my brother?', answer: 'Standard delivery is 24–3�5 business days. Express delivery within 24 hours is available for an additional $39.' },
      ]}
    />
  );
}
