import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Teacher | Teacher Appreciation Song Gift | SongGift',
  description: "Show your teacher appreciation with a personalized song gift. We create a unique song that honors their dedication. Perfect for Teacher Appreciation Week, end of year, or retirement.",
  openGraph: { title: 'Custom Song for Teacher | Teacher Appreciation Song | SongGift', description: 'Honor your teacher with a custom appreciation song.', url: 'https://www.songgift.app/custom-song-for-teacher' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-teacher"
      breadcrumbTitle="Custom Song for Teacher"
      heroTitle="Show Your Teacher How Much They've Changed Your Life With a Custom Song"
      heroDescription="They believed in you when you didn't believe in yourself. Honor the teacher, mentor, or coach who made a difference with a personalized song that captures their incredible impact."
      ctaText="Create Their Song Now"
      stepsTitle="How to Create the Perfect Song for a Teacher"
      steps={[
        { title: 'Share Their Impact', description: "Tell us about this special teacher — how they inspired you, the lessons that stuck, and the moments that changed your trajectory." },
        { title: 'We Craft Their Song', description: 'We create a heartfelt song that honors their dedication and the difference they made in your life.' },
        { title: 'Make Them Feel Appreciated', description: "Give them a gift that shows their work matters — a song that proves they changed a life and will never be forgotten." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for a Teacher"
      benefitsSubtitle="Because Great Teachers Deserve More Than an Apple"
      benefits={[
        { title: 'Shows Real Appreciation', description: "Gift cards and mugs are fine, but a custom song says \"you genuinely changed my life.\" It's the most meaningful way to show a teacher their work mattered." },
        { title: 'A Gift They\'ll Never Forget', description: "Teachers give so much and ask for so little in return. A personalized song becomes their most treasured reminder of why they chose this profession." },
      ]}
      benefitsCta="The teacher who changed your life deserves to know it. Give them a song that says thank you in a way they'll never forget."
      benefitsCtaText="Start Creating Their Song"
      testimonialsTitle="Teachers Are Touched by Their Custom Songs"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Song for Your Teacher?"
      readyDescription="Whether it's Teacher Appreciation Week, end of year, retirement, or just because — honor the educator who made a difference."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/thank-you-song-gift', title: 'Thank You Song Gift', description: 'Express gratitude with a personalized song' },
        { href: '/retirement-song-gift', title: 'Retirement Song Gift', description: 'Celebrate their career with a custom song' },
        { href: '/graduation-song-gift', title: 'Graduation Song Gift', description: 'Celebrate achievement with music' },
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'Show your mom how much she means to you' },
        { href: '/custom-song-for-dad', title: 'Song for Dad', description: 'Honor your dad with a personalized song' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: 'Is a custom song a good teacher appreciation gift?', answer: 'Yes! Teachers consistently say a personalized song is the most meaningful gift they have ever received from a student or parent.' },
        { question: 'Can a whole class contribute to the song?', answer: 'Absolutely! Many classes pool memories and messages together. The more personal details, the more special the song becomes.' },
        { question: 'When should I gift a custom song to a teacher?', answer: 'Popular times include Teacher Appreciation Week, end of school year, retirement celebrations, or anytime you want to show gratitude.' },
      ]}
    />
  );
}
