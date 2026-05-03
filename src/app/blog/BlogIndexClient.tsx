'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
}

const PER_PAGE = 9;

const categoryIcons: Record<string, React.ReactNode> = {
  'Gift Ideas': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" /></svg>,
  'Personalized Gifts': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  'Behind the Scenes': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>,
  'Custom Songs': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>,
  'Comparison': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  'Gift Guide': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  'Occasions': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  'Tips & Guides': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
  'How-To': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  'Insights': <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
};

export default function BlogIndexClient({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const allTags = useMemo(() => Array.from(new Set(articles.flatMap((a) => a.tags))).sort(), [articles]);

  const filtered = useMemo(() => {
    let result = articles;
    if (activeTag) {
      result = result.filter((a) => a.tags.includes(activeTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [search, activeTag]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(PER_PAGE);
  }, [search, activeTag]);

  // Infinite scroll observer
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PER_PAGE, filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    setVisibleCount(PER_PAGE);
  }, [articles]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Home
            </Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-text-dark font-medium">Blog</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-bg-light via-white to-white pb-10 pt-8 sm:pt-14 sm:pb-14 overflow-hidden">
        <svg className="absolute top-0 right-0 w-72 h-72 text-accent/5 translate-x-1/3 -translate-y-1/3" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <svg className="absolute bottom-0 left-0 w-48 h-48 text-pink-100 -translate-x-1/4 translate-y-1/4" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full text-accent text-xs font-semibold mb-4">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" /></svg>
            {articles.length} Articles
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            The SongGift Blog
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Gift ideas, how-to guides, and insights into the world of personalized music gifts.
          </p>

          {/* Search bar */}
          <div className="max-w-lg mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); }}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent shadow-sm"
            />
            {search && (
              <button onClick={() => { setSearch(''); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => { setActiveTag(null); }}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border transition-all ${!activeTag ? 'bg-accent text-white border-accent shadow-md' : 'bg-white text-text-muted border-gray-200 hover:border-accent/30 hover:text-accent'}`}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border transition-all ${activeTag === tag ? 'bg-accent text-white border-accent shadow-md' : 'bg-white text-text-muted border-gray-200 hover:border-accent/30 hover:text-accent'}`}
              >
                {categoryIcons[tag] || <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>}
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {visible.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <p className="text-text-muted text-sm">No articles match your search. Try a different keyword or category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-accent/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Decorative corner */}
                  <svg className="absolute -top-6 -right-6 w-20 h-20 text-accent/5 group-hover:text-accent/10 transition-colors" fill="currentColor" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" /></svg>

                  <div className="relative">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 bg-accent/8 text-accent font-semibold rounded-full border border-accent/15">
                          {categoryIcons[tag]}
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="font-playfair text-lg font-bold text-text-dark group-hover:text-accent transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <svg className="w-3.5 h-3.5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <svg className="w-3.5 h-3.5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        {article.readTime}
                      </div>
                    </div>

                    {/* Read more indicator */}
                    <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Infinite scroll sentinel + loading indicator */}
          {hasMore && (
            <div ref={sentinelRef} className="flex flex-col items-center justify-center mt-12 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent/40 animate-bounce [animation-delay:0ms]" />
                <div className="w-2 h-2 rounded-full bg-accent/40 animate-bounce [animation-delay:150ms]" />
                <div className="w-2 h-2 rounded-full bg-accent/40 animate-bounce [animation-delay:300ms]" />
              </div>
              <span className="text-xs text-text-muted">Loading more articles...</span>
            </div>
          )}

          {/* Articles count indicator */}
          {!hasMore && filtered.length > PER_PAGE && (
            <p className="text-center text-xs text-text-muted mt-10">
              Showing all {filtered.length} articles
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-br from-accent/5 via-pink-50 to-white overflow-hidden">
        <svg className="absolute top-0 left-0 w-40 h-40 text-accent/5 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="currentColor" /></svg>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-text-dark mb-4">Ready to Create Your Custom Song?</h2>
          <p className="text-text-muted mb-6">Turn your story into a one-of-a-kind song. Starting at $79 with 3–5 day delivery.</p>
          <Link href="/create" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            Create Your Song — $79
          </Link>
        </div>
      </section>
    </>
  );
}
