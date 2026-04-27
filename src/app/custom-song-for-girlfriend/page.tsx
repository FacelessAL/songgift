import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Girlfriend | Personalized Romantic Song Gift | SongGift',
  description: "Create a personalized song for your girlfriend that captures your love story. We, 24–48 hr delivery. The most romantic gift she'll ever receive.",
  openGraph: { title: 'Custom Song for Girlfriend | Romantic Personalized Song | SongGift', description: "Surprise your girlfriend with a custom love song. We turn your story into music.", url: 'https://www.songgift.app/custom-song-for-girlfriend' },
};

export default function CustomSongForGirlfriend() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-girlfriend"
      breadcrumbTitle="Custom Song for Girlfriend"
      heroTitle="Turn Your Love Story Into a Song Your Girlfriend Will Treasure Forever"
      heroDescription="Every relationship has its own soundtrack of moments. Create a personalized song that captures your journey together — from your first date to all the reasons you can't imagine life without her."
      ctaText="Create Her Song Now"
      stepsTitle="How to Surprise Your Girlfriend With Her Own Song"
      steps={[
        { title: 'Tell Your Story', description: "Share how you met, your favorite memories together, what makes her special, and why you're falling deeper in love every day." },
        { title: 'We Create Magic', description: 'We transform your relationship into a beautiful, romantic song that\'s uniquely yours.' },
        { title: 'Watch Her Reaction', description: "Present her with a song that tells your love story. Get ready for tears of joy and a moment you'll both remember forever." },
      ]}
      benefitsTitle="Why Your Girlfriend Will Fall in Love With This Gift"
      benefitsSubtitle="The Most Romantic Gift You Can Give Your Girlfriend"
      benefits={[
        { title: 'Shows You Really Listen', description: "A custom song proves you pay attention to the little things — her favorite memories, the way she laughs, what makes her feel loved. It's thoughtfulness turned into music." },
        { title: 'Creates a Lasting Memory', description: "Years from now, she'll still get butterflies when she hears \"your song.\" It becomes the soundtrack to your relationship — something only the two of you share." },
      ]}
      benefitsCta="Skip the predictable gifts. Give her something that shows how much thought, love, and creativity you put into making her happy."
      benefitsCtaText="Start Creating Her Song"
      testimonialsTitle="Girlfriends Are Amazed by Their Custom Songs"
      testimonialsLink="See more love stories →"
      readyCta="Ready to Create Her Song?"
      readyDescription="Make your next date night unforgettable. Surprise your girlfriend with a personalized song that captures everything you love about her and your relationship."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
        { href: '/reviews', title: 'Customer Reviews', description: "See what others say about their experiences" },
      ]}
      seoTitle="Create the Most Romantic Gift Your Girlfriend Has Ever Received"
      seoContent={`<p>Looking for a truly unique and romantic gift for your girlfriend? A <strong>custom song for your girlfriend</strong> transforms your real love story into a custom-produced song she can listen to forever. It's personal, it's creative, and it's guaranteed to make her cry happy tears.</p>
<p>At SongGift, <strong>we</strong> take the details you share — how you met, your inside jokes, what makes her special — and craft a <strong>radio-quality personalized song</strong> in her favorite genre. Pop, acoustic, R&B, country — you choose. Delivered digitally in <strong>24–48 hours</strong>.</p>
<p>Whether it's for her <strong>birthday</strong>, your <strong>anniversary</strong>, <strong>Valentine's Day</strong>, or just because you want her to know she's loved, a <strong>personalized love song</strong> is the kind of gift that becomes "your song" forever.</p>`}
      faqs={[
        { question: 'How do I order a custom song for my girlfriend?', answer: 'Fill out our simple form with details about your relationship and she will receive a custom personalized song within 24–48 hours.' },
        { question: 'Is a custom song a good Valentine\'s Day gift for my girlfriend?', answer: "Absolutely! A personalized song is one of the most romantic Valentine's Day gifts you can give. It shows incredible thoughtfulness and creativity." },
        { question: 'What if I\'m not a good writer?', answer: 'No worries! Just share bullet points, memories, or even voice notes. We will craft beautiful lyrics from whatever you provide.' },
      ]}
    />
  );
}
