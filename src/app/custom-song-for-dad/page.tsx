import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Dad | Personalized Song Gift for Father | SongGift',
  description: "Create a heartfelt custom song for your dad. We turn your memories into a personalized song he'll treasure forever. Perfect for Father's Day, birthdays, or retirement. 3–5 day delivery.",
  openGraph: { title: 'Custom Song for Dad | Personalized Song Gift | SongGift', description: "Honor your dad with a custom song made from your real memories.", url: 'https://www.songgift.app/custom-song-for-dad' },
};

export default function Page() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-dad"
      breadcrumbTitle="Custom Song for Dad"
      heroTitle="Create a Custom Song That Honors Everything Your Dad Has Done for You"
      heroDescription="He taught you to ride a bike, helped you with homework, and always had your back. Give your dad a gift that finally says everything you've always wanted to tell him — a personalized song made just for him."
      ctaText="Create His Song Now"
      stepsTitle="How to Create the Perfect Song for Dad"
      steps={[
        { title: 'Share Your Story', description: "Tell us about your dad — his lessons, his humor, the moments that shaped you, and why he's your hero." },
        { title: 'We Craft His Song', description: 'We create a heartfelt song that captures the bond between you and your dad in a way words alone never could.' },
        { title: 'Surprise Him', description: "Watch the toughest guy you know get emotional as he hears a song that celebrates who he is and everything he means to you." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Dad"
      benefitsSubtitle="Because Dads Deserve More Than Ties and Gift Cards"
      benefits={[
        { title: 'Finally Says What He Needs to Hear', description: "Dads often don't hear how much they're appreciated. A custom song puts into words (and music) everything you've always wanted to say but didn't know how." },
        { title: "A Gift He'll Actually Treasure", description: "Forget the gadgets and socks. A personalized song is something he'll listen to on repeat, share with his friends, and keep forever as proof that he did a great job." },
      ]}
      benefitsCta="Your dad has always been there for you. Now it's your turn to show him what that means with a gift he'll never forget."
      benefitsCtaText="Start Creating His Song"
      testimonialsTitle="Dads Are Moved by Their Custom Songs"
      testimonialsLink="Read more stories →"
      readyCta="Ready to Create a Song for Dad?"
      readyDescription="Give your dad the recognition he deserves. Create a personalized song that celebrates the man who shaped who you are today."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/fathers-day-song-gift', title: "Father's Day Song Gift", description: "Make this Father's Day one he'll never forget" },
        { href: '/custom-song-for-mom', title: 'Custom Song for Mom', description: 'Create a beautiful song that shows your mom how much she means to you' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Give them a birthday gift they'll remember forever" },
        { href: '/retirement-song-gift', title: 'Retirement Song', description: 'Celebrate their career and next chapter with a custom song' },
        { href: '/funny-song-gift', title: 'Funny Song Gift', description: 'Create a hilarious custom song that will have everyone laughing' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their custom song experiences" },
      ]}
      seoTitle="The Perfect Personalized Gift to Honor Your Dad"
      seoContent={`<p>Finding a gift that truly honors your dad can be tough — he probably says he doesn't need anything. But a <strong>custom song for dad</strong> is the gift he never knew he needed and the one he'll never forget. We take your real stories and create a song that celebrates who he is.</p>
<p>Whether it's <strong>Father's Day</strong>, his <strong>birthday</strong>, <strong>retirement</strong>, or you just want him to know how much he means to you, a <strong>personalized song for your father</strong> captures the bond between you in a way nothing else can. Choose from <strong>acoustic, country, pop, R&B, worship</strong>, and more.</p>
<p>Every song is <strong>delivered in 24–3�5 business days</strong> with express options available. Backed by our <strong>30-day money-back guarantee</strong>, SongGift is the trusted choice for creating <strong>custom music gifts for dads</strong> that make even the toughest guys emotional.</p>`}
      faqs={[
        { question: "What is a good personalized gift for Dad?", answer: "A custom song is one of the most unique and meaningful personalized gifts for dads. It honors who he is with real memories set to music he can replay anytime." },
        { question: "Is a custom song a good Father's Day gift?", answer: "Yes! Custom songs are one of our most popular Father's Day gifts. Dads consistently say it's the most thoughtful gift they've ever received." },
        { question: 'Can I make the song funny or lighthearted?', answer: 'Absolutely! Many customers request a mix of heartfelt and humorous elements. Just share the tone you want and we will match it perfectly.' },
      ]}
    />
  );
}
