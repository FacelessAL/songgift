import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Help | SongGift',
  description: "Need help with your custom song? Contact our support team and we'll get back to you within 24 hours.",
};

const helpTopics = [
  'Order status and tracking',
  'Song creation process',
  'Revisions and changes',
  'Technical support',
  'Billing and payments',
  'General questions',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Need Help?
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help make your custom song experience perfect. Whether you have questions about your order, need assistance with the creation process, or want to learn more about our services, our support team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-bg-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get in Touch Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center mb-8">
            <h2 className="text-xl font-bold text-text-dark mb-3">Get in Touch</h2>
            <p className="text-text-muted text-sm mb-6">
              Send us an email and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="mailto:support@songgift.app"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              {/* Mail SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              support@songgift.app
            </a>
          </div>

          {/* What can we help with */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
            <h2 className="text-xl font-bold text-text-dark mb-6 text-center">What can we help you with?</h2>
            <div className="grid grid-cols-2 gap-3">
              {helpTopics.map((topic, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-text-dark">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Response Guarantee */}
          <div className="bg-bg-light rounded-2xl p-6 border border-gray-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-text-dark mb-1">Quick Response Guarantee</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  We typically respond to all inquiries within 24 hours, often much sooner. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
