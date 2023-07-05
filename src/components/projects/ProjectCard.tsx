import { useColorMode, Heading, Text, Flex, Box } from "@chakra-ui/react";

const ProjectCard = () => {
    const { colorMode } = useColorMode();

    const boxShadowColor = {
        light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
        dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
    };

    return (
        <Flex
            flexDir="column"
            // border="1px solid"
            borderColor="gray.200"
            borderRadius={5}
            boxShadow={boxShadowColor[colorMode]}
        >
            <Flex
                p={5}
                flexDir="column"
                justify="space-between"
                minHeight="280px"
            >
                <Box>
                    <Heading fontSize="md" fontWeight="semibold" mb={4}>
                        BitBazaar
                    </Heading>
                    <Text fontSize="sm" mb={3}>
                        BitBazaar offers an extensive and diverse collection of
                        games and also have a wide range of games available, so
                        you can find the perfect fit for your gaming setup.
                    </Text>
                    <Flex flexWrap="wrap" columnGap={3}>
                        {[
                            ".Next.js",
                            ".TailwindCss",
                            ".React Query",
                            ".Rawg Api",
                        ].map((tech, i) => (
                            <Text key={i} fontSize="sm">
                                {tech}
                            </Text>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
