import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Custom Song for Wife | Personalized Song Gift for Her | SongGift',
  description: "Create a romantic custom song for your wife. Personalized lyrics, we, delivered in 24–48 hours. The perfect anniversary, birthday, or just-because gift she'll treasure forever. Starting at $79.",
  openGraph: {
    title: 'Custom Song for Wife | Personalized Song Gift for Her | SongGift',
    description: 'Turn your love story into a personalized song your wife will treasure forever. We, 24–48 hr delivery, 100% satisfaction guarantee.',
    url: 'https://www.songgift.app/custom-song-for-wife',
  },
};

export default function CustomSongForWife() {
  return (
    <LandingPageTemplate
      slug="custom-song-for-wife"
      breadcrumbTitle="Custom Song for Wife"
      heroTitle="Create a Custom Song That Shows Your Wife How Much She Means to You"
      heroDescription="Your marriage is a beautiful story worth celebrating. Turn your shared memories, inside jokes, and deepest feelings into a personalized song that captures the essence of your love."
      ctaText="Create Her Song Now"
      stepsTitle="How to Create the Perfect Song for Your Wife"
      steps={[
        { title: 'Share Your Love Story', description: 'Tell us about your journey together — how you met, your wedding day, what makes her laugh, and why you fell in love.' },
        { title: 'We Craft Your Song', description: 'We transform your story into a beautiful, personalized song that captures her heart.' },
        { title: 'Present Your Gift', description: "Watch her face light up as she hears your love story transformed into a song she'll treasure forever." },
      ]}
      benefitsTitle="Why a Custom Song Is the Perfect Gift for Your Wife"
      benefitsSubtitle="More Meaningful Than Traditional Anniversary Gifts"
      benefits={[
        { title: 'Celebrates Your Unique Bond', description: 'Unlike generic gifts, a custom song is created specifically from your relationship. It includes your special moments, shared dreams, and the little things that make your marriage extraordinary.' },
        { title: "A Keepsake She'll Treasure", description: "While flowers fade and jewelry can be lost, a song lasts forever. She can listen to it whenever she wants to feel loved and remember why you're perfect together." },
      ]}
      benefitsCta="Show your wife that your love deserves more than a store-bought gift. Give her something as unique and beautiful as your relationship."
      benefitsCtaText="Start Creating Her Song"
      testimonialsTitle="Wives Love Their Custom Songs"
      testimonialsLink="Read more customer stories →"
      readyCta="Ready to Create Her Song?"
      readyDescription="Don't wait for a special occasion. Show your wife how much she means to you with a gift that's as unique and beautiful as your love story."
      relatedTitle="More Custom Song Gift Ideas"
      relatedLinks={[
        { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
        { href: '/reviews', title: 'Customer Reviews', description: "Read real stories from customers who've created unforgettable song gifts" },
        { href: '/faq', title: 'Frequently Asked Questions', description: 'Get answers to common questions about our custom song creation process' },
        { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your journey together with a personalized anniversary song' },
        { href: '/custom-song-for-girlfriend', title: 'Custom Song for Girlfriend', description: 'Turn your love story into a song your girlfriend will treasure forever' },
        { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Give them a birthday gift they'll remember forever — their own song" },
      ]}
      seoTitle="Why a Personalized Song Is the Most Romantic Gift for Your Wife"
      seoContent={`<p>Finding the perfect gift for your wife can feel overwhelming, especially when you want something that truly captures how much she means to you. A <strong>custom song for your wife</strong> is more than a gift — it's a love letter set to music, a personalized keepsake she can listen to anytime she needs a reminder of your love.</p>
<p>At SongGift, we turn your real love story into a one-of-a-kind song. Whether you're celebrating an <strong>anniversary</strong>, her <strong>birthday</strong>, <strong>Valentine's Day</strong>, or simply want to surprise her on a random Tuesday, a personalized song says "I love you" in a way no store-bought gift ever could.</p>
<p>Our process is simple: you share your story — how you met, your wedding day, inside jokes, the little things that make your relationship special — and we craft a beautiful, radio-quality song around your words. Choose from genres like <strong>pop, R&B, acoustic, country</strong>, or <strong>worship</strong> to match her taste. Every song is <strong>delivered digitally in 24–48 hours</strong>, with express delivery available for last-minute gifts.</p>
<p>A <strong>personalized love song for your wife</strong> isn't just a gift — it becomes a family heirloom. She'll play it on your anniversary, at family dinners, and when she needs to feel close to you. It's the kind of thoughtful, romantic gesture that shows her she married the right person.</p>`}
      faqs={[
        { question: 'How do I create a custom song for my wife?', answer: 'Simply fill out our song creation form with details about your relationship — how you met, special memories, what you love about her — and we will craft a personalized song within 24–48 hours.' },
        { question: 'What occasions are best for gifting a personalized song to my wife?', answer: 'Custom songs make incredible gifts for anniversaries, birthdays, Valentine\'s Day, Mother\'s Day, Christmas, or just because. Many husbands order songs simply to surprise their wife on an ordinary day.' },
        { question: 'Can I choose the music style for my wife\'s custom song?', answer: 'Absolutely! You can choose from pop, R&B/soul, acoustic, country, worship, cinematic, and more. You can also specify a male or female vocalist and share musical inspirations.' },
        { question: 'What if my wife doesn\'t like the song?', answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied, we\'ll work with you until it\'s perfect or issue a full refund.' },
      ]}
    />
  );
}
