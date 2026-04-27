import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Grandparents | Personalized Song Gift | SongGift',
  description: "Honor your grandparents with a personalized song that celebrates their love, legacy, and the memories you share. We, 24–48 hr delivery.",
  openGraph: { title: 'Custom Song for Grandparents | Personalized Song Gift | SongGift', description: 'Create a custom song that honors your grandparents and their legacy.', url: 'https://www.songgift.app/custom-song-for-grandparents' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-grandparents"
      breadcrumbTitle="Custom Song for Grandparents"
      heroTitle="Honor Your Grandparents With a Song That Celebrates Their Love and Legacy"
      heroDescription="They spoiled you, told you stories, and loved you unconditionally. Create a personalized song for your grandparents that captures the warmth, wisdom, and love that only they can give."
      ctaText="Create Their Song Now"
      stepsTitle="How to Create the Perfect Song for Grandparents"
      steps={[
        { title: 'Share Family Memories', description: "Tell us about your grandparents — their love story, family traditions, the wisdom they've shared, and what makes them so special to your family." },
        { title: 'We Craft Their Song', description: 'We create a warm, heartfelt song that honors their journey and the legacy of love they\'ve built.' },
        { title: 'Make Them Feel Cherished', description: "Watch generations come together as your grandparents hear a song that celebrates their life, their love, and their family." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Grandparents"
      benefitsSubtitle="Because They Deserve to Know Their Impact"
      benefits={[
        { title: 'Honors Their Legacy', description: "Your grandparents built the foundation of your family. A custom song celebrates their journey — from their love story to the generations they've inspired." },
        { title: 'A Family Heirloom', description: "This song becomes part of your family's story — something that can be passed down, played at gatherings, and treasured for generations to come." },
      ]}
      benefitsCta="Your grandparents gave your family its foundation. Give them a song that shows the whole family is grateful for every moment."
      benefitsCtaText="Start Creating Their Song"
      testimonialsTitle="Grandparents Are Touched by Their Custom Songs"
      testimonialsLink="Read more family stories →"
      readyCta="Ready to Create a Song for Your Grandparents?"
      readyDescription="Whether it's their anniversary, a birthday milestone, or just because — honor your grandparents with a song that celebrates their incredible love story."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate their anniversary with a personalized song' },
        { href: '/custom-song-for-mom', title: 'Custom Song for Mom', description: 'Show your mom how much she means to you' },
        { href: '/custom-song-for-dad', title: 'Custom Song for Dad', description: 'Honor your dad with a personalized song' },
        { href: '/memorial-song-gift', title: 'Memorial Song', description: 'Honor a loved one\'s memory with a custom song' },
        { href: '/retirement-song-gift', title: 'Retirement Song', description: 'Celebrate their life and legacy' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their experiences" },
      ]}
      faqs={[
        { question: 'Is a custom song a good gift for elderly grandparents?', answer: 'Absolutely! Grandparents cherish personalized gifts more than anything. A custom song they can listen to brings them joy every single time.' },
        { question: 'Can I include memories from the whole family?', answer: 'Yes! Many families compile stories, memories, and messages from children, grandchildren, and great-grandchildren to create a deeply meaningful song.' },
        { question: 'What genre works best for grandparents?', answer: 'Popular choices include acoustic, classic pop, country, and worship/hymn styles. You can also share their favorite music as inspiration.' },
      ]}
    />
  );
}
