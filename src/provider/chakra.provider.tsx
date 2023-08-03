"use client";

import { ChakraProvider, Container, Divider } from "@chakra-ui/react";

import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "@/theme";
import Navbar from "@/components/Navbar";

export const ChakraWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <CacheProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <Container maxW="2xl" py={8}>
                    <Navbar />
                    <Divider />
                    {children}
                </Container>
            </ChakraProvider>
        </CacheProvider>
    );
};
