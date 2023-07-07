"use client";

import Link from "next/link";
import {
    Container,
    Flex,
    HStack,
    Text,
    VStack,
    Divider,
    Box,
} from "@chakra-ui/react";

import ThemeSwitch from "@/components/ThemeSwitch";
import Description from "@/components/Description";
import ProjectLists from "@/components/projects/ProjectLists";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <Box>
            <VStack mt={10} spacing={10}>
                <Description />
                <Divider />
                <ProjectLists />
                <Divider />
                <Footer />
            </VStack>
        </Box>
    );
}
