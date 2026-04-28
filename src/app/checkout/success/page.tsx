'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Music, Mail, Clock, ArrowRight } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [recipientName, setRecipientName] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('songFormData');
      if (stored) {
        const data = JSON.parse(stored);
        setRecipientName(data.recipientName || '');
        localStorage.removeItem('songFormData');
      }
    } catch {}
  }, []);

  return (
    <section className="min-h-screen bg-bg-light py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          Your Order is Confirmed!
        </h1>

        <p className="text-lg text-text-muted mb-8 leading-relaxed">
          {recipientName
            ? `We're already working on ${recipientName}'s song. This is going to be something truly special.`
            : "We're already working on your custom song. This is going to be something truly special."}
        </p>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm text-left mb-8">
          <h2 className="font-bold text-text-dark text-lg mb-6 text-center">What Happens Next</h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-text-dark text-sm">Check Your Email</h3>
                <p className="text-xs text-text-muted mt-0.5">You&apos;ll receive an order confirmation email shortly with your order details.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Music size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-text-dark text-sm">We Start Creating</h3>
                <p className="text-xs text-text-muted mt-0.5">We begin writing and recording your custom song based on the details you shared.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-text-dark text-sm">Song Delivered</h3>
                <p className="text-xs text-text-muted mt-0.5">Your finished song (MP3 &amp; WAV), cover art, and lyric sheet will be delivered to your email within 24–3�5 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Satisfaction guarantee */}
        <div className="bg-pink-50 rounded-2xl p-6 mb-8">
          <p className="text-sm text-accent font-semibold mb-1">30-Day Money-Back Guarantee</p>
          <p className="text-xs text-text-muted">If you&apos;re not happy with the song, we&apos;ll revise it until it&apos;s perfect — or give you a full refund.</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-accent font-semibold rounded-full border-2 border-accent hover:bg-accent/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {sessionId && (
          <p className="text-xs text-text-muted mt-8">
            Order reference: {sessionId.slice(0, 20)}...
          </p>
        )}
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-light flex items-center justify-center"><p className="text-text-muted">Loading...</p></div>}>
      <SuccessContent />
    </Suspense>
  );
}
