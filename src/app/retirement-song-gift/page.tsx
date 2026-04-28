import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Retirement Song Gift | Custom Personalized Retirement Song | SongGift',
  description: "Celebrate their retirement with a custom song gift. Honor their career and legacy with a personalized song. We, 3–5 day delivery.",
  openGraph: { title: 'Retirement Song Gift | Custom Personalized Retirement Song | SongGift', description: "Send them off into retirement with a personalized custom song.", url: 'https://www.songgift.app/retirement-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="retirement-song-gift"
      breadcrumbTitle="Retirement Song Gift"
      heroTitle="Celebrate Their Retirement With a Custom Song That Honors Their Journey"
      heroDescription="Decades of hard work, dedication, and impact deserve more than a gold watch. Create a personalized retirement song that celebrates their career, their character, and the exciting chapter ahead."
      ctaText="Create a Retirement Song"
      stepsTitle="How to Create the Perfect Retirement Song"
      steps={[
        { title: 'Share Their Story', description: "Tell us about their career — the milestones, the funny moments, the people they impacted, and what makes their retirement so well-deserved." },
        { title: 'We Honor Their Career', description: 'We create a fun, heartfelt song that celebrates their journey and gets the whole retirement party on their feet.' },
        { title: 'Make the Party Legendary', description: "Play it at the retirement party and watch decades of coworkers laugh, cry, and celebrate the person who made the workplace better." },
      ]}
      benefitsTitle="Why a Custom Retirement Song Is the Ultimate Send-Off"
      benefitsSubtitle="Because They Earned More Than a Cake and a Card"
      benefits={[
        { title: 'Celebrates Their Legacy', description: "A retirement song captures everything they brought to their career — the leadership, the laughs, the late nights, and the lasting impact on everyone around them." },
        { title: 'The Best Retirement Party Gift', description: "It becomes the highlight of the celebration — the moment everyone remembers. Better than any plaque, trophy, or gift basket." },
      ]}
      benefitsCta="They dedicated their career to excellence. Send them off with a song that matches their impact."
      benefitsCtaText="Start Their Retirement Song"
      testimonialsTitle="Retirement Songs That Stole the Party"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Retirement Song?"
      readyDescription="Give them the send-off they deserve. Create a personalized song that celebrates their career and kicks off their next great adventure."
      relatedTitle="More Celebration Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-dad', title: 'Song for Dad', description: 'Honor your dad with a personalized song' },
        { href: '/custom-song-for-teacher', title: 'Song for Teacher', description: 'Thank a retiring teacher' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Add humor to the celebration' },
        { href: '/thank-you-song-gift', title: 'Thank You Song', description: 'Express your gratitude' },
        { href: '/corporate-song-gift', title: 'Corporate Song Gift', description: 'Songs for work celebrations' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Is a custom song a good retirement gift?", answer: "Yes! A personalized retirement song honors their career, achievements, and the impact they made. Colleagues and family love gifting these." },
        { question: "Can a whole office or team contribute?", answer: "Absolutely! Many teams pool memories, inside jokes, and messages to create a meaningful retirement song from the whole group." },
        { question: "Can the song be played at the retirement party?", answer: "Yes! We deliver high-quality audio files perfect for playing at any event or gathering." },
      ]}
    />
  );
}
