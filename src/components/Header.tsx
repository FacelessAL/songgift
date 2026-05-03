'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const occasionGroups = [
  {
    label: 'By Relationship',
    items: [
      { href: '/custom-song-for-wife', title: 'Song for Wife' },
      { href: '/custom-song-for-husband', title: 'Song for Husband' },
      { href: '/custom-song-for-girlfriend', title: 'Song for Girlfriend' },
      { href: '/custom-song-for-boyfriend', title: 'Song for Boyfriend' },
      { href: '/custom-song-for-mom', title: 'Song for Mom' },
      { href: '/custom-song-for-dad', title: 'Song for Dad' },
      { href: '/custom-song-for-daughter', title: 'Song for Daughter' },
      { href: '/custom-song-for-son', title: 'Song for Son' },
      { href: '/custom-song-for-sister', title: 'Song for Sister' },
      { href: '/custom-song-for-brother', title: 'Song for Brother' },
      { href: '/custom-song-for-grandparents', title: 'Song for Grandparents' },
      { href: '/custom-song-for-best-friend', title: 'Song for Best Friend' },
      { href: '/custom-song-for-teacher', title: 'Song for Teacher' },
      { href: '/custom-song-for-pet', title: 'Song for Pet' },
    ],
  },
  {
    label: 'By Occasion',
    items: [
      { href: '/birthday-song-gift', title: 'Birthday' },
      { href: '/anniversary-song-gift', title: 'Anniversary' },
      { href: '/wedding-song-gift', title: 'Wedding' },
      { href: '/valentines-day-song-gift', title: "Valentine's Day" },
      { href: '/mothers-day-song-gift', title: "Mother's Day" },
      { href: '/fathers-day-song-gift', title: "Father's Day" },
      { href: '/graduation-song-gift', title: 'Graduation' },
      { href: '/christmas-song-gift', title: 'Christmas' },
      { href: '/engagement-song-gift', title: 'Engagement' },
      { href: '/proposal-song-gift', title: 'Proposal' },
      { href: '/retirement-song-gift', title: 'Retirement' },
      { href: '/baby-shower-song-gift', title: 'Baby Shower' },
      { href: '/memorial-song-gift', title: 'Memorial' },
      { href: '/thanksgiving-song-gift', title: 'Thanksgiving' },
      { href: '/easter-song-gift', title: 'Easter' },
      { href: '/halloween-song-gift', title: 'Halloween' },
      { href: '/new-years-song-gift', title: "New Year's" },
      { href: '/fourth-of-july-song-gift', title: '4th of July' },
      { href: '/quinceanera-song-gift', title: 'Quinceañera' },
      { href: '/sweet-16-song-gift', title: 'Sweet 16' },
    ],
  },
  {
    label: 'By Style',
    items: [
      { href: '/love-song-gift', title: 'Love Song' },
      { href: '/funny-song-gift', title: 'Funny Song' },
      { href: '/friendship-song-gift', title: 'Friendship Song' },
      { href: '/apology-song-gift', title: 'Apology Song' },
      { href: '/thank-you-song-gift', title: 'Thank You Song' },
      { href: '/corporate-song-gift', title: 'Corporate Song' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [occasionsOpen, setOccasionsOpen] = useState(false);
  const [mobileOccasionsOpen, setMobileOccasionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOccasionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/playlist', label: 'Playlist' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mother's Day Banner */}
      <div className="bg-gradient-to-r from-crimson-dark via-accent to-crimson-dark text-white text-center py-2 px-4 text-sm">
        <Link href="/mothers-day-song-gift" className="inline-flex items-center gap-2 hover:underline">
          <Heart size={14} className="fill-pink-300 text-pink-300" />
          <span>Mother&apos;s Day Special: 60% Off All Custom Songs.</span>
          <span className="font-bold underline">Claim Offer &rarr;</span>
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/songgift-logo.png"
                alt="SongGift"
                width={140}
                height={48}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {navLinks.slice(0, 1).map((link) => (
                <Link key={link.href} href={link.href} className="text-base font-semibold text-text-dark hover:text-accent transition-colors tracking-wide">
                  {link.label}
                </Link>
              ))}

              {/* Occasions dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setOccasionsOpen(!occasionsOpen)}
                  className="inline-flex items-center gap-1 text-base font-semibold text-text-dark hover:text-accent transition-colors tracking-wide"
                >
                  Occasions <ChevronDown size={14} className={`transition-transform ${occasionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {occasionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50" style={{ fontFamily: 'var(--font-sans)' }}>
                    <div className="grid grid-cols-3 gap-6">
                      {occasionGroups.map((group) => (
                        <div key={group.label}>
                          <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{group.label}</h4>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block text-sm text-text-dark hover:text-accent hover:pl-1 transition-all"
                                  onClick={() => setOccasionsOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100 text-center">
                      <Link
                        href="/create"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors"
                        onClick={() => setOccasionsOpen(false)}
                      >
                        We Create Songs for Any Occasion &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link key={link.href} href={link.href} className="text-base font-semibold text-text-dark hover:text-accent transition-colors tracking-wide">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/create"
                className="inline-flex items-center px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
              >
                Gift a Custom Song
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-text-dark"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
              <Link href="/" className="block text-lg font-semibold text-text-dark hover:text-accent transition-colors py-2 tracking-wide" onClick={() => setMobileOpen(false)}>Home</Link>

              {/* Mobile Occasions accordion */}
              <button onClick={() => setMobileOccasionsOpen(!mobileOccasionsOpen)} className="flex items-center justify-between w-full text-lg font-semibold text-text-dark hover:text-accent transition-colors py-2 tracking-wide">
                Occasions {mobileOccasionsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {mobileOccasionsOpen && (
                <div className="pl-3 space-y-4 pb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  {occasionGroups.map((group) => (
                    <div key={group.label}>
                      <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{group.label}</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {group.items.map((item) => (
                          <Link key={item.href} href={item.href} className="text-sm text-text-dark hover:text-accent py-1" onClick={() => { setMobileOpen(false); setMobileOccasionsOpen(false); }}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href="/create" className="block text-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors" onClick={() => { setMobileOpen(false); setMobileOccasionsOpen(false); }}>
                    We Create Songs for Any Occasion &rarr;
                  </Link>
                </div>
              )}

              {navLinks.slice(1).map((link) => (
                <Link key={link.href} href={link.href} className="block text-lg font-semibold text-text-dark hover:text-accent transition-colors py-2 tracking-wide" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/create" className="block text-center px-5 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors mt-4" onClick={() => setMobileOpen(false)}>
                Gift a Custom Song
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
