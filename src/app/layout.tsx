import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Myat Min Aung | A Full Stack Web Developer",
    description:
        "Hello, I am Myat Min Aung. I am a full-stack web developer from Yangon, Myanmar. Specializing in mern-stack development, I am using Reactjs & Nextjs on fontend development and Expressjs & Nodejs on backend development. I have a serious passion for developing web applications, dynamic user experiences and creating intuitive.",
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../../public/font/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={[inter.variable, calSans.variable].join(" ")}
        >
            <body className="bg-black">
                <main className="max-w-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                    <Navbar />

                    <Particles
                        className="absolute inset-0 -z-10 animate-fade-in"
                        quantity={100}
                    />

                    {children}

                    <Footer />
                </main>
            </body>
        </html>
    );
}
