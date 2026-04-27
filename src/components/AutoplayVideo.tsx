'use client';

import { useRef, useEffect, useState } from 'react';

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

export default function AutoplayVideo({ src, className = '' }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try autoplay with sound first
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser blocked unmuted autoplay — fall back to muted
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        className={className}
        controls
        playsInline
        preload="auto"
      />
      {isMuted && (
        <button
          onClick={handleUnmute}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 text-white text-xs font-medium rounded-full hover:bg-black/90 transition-colors backdrop-blur-sm"
          aria-label="Unmute video"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
          Tap to unmute
        </button>
      )}
    </div>
  );
}
