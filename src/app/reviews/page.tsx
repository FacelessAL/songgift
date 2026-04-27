import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reviews & Sample Songs | SongGift',
  description: "Listen to sample songs we've created and hear from a real customer. See what SongGift can do for you.",
};


const relatedLinks = [
  { href: '/create', title: 'Create Your Song', description: 'Start creating your personalized song gift with our step-by-step process' },
  { href: '/custom-song-for-wife', title: 'Custom Song for Wife', description: 'Show your wife how much she means to you with a personalized song' },
  { href: '/valentines-day-song-gift', title: "Valentine's Day Song Gift", description: 'Give the most romantic Valentine\'s Day gift — a song written just for them' },
  { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', description: 'Celebrate your love story with a custom anniversary song' },
  { href: '/faq', title: 'Frequently Asked Questions', description: 'Get answers to common questions about our custom song creation process' },
  { href: '/birthday-song-gift', title: 'Birthday Song Gift', description: "Make their birthday unforgettable with a personalized song gift" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-bg-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Reviews &amp; Sample Songs
          </h1>
          <p className="text-text-muted text-lg">
            Listen to songs we&apos;ve created and hear from a real customer.
          </p>
        </div>
      </section>

      {/* Video Review */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
            Customer Reaction
          </h2>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm max-w-xl mx-auto">
            <div className="rounded-xl overflow-hidden mb-4 bg-black">
              <video
                src="/reaction-song.mp4"
                className="w-full aspect-video object-cover"
                controls
                preload="metadata"
              />
            </div>
            <p className="text-sm text-text-muted text-center">Watch a real customer hearing their custom song for the first time.</p>
          </div>
        </div>
      </section>

      {/* Listen to Real Songs */}
      <section className="py-16 sm:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Listen to Songs We&apos;ve Created
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Every song is unique and tailored to each customer&apos;s story. Listen to real songs we&apos;ve made for real people.
          </p>
          <Link
            href="/playlist"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
          >
            Listen to Our Playlist →
          </Link>
        </div>
      </section>

      {/* Why Custom Songs Touch Hearts */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Why Custom Songs Touch Hearts
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Music has the power to capture emotions that words alone cannot express. When you gift a personalized song, you&apos;re giving someone a piece of your heart—a melody that tells your unique story and creates a lasting memory they&apos;ll treasure forever.
          </p>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-bg-light text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Share Your Experience
          </h2>
          <p className="text-text-muted mb-6">
            Received or gifted a custom song? We&apos;d love to hear about your experience! Send us a video, photo, or written review and we&apos;ll feature it here.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 max-w-md mx-auto">
            <p className="text-text-muted text-sm mb-4">Email us your review, photos, or video:</p>
            <a href="mailto:support@songgift.app" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors">
              <Mail size={18} />
              support@songgift.app
            </a>
            <div className="mt-6">
              <Link
                href="mailto:support@songgift.app"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                Send Your Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-12" style={{ fontFamily: 'var(--font-serif)' }}>
            Create Your Perfect Song Gift
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
