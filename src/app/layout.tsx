import './globals.css';
import { Roboto } from 'next/font/google';

import { ThemeProvider } from './themeProvider';
import { SmoothScrollProvider } from './scrollProvider';

import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import FloatingBtn from '@/components/FloatingBtn';

const inter = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Myat Min Aung | A Frontend Developer',
  description:
    'A Software Engineer, specializing in frontend development with a passion for crafting intuitive and elegant user experiences.',
  openGraph: {
    title: 'Myat Min Aung | A Frontend Developer',
    description:
      'A Software Engineer, specializing in frontend development with a passion for crafting intuitive and elegant user experiences.',
    url: 'https://myatminaung.dev',
    images: [
      {
        url: 'https://myatminaung.dev/og-image.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Myat Min Aung',
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
    google: 'J9tOkvXzjAeDeg2uNflnsr4Yi4ymNNFqlGn0iIbZAFc',
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
