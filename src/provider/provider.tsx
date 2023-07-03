"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "@/theme/theme";

export const ChakraWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <CacheProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
};
