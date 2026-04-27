import Link from 'next/link';
import Image from 'next/image';
import {
  Music, Mic2, Gift, Star, Headphones, FileAudio, Image as ImageIcon,
  RefreshCw, Clock, ArrowRight, Heart, CheckCircle2
} from 'lucide-react';
import AutoplayVideo from '@/components/AutoplayVideo';
import SongCard from '@/components/SongCard';
import AudioPlayer from '@/components/AudioPlayer';
import { songs, featuredSong } from '@/lib/songs';

const exploreLinks = [
  { href: '/custom-song-for-wife', title: 'Custom Song for Wife', desc: 'Create a romantic song that shows your wife how much she means to you' },
  { href: '/valentines-day-song-gift', title: "Valentine's Day Song Gift", desc: "The most romantic Valentine's Day gift — a personalized song" },
  { href: '/anniversary-song-gift', title: 'Anniversary Song Gift', desc: 'Celebrate your anniversary with a song that tells your love story' },
  { href: '/custom-song-for-girlfriend', title: 'Custom Song for Girlfriend', desc: 'Turn your love story into a song your girlfriend will treasure forever' },
  { href: '/birthday-song-gift', title: 'Birthday Song Gift', desc: "Give them a birthday gift they'll remember forever — their own song" },
  { href: '/reviews', title: 'Reviews & Samples', desc: 'Listen to sample songs and see a real customer reaction' },
];

const packageFeatures = [
  'Custom songwriting & recording',
  'Studio-quality mixing & mastering',
  'Digital delivery (MP3 & WAV)',
  'Custom cover art design',
  '48-hour standard delivery',
  'Unlimited revisions until perfect',
  'Lyric sheet included',
];

export default function HomePage() {
  return (
    <>
      {/* Hero - light pink bg, left-aligned text with video on right */}
      <section className="bg-bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-dark leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Turn Your<br />Memories Into<br />
                <span className="text-accent">Personalized Songs</span>
              </h1>
              <p className="text-base sm:text-lg text-text-muted max-w-lg mb-8 leading-relaxed">
                Create custom songs that capture your most precious moments. We craft unique melodies based on your story, delivered as beautiful keepsakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/create"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all text-base"
                >
                  Gift a Custom Song
                </Link>
                <Link
                  href="/playlist"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-accent font-semibold rounded-lg border-2 border-accent hover:bg-accent/5 transition-all text-base"
                >
                  Listen to Samples
                </Link>
              </div>
              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-4 mt-10 pt-6 border-t border-gray-200">
                <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  24–48 hr delivery
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10"/></svg>
                  30-day money-back guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Digital delivery via email
                </span>
              </div>
            </div>
            {/* Video */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <AutoplayVideo src="/website-ad.mp4" className="w-full aspect-video object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mother's Day Special Banner */}
      <section className="bg-gradient-to-r from-crimson-dark via-accent to-crimson-dark py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 text-white rounded-full text-sm font-medium mb-6">
            <Heart size={14} className="fill-pink-300 text-pink-300" />
            Mother&apos;s Day Special
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Limited Time: 60% Off Mother&apos;s Day Songs
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-white/60 line-through text-xl">$199</span>
            <span className="text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>$79</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80 mb-8">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-300" /> Delivered within 48 hours</span>
            <span className="inline-flex items-center gap-1.5"><Heart size={14} className="text-pink-300 fill-pink-300" /> Perfect for Mother&apos;s Day</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/create"
              className="inline-flex items-center px-8 py-3.5 bg-white text-accent font-semibold rounded-full hover:bg-gray-100 transition-colors text-base"
            >
              Claim Mother&apos;s Day Offer
            </Link>
            <span className="text-sm text-white/60 inline-flex items-center gap-1.5">
              <Clock size={14} /> Limited time offer — ends soon
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              How It Works
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Creating your personalized song is simple.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { icon: <Music className="w-7 h-7 text-white" />, title: 'Share Your Story', desc: 'Tell us your special moment', bg: 'bg-accent', num: '1' },
              { icon: <Mic2 className="w-7 h-7 text-white" />, title: 'We Create', desc: 'Quality recording & production', bg: 'bg-accent', num: '2' },
              { icon: <Gift className="w-7 h-7 text-white" />, title: 'You Receive', desc: 'Digital delivery with cover art', bg: 'bg-accent', num: '3' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="relative inline-block mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.bg} rounded-full`}>
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {step.num}
                  </span>
                </div>
                {i < 2 && (
                  <span className="hidden md:block absolute top-8 left-[60%] w-[80%] text-accent/30 text-2xl">&gt;</span>
                )}
                <h3 className="text-xl font-bold text-text-dark mb-2">{step.title}</h3>
                <p className="text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/create"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
            >
              Create a Personal Song
            </Link>
          </div>
        </div>
      </section>

      {/* Listen to Our Work */}
      <section className="py-20 sm:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Listen to Our Work
            </h2>
            <p className="text-text-muted text-lg">
              Every song is unique. Here are some examples of songs we&apos;ve created.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {songs.slice(0, 3).map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/playlist" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Listen to all samples <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 sm:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              What You Get
            </h2>
            <p className="text-text-muted text-lg">
              Everything you need for your perfect personalized song.
            </p>
          </div>
          {/* Featured song with album art + player */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
                <Image
                  src={featuredSong.imageSrc}
                  alt={`${featuredSong.artist} — ${featuredSong.title}`}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-white font-bold text-lg mb-0.5" style={{ fontFamily: 'var(--font-serif)' }}>&ldquo;{featuredSong.title}&rdquo;</h3>
                <p className="text-gray-400 text-sm mb-4">{featuredSong.artist} · {featuredSong.occasion}</p>
                <AudioPlayer src={featuredSong.audioSrc} duration={featuredSong.duration} />
              </div>
            </div>
          </div>
          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Headphones className="w-5 h-5" />, title: 'Quality Recording', desc: 'Studio-quality production', color: 'bg-pink-50 text-accent' },
              { icon: <FileAudio className="w-5 h-5" />, title: 'Digital Delivery', desc: 'MP3 & WAV files', color: 'bg-blue-50 text-blue-500' },
              { icon: <ImageIcon className="w-5 h-5" />, title: 'Custom Artwork', desc: 'Personalized cover art', color: 'bg-orange-50 text-orange-500' },
              { icon: <RefreshCw className="w-5 h-5" />, title: 'Unlimited Revisions', desc: "Until it's perfect", color: 'bg-green-50 text-green-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark text-sm">{item.title}</h3>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Choose Your Perfect Package
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Everything you need to create and share your personalized song, delivered with care and precision.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Badge */}
              <div className="text-center pt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-white rounded-full text-sm font-medium">
                  <Heart size={14} className="fill-pink-300 text-pink-300" />
                  Mother&apos;s Day Special
                </span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-text-dark mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Custom Song Package</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-text-muted line-through text-lg">$199</span>
                  <span className="text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-serif)' }}>$79</span>
                </div>
                <p className="text-text-muted text-sm mb-6">Great quality, delivered with love</p>

                <div className="text-left">
                  <h4 className="text-sm font-bold text-text-dark mb-4">What&apos;s Included:</h4>
                  <ul className="space-y-3 mb-6">
                    {packageFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-text-dark text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-bg-light rounded-xl p-4 mb-6 flex items-start gap-3 text-left">
                  <input type="checkbox" className="mt-1 accent-accent" />
                  <div>
                    <p className="text-sm font-semibold text-text-dark">Express Delivery Upgrade (+$39)</p>
                    <p className="text-xs text-text-muted">Get your song delivered within 24 hours instead of within 48 hours. Perfect for last-minute gifts!</p>
                  </div>
                </div>

                <Link
                  href="/create"
                  className="block text-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-lg"
                >
                  Begin Your Song — $79
                </Link>
              </div>
              {/* Guarantees */}
              <div className="border-t border-gray-100 px-8 py-5 flex items-center justify-center gap-8">
                <span className="inline-flex items-center gap-2 text-xs text-text-muted">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span><span className="font-semibold text-text-dark">100% Satisfaction Guarantee</span><br />Love your song or get your money back</span>
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-text-muted">
                  <Star size={14} className="text-accent fill-accent" />
                  <span><span className="font-semibold text-text-dark">Great Quality</span><br />Studio-grade recording &amp; mixing</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Explore Our Custom Song Gifts
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-text-dark group-hover:text-accent transition-colors mb-2">{link.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
