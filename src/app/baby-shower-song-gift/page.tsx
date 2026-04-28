import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Baby Shower Song Gift | Custom Song for New Parents | SongGift',
  description: "Create a personalized baby shower song gift for the parents-to-be. We craft a custom song welcoming the new baby. 3–5 day delivery.",
  openGraph: { title: 'Baby Shower Song Gift | Custom Song for New Parents | SongGift', description: "Welcome the new baby with a custom song made for the growing family.", url: 'https://www.songgift.app/baby-shower-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="baby-shower-song-gift"
      breadcrumbTitle="Baby Shower Song Gift"
      heroTitle="Welcome the New Baby With a Custom Song the Family Will Treasure Forever"
      heroDescription="A new life is the most beautiful gift of all. Create a personalized song for the baby shower, the nursery, or the parents-to-be that celebrates this incredible new chapter."
      ctaText="Create a Baby Shower Song"
      stepsTitle="How to Create the Perfect Baby Shower Song"
      steps={[
        { title: 'Share the Joy', description: "Tell us about the parents-to-be, the baby's name (if known), the family's excitement, and the hopes and dreams for this new little life." },
        { title: 'We Create a Lullaby', description: "We craft a heartfelt, beautiful song that welcomes the baby and celebrates the family's love." },
        { title: 'Make the Shower Special', description: "Play it at the baby shower and leave everyone in happy tears. This song becomes the baby's first gift — a melody made with love." },
      ]}
      benefitsTitle="Why a Custom Song Is the Best Baby Shower Gift"
      benefitsSubtitle="More Meaningful Than Any Registry Item"
      benefits={[
        { title: 'A Gift That Grows With Them', description: "Onesies get outgrown. A custom song grows with the child — from nursery lullaby to a keepsake they'll treasure when they understand the words." },
        { title: 'Celebrates the Whole Family', description: "This song isn't just for the baby — it celebrates the parents, the grandparents, and the love that's been building since before the baby was born." },
      ]}
      benefitsCta="Welcome the newest family member with a song that captures the love, the excitement, and the beautiful journey ahead."
      benefitsCtaText="Start the Baby Shower Song"
      testimonialsTitle="Baby Shower Songs That Made Everyone Cry Happy Tears"
      testimonialsLink="Read more family stories →"
      readyCta="Ready to Create a Baby Shower Song?"
      readyDescription="Give the parents-to-be a gift they'll play in the nursery, at bedtime, and for years to come. A personalized song welcoming their little one."
      relatedTitle="More Family Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-daughter', title: 'Song for Daughter', description: 'A song she\'ll treasure' },
        { href: '/custom-song-for-son', title: 'Song for Son', description: 'Celebrate your son' },
        { href: '/custom-song-for-wife', title: 'Song for Wife', description: 'Celebrate the new mom' },
        { href: '/custom-song-for-husband', title: 'Song for Husband', description: 'Honor the new dad' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A yearly tradition" },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What is a unique baby shower gift?", answer: "A custom song for the parents-to-be or the new baby is one of the most unique baby shower gifts. It becomes a lullaby or family anthem they treasure forever." },
        { question: "Can the song be addressed to the baby?", answer: "Yes! Many parents request songs addressed directly to their unborn or newborn baby, expressing their hopes, dreams, and love." },
        { question: "Is this also a good push present?", answer: "Absolutely! A personalized song celebrating the new baby and the incredible new mom is the most meaningful push present imaginable." },
      ]}
    />
  );
}
