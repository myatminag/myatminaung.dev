import "./globals.css";
import { ChakraProviderWrapper } from "./provider";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
            </body>
        </html>
    );
}
