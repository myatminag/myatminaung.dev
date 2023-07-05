import { Text, Box, Heading } from "@chakra-ui/react";

const Description = () => {
    return (
        <Box>
            <Heading fontSize="lg" fontWeight="bold" mb={8}>
                Hi, I&apos;m Myatmin Aung 👋
            </Heading>
            <Text fontSize={{ lg: "sm" }} mb={5} lineHeight={7}>
                I&apos;m a fullstack web developer based in Yangon, Myanmar.
            </Text>
            <Text fontSize={{ lg: "sm" }} mb={5} lineHeight={7}>
                Interested in Javascript & Typescript, I have experience in
                implementing front-end frameworks like React.js, and Next.js. In
                backend development, I have hands-on experience in Node.js,
                Express.js, and MongoDB to build robust and scalable web
                applications.
            </Text>
            <Text fontSize={{ lg: "sm" }} mb="3" lineHeight={7}>
                I am dedicated to continuously learning and growth in the field
                of web development. Always eager to contribute my skills to a
                dynamic team, collaborate on exciting projects, and contribute
                to the creation of innovative digital solutions.
            </Text>
        </Box>
    );
};

export default Description;
