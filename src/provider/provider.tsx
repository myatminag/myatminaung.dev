"use client";

import Link from "next/link";
import {
    ChakraProvider,
    Container,
    Flex,
    HStack,
    Text,
    Divider,
} from "@chakra-ui/react";
import ThemeSwitch from "@/components/ThemeSwitch";
import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "@/theme";

export const ChakraWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <CacheProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <Container maxW="2xl" py={8}>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        mb={6}
                    >
                        <HStack gap={6}>
                            <Link href="/">
                                <Text fontSize="sm">Home</Text>
                            </Link>
                            <Link href="/experience">
                                <Text fontSize="sm">Experience</Text>
                            </Link>
                            <Link href="/resume">
                                <Text fontSize="sm">Resume</Text>
                            </Link>
                        </HStack>
                        <ThemeSwitch />
                    </Flex>

                    <Divider />
                    {children}
                </Container>
            </ChakraProvider>
        </CacheProvider>
    );
};
