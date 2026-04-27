import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: "Valentine's Day Song Gift | Custom Romantic Song | SongGift",
  description: "Create the most romantic Valentine's Day gift ever — a personalized love song. We, 24–48 hr delivery. Surprise them with a custom song they'll treasure.",
  openGraph: { title: "Valentine's Day Song Gift | Custom Romantic Song | SongGift", description: "The ultimate Valentine's Day gift — a custom love song made from your real story.", url: 'https://www.songgift.app/valentines-day-song-gift' },
};

export default function ValentinesDaySongGift() {
  return (
    <LandingPageTemplate
      slug="valentines-day-song-gift"
      breadcrumbTitle="Valentine's Day Song Gift"
      heroTitle="The Most Romantic Valentine's Day Gift — A Song Written Just for Them"
      heroDescription="This Valentine's Day, give something that comes from the heart. A personalized song that captures your love story, your inside jokes, and all the reasons they make your world brighter."
      ctaText="Create Their Valentine Song"
      stepsTitle="How to Create the Perfect Valentine's Day Surprise"
      steps={[
        { title: 'Share Your Love Story', description: 'Tell us about your relationship — how you met, your favorite moments together, and what makes them the love of your life.' },
        { title: 'We Write Your Song', description: 'We create a romantic, personalized song that tells your unique love story in beautiful music.' },
        { title: "Make Valentine's Magic", description: "Present them with a song that's uniquely yours. Watch their face light up as they hear your love story in music." },
      ]}
      benefitsTitle="Why a Custom Song Is the Ultimate Valentine's Day Gift"
      benefitsSubtitle="More Romantic Than Flowers and Chocolates Combined"
      benefits={[
        { title: 'Lasts Forever', description: "Flowers wilt, chocolates get eaten, but a personalized song becomes your couple's anthem. Every time they hear it, they'll remember this Valentine's Day and how much you love them." },
        { title: 'Shows Real Thought', description: "Anyone can buy roses at the store. A custom song proves you put time, creativity, and genuine thought into making this Valentine's Day special and memorable." },
      ]}
      benefitsCta="This Valentine's Day, give a gift that's as unique and beautiful as your love. Create something they'll treasure long after February 14th is over."
      benefitsCtaText="Start Their Valentine Song"
      testimonialsTitle="Valentine's Day Songs That Melted Hearts"
      testimonialsLink="Read more romantic stories →"
      readyCta="Ready to Create Their Valentine Song?"
      readyDescription="Don't settle for ordinary Valentine's gifts. Give them something extraordinary — a personalized song that celebrates your love and creates a memory you'll both cherish forever."
      relatedTitle="More Romantic Song Gift Ideas"
      relatedLinks={[
        { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
        { href: '/reviews', title: 'Customer Reviews', description: "Read real stories from customers who've created unforgettable song gifts" },
        { href: '/faq', title: 'Frequently Asked Questions', description: 'Get answers to common questions about our custom song creation process' },
        { href: '/custom-song-for-girlfriend', title: 'Custom Song for Girlfriend', description: 'Turn your love story into a song your girlfriend will treasure forever' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your journey together with a personalized anniversary song' },
        { href: '/custom-song-for-wife', title: 'Custom Song for Wife', description: 'Create a romantic song that shows your wife how much she means to you' },
      ]}
      faqs={[
        { question: "What is the best Valentine's Day gift?", answer: "A personalized love song is the ultimate Valentine's Day gift. It's romantic, thoughtful, and something they can listen to forever." },
        { question: "How far in advance should I order for Valentine's Day?", answer: "We recommend ordering at least 2-3 days before. However, express delivery (within 24 hours) is available for last-minute romantics." },
        { question: "Is this more romantic than flowers or chocolate?", answer: "A custom song captures your real love story in music. While flowers die and chocolate gets eaten, a personalized song lasts forever." },
      ]}
    />
  );
}
