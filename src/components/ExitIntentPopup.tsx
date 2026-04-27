'use client';

import { useState, useEffect } from 'react';
import { X, Music } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('emailPopupShown')) return;

    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem('emailPopupShown', 'true');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setSubmitting(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
    } catch {
      // Silently fail — still show success to the user
    }
    setSubmitted(true);
    setSubmitting(false);
    setTimeout(() => setShow(false), 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-2xl font-bold text-text-dark mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              You&apos;re In!
            </h2>
            <p className="text-text-muted">Check your inbox for exclusive offers and updates.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-text-dark mb-2 flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Stay in the Loop! <Music size={24} className="text-accent" />
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Get exclusive updates on new features, special offers, and heartwarming stories from our SongGift community.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <label htmlFor="popup-email" className="block text-sm font-semibold text-text-dark mb-1.5">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="popup-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3.5 bg-accent-light text-accent-hover font-semibold rounded-full hover:bg-accent hover:text-white transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            <button
              onClick={() => setShow(false)}
              className="mt-4 text-sm text-text-muted hover:text-text-dark transition-colors"
            >
              Maybe Later
            </button>

            <p className="text-xs text-text-muted mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
