import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Proposal Song Gift | Custom Song to Pop the Question | SongGift',
  description: "Pop the question with a personalized proposal song. We craft a custom song that tells your love story. Make the most memorable proposal ever. 24–48 hr delivery.",
  openGraph: { title: 'Proposal Song Gift | Custom Song to Pop the Question | SongGift', description: "Make your proposal unforgettable with a custom song.", url: 'https://www.songgift.app/proposal-song-gift' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="proposal-song-gift"
      breadcrumbTitle="Proposal Song Gift"
      heroTitle="Pop the Question With a Custom Song That Tells Your Love Story"
      heroDescription="You've found the one. Now create a proposal moment that's as extraordinary as your love. A personalized song that plays as you get down on one knee — guaranteed to get a yes through the tears."
      ctaText="Create a Proposal Song"
      stepsTitle="How to Create the Perfect Proposal Song"
      steps={[
        { title: 'Tell Your Love Story', description: "Share how you met, your journey together, the moment you knew, and why you can't imagine life without them." },
        { title: 'We Create the Moment', description: 'We create a romantic, emotional song that builds to the perfect proposal moment — your love story in music.' },
        { title: 'Ask the Question', description: "Play the song, get on one knee, and watch the love of your life say yes through tears of joy. This is the moment you'll both remember forever." },
      ]}
      benefitsTitle="Why a Custom Song Makes the Perfect Proposal"
      benefitsSubtitle="The Most Romantic Way to Pop the Question"
      benefits={[
        { title: 'Makes the Moment Unforgettable', description: "A proposal song transforms a beautiful moment into a legendary one. The music, the lyrics, the surprise — it's the proposal story they'll tell everyone for the rest of their lives." },
        { title: 'Becomes Your Song Forever', description: "Long after the proposal, this song remains. Play it at your wedding, on your anniversaries, and every time you want to remember the moment your forever began." },
      ]}
      benefitsCta="The most important question of your life deserves the most extraordinary moment. Create a song that makes it perfect."
      benefitsCtaText="Start Your Proposal Song"
      testimonialsTitle="Proposal Songs That Got a 'Yes!' Every Time"
      testimonialsLink="Read more love stories →"
      readyCta="Ready to Create Your Proposal Song?"
      readyDescription="Make the most important moment of your life absolutely perfect. Create a personalized proposal song that tells your love story as you ask the question."
      relatedTitle="More Love Song Ideas"
      relatedLinks={[
        { href: '/engagement-song-gift', title: 'Engagement Song Gift', description: 'Celebrate the engagement' },
        { href: '/wedding-song-gift', title: 'Wedding Song Gift', description: 'Create a song for the big day' },
        { href: '/custom-song-for-girlfriend', title: 'Song for Girlfriend', description: 'A song she\'ll treasure' },
        { href: '/custom-song-for-boyfriend', title: 'Song for Boyfriend', description: 'Surprise him with a song' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your love story' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say" },
      ]}
      faqs={[
        { question: "How do I use a custom song in my proposal?", answer: "Many customers play the song as background music during the proposal, or have it playing when their partner walks into a decorated room. The possibilities are endless." },
        { question: "Will the song give away the surprise?", answer: "Not at all! The song tells your love story beautifully without explicitly saying \"will you marry me\" — unless you want it to. You control the content." },
        { question: "How far in advance should I order?", answer: "We recommend at least 3-5 days before the proposal. Express delivery (within 24 hours) is available for spontaneous romantics." },
      ]}
    />
  );
}
