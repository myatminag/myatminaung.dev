"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import { Heading } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Heading textColor="blue.700">Home</Heading>
            <ThemeSwitch />
        </>
    );
}
