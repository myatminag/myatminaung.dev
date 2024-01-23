import './globals.css';
import { Poppins } from 'next/font/google';

import { ThemeProvider } from './providers';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import FloatingBtn from '@/components/FloatingBtn';

const poppins = Poppins({
  weight: ['200', '400', '500', '600', '800', '900'],
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
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen bg-white-100 transition-colors duration-500 dark:bg-black-100">
        <ThemeProvider>
          <Preloader />
          <Navbar />
          {children}
          <FloatingBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
