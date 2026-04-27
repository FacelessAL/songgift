import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Thank You Song Gift | Custom Personalized Gratitude Song | SongGift',
  description: "Express your gratitude with a personalized thank you song gift. We craft a custom song of appreciation. 24–48 hr delivery.",
  openGraph: { title: 'Thank You Song Gift | Custom Personalized Gratitude Song | SongGift', description: "Say thank you in the most meaningful way — with a custom song.", url: 'https://www.songgift.app/thank-you-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="thank-you-song-gift"
      breadcrumbTitle="Thank You Song Gift"
      heroTitle="Say Thank You in the Most Meaningful Way Possible — With a Custom Song"
      heroDescription="Some people change your life, support you, and ask for nothing in return. A personalized thank you song lets them know their impact was noticed, appreciated, and will never be forgotten."
      ctaText="Create a Thank You Song"
      stepsTitle="How to Create the Perfect Thank You Song"
      steps={[
        { title: 'Share Your Gratitude', description: "Tell us who you're thanking, what they did, how it impacted your life, and why you want them to know their kindness mattered." },
        { title: 'We Express It in Music', description: 'We create a heartfelt song that captures your gratitude in a way that words alone never could.' },
        { title: 'Make Them Feel Valued', description: "Give them a gift that shows their impact. Watch them realize they made a real difference — and that someone noticed." },
      ]}
      benefitsTitle="Why a Thank You Song Means More Than Any Card"
      benefitsSubtitle="Because Real Gratitude Deserves Real Effort"
      benefits={[
        { title: 'Shows You Really Noticed', description: "A thank you card takes 30 seconds. A custom song proves you took real time to reflect on what they did and craft something worthy of their kindness." },
        { title: 'A Reminder They Matter', description: "People who help others rarely hear how much it meant. A thank you song becomes a permanent reminder that their kindness changed someone's life." },
      ]}
      benefitsCta="The people who've helped you deserve to know it. Give them a thank you they'll remember forever."
      benefitsCtaText="Start Your Thank You Song"
      testimonialsTitle="Thank You Songs That Made a Real Impact"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Thank You Song?"
      readyDescription="Express your gratitude in the most meaningful way possible. Create a personalized song that tells them exactly how much they mattered."
      relatedTitle="More Meaningful Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-teacher', title: 'Song for Teacher', description: 'Thank a teacher who changed your life' },
        { href: '/custom-song-for-mom', title: 'Song for Mom', description: 'Thank your mom with music' },
        { href: '/custom-song-for-dad', title: 'Song for Dad', description: 'Show your dad your gratitude' },
        { href: '/retirement-song-gift', title: 'Retirement Song', description: 'Thank them for their career' },
        { href: '/mothers-day-song-gift', title: "Mother's Day Song", description: 'The ultimate thank you' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "When should I give a thank you song?", answer: "Thank you songs are perfect for anyone who has made a difference in your life — mentors, caregivers, friends, family members, or anyone you want to appreciate." },
        { question: "Is a thank you song a good corporate gift?", answer: "Yes! Custom thank you songs are popular for employee appreciation, client gifts, and recognizing team achievements." },
        { question: "Can I express gratitude for a specific event?", answer: "Absolutely! Whether you want to thank someone for their support during a difficult time, years of friendship, or a specific act of kindness, we tailor the song to your story." },
      ]}
    />
  );
}
