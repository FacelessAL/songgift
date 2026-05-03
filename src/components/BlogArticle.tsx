import Link from 'next/link';

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface KeyTakeaway {
  text: string;
}

export interface BlogArticleProps {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  readTime: string;
  tags: string[];
  keyTakeaways: KeyTakeaway[];
  children: React.ReactNode;
  faqs: BlogFAQ[];
  relatedLinks: RelatedLink[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function BlogArticle({
  slug,
  title,
  description,
  publishDate,
  modifiedDate,
  readTime,
  tags,
  keyTakeaways,
  children,
  faqs,
  relatedLinks,
  ctaTitle = 'Ready to Create Your Custom Song?',
  ctaDescription = 'Turn your story into a one-of-a-kind song. Starting at $79 with 3–5 day delivery.',
}: BlogArticleProps) {
  const canonicalUrl = `https://www.songgift.app/blog/${slug}`;
  const modified = modifiedDate || publishDate;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: canonicalUrl,
    datePublished: publishDate,
    dateModified: modified,
    author: { '@type': 'Organization', name: 'SongGift', url: 'https://www.songgift.app' },
    publisher: {
      '@type': 'Organization',
      name: 'SongGift',
      url: 'https://www.songgift.app',
      logo: { '@type': 'ImageObject', url: 'https://www.songgift.app/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.songgift.app' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.songgift.app/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: canonicalUrl },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Breadcrumbs */}
      <section className="bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-text-dark font-medium truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-bg-light pb-8 pt-6 sm:pt-10 sm:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-4">
            {title}
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-4">{description}</p>
          <div className="flex items-center justify-center gap-4 text-xs text-text-muted">
            <time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">
            {/* Main content */}
            <article className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-text-dark prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-accent prose-a:font-semibold hover:prose-a:text-accent-hover prose-li:text-text-muted prose-strong:text-text-dark">
              {children}

              {/* FAQ section */}
              {faqs.length > 0 && (
                <div className="mt-12 not-prose">
                  <h2 className="font-playfair text-2xl font-bold text-text-dark mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <details key={i} className="group bg-bg-light rounded-xl border border-gray-100 overflow-hidden">
                        <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-text-dark hover:bg-gray-50 transition-colors">
                          {faq.question}
                          <svg className="w-4 h-4 text-text-muted flex-shrink-0 ml-3 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6">
              {/* Key Takeaways */}
              <div className="sticky top-6 space-y-6">
                <div className="bg-gradient-to-br from-accent/5 to-pink-50 rounded-2xl p-6 border border-accent/10">
                  <h3 className="font-bold text-text-dark text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {keyTakeaways.map((kt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
                        {kt.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="bg-footer text-white rounded-2xl p-6">
                  <h3 className="font-bold text-sm mb-2">{ctaTitle}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">{ctaDescription}</p>
                  <Link href="/create" className="block text-center px-4 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors">
                    Start Creating — $79
                  </Link>
                </div>

                {/* Related Links */}
                {relatedLinks.length > 0 && (
                  <div className="bg-bg-light rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-text-dark text-sm uppercase tracking-wider mb-4">Related Pages</h3>
                    <ul className="space-y-2">
                      {relatedLinks.map((rl, i) => (
                        <li key={i}>
                          <Link href={rl.href} className="text-xs text-accent hover:text-accent-hover font-medium transition-colors flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            {rl.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobile Key Takeaways (shown below article on small screens) */}
      <section className="lg:hidden py-8 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-accent/5 to-pink-50 rounded-2xl p-6 border border-accent/10 mb-6">
            <h3 className="font-bold text-text-dark text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {keyTakeaways.map((kt, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
                  {kt.text}
                </li>
              ))}
            </ul>
          </div>
          {relatedLinks.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-text-dark text-sm uppercase tracking-wider mb-4">Related Pages</h3>
              <div className="flex flex-wrap gap-2">
                {relatedLinks.map((rl, i) => (
                  <Link key={i} href={rl.href} className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors">
                    {rl.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent/5 via-pink-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-text-dark mb-4">{ctaTitle}</h2>
          <p className="text-text-muted mb-6">{ctaDescription}</p>
          <Link href="/create" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors">
            Create Your Song — $79
          </Link>
          <p className="text-xs text-text-muted mt-4">30-day money-back guarantee · Unlimited revisions · 3–5 day delivery</p>
        </div>
      </section>
    </>
  );
}
