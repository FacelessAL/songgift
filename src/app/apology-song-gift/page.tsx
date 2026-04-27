import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Apology Song Gift | Custom Personalized Sorry Song | SongGift',
  description: "Say sorry with a personalized apology song. We craft a custom song expressing your genuine remorse and love. 24–48 hr delivery.",
  openGraph: { title: 'Apology Song Gift | Custom Personalized Sorry Song | SongGift', description: "Say sorry in the most meaningful way — with a custom apology song.", url: 'https://www.songgift.app/apology-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="apology-song-gift"
      breadcrumbTitle="Apology Song Gift"
      heroTitle="When 'Sorry' Isn't Enough — Say It With a Custom Apology Song"
      heroDescription="You messed up. It happens. But a text or flowers won't cut it this time. Create a personalized apology song that shows you're genuinely sorry, you understand what went wrong, and you're willing to go the extra mile to make it right."
      ctaText="Create an Apology Song"
      stepsTitle="How to Create the Perfect Apology Song"
      steps={[
        { title: 'Own What Happened', description: "Tell us what went wrong, what you should have done differently, and most importantly — what this person means to you and why making it right matters." },
        { title: 'We Craft Your Apology', description: "We create a sincere, heartfelt song that says sorry in a way that's impossible to ignore." },
        { title: 'Make Things Right', description: "Send them the song. Let the music do the talking. An apology this creative and heartfelt is hard to resist." },
      ]}
      benefitsTitle="Why an Apology Song Actually Works"
      benefitsSubtitle="Because Actions Speak Louder Than Words"
      benefits={[
        { title: 'Shows You Really Mean It', description: "Anyone can say sorry. Creating a custom apology song proves you took real time, effort, and thought to make things right. That kind of effort is hard to ignore." },
        { title: 'Breaks Through the Walls', description: "When someone's upset, they might not want to listen. But a song? A song sneaks past the defenses. It's disarming, creative, and shows vulnerability in the best way." },
      ]}
      benefitsCta="You can't undo what happened, but you can show them you care enough to do something extraordinary to make it right."
      benefitsCtaText="Start Your Apology Song"
      testimonialsTitle="Apology Songs That Actually Worked"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create an Apology Song?"
      readyDescription="When words fail, music speaks. Create a personalized apology song that shows you're truly sorry and willing to go above and beyond to make things right."
      relatedTitle="More Custom Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-wife', title: 'Song for Wife', description: 'Show her you care deeply' },
        { href: '/custom-song-for-girlfriend', title: 'Song for Girlfriend', description: 'Win her heart back' },
        { href: '/custom-song-for-husband', title: 'Song for Husband', description: 'Make things right with music' },
        { href: '/custom-song-for-boyfriend', title: 'Song for Boyfriend', description: 'Say sorry creatively' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Sometimes humor heals' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can a song really help me apologize?", answer: "Yes! A personalized apology song shows vulnerability, effort, and genuine remorse in a way that words alone often can't express." },
        { question: "Will the song mention what happened?", answer: "You control the content. The song can be general or specific — whatever feels right for your situation. We handle it with care and sensitivity." },
        { question: "What tone should an apology song have?", answer: "Most apology songs blend sincerity with hope. We create songs that express genuine remorse while looking forward to healing and a better future together." },
      ]}
    />
  );
}
