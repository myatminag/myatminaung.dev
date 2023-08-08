import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

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
            <body className="bg-black">{children}</body>
        </html>
    );
}
