import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Thanksgiving Song Gift | Custom Gratitude Song | SongGift',
  description: "Express gratitude this Thanksgiving with a personalized song gift. We craft a custom song celebrating family and thankfulness. 3–5 day delivery.",
  openGraph: { title: 'Thanksgiving Song Gift | Custom Gratitude Song | SongGift', description: "Celebrate Thanksgiving with a personalized gratitude song.", url: 'https://www.songgift.app/thanksgiving-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="thanksgiving-song-gift"
      breadcrumbTitle="Thanksgiving Song Gift"
      heroTitle="Express Your Gratitude This Thanksgiving With a Custom Song for Your Family"
      heroDescription="Thanksgiving is about more than turkey and football. It's about the people who make your life extraordinary. Create a personalized song that captures your family's love, traditions, and gratitude."
      ctaText="Create a Thanksgiving Song"
      stepsTitle="How to Create the Perfect Thanksgiving Song"
      steps={[
        { title: 'Share Your Gratitude', description: "Tell us about your family traditions, the people you're thankful for, your favorite Thanksgiving memories, and what home means to you." },
        { title: 'We Capture Your Gratitude', description: 'We create a warm, heartfelt song that celebrates your family and everything you\'re thankful for.' },
        { title: 'Play It at the Table', description: "Before the first bite, play your family's custom song. It sets the tone for the most meaningful Thanksgiving dinner you've ever had." },
      ]}
      benefitsTitle="Why a Custom Thanksgiving Song Brings the Family Together"
      benefitsSubtitle="Because Gratitude Deserves More Than a Toast"
      benefits={[
        { title: 'Captures Your Family\'s Spirit', description: "Every family has its own version of Thanksgiving — the chaos, the laughter, the love. A custom song celebrates what makes YOUR family gathering special." },
        { title: 'Becomes a Tradition', description: "Year after year, this song becomes the thing that starts your Thanksgiving dinner — a tradition that reminds everyone why you're grateful to be together." },
      ]}
      benefitsCta="This Thanksgiving, give your family something more meaningful than leftovers. Give them a song that captures your gratitude."
      benefitsCtaText="Start Your Thanksgiving Song"
      testimonialsTitle="Thanksgiving Songs That United Families"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Thanksgiving Song?"
      readyDescription="Make this Thanksgiving the most meaningful one yet. Create a personalized song that expresses your gratitude and celebrates the people who matter most."
      relatedTitle="More Holiday Song Ideas"
      relatedLinks={[
        { href: '/christmas-song-gift', title: 'Christmas Song Gift', description: 'Holiday songs for the family' },
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'Thank your mom with a song' },
        { href: '/custom-song-for-dad', title: 'Song for Dad', description: 'Honor your dad with music' },
        { href: '/custom-song-for-grandparents', title: 'Song for Grandparents', description: 'Celebrate their legacy' },
        { href: '/thank-you-song-gift', title: 'Thank You Song', description: 'Express gratitude with a song' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What is a unique Thanksgiving gift?", answer: "A personalized Thanksgiving song expresses your gratitude for the people in your life. Play it at the dinner table for a truly unforgettable holiday." },
        { question: "Can I play the song at Thanksgiving dinner?", answer: "Yes! Many families play their custom Thanksgiving songs during dinner for an emotional and memorable moment." },
        { question: "How far in advance should I order?", answer: "We recommend ordering by the Monday before Thanksgiving. Express delivery is available for last-minute orders." },
      ]}
    />
  );
}
