import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Best Friend | Personalized Friendship Song | SongGift',
  description: "Create a personalized song for your best friend that celebrates your friendship. We, 3–5 day delivery. The most thoughtful friendship gift ever.",
  openGraph: { title: 'Custom Song for Best Friend | Personalized Song Gift | SongGift', description: 'Celebrate your best friend with a custom song made from your shared memories.', url: 'https://www.songgift.app/custom-song-for-best-friend' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-best-friend"
      breadcrumbTitle="Custom Song for Best Friend"
      heroTitle="Create a Custom Song That Celebrates Your Best Friend and Your Unbreakable Bond"
      heroDescription="They're the one you call first, laugh hardest with, and trust most. Give your best friend a personalized song that captures your epic friendship in a way nothing else can."
      ctaText="Create Their Song Now"
      stepsTitle="How to Create the Perfect Song for Your Best Friend"
      steps={[
        { title: 'Share Your Friendship', description: "Tell us about your best friend — how you met, your wildest adventures, your inside jokes, and what makes your friendship legendary." },
        { title: 'We Create Your Anthem', description: 'We transform your friendship into an unforgettable song — funny, heartfelt, or both.' },
        { title: 'Make Them Ugly-Cry', description: "Give them a song that proves your friendship is one for the books. Warning: tears of joy are basically guaranteed." },
      ]}
      benefitsTitle="Why a Custom Song Is the Ultimate Best Friend Gift"
      benefitsSubtitle="Because Your Friendship Deserves Its Own Soundtrack"
      benefits={[
        { title: 'Celebrates Your Unique Friendship', description: "Nobody else shares your memories, your humor, or your bond. A custom song captures all the moments — hilarious and heartfelt — that make your friendship extraordinary." },
        { title: 'Better Than Any Matching Bracelet', description: "Friendship bracelets break. Custom songs live forever. It becomes your friendship anthem — the song you blast on road trips and cry to on moving day." },
      ]}
      benefitsCta="Your best friend deserves to know they're irreplaceable. Give them a song that captures your epic bond."
      benefitsCtaText="Start Creating Their Song"
      testimonialsTitle="Best Friends Are Blown Away by Their Custom Songs"
      testimonialsLink="Read more friendship stories →"
      readyCta="Ready to Create a Song for Your Best Friend?"
      readyDescription="Whether it's their birthday, a going-away gift, or just because — show your best friend what their friendship means with a song they'll never forget."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song for laughs' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift they'll remember forever" },
        { href: '/graduation-song-gift', title: 'Graduation Song Gift', description: 'Celebrate their big achievement' },
        { href: '/custom-song-for-sister', title: 'Song for Sister', description: 'Celebrate your sisterhood' },
        { href: '/custom-song-for-brother', title: 'Song for Brother', description: 'Honor your brotherhood' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: 'What is a unique gift for my best friend?', answer: 'A custom song is the ultimate friendship gift. It captures your inside jokes, shared memories, and the bond that makes your friendship special.' },
        { question: 'Can I make the song funny or include inside jokes?', answer: 'Absolutely! Friendship songs are some of our funniest and most creative. Include all the inside jokes and embarrassing stories you want.' },
        { question: 'Is this good for a birthday gift?', answer: 'Yes! A personalized song is the perfect birthday gift for a best friend. It shows incredible thought and creativity.' },
      ]}
    />
  );
}
