import { Box, Text, Heading } from "@chakra-ui/react";

const TechStack = () => {
    return (
        <Box>
            <Heading fontSize="lg" fontWeight="bold" mb={8}>
                Current Main Tech Stacks 👨‍💻
            </Heading>
            <Text fontSize={{ lg: "sm" }} mb="3" lineHeight={7}>
                Interested in Javascript & Typescript, I have experience in
                implementing front-end frameworks like React.js, and Next.js. In
                backend development, I have hands-on experience in Node.js,
                Express.js, and MongoDB to build robust and scalable web
                applications.
            </Text>
        </Box>
    );
};

export default TechStack;
