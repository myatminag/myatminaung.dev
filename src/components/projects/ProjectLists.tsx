import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectLists = () => {
    return (
        <Box>
            <Heading fontSize="lg" fontWeight="bold" mb={8}>
                Featured Projects 💡
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="30px">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </SimpleGrid>
        </Box>
    );
};

export default ProjectLists;
