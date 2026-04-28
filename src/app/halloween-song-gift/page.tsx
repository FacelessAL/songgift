import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Halloween Song Gift | Custom Spooky Song | SongGift',
  description: "Create a fun personalized Halloween song! We craft a custom spooky, funny, or themed song perfect for Halloween parties. 3–5 day delivery.",
  openGraph: { title: 'Halloween Song Gift | Custom Spooky Song | SongGift', description: "Create a custom Halloween song that's spooky, funny, or both.", url: 'https://www.songgift.app/halloween-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="halloween-song-gift"
      breadcrumbTitle="Halloween Song Gift"
      heroTitle="Create a Custom Halloween Song That's Spooky, Fun, or Hilariously Creepy"
      heroDescription="Whether it's a haunted house anthem, a trick-or-treat theme song, or a spooky love song — we'll create a personalized Halloween song that makes your celebration legendary."
      ctaText="Create a Halloween Song"
      stepsTitle="How to Create the Perfect Halloween Song"
      steps={[
        { title: 'Set the Mood', description: "Tell us the vibe — spooky, funny, creepy-cool, or kid-friendly. Share the story, the person, or the party you're creating this for." },
        { title: 'We Create the Magic', description: "We craft a custom Halloween song with just the right amount of spook, fun, and personality." },
        { title: 'Haunt Everyone\'s Ears', description: "Play it at your Halloween party, trick-or-treat outing, or haunted house. It's the song nobody expected and everyone will remember." },
      ]}
      benefitsTitle="Why a Custom Halloween Song Is the Ultimate Party Move"
      benefitsSubtitle="Because Monster Mash Has Had Its Run"
      benefits={[
        { title: 'Your Party, Your Anthem', description: "Every great party needs a signature song. A custom Halloween song makes your celebration one-of-a-kind and gives your guests something to talk about." },
        { title: 'Fun for All Ages', description: "Whether it's a kid's Halloween party or an adults-only costume bash, we create the perfect song to match the vibe and the audience." },
      ]}
      benefitsCta="Make this Halloween legendary. Create a custom song that's as creative and fun as your costume."
      benefitsCtaText="Start Your Halloween Song"
      testimonialsTitle="Halloween Songs That Stole the Show"
      testimonialsLink="Read more fun stories →"
      readyCta="Ready to Create a Halloween Song?"
      readyDescription="Make this Halloween one for the history books. Create a personalized song that adds the perfect soundtrack to your spookiest celebration."
      relatedTitle="More Fun Song Gift Ideas"
      relatedLinks={[
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song' },
        { href: '/christmas-song-gift', title: 'Christmas Song Gift', description: 'Holiday songs for the whole family' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "A birthday gift they'll remember" },
        { href: '/custom-song-for-pet', title: 'Song for Your Pet', description: 'Even your pet deserves a theme song' },
        { href: '/fourth-of-july-song-gift', title: '4th of July Song', description: 'Patriotic songs for your celebration' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What kind of Halloween songs can you create?", answer: "We create everything from spooky themed songs to funny Halloween party anthems to personalized trick-or-treat songs for kids." },
        { question: "Can I play it at a Halloween party?", answer: "Absolutely! A custom Halloween song is the ultimate party conversation starter. We deliver high-quality audio files for any speaker system." },
        { question: "Can you make a Halloween song for kids?", answer: "Yes! We create age-appropriate, fun Halloween songs that kids love. Perfect for school parties, trick-or-treating, or family celebrations." },
      ]}
    />
  );
}
