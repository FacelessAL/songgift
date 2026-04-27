import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | SongGift',
  description: 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-bg-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Privacy Policy
          </h1>
          <p className="text-text-muted text-lg">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
          <p className="text-sm text-text-muted mt-2">Last updated: April 26, 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-bg-light rounded-2xl p-6 border border-gray-100 mb-10">
            <div className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <p className="text-sm text-text-dark leading-relaxed">
                <strong>Summary:</strong> We collect only the data needed to create and deliver your custom song. We never sell your personal information. Payments are processed securely through third-party processors. You can request deletion of your data at any time.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                1. Information We Collect
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Personal Information:</strong> When you place an order, we collect your name, email address, and payment information. We may also collect details you provide about your song request, including personal stories, names, and relationship details that help our musicians create your song.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Usage Data:</strong> We automatically collect information about your device, browser type, IP address, pages visited, time spent on pages, and referring URLs. This data helps us understand how visitors use our site and improve your experience.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Communication Data:</strong> When you contact us via email or our contact form, we retain the content of your messages, your email address, and our responses to provide ongoing support.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Marketing Data:</strong> If you subscribe to our email list, we collect your email address and any preferences you indicate. You may unsubscribe at any time.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
                2. How We Use Your Information
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">We use your information to: fulfill and deliver your custom song orders; process payments securely; communicate with you about your order status; respond to customer service requests; send marketing communications (with your consent); improve our website, services, and user experience; detect and prevent fraud or unauthorized access; and comply with legal obligations.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Legal Basis (GDPR):</strong> We process your data based on contractual necessity (to fulfill your order), legitimate interest (to improve our services), consent (for marketing), and legal obligation (for tax and regulatory compliance).</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                3. Information Sharing &amp; Third Parties
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">We do NOT sell your personal information.</strong> We never have and never will sell, rent, or trade your personal data to third parties for their marketing purposes.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Service Providers:</strong> We share limited data with trusted third-party service providers who assist with payment processing (e.g., Stripe), email delivery, website hosting (Vercel), and analytics. These providers are contractually bound to protect your data and use it only for the services they provide to us.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Musicians:</strong> The personal stories and details you share for your custom song are provided to our musicians solely for the purpose of creating your song. Musicians are bound by confidentiality agreements.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Legal Requirements:</strong> We may disclose your information if required by law, court order, subpoena, or to protect our rights, property, safety, or the safety of others.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
                4. Data Security
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">We implement industry-standard security measures including SSL/TLS encryption for all data in transit, secure payment processing through PCI-DSS compliant providers, restricted access to personal data on a need-to-know basis, regular security assessments and vulnerability monitoring, and encrypted storage of sensitive data at rest.</p>
                <p className="text-text-muted leading-relaxed text-sm">While we take every reasonable precaution to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the fullest extent possible.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></span>
                5. Cookies &amp; Tracking Technologies
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Essential Cookies:</strong> Required for basic site functionality, shopping cart, and checkout. These cannot be disabled.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Analytics Cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics). Data is anonymized and aggregated.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance. You can opt out via your browser settings or by using industry opt-out tools.</p>
                <p className="text-text-muted leading-relaxed text-sm">You can control cookies through your browser settings. Note that disabling certain cookies may affect site functionality.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
                6. Your Rights
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">Depending on your jurisdiction, you may have the right to: <strong className="text-text-dark">access</strong> the personal data we hold about you; <strong className="text-text-dark">correct</strong> inaccurate or incomplete data; <strong className="text-text-dark">delete</strong> your personal data (&quot;right to be forgotten&quot;); <strong className="text-text-dark">restrict</strong> or object to processing of your data; <strong className="text-text-dark">data portability</strong> — receive your data in a structured, commonly used format; and <strong className="text-text-dark">withdraw consent</strong> for marketing communications at any time.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">California Residents (CCPA):</strong> You have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information (we do not sell your data). You will not receive discriminatory treatment for exercising these rights.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">EU/EEA Residents (GDPR):</strong> You have all the rights listed above plus the right to lodge a complaint with your local data protection authority.</p>
                <p className="text-text-muted leading-relaxed text-sm">To exercise any of these rights, email us at <a href="mailto:privacy@songgift.app" className="text-accent hover:text-accent-hover font-semibold">privacy@songgift.app</a>. We will respond within 30 days.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                7. Data Retention
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">We retain your personal data only as long as necessary to provide our services and fulfill the purposes described in this policy. Order data is retained for a minimum of 7 years for tax and legal compliance. You may request earlier deletion of non-essential data at any time.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg></span>
                8. Children&apos;s Privacy
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we learn that we have collected data from a child under 16, we will promptly delete it. If you believe a child has provided us with personal data, please contact us immediately.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg></span>
                9. International Data Transfers
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">Your data may be processed in the United States or other countries where our service providers operate. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses where required by GDPR.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></span>
                10. Changes to This Policy
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">We may update this Privacy Policy from time to time. Material changes will be communicated via email to active customers and by posting a prominent notice on our website. The &quot;Last updated&quot; date at the top of this page indicates when this policy was most recently revised. Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-bg-light rounded-2xl p-8 border border-gray-100 text-center">
            <h3 className="font-bold text-text-dark text-lg mb-2">Questions About Your Privacy?</h3>
            <p className="text-sm text-text-muted mb-4">We&apos;re happy to answer any questions about how we handle your data.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:privacy@songgift.app" className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                privacy@songgift.app
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-accent font-semibold rounded-full border-2 border-accent hover:bg-accent/5 transition-colors text-sm">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
