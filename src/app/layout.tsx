import "./globals.css";

import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "Myat Min Aung | A Full Stack Web Developer",
  description:
    "Hello, I am Myat Min Aung. I am a full-stack web developer from Yangon, Myanmar. Specializing in mern-stack development, I am using Reactjs & Nextjs on fontend development and Expressjs & Nodejs on backend development. I have a serious passion for developing web applications, dynamic user experiences and creating intuitive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <main className="max-w-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          <Navbar />

          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          <Footer />
        </main> */}
        <Preloader />
        {children}
      </body>
    </html>
  );
}
