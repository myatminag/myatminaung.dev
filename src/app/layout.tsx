import './globals.css';
import { Inter_Tight } from 'next/font/google';

import { ThemeProvider } from './themeProvider';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import FloatingBtn from '@/components/FloatingBtn';
import { SmoothScrollProvider } from './scrollProvider';
import Footer from '@/components/Footer';

const inter = Inter_Tight({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Myat Min Aung | A Full Stack Web Developer',
  description:
    'Hello, I am Myat Min Aung. I am a full-stack web developer from Yangon, Myanmar. Specializing in mern-stack development, I am using Reactjs & Nextjs on fontend development and Expressjs & Nodejs on backend development. I have a serious passion for developing web applications, dynamic user experiences and creating intuitive.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-secondary-100 transition-colors duration-300 dark:bg-main-100">
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
