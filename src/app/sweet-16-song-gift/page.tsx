import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Sweet 16 Song Gift | Custom Personalized Sweet 16 Song | SongGift',
  description: "Celebrate her Sweet 16 with a personalized song gift. We craft a custom song just for her milestone birthday. 3–5 day delivery.",
  openGraph: { title: 'Sweet 16 Song Gift | Custom Personalized Sweet 16 Song | SongGift', description: "Make her Sweet 16 unforgettable with a custom song.", url: 'https://www.songgift.app/sweet-16-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="sweet-16-song-gift"
      breadcrumbTitle="Sweet 16 Song Gift"
      heroTitle="Make Their Sweet 16 Unforgettable With a Custom Song Made Just for Them"
      heroDescription="Turning 16 is a milestone that deserves to be celebrated in style. Create a personalized song that captures who they are, who they're becoming, and all the reasons they're absolutely amazing."
      ctaText="Create a Sweet 16 Song"
      stepsTitle="How to Create the Perfect Sweet 16 Song"
      steps={[
        { title: 'Celebrate Who They Are', description: "Tell us about the birthday star — their personality, passions, dreams, funny moments, and everything that makes them uniquely wonderful." },
        { title: 'We Create Their Anthem', description: 'We craft an energetic, personalized song that celebrates this milestone and makes them feel like a superstar.' },
        { title: 'Make the Party Epic', description: "Drop the song at their party and watch them light up. It's the moment that makes the whole celebration legendary." },
      ]}
      benefitsTitle="Why a Custom Song Makes the Perfect Sweet 16 Gift"
      benefitsSubtitle="Because 16 Only Happens Once"
      benefits={[
        { title: 'Their Own Personal Anthem', description: "Every teenager wants to feel special. A custom song is their personal anthem — a celebration of who they are that no one else in the world has." },
        { title: 'A Time Capsule of 16', description: "Years from now, they'll play this song and remember exactly how it felt to be 16 — the excitement, the dreams, and the people who loved them." },
      ]}
      benefitsCta="Make their Sweet 16 the party everyone talks about. Create a custom song that celebrates everything wonderful about them."
      benefitsCtaText="Start Their Sweet 16 Song"
      testimonialsTitle="Sweet 16 Songs That Made the Party"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Sweet 16 Song?"
      readyDescription="Make this milestone birthday one they'll never forget. Create a personalized song that celebrates everything that makes them amazing."
      relatedTitle="More Birthday & Milestone Ideas"
      relatedLinks={[
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift they'll remember" },
        { href: '/quinceanera-song-gift', title: 'Quinceañera Song', description: 'Celebrate this milestone' },
        { href: '/custom-song-for-daughter', title: 'Song for Daughter', description: 'A song she\'ll treasure' },
        { href: '/custom-song-for-son', title: 'Song for Son', description: 'Celebrate your son' },
        { href: '/graduation-song-gift', title: 'Graduation Song', description: 'Celebrate their next milestone' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What is a unique Sweet 16 gift?", answer: "A personalized Sweet 16 song is one of the most unique and meaningful gifts. It celebrates who she is at this milestone moment in her life." },
        { question: "Can the song be played at the party?", answer: "Yes! Many families surprise the birthday girl by playing the custom song at the Sweet 16 party for a memorable moment." },
        { question: "Can the song be from the whole family?", answer: "Absolutely! Parents, siblings, and grandparents often combine messages and memories to create one incredible song." },
      ]}
    />
  );
}
