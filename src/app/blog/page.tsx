import type { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';
import blogSchedule from '@/data/blog-schedule.json';

export const metadata: Metadata = {
  title: 'Blog | Custom Song Gift Ideas, Tips & Guides | SongGift',
  description: 'Discover the best personalized gift ideas, learn how custom songs are made, get tips for writing the perfect song brief, and explore why music is the most meaningful gift you can give.',
  openGraph: {
    title: 'Blog | Custom Song Gift Ideas, Tips & Guides | SongGift',
    description: 'Discover the best personalized gift ideas, learn how custom songs are made, and explore why music is the most meaningful gift.',
    url: 'https://www.songgift.app/blog',
  },
};

export default function BlogIndex() {
  const today = new Date().toISOString().split('T')[0];
  const publishedArticles = blogSchedule.articles
    .filter((a) => a.publishDate <= today)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      tags: a.tags,
      date: a.publishDate,
      readTime: a.readTime,
    }));

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
      <BlogIndexClient articles={publishedArticles} />
    </>
  );
}
