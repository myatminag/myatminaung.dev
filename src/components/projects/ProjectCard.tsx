"use client";

import { useState } from "react";
import { useColorMode, Heading, Text, Flex, Box } from "@chakra-ui/react";

interface Props {
    title: string;
    description: string;
    techs: string[];
    link: string[];
}

const ProjectCard = ({ title, description, techs, link }: Props) => {
    const { colorMode } = useColorMode();

    const boxShadowColor = {
        light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
        dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
    };

    return (
        <Flex
            flexDir="column"
            border="2px solid transparent"
            borderColor="gray.200"
            borderRadius={5}
            boxShadow={boxShadowColor[colorMode]}
            _hover={{ transform: "scale(1.05)", border: `2px solid blue` }}
            transition="transform .5s ease-in-out, border .5s ease-in-out"
        >
            <Flex
                p={[5, 15, 25]}
                flexDir="column"
                justify="space-between"
                h="100%"
                minHeight="250px"
            >
                <Flex flexDir="column" height="full">
                    <Heading fontSize="md" fontWeight="semibold" mb={4}>
                        {title}
                    </Heading>

                    <Text fontSize="xs" mb={3}>
                        {description}
                    </Text>
                    <Flex mt="auto" flexWrap="wrap" columnGap={3}>
                        {techs?.map((tech, i, arr) => (
                            <Text key={tech} fontSize="xs">
                                {tech}
                                <span style={{ color: "#3182ce" }}>
                                    {i !== arr.length - 1 ? " | " : " "}
                                </span>
                            </Text>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
