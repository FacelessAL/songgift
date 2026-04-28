import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: "Mother's Day Song Gift | Custom Song for Mom | SongGift",
  description: "Create a personalized Mother's Day song gift your mom will treasure forever. We craft a custom song from your real memories. 3–5 day delivery.",
  openGraph: { title: "Mother's Day Song Gift | Custom Song for Mom | SongGift", description: "Make this Mother's Day unforgettable with a custom song for mom.", url: 'https://www.songgift.app/mothers-day-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="mothers-day-song-gift"
      breadcrumbTitle="Mother's Day Song Gift"
      heroTitle="Make This Mother's Day Unforgettable With a Song Written Just for Her"
      heroDescription="Flowers wilt. Brunch ends. But a personalized song lasts forever. This Mother's Day, give your mom a gift that matches the size of her love — a custom song made from your heart."
      ctaText="Create Her Mother's Day Song"
      stepsTitle="How to Create the Perfect Mother's Day Surprise"
      steps={[
        { title: 'Share Your Love', description: "Tell us what makes your mom amazing — her sacrifices, her laugh, your favorite memories, and the things she does that nobody else notices." },
        { title: 'We Write Her Song', description: "We transform your words into a beautiful Mother's Day song that captures everything she means to your family." },
        { title: "Make Her Mother's Day", description: "Play her song at brunch, on a card, or just the two of you. Get ready for the most emotional Mother's Day ever." },
      ]}
      benefitsTitle="Why a Custom Song Is the Best Mother's Day Gift"
      benefitsSubtitle="Because She's Already Got Enough Candles and Bathrobes"
      benefits={[
        { title: "A Gift That Matches Her Love", description: "Your mom's love is extraordinary — her gift should be too. A personalized song shows you put real thought into something that celebrates who she is." },
        { title: "She'll Play It Every Year", description: "Long after Mother's Day is over, she'll press play on this song whenever she needs a reminder of how much her family loves and appreciates her." },
      ]}
      benefitsCta="This Mother's Day, give your mom something she'll actually treasure forever. Not another gift card — a song."
      benefitsCtaText="Start Her Mother's Day Song"
      testimonialsTitle="Mother's Day Songs That Brought the Whole Family to Tears"
      testimonialsLink="Read more family stories →"
      readyCta="Ready to Create Her Mother's Day Song?"
      readyDescription="Don't wait until the last minute. Create a personalized song that makes this the best Mother's Day she's ever had."
      relatedTitle="More Gift Ideas for Mom"
      relatedLinks={[
        { href: '/custom-song-for-mom', title: 'Custom Song for Mom', description: "A personalized song for mom — any day of the year" },
        { href: '/custom-song-for-grandparents', title: 'Song for Grandma', description: "Honor grandma with a custom song" },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift she'll remember forever" },
        { href: '/thank-you-song-gift', title: 'Thank You Song', description: 'Express your gratitude with music' },
        { href: '/custom-song-for-wife', title: 'Song for Wife', description: "She's a mom too — celebrate her" },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What is the best Mother's Day gift?", answer: "A personalized song is rated the #1 Mother's Day gift by our customers. It captures your real feelings and memories in a song she can listen to forever." },
        { question: "When should I order for Mother's Day?", answer: "We recommend ordering at least 2-3 days before Mother's Day. Express delivery is available for last-minute gifts." },
        { question: "Will my mom actually cry?", answer: "Based on customer feedback, approximately 95% of moms cry happy tears when they hear their personalized song. It's that powerful." },
      ]}
    />
  );
}
