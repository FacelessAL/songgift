import type { Metadata } from 'next';
import Link from 'next/link';
import { songs } from '@/lib/songs';
import SongCard from '@/components/SongCard';

export const metadata: Metadata = {
  title: 'Song Playlist | SongGift',
  description: 'Listen to sample custom songs we have created. Each one was crafted from a real story.',
};

export default function PlaylistPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Listen to Our Songs
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Every song is unique. Here are real samples we&apos;ve created — yours could sound just as beautiful.
          </p>
        </div>
      </section>

      {/* Song Grid */}
      <section className="pb-20 sm:pb-28 bg-bg-light pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-text-muted mb-6">Love what you hear? Your song will be just as unique.</p>
            <Link
              href="/create"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
            >
              Create Your Custom Song — $79
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
