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
    'Hello, I am Myat Min Aung. I am front-end developer from Yangon, Myanmar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-secondary-300 transition-colors duration-300 dark:bg-primary-100">
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
