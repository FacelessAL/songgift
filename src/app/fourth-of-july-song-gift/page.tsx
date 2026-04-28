import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: '4th of July Song Gift | Custom Patriotic Song | SongGift',
  description: "Celebrate Independence Day with a personalized 4th of July song. We craft a custom patriotic or family song. Perfect for BBQs and celebrations. 3–5 day delivery.",
  openGraph: { title: '4th of July Song Gift | Custom Patriotic Song | SongGift', description: "Celebrate the 4th of July with a personalized custom song.", url: 'https://www.songgift.app/fourth-of-july-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="fourth-of-july-song-gift"
      breadcrumbTitle="4th of July Song Gift"
      heroTitle="Celebrate the 4th of July With a Custom Song That Rocks Your Cookout"
      heroDescription="Fireworks, burgers, and freedom deserve their own soundtrack. Create a personalized 4th of July song for your family, your party, or your crew that makes Independence Day unforgettable."
      ctaText="Create a 4th of July Song"
      stepsTitle="How to Create the Perfect 4th of July Song"
      steps={[
        { title: 'Share the Vibe', description: "Tell us about your celebration — your crew, your traditions, the vibe you want. Patriotic and proud? Party anthem? Funny family roast? We do it all." },
        { title: 'We Create Your Anthem', description: 'We craft a custom song that captures the spirit of your 4th of July celebration with the perfect mix of fun and pride.' },
        { title: 'Light Up the Party', description: "Drop your custom song at the cookout and watch everyone lose their minds. It's the fireworks before the fireworks." },
      ]}
      benefitsTitle="Why a Custom 4th of July Song Is the Ultimate Party Move"
      benefitsSubtitle="Because Your Playlist Needs an Upgrade"
      benefits={[
        { title: 'Your Celebration, Your Song', description: "Every 4th of July party plays the same songs. Stand out with a custom song that's about YOUR crew, YOUR traditions, and YOUR way of celebrating." },
        { title: 'A Tradition Worth Repeating', description: "This song becomes the anthem of your annual celebration — the track everyone looks forward to hearing when the grill fires up and the sparklers come out." },
      ]}
      benefitsCta="Make this 4th of July the one everyone talks about. Create a custom song that's as epic as your celebration."
      benefitsCtaText="Start Your 4th of July Song"
      testimonialsTitle="4th of July Songs That Were the Life of the Party"
      testimonialsLink="Read more fun stories →"
      readyCta="Ready to Create a 4th of July Song?"
      readyDescription="Give your Independence Day celebration the soundtrack it deserves. Create a personalized song that captures the pride, the fun, and the freedom."
      relatedTitle="More Celebration Song Ideas"
      relatedLinks={[
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song' },
        { href: '/christmas-song-gift', title: 'Christmas Song Gift', description: 'Holiday songs for the family' },
        { href: '/halloween-song-gift', title: 'Halloween Song Gift', description: 'Spooky songs for your party' },
        { href: '/thanksgiving-song-gift', title: 'Thanksgiving Song', description: 'Give thanks with a custom song' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: 'Celebrate with a custom song' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can I get a patriotic-themed song?", answer: "Yes! We create patriotic songs, family celebration anthems, military tribute songs, and fun summer BBQ party songs for the 4th of July." },
        { question: "Is this a good gift for veterans?", answer: "Absolutely! A personalized tribute song is a deeply meaningful way to honor a veteran or active service member on Independence Day." },
        { question: "Can I play it at a 4th of July BBQ?", answer: "Yes! We deliver high-quality audio files perfect for outdoor speakers and party sound systems." },
      ]}
    />
  );
}
