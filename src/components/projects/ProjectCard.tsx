"use client";

import Link from "next/link";
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    HStack,
} from "@chakra-ui/react";
import { MdOutlineViewInAr } from "react-icons/md"
import { BsBoxArrowUpRight } from "react-icons/bs"

interface Props {
    title: string;
    description: string;
    techs: string[];
    demoHref: string;
    repoHref: string
}

const ProjectCard = ({ title, description, techs, demoHref, repoHref }: Props) => {
    const { colorMode } = useColorMode();

    const boxShadowColor = {
        light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
        dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
    };

    return (
        <Flex
            flexDir="column"
            border="2px solid transparent"
            borderRadius={5}
            boxShadow={boxShadowColor[colorMode]}
            _hover={{ transform: "scale(1.05)", border: `2px solid #0BC5EA` }}
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
                    <HStack justifyContent="space-between" mb={4}>
                        <Heading fontSize="md" fontWeight="semibold">
                            {title}
                        </Heading>
                        <HStack rowGap={2}>
                            <Link href={demoHref}>
                                <BsBoxArrowUpRight fontSize="15px" />
                            </Link>
                            <Link href={repoHref}>
                                <MdOutlineViewInAr fontSize="18px" />
                            </Link>
                        </HStack>
                    </HStack>

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
