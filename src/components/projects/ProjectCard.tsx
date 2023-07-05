import { useColorMode, Heading, Text, Flex, Box } from "@chakra-ui/react";

interface Props {
    title: string;
    description: string;
    techs: string[];
}

const ProjectCard = ({ title, description, techs }: Props) => {
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
                        {title}
                    </Heading>
                    <Text fontSize="sm" mb={3}>
                        {description}
                    </Text>
                    <Flex flexWrap="wrap" columnGap={3}>
                        {techs?.map((tech, i) => (
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
