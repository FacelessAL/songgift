import type { Metadata } from 'next';
import CreateSongForm from '@/components/CreateSongForm';

export const metadata: Metadata = {
  title: 'Create a Custom Song Gift | SongGift',
  description: 'Start creating your personalized song gift. Tell us your story and we will craft a unique song just for you.',
};

export default function CreatePage() {
  return (
    <section className="min-h-screen bg-bg-light py-10 sm:py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreateSongForm />
      </div>
    </section>
  );
}
