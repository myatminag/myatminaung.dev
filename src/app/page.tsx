"use client";

import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";

import ThemeSwitch from "@/components/ThemeSwitch";
import Description from "@/components/Description";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <Container maxW="2xl" py={8}>
            <Flex alignItems="center" justifyContent="space-between" mb={6}>
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
            <SimpleGrid minChildWidth="300px" spacing="40px">
                <ProjectCard />
                <ProjectCard />
            </SimpleGrid>
        </Container>
    );
}
