import './globals.css';

import Preloader from '@/components/Preloader';
import { ThemeProvider } from './providers';
import FloatingBtn from '@/components/FloatingBtn';

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
    <html lang="en">
      <body className="min-h-screen bg-white-100 transition-colors duration-200 dark:bg-black-100">
        <ThemeProvider>
          <Preloader />
          {children}
          <FloatingBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
