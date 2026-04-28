import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Husband | Personalized Song Gift for Him | SongGift',
  description: "Create a heartfelt custom song for your husband. We craft personalized lyrics from your love story. Delivered in 24–3�5 business days. The perfect anniversary, birthday, or Father's Day gift. Starting at $79.",
  openGraph: { title: 'Custom Song for Husband | Personalized Song Gift for Him | SongGift', description: "Show your husband how much he means to you with a personalized song gift. We, 3–5 day delivery.", url: 'https://www.songgift.app/custom-song-for-husband' },
};

export default function CustomSongForHusband() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-husband"
      breadcrumbTitle="Custom Song for Husband"
      heroTitle="Create a Custom Song That Captures What Your Husband Means to You"
      heroDescription="He's your partner, your best friend, your rock. Show your husband how grateful you are for everything he does with a personalized song that celebrates the man you married and the life you've built together."
      ctaText="Create His Song Now"
      stepsTitle="How to Create a Meaningful Song for Your Husband"
      steps={[
        { title: 'Share Your Appreciation', description: "Tell us what makes him special — his strength, his humor, how he supports you, and all the reasons you're proud to call him your husband." },
        { title: 'We Create His Song', description: 'We craft a heartfelt song that honors your husband and expresses everything you want him to know.' },
        { title: 'Give Him the Surprise', description: 'Watch him be moved by a song that celebrates who he is and how much he means to you and your family.' },
      ]}
      benefitsTitle="Why Your Husband Will Be Touched by This Gift"
      benefitsSubtitle="A Heartfelt Way to Show Your Husband He's Appreciated"
      benefits={[
        { title: 'Recognizes His Efforts', description: "Men often don't hear enough appreciation for all they do. A custom song acknowledges his hard work, his love for the family, and the ways he makes your life better every day." },
        { title: "Something He'll Actually Keep", description: "Unlike ties or gadgets, a personalized song becomes something he's genuinely proud of. He'll share it with friends and listen to it whenever he needs a reminder of how loved he is." },
      ]}
      benefitsCta="Show your husband that he deserves recognition for being the amazing man, partner, and father he is. Give him a gift that honors everything he does."
      benefitsCtaText="Start Creating His Song"
      testimonialsTitle="Husbands Are Moved by Their Custom Songs"
      testimonialsLink="Read more heartfelt stories →"
      readyCta="Ready to Create His Song?"
      readyDescription="Your husband works hard for your family every day. Surprise him with a personalized song that shows how much you notice, appreciate, and love him."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
        { href: '/reviews', title: 'Customer Reviews', description: "Read real stories from customers who've created unforgettable song gifts" },
        { href: '/faq', title: 'Frequently Asked Questions', description: 'Get answers to common questions about our custom song creation process' },
        { href: '/custom-song-for-wife', title: 'Custom Song for Wife', description: 'Create a romantic song that shows your wife how much she means to you' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your journey together with a personalized anniversary song' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Give them a birthday gift they'll remember forever — their own song" },
      ]}
      seoTitle="The Ultimate Personalized Gift for Your Husband"
      seoContent={`<p>Shopping for the man who has everything? A <strong>custom song for your husband</strong> is the one gift he never saw coming — and the one he'll never forget. Whether it's your <strong>wedding anniversary</strong>, his <strong>birthday</strong>, <strong>Father's Day</strong>, or just because you want him to know how loved he is, a personalized song speaks louder than any card or gadget.</p>
<p>At SongGift, we take your real story and turn it into a beautifully produced, radio-quality song. You share the details — his personality, your favorite memories, the little things he does that make your heart full — and we do the rest. Choose from <strong>acoustic, pop, country, R&B, worship</strong>, and more.</p>
<p>Every <strong>personalized song for husbands</strong> is delivered digitally in <strong>24–3�5 business days</strong>, with rush delivery available. It's the kind of gift that makes a grown man cry — in the best possible way. With a 30-day money-back guarantee and 100% satisfaction promise, there's zero risk and all reward.</p>`}
      faqs={[
        { question: 'What makes a custom song a good gift for my husband?', answer: "Men rarely receive deeply personal gifts. A custom song that celebrates who he is — his sacrifices, his humor, his love for the family — is something he'll treasure and replay for years." },
        { question: 'How long does it take to receive my husband\'s custom song?', answer: 'Standard delivery is 24–3�5 business days. Express delivery (within 24 hours) is available for an additional $39 — perfect for last-minute gifts.' },
        { question: 'Can I surprise him with the song at a party or event?', answer: 'Absolutely! Many customers play the song at anniversary dinners, birthday parties, or family gatherings for maximum impact. We deliver high-quality audio files you can play anywhere.' },
      ]}
    />
  );
}
