import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Birthday Song Gift | Custom Personalized Birthday Song | SongGift',
  description: "Create a personalized birthday song gift they'll never forget. We craft a custom song from your memories. 3–5 day delivery. Starting at $79.",
  openGraph: { title: 'Birthday Song Gift | Custom Personalized Birthday Song | SongGift', description: "Give them the most memorable birthday gift ever — a custom song made just for them.", url: 'https://www.songgift.app/birthday-song-gift' },
};

export default function BirthdaySongGift() {
  return (
    <LandingPageTemplate
      slug="birthday-song-gift"
      breadcrumbTitle="Birthday Song Gift"
      heroTitle="Give Them a Birthday Gift They'll Remember Forever — A Song Made Just for Them"
      heroDescription="Birthdays come once a year, but memories last forever. Create a personalized song that celebrates who they are, the joy they bring to your life, and all the reasons they deserve to be celebrated."
      ctaText="Create Their Birthday Song"
      stepsTitle="How to Create an Unforgettable Birthday Surprise"
      steps={[
        { title: 'Celebrate Who They Are', description: 'Tell us about their personality, your favorite memories together, what makes them special, and why they deserve to be celebrated.' },
        { title: 'We Create Their Anthem', description: 'We craft a joyful, personalized song that celebrates their life and the happiness they bring to everyone around them.' },
        { title: 'Make Their Day Magic', description: 'Watch them light up as they hear a song written just for them — the perfect soundtrack to their special day.' },
      ]}
      benefitsTitle="Why a Custom Song Makes the Perfect Birthday Gift"
      benefitsSubtitle="A Birthday Gift That's Actually About Them"
      benefits={[
        { title: 'Celebrates Their Uniqueness', description: "A custom song isn't just another gift — it's a celebration of who they are as a person. It captures their quirks, their dreams, and all the things that make them irreplaceable in your life." },
        { title: "Something They'll Actually Use", description: "Unlike gadgets that break or clothes that go out of style, a personalized song becomes part of their life. They'll listen to it when they need a smile or want to remember how loved they are." },
      ]}
      benefitsCta="Give them a birthday gift that shows how much thought you put into celebrating who they are. Create something as special and unique as they are."
      benefitsCtaText="Start Their Birthday Song"
      testimonialsTitle="Birthday Songs That Made Their Day"
      testimonialsLink="Read more celebration stories →"
      readyCta="Ready to Create Their Birthday Song?"
      readyDescription="Make their next birthday one they'll never forget. Give them a personalized song that celebrates everything wonderful about who they are and the joy they bring to your life."
      relatedTitle="More Birthday & Special Occasion Ideas"
      relatedLinks={[
        { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
        { href: '/reviews', title: 'Customer Reviews', description: "Read real stories from customers who've created unforgettable song gifts" },
        { href: '/faq', title: 'Frequently Asked Questions', description: 'Get answers to common questions about our custom song creation process' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your journey together with a personalized anniversary song' },
        { href: '/custom-song-for-girlfriend', title: 'Custom Song for Girlfriend', description: 'Turn your love story into a song your girlfriend will treasure forever' },
        { href: '/custom-song-for-husband', title: 'Custom Song for Husband', description: 'Create a meaningful song that captures what your husband means to you' },
      ]}
      faqs={[
        { question: "What is a unique birthday gift idea?", answer: "A personalized birthday song is one of the most unique and thoughtful gifts you can give. It celebrates who they are with custom lyrics and original music." },
        { question: "How fast can I get a birthday song?", answer: "Standard delivery is 24–3�5 business days. Express delivery within 24 hours is available for $39 — perfect for last-minute birthday gifts." },
        { question: "Can I play the song at a birthday party?", answer: "Absolutely! We deliver high-quality audio files (MP3 & WAV) that you can play on any device at the party." },
      ]}
    />
  );
}
