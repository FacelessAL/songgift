import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Questions & Answers | SongGift',
  description: 'Find answers to common questions about our personalized song service.',
};

const faqs = [
  {
    question: 'How much does it cost?',
    answer: 'Our Custom Song Package starts at an affordable price and includes custom songwriting, recording, mixing, mastering, digital delivery, custom cover art, and unlimited revisions. Visit our Create page for current pricing details.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery is 3–5 business days. We also offer an express delivery option to get your custom song in just 24 hours — perfect for last-minute gifts!',
  },
  {
    question: 'How will I receive my song?',
    answer: 'Your song will be delivered digitally via email. You will receive high-quality MP3 and WAV files, along with your custom cover art and lyric sheet.',
  },
  {
    question: 'How will I know when my song is ready?',
    answer: "We'll send you email updates as your song progresses. Once it's complete, you'll receive your finished song (MP3 & WAV), cover art, and lyric sheet directly to your email.",
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: "Absolutely. We offer a full satisfaction guarantee. If you're not completely satisfied with your custom song after all revisions, we will provide a full refund within 30 days of final delivery.",
  },
  {
    question: 'Can I use the song commercially?',
    answer: 'Your custom song is licensed for personal use, including sharing and gifting. Commercial use, distribution, or resale requires a separate licensing agreement. Contact us for details.',
  },
  {
    question: 'Do you support languages other than English?',
    answer: 'Yes! We work with musicians who can create songs in multiple languages including Spanish, Portuguese, Filipino, French, and more. Let us know your language preference when you share your story.',
  },
];

const relatedLinks = [
  { href: '/create', title: 'Create Your Song', description: 'Start your personalized song journey with our easy step-by-step process' },
  { href: '/reviews', title: 'Customer Reviews', description: "Read real stories from customers who've created unforgettable song gifts" },
  { href: '/custom-song-for-girlfriend', title: 'Custom Song for Girlfriend', description: 'Turn your love story into a song your girlfriend will treasure forever' },
  { href: '/custom-song-for-husband', title: 'Custom Song for Husband', description: 'Create a meaningful song that captures what your husband means to you' },
  { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your journey together with a personalized anniversary song' },
  { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Give them a birthday gift they'll remember forever — their own song" },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-bg-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-text-muted text-lg">
            Find answers to common questions about our personalized song service.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-bg-light text-center">
        <div className="max-w-lg mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-text-dark mb-3">Still have questions?</h2>
            <p className="text-text-muted text-sm mb-5">
              Our support team is here to help you with any questions about your personalized song.
            </p>
            <a
              href="mailto:support@songgift.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-accent font-semibold rounded-full border-2 border-accent hover:bg-accent/5 transition-colors text-sm"
            >
              {/* Mail SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              support@songgift.com
            </a>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-12" style={{ fontFamily: 'var(--font-serif)' }}>
            Explore Our Custom Song Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-text-dark group-hover:text-accent transition-colors mb-2">{link.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
