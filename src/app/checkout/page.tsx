'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const PRICE = 79;
const EXPRESS_FEE = 39;

interface SongData {
  recipientName?: string;
  relationship?: string;
  language?: string;
  musicStyle?: string[];
  emotionalVibe?: string[];
  voicePreference?: string;
  heartsMessage?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  [key: string]: unknown;
}

export default function CheckoutPage() {
  const [express, setExpress] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [songData, setSongData] = useState<SongData>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('songFormData');
      if (stored) setSongData(JSON.parse(stored));
    } catch {}
  }, []);

  const total = PRICE + (express ? EXPRESS_FEE : 0);

  const today = new Date();
  const standardDate = new Date(today.getTime() + 2 * 86400000);
  const expressDate = new Date(today.getTime() + 86400000);
  const fmt = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const handleCheckout = async () => {
    if (!songData.email || !songData.fullName) {
      setError('Please complete the song creation form first.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ songData, express, coupon: coupon.trim() || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-bg-light py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>Complete Your Order</h1>
          <p className="text-text-muted mt-2">You&apos;re about to create a meaningful song{songData.recipientName ? ` for your ${songData.relationship?.toLowerCase() || 'loved one'}, ${songData.recipientName}` : ''}.</p>
          <p className="text-sm text-text-muted mt-1">This is a beautiful gift idea — let&apos;s finish it.</p>
          <Link href="/create" className="inline-flex items-center gap-1 mt-3 px-5 py-2 text-sm font-semibold text-accent border-2 border-accent rounded-full hover:bg-accent/5 transition-colors">
            &larr; Back to Song Details
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left: Complete Your Order */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-bold text-text-dark text-lg mb-6">Complete Your Order</h2>

              <div className="bg-pink-50 rounded-xl p-6 text-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="font-bold text-text-dark">Secure Stripe Checkout</h3>
                <p className="text-xs text-text-muted mt-1">You&apos;ll be redirected to Stripe&apos;s secure payment page to complete your purchase.</p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { title: '30-day money-back guarantee', desc: 'Love your song or get a full refund' },
                  { title: 'Commercial use included', desc: 'Use your song for business purposes' },
                  { title: 'Delivered via email', desc: 'High-quality MP3 & WAV files sent directly' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-1.5 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-text-dark">{item.title}</span>
                      <p className="text-xs text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-4 bg-accent text-white font-bold rounded-full text-lg hover:bg-accent-hover transition-colors shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Redirecting to payment...' : `Complete My Order – $${total}`}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-bold text-text-dark">100% Satisfaction Guarantee</h3>
              <p className="text-xs text-text-muted mt-1">If you&apos;re not completely happy with your custom song, we&apos;ll work with you until it&apos;s perfect.</p>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-bold text-text-dark text-lg mb-1">Order Summary</h2>
              {songData.recipientName && (
                <p className="text-xs text-text-muted mb-4">
                  Creating a heartfelt song for {songData.recipientName}{songData.relationship ? ` (${songData.relationship})` : ''}.
                </p>
              )}

              <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-dark">Custom Song Package</span>
                  <span className="text-text-dark font-semibold">${PRICE}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-dark">Standard Delivery (48 hrs)</span>
                  <span className="text-text-muted">Included</span>
                </div>
                <p className="text-xs text-text-muted">Expected delivery by {fmt(standardDate)}.</p>
              </div>

              {/* Express Delivery */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={express} onChange={e => setExpress(e.target.checked)} className="mt-1 w-4 h-4 accent-accent" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-text-dark">Express Delivery</span>
                      <span className="px-2 py-0.5 bg-accent text-white text-[10px] font-bold rounded-full">+${EXPRESS_FEE}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-0.5">Get your song delivered within 24 hours instead of 48 hours.</p>
                  </div>
                </label>
                {express && (
                  <div className="mt-2 bg-pink-50 rounded-lg px-3 py-2">
                    <p className="text-xs text-accent font-semibold">Express delivery selected – Expected by: {fmt(expressDate)}</p>
                  </div>
                )}
              </div>

              {express && (
                <div className="flex justify-between text-sm mb-4">
                  <span className="font-semibold text-text-dark">Express Delivery</span>
                  <span className="text-text-dark">+${EXPRESS_FEE}</span>
                </div>
              )}

              {/* Coupon */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <p className="text-sm font-semibold text-text-dark mb-2">Have a coupon code?</p>
                <div className="flex gap-2">
                  <input type="text" value={coupon} onChange={e => setCoupon(e.target.value)} className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" placeholder="Enter code" />
                  <button className="px-4 py-2 bg-gray-100 text-text-dark text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                    {coupon.trim() ? '✓ Applied' : 'Apply'}
                  </button>
                </div>
                <p className="text-xs text-text-muted mt-1">Coupon will be applied at checkout.</p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-text-dark">Total</span>
                <span className="text-2xl font-bold text-text-dark" style={{ fontFamily: 'var(--font-serif)' }}>${total}</span>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-text-muted">
                <span className="inline-flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  24–48 hour delivery
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10"/></svg>
                  30-day money-back guarantee
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Secure Stripe checkout
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Digital delivery via email
                </span>
              </div>
            </div>

            {/* Song Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-bold text-text-dark text-lg mb-4">Your Song Details</h2>
              <div className="space-y-3 text-sm">
                {songData.recipientName && (
                  <div>
                    <span className="font-bold text-text-dark">Song Recipient</span>
                    <p className="text-text-muted">{songData.recipientName}{songData.relationship ? ` (${songData.relationship})` : ''}</p>
                  </div>
                )}
                {songData.language && (
                  <div>
                    <span className="font-bold text-text-dark">Language</span>
                    <p className="text-text-muted">{songData.language}</p>
                  </div>
                )}
                {songData.musicStyle && songData.musicStyle.length > 0 && (
                  <div>
                    <span className="font-bold text-text-dark">Music Style</span>
                    <p className="text-text-muted">{songData.musicStyle.join(', ').toLowerCase()}</p>
                  </div>
                )}
                {songData.emotionalVibe && songData.emotionalVibe.length > 0 && (
                  <div>
                    <span className="font-bold text-text-dark">Emotional Vibe</span>
                    <p className="text-text-muted">{songData.emotionalVibe.join(', ').toLowerCase()}</p>
                  </div>
                )}
                {songData.voicePreference && (
                  <div>
                    <span className="font-bold text-text-dark">Voice Preference</span>
                    <p className="text-text-muted">{songData.voicePreference.toLowerCase()}</p>
                  </div>
                )}
                {songData.heartsMessage && (
                  <div>
                    <span className="font-bold text-text-dark">Heart&apos;s Message</span>
                    <div className="bg-pink-50 rounded-lg px-3 py-2 mt-1">
                      <p className="text-text-muted text-xs">&ldquo;{songData.heartsMessage}&rdquo;</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link href="/create" className="inline-flex items-center gap-1 px-5 py-2 text-sm font-semibold text-accent border-2 border-accent rounded-full hover:bg-accent/5 transition-colors">
                  View or Edit Your Song Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
