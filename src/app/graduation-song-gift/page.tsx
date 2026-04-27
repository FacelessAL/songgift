import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Graduation Song Gift | Custom Personalized Graduation Song | SongGift',
  description: "Celebrate their graduation with a custom song gift. Perfect for high school, college, or any milestone graduation. We, 24–48 hr delivery.",
  openGraph: { title: 'Graduation Song Gift | Custom Personalized Graduation Song | SongGift', description: "Celebrate their achievement with a personalized graduation song.", url: 'https://www.songgift.app/graduation-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="graduation-song-gift"
      breadcrumbTitle="Graduation Song Gift"
      heroTitle="Celebrate Their Graduation With a Custom Song They'll Remember Forever"
      heroDescription="They put in the work, made the sacrifices, and earned this moment. Honor their achievement with a personalized song that captures their journey, your pride, and everything that's ahead."
      ctaText="Create a Graduation Song"
      stepsTitle="How to Create the Perfect Graduation Song"
      steps={[
        { title: 'Share Their Journey', description: "Tell us about the graduate — their challenges, their triumphs, the moments that defined their journey, and the bright future ahead." },
        { title: 'We Craft Their Anthem', description: 'We create an uplifting, personalized song that celebrates their achievement and inspires what comes next.' },
        { title: 'Make Graduation Legendary', description: "Play it at the party, share it at the ceremony, or gift it privately. It's the soundtrack to their next chapter." },
      ]}
      benefitsTitle="Why a Custom Graduation Song Is the Perfect Gift"
      benefitsSubtitle="Because This Milestone Deserves More Than a Card and Cash"
      benefits={[
        { title: 'Honors Their Hard Work', description: "Graduation is the culmination of years of effort. A custom song acknowledges every late night, every challenge overcome, and every moment that led to this achievement." },
        { title: 'A Gift for Every Chapter', description: "They'll listen to this song before job interviews, on tough days, and at every future milestone — a reminder that they earned this and can accomplish anything." },
      ]}
      benefitsCta="They worked hard to get here. Give them a gift that celebrates their journey and inspires their future."
      benefitsCtaText="Start Their Graduation Song"
      testimonialsTitle="Graduation Songs That Inspired the Next Chapter"
      testimonialsLink="Read more celebration stories →"
      readyCta="Ready to Create a Graduation Song?"
      readyDescription="Whether it's high school, college, or beyond — celebrate their achievement with a personalized song that captures this incredible milestone."
      relatedTitle="More Celebration Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-son', title: 'Song for Son', description: 'Celebrate your son with a custom song' },
        { href: '/custom-song-for-daughter', title: 'Song for Daughter', description: 'Create a beautiful song for your daughter' },
        { href: '/custom-song-for-teacher', title: 'Song for Teacher', description: 'Thank the teachers who made it possible' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: 'Celebrate with a custom song' },
        { href: '/custom-song-for-best-friend', title: 'Song for Best Friend', description: 'Celebrate your friendship' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Is a custom song a good graduation gift?", answer: "Yes! A personalized graduation song celebrates their achievement and the journey that got them there. It becomes a keepsake they treasure for life." },
        { question: "Can I play it at the graduation party?", answer: "Absolutely! We deliver high-quality audio files you can play at any party or event." },
        { question: "Can the song be from the whole family?", answer: "Yes! Many families combine messages, memories, and well-wishes from parents, siblings, and grandparents." },
      ]}
    />
  );
}
