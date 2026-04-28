import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Christmas Song Gift | Custom Personalized Christmas Song | SongGift',
  description: "Create a personalized Christmas song gift they'll treasure forever. We craft a custom holiday song from your memories. 3–5 day delivery.",
  openGraph: { title: 'Christmas Song Gift | Custom Personalized Christmas Song | SongGift', description: "Give the most memorable Christmas gift — a custom song made just for them.", url: 'https://www.songgift.app/christmas-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="christmas-song-gift"
      breadcrumbTitle="Christmas Song Gift"
      heroTitle="Give the Gift of Music This Christmas — A Custom Song Made Just for Them"
      heroDescription="This Christmas, put something under the tree that can't be bought at any store. A personalized song that captures your family's holiday spirit, your love story, or your favorite Christmas memories."
      ctaText="Create a Christmas Song"
      stepsTitle="How to Create the Perfect Christmas Song Gift"
      steps={[
        { title: 'Share the Holiday Spirit', description: "Tell us about your Christmas memories — family traditions, favorite moments, the people who make the holidays magical, and the story you want to tell." },
        { title: 'We Create Holiday Magic', description: 'We craft a warm, festive, personalized Christmas song that captures the joy and love of your holiday season.' },
        { title: 'Unwrap the Magic', description: "Put it under the tree, play it at dinner, or surprise them Christmas morning. It's the gift that makes the whole room stop and listen." },
      ]}
      benefitsTitle="Why a Custom Christmas Song Is the Perfect Holiday Gift"
      benefitsSubtitle="The Gift That Becomes a Family Tradition"
      benefits={[
        { title: 'More Meaningful Than Anything in a Box', description: "While other gifts get returned or forgotten, a personalized Christmas song becomes part of your family's holiday tradition — played every year alongside the classics." },
        { title: 'Captures Your Holiday Magic', description: "Every family has their own version of Christmas — the chaos, the laughter, the love. A custom song preserves YOUR family's holiday magic in a way nothing else can." },
      ]}
      benefitsCta="This Christmas, give a gift that captures the love, laughter, and magic of your holidays. Create something they'll play every December for the rest of their lives."
      benefitsCtaText="Start Your Christmas Song"
      testimonialsTitle="Christmas Songs That Became Family Traditions"
      testimonialsLink="Read more holiday stories →"
      readyCta="Ready to Create a Christmas Song Gift?"
      readyDescription="Make this Christmas unforgettable. Create a personalized song that captures the magic of your holidays and becomes a family tradition for years to come."
      relatedTitle="More Holiday Song Gift Ideas"
      relatedLinks={[
        { href: '/new-years-song-gift', title: "New Year's Song Gift", description: 'Ring in the new year with a custom song' },
        { href: '/thanksgiving-song-gift', title: 'Thanksgiving Song Gift', description: 'Express gratitude with a custom song' },
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'The perfect Christmas gift for mom' },
        { href: '/custom-song-for-dad', title: 'Song for Dad', description: 'Make his Christmas unforgettable' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'A hilarious holiday song for laughs' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Is a custom song a good Christmas gift?", answer: "Yes! A personalized Christmas song is the most unique and thoughtful gift under the tree. It becomes a tradition they listen to every holiday season." },
        { question: "Can the song have a Christmas theme?", answer: "Absolutely! We can incorporate holiday themes, winter imagery, and festive vibes into your personalized song." },
        { question: "When should I order for Christmas delivery?", answer: "We recommend ordering by December 20th for standard delivery. Express delivery is available through December 23rd." },
      ]}
    />
  );
}
