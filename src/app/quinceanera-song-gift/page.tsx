import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Quinceañera Song Gift | Custom Personalized Quinceañera Song | SongGift',
  description: "Create a personalized quinceañera song gift for her special day. We craft a custom song in English, Spanish, or bilingual. 24–48 hr delivery.",
  openGraph: { title: 'Quinceañera Song Gift | Custom Personalized Quinceañera Song | SongGift', description: "Celebrate her quinceañera with a custom personalized song.", url: 'https://www.songgift.app/quinceanera-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="quinceanera-song-gift"
      breadcrumbTitle="Quinceañera Song Gift"
      heroTitle="Celebrate Her Quinceañera With a Custom Song That Honors This Beautiful Milestone"
      heroDescription="Her quinceañera marks the transition from girl to young woman. Create a personalized song in English, Spanish, or both that celebrates her journey, her family's love, and the beautiful young woman she's becoming."
      ctaText="Create a Quinceañera Song"
      stepsTitle="How to Create the Perfect Quinceañera Song"
      steps={[
        { title: 'Share Her Story', description: "Tell us about the quinceañera — her personality, her dreams, your family's traditions, and the love that surrounds this special celebration." },
        { title: 'We Create Her Song', description: 'We craft a beautiful, culturally meaningful song that honors this milestone — in English, Spanish, or a mix of both.' },
        { title: 'Make It Magical', description: "Play it during the ceremony, the waltz, or the celebration. It becomes the song that defines her quinceañera forever." },
      ]}
      benefitsTitle="Why a Custom Song Makes the Perfect Quinceañera Gift"
      benefitsSubtitle="A Cultural Milestone Deserves a Unique Tribute"
      benefits={[
        { title: 'Honors Tradition and Family', description: "A quinceañera is about family, culture, and the journey to womanhood. A custom song weaves all of these elements together in a way that's deeply personal and meaningful." },
        { title: 'Bilingual and Beautiful', description: "We create songs in English, Spanish, or a beautiful mix of both — honoring her heritage while celebrating who she's becoming." },
      ]}
      benefitsCta="Her quinceañera is one of the most important days of her life. Give her a song that makes it even more unforgettable."
      benefitsCtaText="Start Her Quinceañera Song"
      testimonialsTitle="Quinceañera Songs That Moved the Whole Family"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Quinceañera Song?"
      readyDescription="Honor this beautiful milestone with a personalized song that celebrates her journey, her family, and the amazing young woman she's becoming."
      relatedTitle="More Milestone Song Ideas"
      relatedLinks={[
        { href: '/sweet-16-song-gift', title: 'Sweet 16 Song Gift', description: 'Celebrate another big milestone' },
        { href: '/custom-song-for-daughter', title: 'Song for Daughter', description: 'A song she\'ll treasure forever' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: 'Birthday songs for any age' },
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'A beautiful gift for mom' },
        { href: '/graduation-song-gift', title: 'Graduation Song', description: 'Celebrate the next milestone' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can the quinceañera song be in Spanish?", answer: "Yes! We create songs in Spanish, English, or bilingual. Many families request bilingual songs to honor both languages and cultures." },
        { question: "Is this a good gift from parents to daughter?", answer: "Absolutely! A personalized quinceañera song from parents to daughter is one of the most emotional and cherished gifts at the celebration." },
        { question: "Can I play the song during the quinceañera celebration?", answer: "Yes! Many families play the custom song during the ceremony or at a special moment during the fiesta. We deliver high-quality audio files." },
      ]}
    />
  );
}
