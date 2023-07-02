"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

export const ChakraProviderWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
    );
};
