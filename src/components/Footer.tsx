import Link from 'next/link';
import Image from 'next/image';
import { Lock, CheckCircle2, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/"><Image src="/songgift-logo.png" alt="SongGift" width={120} height={40} className="h-9 w-auto brightness-0 invert mb-4" /></Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Turn your memories into personalized songs. We create custom music that captures your most precious moments.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/GetSongGift/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/create" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/playlist" className="text-sm text-gray-300 hover:text-white transition-colors">Sample Songs</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SongGift. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <span className="inline-flex items-center gap-1.5"><Lock size={12} className="text-green-400" /> Secure payments</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-400" /> 100% satisfaction guarantee</span>
            <span className="inline-flex items-center gap-1.5"><Star size={12} className="text-accent-light" /> Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
