import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Easter Song Gift | Custom Personalized Easter Song | SongGift',
  description: "Celebrate Easter with a personalized song gift for your family. We craft a custom Easter song celebrating faith, family, and new beginnings. 24–48 hr delivery.",
  openGraph: { title: 'Easter Song Gift | Custom Personalized Easter Song | SongGift', description: "Celebrate Easter with a personalized custom song.", url: 'https://www.songgift.app/easter-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="easter-song-gift"
      breadcrumbTitle="Easter Song Gift"
      heroTitle="Celebrate Easter With a Custom Song Full of Hope, Joy, and Family Love"
      heroDescription="Easter is a time of renewal, togetherness, and celebration. Create a personalized song that captures the joy of the season, your family's traditions, and the hope that springs eternal."
      ctaText="Create an Easter Song"
      stepsTitle="How to Create the Perfect Easter Song"
      steps={[
        { title: 'Share Your Celebration', description: "Tell us about your Easter traditions — the egg hunts, the family gatherings, the faith, and the joy that makes this season special." },
        { title: 'We Create Joy in Music', description: 'We create a warm, uplifting song that captures the spirit of your Easter celebration.' },
        { title: 'Celebrate Together', description: "Play it at Easter brunch, the family gathering, or share it with loved ones near and far. It's the gift of joy in music." },
      ]}
      benefitsTitle="Why a Custom Easter Song Brightens the Celebration"
      benefitsSubtitle="A Gift of Joy and Renewal"
      benefits={[
        { title: 'Captures the Spirit of the Season', description: "Easter is about renewal, hope, and family. A custom song wraps all of those feelings into a beautiful melody your family will treasure." },
        { title: 'A New Easter Tradition', description: "Add a personal touch to your Easter celebration with a song that becomes part of your family's traditions year after year." },
      ]}
      benefitsCta="Make this Easter more meaningful. Create a song that celebrates the joy, hope, and togetherness of the season."
      benefitsCtaText="Start Your Easter Song"
      testimonialsTitle="Easter Songs That Brightened the Season"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create an Easter Song?"
      readyDescription="Celebrate the season of renewal with a personalized song that captures the joy and love of your Easter traditions."
      relatedTitle="More Holiday Song Ideas"
      relatedLinks={[
        { href: '/christmas-song-gift', title: 'Christmas Song Gift', description: 'Holiday songs for the family' },
        { href: '/thanksgiving-song-gift', title: 'Thanksgiving Song', description: 'Give thanks with music' },
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'A beautiful gift for mom' },
        { href: '/custom-song-for-grandparents', title: 'Song for Grandparents', description: 'Honor their love' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: 'Celebrate with music' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can I request a faith-based Easter song?", answer: "Absolutely! We create songs that celebrate the spiritual meaning of Easter, including themes of resurrection, hope, and renewal." },
        { question: "Is an Easter song a good family gift?", answer: "Yes! A personalized Easter song becomes a family tradition that you can play every year. It celebrates your family and your faith." },
        { question: "Can the song be fun and lighthearted?", answer: "Of course! Whether you want a joyful spring song, a faith-centered hymn, or a fun family anthem, we match the tone to your vision." },
      ]}
    />
  );
}
