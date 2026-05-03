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
            <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Home
            </Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-text-dark font-medium truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>
        </div>
      </section>

      {/* Hero with decorative elements */}
      <section className="relative bg-gradient-to-b from-bg-light via-white to-white pb-10 pt-8 sm:pt-14 sm:pb-16 overflow-hidden">
        {/* Decorative SVG blobs */}
        <svg className="absolute top-0 left-0 w-64 h-64 text-accent/5 -translate-x-1/3 -translate-y-1/3" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <svg className="absolute bottom-0 right-0 w-48 h-48 text-pink-100 translate-x-1/4 translate-y-1/4" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <svg className="absolute top-10 right-10 w-6 h-6 text-accent/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                {tag}
              </span>
            ))}
          </div>
          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-dark leading-tight mb-5">
            {title}
          </h1>
          {/* Description */}
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">{description}</p>
          {/* Meta row */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></svg>
              SongGift Team
            </span>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center py-2 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/30" />
          <svg className="w-4 h-4 text-accent/40" fill="currentColor" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM21 16c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" /></svg>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/30" />
        </div>
      </div>

      {/* Body + Sidebar */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
            {/* Main content */}
            <article className="blog-article prose prose-lg max-w-none">
              {children}

              {/* FAQ section */}
              {faqs.length > 0 && (
                <div className="mt-16 not-prose">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </div>
                    <h2 className="font-playfair text-2xl font-bold text-text-dark">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <details key={i} className="group bg-gradient-to-r from-bg-light to-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                        <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-semibold text-text-dark hover:bg-gray-50/50 transition-colors">
                          <span className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0">Q</span>
                            {faq.question}
                          </span>
                          <svg className="w-4 h-4 text-accent flex-shrink-0 ml-3 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed border-t border-gray-50 pt-4 ml-9">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6">
              <div className="sticky top-6 space-y-6">
                {/* Key Takeaways */}
                <div className="relative bg-gradient-to-br from-accent/5 via-pink-50 to-white rounded-2xl p-6 border border-accent/15 shadow-sm overflow-hidden">
                  <svg className="absolute -bottom-4 -right-4 w-24 h-24 text-accent/5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <h3 className="relative font-bold text-text-dark text-sm uppercase tracking-wider mb-5 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </span>
                    Key Takeaways
                  </h3>
                  <ul className="relative space-y-3.5">
                    {keyTakeaways.map((kt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                        <span className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        {kt.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA card */}
                <div className="relative bg-gradient-to-br from-footer via-gray-800 to-footer text-white rounded-2xl p-6 overflow-hidden shadow-lg">
                  <svg className="absolute top-0 right-0 w-32 h-32 text-white/5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM21 16c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" /></svg>
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                    </div>
                    <h3 className="font-bold text-sm mb-2">{ctaTitle}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">{ctaDescription}</p>
                    <Link href="/create" className="block text-center px-4 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors shadow-md">
                      Start Creating — $79
                    </Link>
                    <div className="flex items-center justify-center gap-3 mt-3 text-[10px] text-gray-400">
                      <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>30-day guarantee</span>
                      <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>Unlimited revisions</span>
                    </div>
                  </div>
                </div>

                {/* Related Links */}
                {relatedLinks.length > 0 && (
                  <div className="bg-bg-light rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-text-dark text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      Related Pages
                    </h3>
                    <ul className="space-y-2.5">
                      {relatedLinks.map((rl, i) => (
                        <li key={i}>
                          <Link href={rl.href} className="text-xs text-text-muted hover:text-accent font-medium transition-colors flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-accent/5">
                            <svg className="w-3.5 h-3.5 text-accent/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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

      {/* Mobile Key Takeaways */}
      <section className="lg:hidden py-8 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-accent/5 to-pink-50 rounded-2xl p-6 border border-accent/10 mb-6">
            <h3 className="font-bold text-text-dark text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {keyTakeaways.map((kt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                  <span className="w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
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
                  <Link key={i} href={rl.href} className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors inline-flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    {rl.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA with decorative elements */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-br from-accent/5 via-pink-50 to-white overflow-hidden">
        <svg className="absolute top-0 left-0 w-40 h-40 text-accent/5 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <svg className="absolute bottom-0 right-0 w-56 h-56 text-pink-100/50 translate-x-1/3 translate-y-1/3" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-text-dark mb-4">{ctaTitle}</h2>
          <p className="text-text-muted mb-7 text-base leading-relaxed">{ctaDescription}</p>
          <Link href="/create" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            Create Your Song — $79
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-text-muted">
            <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>30-day guarantee</span>
            <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>Unlimited revisions</span>
            <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>3–5 day delivery</span>
          </div>
        </div>
      </section>
    </>
  );
}
