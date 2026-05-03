import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Custom Song Gift Ideas, Tips & Guides | SongGift',
  description: 'Discover the best personalized gift ideas, learn how custom songs are made, get tips for writing the perfect song brief, and explore why music is the most meaningful gift you can give.',
  openGraph: {
    title: 'Blog | Custom Song Gift Ideas, Tips & Guides | SongGift',
    description: 'Discover the best personalized gift ideas, learn how custom songs are made, and explore why music is the most meaningful gift.',
    url: 'https://www.songgift.app/blog',
  },
};

const articles = [
  {
    slug: 'best-personalized-gift-ideas',
    title: 'Best Personalized Gift Ideas That Will Make Them Cry Happy Tears',
    description: 'Discover the most meaningful personalized gifts for any occasion — from custom songs to engraved keepsakes — and learn why personal beats expensive every time.',
    tags: ['Gift Ideas', 'Personalized Gifts'],
    date: '2025-05-03',
    readTime: '8 min read',
  },
  {
    slug: 'how-custom-songs-are-made',
    title: 'How Custom Songs Are Made — From Your Story to a Finished Track',
    description: 'Ever wondered what goes into creating a personalized song? Walk through the entire process — from filling out a brief to receiving your finished track.',
    tags: ['Behind the Scenes', 'Custom Songs'],
    date: '2025-05-03',
    readTime: '7 min read',
  },
  {
    slug: 'custom-song-vs-traditional-gifts',
    title: 'Custom Song vs Jewelry, Flowers & Other Gifts — An Honest Comparison',
    description: 'We compare custom songs to traditional gifts like jewelry, flowers, and experiences. Discover which gift creates the biggest emotional impact per dollar.',
    tags: ['Comparison', 'Gift Guide'],
    date: '2025-05-03',
    readTime: '7 min read',
  },
  {
    slug: 'occasions-for-custom-song-gift',
    title: '10 Occasions That Absolutely Deserve a Custom Song Gift',
    description: 'Birthdays, weddings, anniversaries, memorials, and more — explore the top occasions where a personalized song creates an unforgettable moment.',
    tags: ['Occasions', 'Gift Ideas'],
    date: '2025-05-03',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-write-a-song-brief',
    title: 'How to Write the Perfect Custom Song Brief — Tips, Examples & Mistakes to Avoid',
    description: 'Your brief is the blueprint for your song. Learn exactly what to include, see real examples, and avoid the most common mistakes people make.',
    tags: ['Tips & Guides', 'How-To'],
    date: '2025-05-03',
    readTime: '7 min read',
  },
  {
    slug: 'why-personalized-music-gifts',
    title: 'Why Personalized Music Is the Most Meaningful Gift You Can Give',
    description: 'The science and psychology behind why music triggers deeper emotions than any other gift — and how a custom song becomes a lifelong keepsake.',
    tags: ['Insights', 'Personalized Gifts'],
    date: '2025-05-03',
    readTime: '8 min read',
  },
];

export default function BlogIndex() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.songgift.app' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.songgift.app/blog' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumbs */}
      <section className="bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-dark font-medium">Blog</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-bg-light pb-10 pt-8 sm:pt-12 sm:pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            The SongGift Blog
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Gift ideas, how-to guides, and insights into the world of personalized music gifts.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-bg-light rounded-2xl border border-gray-100 p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2.5 py-0.5 bg-accent/10 text-accent font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-playfair text-lg font-bold text-text-dark group-hover:text-accent transition-colors mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-accent/5 via-pink-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-text-dark mb-4">Ready to Create Your Custom Song?</h2>
          <p className="text-text-muted mb-6">Turn your story into a one-of-a-kind song. Starting at $79 with 3–5 day delivery.</p>
          <Link href="/create" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors">
            Create Your Song — $79
          </Link>
        </div>
      </section>
    </>
  );
}
