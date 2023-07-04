import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectLists = () => {
    return (
        <Box>
            <Heading as="h3" size="lg" mb={5}>
                Featured Projects 💡
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="40px">
                <ProjectCard />
                <ProjectCard />
            </SimpleGrid>
        </Box>
    );
};

export default ProjectLists;
