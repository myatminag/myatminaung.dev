import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectLists = () => {
    return (
        <Box>
            <Heading fontSize="lg" fontWeight="bold" mb={8}>
                Featured Projects 💡
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="30px">
                <ProjectCard
                    title="BitBazaar"
                    description="BitBazaar offers an extensive and diverse collection of
                        games and also have a wide range of games available, so
                        you can find the perfect fit for your gaming setup."
                    techs={["Next.js", "TypeScript", "Chakra UI", "Redux"]}
                />
                <ProjectCard
                    title="Empress"
                    description="A fully functional ecommerce built with mern stack that users can browse variety of products and also allows for secure online transaction using the integrated stripe gateway."
                    techs={[
                        "React.js",
                        "TailwindCss",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                    ]}
                />
                <ProjectCard
                    title="Kanote API"
                    description="Art Selling Application is currently under development and aims to create a seamless and user-friendly platform for artists to showcase and sell their artwork online."
                    techs={["Node.js", "Express.js", "Socket.io", "MongoDB"]}
                />
                <ProjectCard
                    title="Journey Blog"
                    description="Blog Website will focus on delivering an engaging and responsive user interface, enabling bloggers and readers to interact with the platform seamlessly."
                    techs={[
                        "React.js",
                        "Vite.js",
                        "TailwindCss",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                    ]}
                />
            </SimpleGrid>
        </Box>
    );
};

export default ProjectLists;
