import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Friendship Song Gift | Custom Personalized Friendship Song | SongGift',
  description: "Celebrate your friendship with a personalized song gift. We craft a custom friendship song from your shared memories. 24–48 hr delivery.",
  openGraph: { title: 'Friendship Song Gift | Custom Personalized Friendship Song | SongGift', description: "Celebrate your friendship with a custom personalized song.", url: 'https://www.songgift.app/friendship-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="friendship-song-gift"
      breadcrumbTitle="Friendship Song Gift"
      heroTitle="Celebrate Your Friendship With a Custom Song That Captures Your Bond"
      heroDescription="True friends are rare. Celebrate the ones who stuck around, showed up, and made your life infinitely better with a personalized song that captures your friendship in all its glory."
      ctaText="Create a Friendship Song"
      stepsTitle="How to Create the Perfect Friendship Song"
      steps={[
        { title: 'Share Your Story', description: "Tell us about your friendship — how you met, your craziest adventures, the tough times you've survived, and why this person is irreplaceable." },
        { title: 'We Write Your Anthem', description: 'We create a song that celebrates your friendship — funny, heartfelt, nostalgic, or all of the above.' },
        { title: 'Celebrate Your Bond', description: "Give them a song that makes them laugh and cry at the same time. This is the friendship anthem you've always deserved." },
      ]}
      benefitsTitle="Why a Custom Song Is the Ultimate Friendship Gift"
      benefitsSubtitle="Because Real Friends Deserve Real Recognition"
      benefits={[
        { title: 'Celebrates What Matters', description: "In a world of surface-level connections, real friendship is rare. A custom song honors that bond in a way that's authentic, personal, and impossible to forget." },
        { title: 'Your Friendship Anthem', description: "Every legendary friendship needs its own song. This becomes the track you blast on road trips, send on tough days, and play at every reunion." },
      ]}
      benefitsCta="Real friends are irreplaceable. Show them they matter with a song that celebrates your friendship."
      benefitsCtaText="Start Your Friendship Song"
      testimonialsTitle="Friendship Songs That Strengthened Bonds"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Friendship Song?"
      readyDescription="Celebrate the friend who's been there through everything. Create a personalized song that captures your bond and gives them something to treasure."
      relatedTitle="More Song Gift Ideas"
      relatedLinks={[
        { href: '/custom-song-for-best-friend', title: 'Song for Best Friend', description: 'The ultimate bestie gift' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Add humor to your friendship' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Celebrate their birthday" },
        { href: '/custom-song-for-sister', title: 'Song for Sister', description: 'She\'s basically family' },
        { href: '/custom-song-for-brother', title: 'Song for Brother', description: 'Brotherhood in music' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "What is a good gift for a friend?", answer: "A personalized friendship song is one of the most unique and meaningful gifts you can give a friend. It celebrates your bond in a way no other gift can." },
        { question: "Can the song include inside jokes?", answer: "Absolutely! Inside jokes, shared memories, and funny moments are what make friendship songs special. Include everything you want." },
        { question: "Is this good for going-away or farewell gifts?", answer: "Yes! Friendship songs are incredibly popular as going-away gifts, farewell tributes, and long-distance friendship reminders." },
      ]}
    />
  );
}
