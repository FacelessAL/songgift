import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-cormorant' });

export const metadata: Metadata = {
  title: 'Custom Song Gift | SongGift',
  description: 'Turn your love story into a personalized song gift. We create unique songs from your memories in just days.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Custom Song Gift | SongGift',
    description: 'Turn your love story into a personalized song gift. We create unique songs from your memories in just days.',
    url: 'https://www.songgift.app',
    siteName: 'SongGift',
    type: 'website',
    images: [
      {
        url: 'https://www.songgift.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SongGift — Custom Personalized Songs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Song Gift | SongGift',
    description: 'Turn your love story into a personalized song gift. We create unique songs from your memories in just days.',
    images: ['https://www.songgift.app/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
