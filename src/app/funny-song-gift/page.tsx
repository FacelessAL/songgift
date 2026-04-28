import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Funny Song Gift | Custom Comedy & Roast Song | SongGift',
  description: "Create a hilarious personalized funny song gift. We craft a custom comedy song perfect for birthdays, roasts, and parties. 3–5 day delivery.",
  openGraph: { title: 'Funny Song Gift | Custom Comedy & Roast Song | SongGift', description: "Create a hilarious custom song that will have everyone in tears from laughing.", url: 'https://www.songgift.app/funny-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="funny-song-gift"
      breadcrumbTitle="Funny Song Gift"
      heroTitle="Create a Hilarious Custom Song That Will Have Everyone in Tears — From Laughing"
      heroDescription="Sometimes the best gift is a good laugh. Create a personalized funny song that roasts your friend, celebrates someone's quirks, or just makes everyone at the party lose it. Comedy + music = the greatest gift ever."
      ctaText="Create a Funny Song"
      stepsTitle="How to Create the Perfect Funny Song"
      steps={[
        { title: 'Give Us the Dirt', description: "Tell us about the person — their embarrassing moments, their weird habits, the inside jokes, and anything that will make the song hilariously personal." },
        { title: 'We Write the Comedy', description: "We create a catchy, hilarious song that roasts them just the right amount. Think SNL meets Spotify." },
        { title: 'Watch Them Lose It', description: "Play the song and watch the room erupt. This is the gift that gets talked about for years. Maybe decades." },
      ]}
      benefitsTitle="Why a Funny Custom Song Is the Best Gift Ever"
      benefitsSubtitle="Because Everyone Loves a Good Roast"
      benefits={[
        { title: 'The Gift That Keeps on Giving', description: "They'll play it at every party, share it with everyone they know, and laugh just as hard the 100th time. A funny song never gets old." },
        { title: 'Perfect for Any Occasion', description: "Birthday roasts, bachelor parties, retirement send-offs, or just because — a funny custom song works for literally any celebration that needs more laughter." },
      ]}
      benefitsCta="Life's too short for boring gifts. Create a funny song that gives the gift of laughter and becomes an instant classic in your friend group."
      benefitsCtaText="Start Your Funny Song"
      testimonialsTitle="Funny Songs That Brought the House Down"
      testimonialsLink="Read more hilarious stories →"
      readyCta="Ready to Create a Funny Song?"
      readyDescription="Make them laugh until they cry. Create a personalized funny song that roasts, celebrates, and entertains in a way no other gift can."
      relatedTitle="More Fun Song Ideas"
      relatedLinks={[
        { href: '/custom-song-for-best-friend', title: 'Song for Best Friend', description: 'Roast your bestie with love' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: 'Funny birthday songs hit different' },
        { href: '/retirement-song-gift', title: 'Retirement Song', description: 'Send them off with laughs' },
        { href: '/custom-song-for-pet', title: 'Song for Your Pet', description: 'Pets are hilarious. Give them a song.' },
        { href: '/halloween-song-gift', title: 'Halloween Song', description: 'Funny spooky songs' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "Can you really make a funny custom song?", answer: "Yes! Funny songs are some of our most popular orders. We excel at comedy, roasts, and lighthearted humor set to catchy music." },
        { question: "Is a funny song good for a birthday party?", answer: "Absolutely! Funny birthday songs are our #1 comedy request. They get played at parties, shared on social media, and talked about for years." },
        { question: "Can I include embarrassing stories and inside jokes?", answer: "Yes! The more embarrassing, the better (within reason). Inside jokes, funny nicknames, and roast-worthy moments make the song legendary." },
      ]}
    />
  );
}
