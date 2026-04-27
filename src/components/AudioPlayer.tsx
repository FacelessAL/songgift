'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  duration?: string;
  compact?: boolean;
}

export default function AudioPlayer({ src, duration, compact = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      // Pause any other playing audio on the page
      document.querySelectorAll('audio').forEach((a) => {
        if (a !== audio) a.pause();
      });
      audio.play();
    }
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setTotalDuration(audio.duration);
    const onEnded = () => { setPlaying(false); setCurrentTime(0); };
    const onPause = () => setPlaying(false);
    const onPlay = () => setPlaying(true);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('play', onPlay);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('play', onPlay);
    };
  }, []);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !totalDuration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * totalDuration;
  };

  const progress = totalDuration ? (currentTime / totalDuration) * 100 : 0;
  const displayDuration = totalDuration ? formatTime(totalDuration) : duration || '0:00';

  const btnSize = compact ? 'w-8 h-8' : 'w-10 h-10';
  const iconSize = compact ? 12 : 14;

  return (
    <div className="flex items-center gap-3 w-full">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={toggle}
        className={`${btnSize} bg-accent rounded-full flex items-center justify-center flex-shrink-0 hover:bg-accent-hover transition-colors`}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? (
          <Pause size={iconSize} className="text-white" />
        ) : (
          <Play size={iconSize} className="text-white ml-0.5" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div
          className="h-1.5 bg-gray-200 rounded-full cursor-pointer group"
          onClick={handleSeek}
        >
          <div
            className="h-1.5 bg-accent rounded-full transition-all relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-text-muted mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{displayDuration}</span>
        </div>
      </div>
    </div>
  );
}
