import './globals.css';
import { Inter_Tight } from 'next/font/google';

import { ThemeProvider } from './themeProvider';
import { SmoothScrollProvider } from './scrollProvider';

import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import FloatingBtn from '@/components/FloatingBtn';

const inter = Inter_Tight({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Myat Min Aung | A Frontend Developer',
  description:
    "Hello, I'm Myat Min Aung. I'm front-end developer from Yangon, Myanmar.",
  openGraph: {
    title: 'Myat Min Aung | A Frontend Developer',
    description: '',
    images: [
      {
        url: 'http://13.229.154.61:3000/og-image.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-secondary-400 transition-colors duration-300 dark:bg-primary-100">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Preloader />
            <Navbar />
            {children}
            <FloatingBtn />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
