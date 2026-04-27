import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Your Pet | Personalized Pet Song Gift | SongGift',
  description: "Create a personalized song about your pet! We craft a unique, fun song about your dog, cat, or any furry friend. Perfect for pet lovers, memorials, or just because.",
  openGraph: { title: 'Custom Song for Your Pet | Personalized Pet Song | SongGift', description: 'Celebrate your furry best friend with a custom song about your pet.', url: 'https://www.songgift.app/custom-song-for-pet' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-pet"
      breadcrumbTitle="Custom Song for Pet"
      heroTitle="Create a Custom Song That Celebrates Your Furry (or Scaly) Best Friend"
      heroDescription="They greet you at the door, steal your snacks, and love you unconditionally. Your pet deserves their own theme song — and we're here to make it happen."
      ctaText="Create Their Song Now"
      stepsTitle="How to Create the Perfect Song for Your Pet"
      steps={[
        { title: 'Tell Us About Them', description: "Share your pet's name, personality, funny habits, favorite things, and all the reasons they're the best companion you could ask for." },
        { title: 'We Write Their Anthem', description: "We create a fun, heartfelt (and maybe hilarious) song that captures your pet's personality perfectly." },
        { title: 'Play It on Repeat', description: "Share your pet's song with fellow pet lovers, post it online, or just play it every time they do something adorable — so basically all the time." },
      ]}
      benefitsTitle="Why Your Pet Needs Their Own Custom Song"
      benefitsSubtitle="Because They're Family Too"
      benefits={[
        { title: 'Captures Their Personality', description: "From the way they beg for treats to their signature move — a custom song immortalizes all the quirks and moments that make your pet one-of-a-kind." },
        { title: 'Perfect for Sharing', description: "Post it on social media, play it at the dog park, or use it as their ringtone. A pet song is the content your followers didn't know they needed." },
      ]}
      benefitsCta="Your pet gives you unconditional love. Give them the recognition they deserve — their very own song."
      benefitsCtaText="Start Creating Their Song"
      testimonialsTitle="Pet Parents Love Their Custom Pet Songs"
      testimonialsLink="Read more fun stories →"
      readyCta="Ready to Create a Song for Your Pet?"
      readyDescription="Whether it's a dog, cat, hamster, or iguana — every pet deserves a song that celebrates how awesome they are. Create theirs today."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song for laughs' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Perfect for your pet's birthday too!" },
        { href: '/memorial-song-gift', title: 'Memorial Song', description: "Honor a beloved pet's memory with music" },
        { href: '/custom-song-for-best-friend', title: 'Song for Best Friend', description: 'Your pet IS your best friend, but this one is for the human kind' },
        { href: '/christmas-song-gift', title: 'Christmas Song Gift', description: 'Holiday songs for the whole family' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: 'Can you really make a song about my pet?', answer: 'Yes! Pet songs are some of our most popular and fun orders. We create songs about dogs, cats, birds, horses, and every kind of pet imaginable.' },
        { question: 'Is a pet song a good memorial gift?', answer: 'Absolutely. Many customers order custom songs to honor a beloved pet who has passed. It becomes a beautiful tribute they can listen to whenever they miss their companion.' },
        { question: 'Can I include my pet\'s name and personality traits?', answer: 'Of course! The more details you share — their name, quirks, favorite things, funny habits — the more personal and special the song will be.' },
      ]}
    />
  );
}
