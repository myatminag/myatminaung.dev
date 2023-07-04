"use client";

import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import ThemeSwitch from "@/components/ThemeSwitch";
import Description from "@/components/Description";
import TechStack from "@/components/TechStack";

export default function Home() {
    return (
        <Container maxW="2xl" pt={8}>
            <Flex alignItems="center" justifyContent="space-between" py={6}>
                <HStack gap={6}>
                    <Text fontSize="lg">Home</Text>
                    <Text fontSize="lg">Experience</Text>
                </HStack>
                <ThemeSwitch />
            </Flex>

            <VStack mt={3} spacing={5}>
                <Description />
                <TechStack />
            </VStack>
        </Container>
    );
}
