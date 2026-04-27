import Image from 'next/image';
import type { Song } from '@/lib/songs';
import AudioPlayer from './AudioPlayer';

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <Image
          src={song.imageSrc}
          alt={`${song.artist} — ${song.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-text-dark text-sm truncate">{song.title}</h3>
        <p className="text-xs text-text-muted mb-3">{song.artist} · {song.occasion}</p>
        <AudioPlayer src={song.audioSrc} duration={song.duration} compact />
      </div>
    </div>
  );
}
