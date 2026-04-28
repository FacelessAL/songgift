import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Memorial Song Gift | Custom Tribute & Remembrance Song | SongGift',
  description: "Honor a loved one's memory with a personalized memorial song. We craft a beautiful tribute song from your memories. 3–5 day delivery.",
  openGraph: { title: 'Memorial Song Gift | Custom Tribute & Remembrance Song | SongGift', description: "Create a beautiful tribute song to honor someone you've lost.", url: 'https://www.songgift.app/memorial-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="memorial-song-gift"
      breadcrumbTitle="Memorial Song Gift"
      heroTitle="Honor Their Memory With a Song That Celebrates the Life They Lived"
      heroDescription="Some people leave a mark on your heart that never fades. Create a personalized memorial song that celebrates their life, preserves their memory, and gives your family a beautiful way to remember."
      ctaText="Create a Memorial Song"
      stepsTitle="How to Create a Beautiful Memorial Song"
      steps={[
        { title: 'Share Their Story', description: "Tell us about your loved one — their personality, their impact, your favorite memories, and the legacy they left behind." },
        { title: 'We Honor Their Memory', description: 'We create a beautiful, heartfelt song that captures who they were and the love they left in this world.' },
        { title: 'Remember Together', description: "Play it at a memorial, listen as a family, or keep it close for quiet moments of remembrance. Their memory lives on in music." },
      ]}
      benefitsTitle="Why a Memorial Song Is a Meaningful Way to Remember"
      benefitsSubtitle="A Tribute As Unique As They Were"
      benefits={[
        { title: 'Preserves Their Memory', description: "A memorial song captures the essence of who they were — their laugh, their wisdom, their love — in a way that photos and stories alone cannot." },
        { title: 'Brings Comfort', description: "Music has a unique power to heal. A personalized memorial song gives your family something beautiful to hold onto — a source of comfort during the hardest moments." },
      ]}
      benefitsCta="Their memory deserves to be honored beautifully. Create a song that celebrates the life they lived and the love they gave."
      benefitsCtaText="Start Their Memorial Song"
      testimonialsTitle="Memorial Songs That Honored Beautiful Lives"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Memorial Song?"
      readyDescription="Honor their memory with a personalized song that captures who they were, what they meant to you, and the love that will never fade."
      relatedTitle="More Meaningful Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'Honor your mom with a personalized song' },
        { href: '/custom-song-for-dad', title: 'Song for Dad', description: 'Celebrate your dad with a custom song' },
        { href: '/custom-song-for-grandparents', title: 'Song for Grandparents', description: 'Honor their love and legacy' },
        { href: '/custom-song-for-pet', title: 'Song for Pet', description: "Honor a beloved pet's memory" },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate a love story in music' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can you create a song for someone who has passed?", answer: "Yes. Memorial songs are some of our most meaningful work. We create beautiful tributes that honor their life, your memories together, and the love that endures." },
        { question: "Can I play the memorial song at a funeral or celebration of life?", answer: "Absolutely. Many customers play their memorial songs at services, celebrations of life, and annual remembrances." },
        { question: "Is it too sad to give as a gift?", answer: "Memorial songs are not about sadness — they are about celebrating a life well-lived. Most recipients describe them as healing, comforting, and deeply meaningful." },
      ]}
    />
  );
}
