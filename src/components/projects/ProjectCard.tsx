import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Box,
    IconButton,
    Button,
} from "@chakra-ui/react";

const ProjectCard = () => {
    return (
        <Flex flexDir="column" border="1px solid" borderColor="gray.200">
            <Flex
                p={5}
                flexDir="column"
                justify="space-between"
                minHeight="280px"
            >
                <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" mb={4}>
                        BitBazaar Game Store
                    </Heading>
                    <Text mb={3}>
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
                            <Text key={i}>{tech}</Text>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
