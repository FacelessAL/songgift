import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SongGift',
  description: 'Terms and conditions for using SongGift custom song creation services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-bg-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-text-muted text-lg">Please read these terms carefully before using our custom song creation services.</p>
          <p className="text-sm text-text-muted mt-2">Last updated: April 26, 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-bg-light rounded-2xl p-6 border border-gray-100 mb-10">
            <div className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <p className="text-sm text-text-dark leading-relaxed">
                <strong>Summary:</strong> By using SongGift, you agree to these terms. We create custom songs for personal use. You own the personal-use license; we retain rights for promotional purposes. We offer a 30-day satisfaction guarantee with full refund. All content must comply with our guidelines.
              </p>
            </div>
          </div>

          <div className="space-y-10">

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
                1. Acceptance of Terms
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">By accessing, browsing, or using the SongGift website (&quot;songgift.app&quot;) or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions (&quot;Terms&quot;). If you do not agree to these Terms, you must not use our services.</p>
                <p className="text-text-muted leading-relaxed text-sm">These Terms constitute a legally binding agreement between you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and SongGift (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms apply to all visitors, users, and others who access or use our services.</p>
                <p className="text-text-muted leading-relaxed text-sm">You represent and warrant that you are at least 18 years of age, or the age of legal majority in your jurisdiction, and have the legal capacity to enter into these Terms. If you are placing an order on behalf of another person or entity, you represent that you have authority to bind that person or entity to these Terms.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span>
                2. Service Description
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">SongGift provides custom song creation services where we write, record, mix, and master personalized songs based on your specifications, stories, memories, and preferences. Our services include custom songwriting and composition, studio-quality recording and production, mixing and mastering, digital delivery in high-quality MP3 and WAV formats, a standard album cover, lyric sheet, and unlimited revisions until you are satisfied. Custom Album Art is available as an optional add-on for an additional fee.</p>
                <p className="text-text-muted leading-relaxed text-sm">The final product is a unique, one-of-a-kind musical work created exclusively for you. Each song is original and will not be reproduced or resold to other customers.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></span>
                3. Orders, Pricing &amp; Payment
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Order Placement:</strong> When you place an order, you agree to provide accurate, complete, and truthful information about your song requirements. Incomplete or inaccurate information may delay production or affect the quality of your custom song.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Pricing:</strong> All prices are listed in United States Dollars (USD) and include the services specified in your selected package. Prices are subject to change without notice, but changes will not affect orders already placed and confirmed. Promotional discounts and coupon codes are subject to their stated terms and expiration dates and may not be combined unless explicitly stated.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Payment:</strong> Full payment is required at the time of order placement. We accept major credit cards, debit cards, and other payment methods as displayed at checkout. All payments are processed securely through third-party payment processors (e.g., Stripe). SongGift does not store your full credit card information on our servers.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Order Confirmation:</strong> After payment, you will receive an order confirmation email with your tracking ID. This constitutes our acceptance of your order and the formation of a binding contract.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Right to Refuse:</strong> We reserve the right to refuse or cancel any order at our sole discretion, including but not limited to cases involving suspected fraud, violation of our content guidelines, or technical errors in pricing.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></span>
                4. Content Guidelines &amp; Prohibited Content
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">You agree that your song content will not include or request material that is: illegal, harmful, threatening, abusive, harassing, or stalking in nature; defamatory, libelous, or fraudulent; obscene, pornographic, or sexually explicit; discriminatory based on race, ethnicity, gender, religion, sexual orientation, or disability; infringing on any third party&apos;s intellectual property, privacy, or publicity rights; promoting violence, self-harm, or dangerous activities; or impersonating any person or entity.</p>
                <p className="text-text-muted leading-relaxed text-sm">We reserve the right to refuse to create songs with content that violates these guidelines. If we determine that your request contains prohibited content after production has begun, your order may be cancelled and a refund issued at our discretion. Repeated violations may result in permanent prohibition from using our services.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
                5. Intellectual Property Rights
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Your License:</strong> Upon full payment, you are granted a perpetual, non-exclusive, non-transferable license to use your custom song for personal, non-commercial purposes. This includes listening, sharing with friends and family, playing at private events, posting on personal social media accounts (with credit to SongGift), and gifting to the intended recipient.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Commercial Use:</strong> Commercial use of your custom song — including but not limited to use in advertising, film, television, radio, streaming platforms for revenue, or resale — is strictly prohibited without a separate commercial licensing agreement. Contact us at <a href="mailto:support@songgift.app" className="text-accent hover:text-accent-hover font-semibold">support@songgift.app</a> for commercial licensing inquiries.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">SongGift Rights:</strong> SongGift and its musicians retain certain rights to the composition and recording, including the right to use excerpts or anonymized versions for portfolio, promotional, and marketing purposes (such as our playlist page and social media). Your personal stories and identifying details will never be shared publicly without your explicit written consent.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Your Warranty:</strong> You warrant that any content, stories, names, or other materials you provide to us do not infringe on the intellectual property rights, privacy rights, or any other rights of any third party. You agree to indemnify SongGift against any claims arising from the content you provide.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                6. Delivery &amp; Revisions
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Delivery Timeline:</strong> Standard delivery is within 3�5 business days of order confirmation. Rush delivery (within 24 hours) is available for an additional fee. Delivery times are estimates and may vary based on order volume and complexity. We will notify you of any significant delays.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Digital Delivery:</strong> Songs are delivered digitally via email to the address provided during checkout. You will receive high-quality MP3 and WAV files, a standard album cover, and a lyric sheet. If you purchased Custom Album Art, your hand-designed artwork will also be included. It is your responsibility to ensure the email address you provide is accurate.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Revisions:</strong> We offer unlimited revisions to ensure your complete satisfaction. Revisions include adjustments to lyrics, melody, tempo, instrumentation, and vocal style. However, a complete restart or fundamental change in concept (e.g., changing from a love song to a rap) after production is complete may be subject to additional fees at our discretion.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10"/></svg></span>
                7. Refund Policy &amp; Satisfaction Guarantee
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">30-Day Satisfaction Guarantee:</strong> We stand behind the quality of our work. If you are not completely satisfied with your custom song after exhausting the revision process, you may request a full refund within 30 days of final delivery.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Refund Process:</strong> To request a refund, email <a href="mailto:support@songgift.app" className="text-accent hover:text-accent-hover font-semibold">support@songgift.app</a> with your order number and reason for dissatisfaction. Refunds will be processed to the original payment method within 5–10 business days of approval.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Exceptions:</strong> Refunds will not be issued for orders where you have already publicly shared, performed, or used the delivered song; where dissatisfaction is based on a change of mind after approving the final version; or where the order was placed in violation of these Terms.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Chargebacks:</strong> If you initiate a chargeback or payment dispute without first contacting us, we reserve the right to suspend your account, contest the chargeback, and pursue any available legal remedies. We encourage you to contact our support team before initiating any dispute.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
                8. Limitation of Liability &amp; Disclaimer
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Limitation:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SONGGIFT&apos;S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Exclusion:</strong> IN NO EVENT SHALL SONGGIFT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, REGARDLESS OF WHETHER WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Disclaimer:</strong> Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that our services will be uninterrupted, error-free, or secure.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
                9. Indemnification
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">You agree to indemnify, defend, and hold harmless SongGift, its officers, directors, employees, agents, musicians, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from or related to: your use of our services; your breach of these Terms; the content you provide for your custom song; your violation of any applicable law or regulation; or your infringement of any third-party rights.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
                10. Privacy &amp; Data Protection
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our <Link href="/privacy-policy" className="text-accent hover:text-accent-hover font-semibold">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using our services, you consent to the practices described in our Privacy Policy.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg></span>
                11. Governing Law &amp; Dispute Resolution
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Dispute Resolution:</strong> Any dispute arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules. The arbitration shall take place in the State of Florida.</p>
                <p className="text-text-muted leading-relaxed text-sm"><strong className="text-text-dark">Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted on an individual basis only, and not as part of a class, consolidated, or representative action.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></span>
                12. Changes to Terms &amp; Severability
              </h2>
              <div className="pl-10 space-y-3">
                <p className="text-text-muted leading-relaxed text-sm">We reserve the right to modify these Terms at any time. Material changes will be communicated via email to active customers and posted on our website. The &quot;Last updated&quot; date indicates the most recent revision. Your continued use of our services after changes constitutes acceptance of the updated Terms.</p>
                <p className="text-text-muted leading-relaxed text-sm">If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-bg-light rounded-2xl p-8 border border-gray-100 text-center">
            <h3 className="font-bold text-text-dark text-lg mb-2">Questions About These Terms?</h3>
            <p className="text-sm text-text-muted mb-4">We&apos;re happy to clarify any part of our terms and conditions.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:support@songgift.app" className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                support@songgift.app
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
