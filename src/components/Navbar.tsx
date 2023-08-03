"use client";

import Link from "next/link";
import { Flex, HStack, Text } from "@chakra-ui/react";
import ThemeSwitch from "@/components/ThemeSwitch";

const Navbar = () => {
    return (
        <Flex alignItems="center" justifyContent="space-between" mb={6}>
            <HStack gap={6}>
                <Link href="/">
                    <Text fontSize="sm">Home</Text>
                </Link>
                <Link href="/experience">
                    <Text fontSize="sm">Experience</Text>
                </Link>
                <Link href="/resume.pdf" target="__blank">
                    <Text fontSize="sm">Resume</Text>
                </Link>
            </HStack>
            <ThemeSwitch />
        </Flex>
    );
};

export default Navbar;
