import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Anniversary Song Gift | Custom Personalized Anniversary Song | SongGift',
  description: "Celebrate your anniversary with a personalized song that captures your journey together. We, 24–48 hr delivery. The most romantic anniversary gift.",
  openGraph: { title: 'Anniversary Song Gift | Custom Personalized Anniversary Song | SongGift', description: "Turn your love story into a custom anniversary song.", url: 'https://www.songgift.app/anniversary-song-gift' },
};

export default function AnniversarySongGift() {
  return (
    <LandingPageTemplate
      slug="anniversary-song-gift"
      breadcrumbTitle="Anniversary Song Gift"
      heroTitle="Celebrate Your Anniversary With a Song That Tells Your Love Story"
      heroDescription="Another year together deserves more than dinner and flowers. Honor your journey with a personalized song that captures every milestone, memory, and reason you're still choosing each other every day."
      ctaText="Create Your Anniversary Song"
      stepsTitle="How to Create the Perfect Anniversary Gift"
      steps={[
        { title: 'Tell Your Journey', description: "Share your story — from your wedding day to the challenges you've overcome, the dreams you've built, and the love that's grown stronger." },
        { title: 'We Honor Your Love', description: "We create a heartfelt song that celebrates your unique relationship and the beautiful life you've created together." },
        { title: 'Celebrate Together', description: 'Listen to your love story in music and remember why you fell in love — and why you keep falling in love — year after year.' },
      ]}
      benefitsTitle="Why Your Anniversary Deserves More Than a Restaurant Reservation"
      benefitsSubtitle="The Perfect Anniversary Gift for Couples Who Have Everything"
      benefits={[
        { title: 'Celebrates Your Growth', description: "Every anniversary marks another year of choosing each other. A custom song honors not just where you started, but how far you've come and the love that's deepened over time." },
        { title: 'Creates a New Tradition', description: 'Your anniversary song becomes something you can listen to every year, remembering this moment and adding new verses to your love story as it continues to unfold.' },
      ]}
      benefitsCta="Your love story deserves to be celebrated in a way that's as unique and enduring as your relationship. Give yourselves the gift of music."
      benefitsCtaText="Start Your Anniversary Song"
      testimonialsTitle="Anniversary Songs That Brought Tears of Joy"
      testimonialsLink="Read more anniversary stories →"
      readyCta="Ready to Create Your Anniversary Song?"
      readyDescription="Make this anniversary unforgettable. Create a personalized song that honors your journey together and celebrates the love that keeps growing stronger every year."
      relatedTitle="More Anniversary & Celebration Ideas"
      relatedLinks={[
        { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
        { href: '/reviews', title: 'Customer Reviews', description: "Read real stories from customers who've created unforgettable song gifts" },
        { href: '/faq', title: 'Frequently Asked Questions', description: 'Get answers to common questions about our custom song creation process' },
        { href: '/custom-song-for-wife', title: 'Custom Song for Wife', description: 'Create a romantic song that shows your wife how much she means to you' },
        { href: '/custom-song-for-husband', title: 'Custom Song for Husband', description: 'Create a meaningful song that captures what your husband means to you' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Give them a birthday gift they'll remember forever — their own song" },
      ]}
      faqs={[
        { question: "What is the most romantic anniversary gift?", answer: "A custom song that tells your love story is consistently rated the most romantic anniversary gift. It captures your real journey in music." },
        { question: "Is a personalized song good for a 1st anniversary?", answer: "Yes! Custom songs are perfect for any anniversary milestone — 1st, 5th, 10th, 25th, 50th, or any year in between." },
        { question: "Can I include our wedding vows or first dance details?", answer: "Absolutely! Many couples include their vows, how they met, their wedding day memories, and other meaningful details in their anniversary song." },
      ]}
    />
  );
}
