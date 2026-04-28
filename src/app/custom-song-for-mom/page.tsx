import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Mom | Personalized Song Gift for Mother | SongGift',
  description: "Create a heartfelt personalized song for your mom. We turn your memories into a custom song she'll treasure forever. Perfect for Mother's Day, birthdays, or just because. 3–5 day delivery.",
  openGraph: { title: 'Custom Song for Mom | Personalized Song Gift | SongGift', description: "Give your mom the gift of a lifetime — a custom song made from your real memories.", url: 'https://www.songgift.app/custom-song-for-mom' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-mom"
      breadcrumbTitle="Custom Song for Mom"
      heroTitle="Create a Custom Song That Shows Your Mom How Much She Means to You"
      heroDescription="She's been there for every milestone, every scraped knee, every triumph. Give your mom a gift as extraordinary as she is — a personalized song that celebrates everything she's done and everything she means to you."
      ctaText="Create Her Song Now"
      stepsTitle="How to Create the Perfect Song for Mom"
      steps={[
        { title: 'Share Your Memories', description: 'Tell us about your mom — her warmth, her sacrifices, your favorite memories together, and all the reasons she deserves to be celebrated.' },
        { title: 'We Craft Her Song', description: 'We transform your words into a heartfelt, beautiful song that captures your love and gratitude for everything she\'s done.' },
        { title: 'Make Her Day Special', description: 'Watch her eyes light up as she hears a song written just for her. Get ready for the biggest hug of your life.' },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Mom"
      benefitsSubtitle="Because She Deserves More Than Flowers and a Card"
      benefits={[
        { title: 'Says What Words Can\'t', description: 'Sometimes "thank you" and "I love you" don\'t feel like enough. A custom song expresses the depth of your gratitude in a way that ordinary words never could.' },
        { title: 'A Gift She\'ll Replay Forever', description: 'Unlike flowers that wilt or gifts that collect dust, a personalized song becomes her most treasured possession — something she\'ll listen to whenever she needs a reminder of how loved she is.' },
      ]}
      benefitsCta="Your mom gave you everything. Give her something that shows you noticed, you remember, and you're grateful for every moment."
      benefitsCtaText="Start Creating Her Song"
      testimonialsTitle="Moms Are Moved by Their Custom Songs"
      testimonialsLink="Read more heartfelt stories →"
      readyCta="Ready to Create a Song for Mom?"
      readyDescription="Don't wait for Mother's Day. Show your mom how much she means to you with a gift that's as unique and beautiful as her love."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/mothers-day-song-gift', title: "Mother's Day Song Gift", description: "Make this Mother's Day unforgettable with a personalized song" },
        { href: '/custom-song-for-dad', title: 'Custom Song for Dad', description: 'Create a meaningful song that captures what your dad means to you' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Give them a birthday gift they'll remember forever" },
        { href: '/thank-you-song-gift', title: 'Thank You Song', description: 'Express your gratitude with a personalized thank you song' },
        { href: '/custom-song-for-grandparents', title: 'Song for Grandparents', description: 'Honor your grandparents with a custom song they\'ll cherish' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their custom song experiences" },
      ]}
      seoTitle="Why a Personalized Song Is the Most Meaningful Gift for Mom"
      seoContent={`<p>Your mom has given you everything — her time, her love, her sacrifices. A <strong>custom song for mom</strong> is the one gift that truly matches the depth of your gratitude. At SongGift, we transform your real memories into a beautiful, radio-quality song she can listen to anytime.</p>
<p>Whether it's for <strong>Mother's Day</strong>, her <strong>birthday</strong>, <strong>Christmas</strong>, or simply because she deserves it, a <strong>personalized song for your mother</strong> says "thank you" and "I love you" in a way no card or bouquet ever could. Choose her favorite genre — <strong>pop, acoustic, R&B, worship, country</strong> — and we'll deliver her song in <strong>24–3�5 business days</strong>.</p>
<p>With a <strong>30-day money-back guarantee</strong> and happy customers, SongGift is trusted by families everywhere to create <strong>custom music gifts for moms</strong> that become cherished family heirlooms.</p>`}
      faqs={[
        { question: 'What is the best gift for Mom?', answer: 'A personalized song is one of the most meaningful gifts you can give your mom. It captures your real memories and feelings in music she can listen to anytime.' },
        { question: "Is a custom song a good Mother's Day gift?", answer: "Absolutely! A personalized song is the #1 rated Mother's Day gift on SongGift. It shows incredible thoughtfulness and makes moms cry happy tears every time." },
        { question: 'How do I create a song for my mom?', answer: 'Simply fill out our form with memories, feelings, and details about your mom. We handle the rest and deliver your song in 24–3�5 business days.' },
      ]}
    />
  );
}
