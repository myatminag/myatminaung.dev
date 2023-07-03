"use client";

import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
    return (
        <Container maxW="2xl">
            <Flex alignItems="center" justifyContent="space-between" py={6}>
                <HStack>
                    <Text fontSize="lg">Home</Text>
                    <Text fontSize="lg">Experience</Text>
                </HStack>
                <ThemeSwitch />
            </Flex>

            <Box>
                <Text fontSize="2xl" fontWeight="bold">
                    Hi, I&apos;m Myatmin Aung
                </Text>
            </Box>
        </Container>
    );
}
