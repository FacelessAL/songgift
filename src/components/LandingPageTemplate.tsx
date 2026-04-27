import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getSongsForPage, songs as allSongs } from '@/lib/songs';
import SongCard from '@/components/SongCard';

interface Step {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface LandingPageProps {
  heroTitle: string;
  heroDescription: string;
  ctaText: string;
  steps: Step[];
  stepsTitle: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Benefit[];
  benefitsCta: string;
  benefitsCtaText: string;
  testimonialsTitle: string;
  testimonialsLink: string;
  readyCta: string;
  readyDescription: string;
  relatedTitle: string;
  relatedLinks: RelatedLink[];
  slug: string;
  breadcrumbTitle: string;
  seoTitle?: string;
  seoContent?: string;
  faqs?: FAQ[];
}


export default function LandingPageTemplate({
  heroTitle,
  heroDescription,
  ctaText,
  steps,
  stepsTitle,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  benefitsCta,
  benefitsCtaText,
  testimonialsTitle,
  testimonialsLink,
  readyCta,
  readyDescription,
  relatedTitle,
  relatedLinks,
  slug,
  breadcrumbTitle,
  seoTitle,
  seoContent,
  faqs,
}: LandingPageProps) {
  const canonicalUrl = `https://www.songgift.app/${slug}`;

  const defaultSeoTitle = `Everything You Need to Know About ${breadcrumbTitle}s`;
  const defaultSeoContent = `<p>At <strong>SongGift</strong>, we believe the most meaningful gifts come from the heart. A <strong>${breadcrumbTitle.toLowerCase()}</strong> is a custom-produced, one-of-a-kind song created from your real stories, memories, and emotions. We craft every note to capture the essence of your relationship.</p>
<p>Whether you're looking for the perfect <strong>birthday gift</strong>, <strong>anniversary surprise</strong>, <strong>holiday present</strong>, or a spontaneous way to say "I love you," a personalized song from SongGift is the gift that keeps giving. Choose from genres like <strong>pop, acoustic, R&B, country, worship, rap, and cinematic</strong> — and receive your finished song in just <strong>24–48 hours</strong>.</p>
<p>Every custom song comes with a <strong>30-day money-back guarantee</strong>, <strong>commercial usage rights</strong>, and <strong>digital delivery via email</strong> (MP3 & WAV). Express delivery is available for last-minute gifts. SongGift is the trusted choice for <strong>personalized music gifts</strong> that create unforgettable moments.</p>`;

  const resolvedSeoTitle = seoTitle || defaultSeoTitle;
  const resolvedSeoContent = seoContent || defaultSeoContent;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.songgift.app' },
      { '@type': 'ListItem', position: 2, name: breadcrumbTitle, item: canonicalUrl },
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: breadcrumbTitle,
    description: heroDescription,
    brand: { '@type': 'Brand', name: 'SongGift' },
    offers: {
      '@type': 'Offer',
      url: canonicalUrl,
      priceCurrency: 'USD',
      price: '79',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'SongGift' },
    },
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="text-text-dark font-medium">{breadcrumbTitle}</li>
          </ol>
        </div>
      </nav>

      {/* Hero — Light bg matching screenshots */}
      <section className="py-16 sm:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            {heroTitle}
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {heroDescription}
          </p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all text-lg shadow-lg shadow-accent/25"
          >
            {ctaText}
          </Link>
        </div>
      </section>

      {/* Steps — Pink circle emoji icons */}
      <section className="py-20 sm:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark text-center mb-16" style={{ fontFamily: 'var(--font-serif)' }}>
            {stepsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  {i === 0 && <span className="text-2xl">💝</span>}
                  {i === 1 && <span className="text-2xl">🎵</span>}
                  {i === 2 && <span className="text-2xl">🎁</span>}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark text-center mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            {benefitsTitle}
          </h2>
          <p className="text-text-muted text-lg text-center mb-12 font-semibold">{benefitsSubtitle}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border-l-4 border-l-accent border border-gray-100">
                <h3 className="text-lg font-bold text-text-dark mb-3">{b.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{b.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">{benefitsCta}</p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all text-lg"
            >
              {benefitsCtaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Songs */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark text-center mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Listen to Sample Songs
          </h2>
          <p className="text-text-muted text-lg text-center mb-12 max-w-2xl mx-auto">Here are some examples of the songs we create. Every song is unique and tailored to your story.</p>
          {(() => {
            const pageSongs = getSongsForPage(slug);
            const displaySongs = pageSongs.length > 0 ? pageSongs.slice(0, 3) : allSongs.slice(0, 3);
            return (
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {displaySongs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            );
          })()}
          <div className="text-center mt-8">
            <Link href="/playlist" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Listen to more samples <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ready CTA — White bg with two buttons */}
      <section className="py-20 sm:py-28 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            {readyCta}
          </h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">{readyDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/create"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-all text-lg"
            >
              Create Your Custom Song
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent font-semibold rounded-full hover:bg-pink-50 transition-all text-lg border-2 border-accent"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee Bar */}
      <section className="py-8 bg-bg-light border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className="text-sm text-text-dark font-medium">24–48 hour delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10"/></svg>
              <span className="text-sm text-text-dark font-medium">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span className="text-sm text-text-dark font-medium">Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="text-sm text-text-dark font-medium">Digital delivery via email</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            {resolvedSeoTitle}
          </h2>
          <div className="prose prose-sm sm:prose max-w-none text-text-muted leading-relaxed [&>p]:mb-4" dangerouslySetInnerHTML={{ __html: resolvedSeoContent }} />
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-bg-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-10" style={{ fontFamily: 'var(--font-serif)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-text-dark font-semibold text-sm hover:text-accent transition-colors list-none">
                    {faq.question}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-text-muted leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-12" style={{ fontFamily: 'var(--font-serif)' }}>
            {relatedTitle}
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
