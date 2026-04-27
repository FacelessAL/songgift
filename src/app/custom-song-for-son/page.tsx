import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Son | Personalized Song Gift from Parents | SongGift',
  description: "Create a personalized song for your son that celebrates who he is and everything he means to you. Perfect for birthdays, graduations, or just because. We, 24–48 hr delivery.",
  openGraph: { title: 'Custom Song for Son | Personalized Song Gift | SongGift', description: 'Give your son a custom song that captures your pride and love.', url: 'https://www.songgift.app/custom-song-for-son' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-son"
      breadcrumbTitle="Custom Song for Son"
      heroTitle="Create a Custom Song That Celebrates Your Son and Everything He Means to You"
      heroDescription="From his first steps to the man he's becoming, your son's journey is worth celebrating. Give him a personalized song that captures your pride, your love, and all the moments that make him extraordinary."
      ctaText="Create His Song Now"
      stepsTitle="How to Create the Perfect Song for Your Son"
      steps={[
        { title: 'Share Your Pride', description: "Tell us about your son — his personality, his achievements, the moments that made you proud, and what you want him to always remember." },
        { title: 'We Craft His Song', description: 'We create a powerful, personalized song that captures the bond between parent and son.' },
        { title: 'Give Him Something Lasting', description: "Present him with a song he can carry with him forever — a reminder that he's loved, supported, and believed in." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Your Son"
      benefitsSubtitle="A Gift That Grows With Him"
      benefits={[
        { title: 'Captures Your Bond', description: "Whether he's 5 or 35, a custom song preserves the unique relationship between you and your son in a way that photos and letters can't match." },
        { title: 'A Message He\'ll Carry Forever', description: "As he grows, moves away, and builds his own life, this song becomes an anchor — a reminder of home, family, and unconditional love." },
      ]}
      benefitsCta="Your son needs to know how proud you are. Give him a gift that says it all — beautifully, musically, and from the heart."
      benefitsCtaText="Start Creating His Song"
      testimonialsTitle="Parents Love Gifting Custom Songs to Their Sons"
      testimonialsLink="Read more family stories →"
      readyCta="Ready to Create a Song for Your Son?"
      readyDescription="Whether it's his birthday, graduation, wedding, or just because — give your son a song that tells him everything you want him to know."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-daughter', title: 'Custom Song for Daughter', description: 'Create a beautiful song for your daughter' },
        { href: '/graduation-song-gift', title: 'Graduation Song Gift', description: 'Celebrate their achievement with a custom song' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift they'll remember forever" },
        { href: '/wedding-song-gift', title: 'Wedding Song Gift', description: 'Give the perfect gift for their special day' },
        { href: '/custom-song-for-mom', title: 'Custom Song for Mom', description: 'Show your mom how much she means to you' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their experiences" },
      ]}
      seoTitle="A Personalized Song Your Son Will Carry With Him Forever"
      seoContent={`<p>A <strong>custom song for your son</strong> is more than a gift — it's a message he'll carry with him through every chapter of his life. Whether he's graduating, getting married, turning 18, or you just want him to know how proud you are, a <strong>personalized song</strong> puts your love into music.</p>
<p>We craft each song from your real stories — his childhood memories, his achievements, the bond you share. Choose from <strong>pop, acoustic, rap, R&B, country, worship</strong>, and more. Every song is <strong>delivered in 24–48 hours</strong> with a 30-day satisfaction guarantee.</p>
<p>A <strong>personalized song gift for your son</strong> becomes an anchor — something he can listen to when he's far from home and needs a reminder of how much he's loved.</p>`}
      faqs={[
        { question: 'When is the best time to give my son a custom song?', answer: 'Popular occasions include birthdays, graduations, weddings, milestone achievements, or when he moves away from home. Many parents also order songs simply to express their pride and love.' },
        { question: 'Can I include a message from multiple family members?', answer: 'Yes! Many families include messages and memories from both parents, siblings, and even grandparents to create a deeply meaningful song.' },
        { question: 'What genres work best for songs for sons?', answer: 'It depends on his taste! Popular choices include acoustic, pop, rap/spoken word, R&B, and country. You can also share his favorite artists as inspiration.' },
      ]}
    />
  );
}
