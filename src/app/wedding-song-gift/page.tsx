import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Wedding Song Gift | Custom Song for Weddings & Receptions | SongGift',
  description: "Create a custom wedding song for the big day. Perfect for first dances, father-daughter dances, mother-son dances, or wedding gifts. We, 24–48 hr delivery.",
  openGraph: { title: 'Wedding Song Gift | Custom Song for Weddings & Receptions | SongGift', description: "Make their wedding unforgettable with a custom song.", url: 'https://www.songgift.app/wedding-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="wedding-song-gift"
      breadcrumbTitle="Wedding Song Gift"
      heroTitle="Create a Custom Wedding Song That Makes Their Big Day Even More Magical"
      heroDescription="Whether it's for the first dance, a father-daughter moment, or a gift to the happy couple — a personalized wedding song turns an unforgettable day into something truly once-in-a-lifetime."
      ctaText="Create a Wedding Song"
      stepsTitle="How to Create the Perfect Wedding Song"
      steps={[
        { title: 'Share the Love Story', description: "Tell us about the couple — how they met, their journey, what makes them perfect for each other, and the moment you want to capture in music." },
        { title: 'We Create Their Song', description: 'We craft a beautiful, romantic wedding song that captures the essence of their love and the joy of their special day.' },
        { title: 'Make the Day Magical', description: "Play it during the ceremony, the first dance, or the reception. Grab the tissues — there won't be a dry eye in the house." },
      ]}
      benefitsTitle="Why a Custom Wedding Song Is the Perfect Gift"
      benefitsSubtitle="The Most Memorable Part of Any Wedding"
      benefits={[
        { title: 'A First Dance Like No Other', description: "Instead of dancing to someone else's song, create a first dance song that's actually about THEIR love story. It becomes the defining moment of the reception." },
        { title: 'A Gift the Couple Will Treasure', description: "Long after the cake is eaten and the flowers are gone, this song remains — a beautiful reminder of the day they said \"I do\" and the love that brought them there." },
      ]}
      benefitsCta="Make their wedding day legendary. Create a song that captures the love, the joy, and the magic of this once-in-a-lifetime moment."
      benefitsCtaText="Start Their Wedding Song"
      testimonialsTitle="Wedding Songs That Made Everyone Cry"
      testimonialsLink="Read more wedding stories →"
      readyCta="Ready to Create a Wedding Song?"
      readyDescription="Whether you're the couple, a parent, or a guest — give the gift of a personalized wedding song that makes the big day even more unforgettable."
      relatedTitle="More Wedding & Love Song Ideas"
      relatedLinks={[
        { href: '/proposal-song-gift', title: 'Proposal Song', description: 'Pop the question with a custom song' },
        { href: '/engagement-song-gift', title: 'Engagement Song Gift', description: 'Celebrate the engagement with music' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate years of love' },
        { href: '/custom-song-for-wife', title: 'Song for Wife', description: 'Show your wife your love' },
        { href: '/custom-song-for-husband', title: 'Song for Husband', description: 'Honor the man you married' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can I use a custom song for a first dance?", answer: "Yes! Many couples use SongGift songs as their first dance song. We create romantic, danceable songs in any genre and tempo you prefer." },
        { question: "Can I order a wedding song as a gift for the couple?", answer: "Absolutely! Custom wedding songs are one of our most popular gifts from parents, siblings, and friends of the couple." },
        { question: "How far in advance should I order a wedding song?", answer: "We recommend at least 1 week before the wedding, though our standard 24–48 hour delivery means even last-minute orders are possible." },
      ]}
    />
  );
}
