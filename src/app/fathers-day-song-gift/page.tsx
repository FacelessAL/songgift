import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: "Father's Day Song Gift | Custom Song for Dad | SongGift",
  description: "Create a personalized Father's Day song gift your dad will treasure forever. We craft a custom song honoring everything he does. 24–48 hr delivery.",
  openGraph: { title: "Father's Day Song Gift | Custom Song for Dad | SongGift", description: "Make this Father's Day one he'll never forget with a custom song.", url: 'https://www.songgift.app/fathers-day-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="fathers-day-song-gift"
      breadcrumbTitle="Father's Day Song Gift"
      heroTitle="Make This Father's Day One He'll Never Forget With a Song Written Just for Him"
      heroDescription="He's coached your games, fixed your car, and pretended to hate the cat. This Father's Day, give your dad a gift that actually says what he needs to hear — a custom song made for him."
      ctaText="Create His Father's Day Song"
      stepsTitle="How to Create the Perfect Father's Day Surprise"
      steps={[
        { title: 'Tell His Story', description: "Share what makes your dad the best — his dad jokes, his sacrifices, his wisdom, and the moments that made you who you are." },
        { title: 'We Honor Him in Song', description: "We create a powerful Father's Day song that captures everything he means to your family." },
        { title: "Watch Dad Get Emotional", description: "Play his song and watch the toughest guy you know try not to cry. Spoiler: he will. And it will be amazing." },
      ]}
      benefitsTitle="Why a Custom Song Is the Best Father's Day Gift"
      benefitsSubtitle="Because He Already Has Enough Ties and Grilling Sets"
      benefits={[
        { title: "Finally Tells Him How You Feel", description: "Dads hear \"Happy Father's Day\" once a year. A custom song gives him something deeper — a real message about how much his family appreciates everything he does." },
        { title: "A Gift He'll Actually Brag About", description: "He won't brag about another mug. But a custom song? He'll play it for his coworkers, his buddies, and anyone who will listen." },
      ]}
      benefitsCta="This Father's Day, give your dad something he'll treasure more than any power tool. Give him his own song."
      benefitsCtaText="Start His Father's Day Song"
      testimonialsTitle="Father's Day Songs That Made Dads Emotional"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create His Father's Day Song?"
      readyDescription="Don't settle for another generic gift. Create a personalized song that makes this the best Father's Day he's ever had."
      relatedTitle="More Gift Ideas for Dad"
      relatedLinks={[
        { href: '/custom-song-for-dad', title: 'Custom Song for Dad', description: "A personalized song for dad — any day of the year" },
        { href: '/custom-song-for-grandparents', title: 'Song for Grandpa', description: "Honor grandpa with a custom song" },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift he'll remember" },
        { href: '/retirement-song-gift', title: 'Retirement Song', description: 'Celebrate his next chapter' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious song he\'ll love' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What is a meaningful Father's Day gift?", answer: "A custom song that honors who your dad is and everything he's done is the most meaningful Father's Day gift you can give." },
        { question: "Will my dad actually get emotional?", answer: "Yes! Even the toughest dads get emotional when they hear a song made specifically about them. It's the element of surprise combined with genuine love." },
        { question: "Can multiple siblings contribute to the song?", answer: "Absolutely! Many families collaborate on the details to create a song from the whole family." },
      ]}
    />
  );
}
