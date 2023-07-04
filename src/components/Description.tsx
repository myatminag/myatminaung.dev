import { Text, Box } from "@chakra-ui/react";

const Description = () => {
    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={5}>
                Hi, I&apos;m Myatmin Aung 👋
            </Text>
            <Text fontSize={{ lg: "lg" }} mb="3" lineHeight={7}>
                I&apos;m a fullstack web developer based in Yangon, Myanmar. I
                have a serious passion for developing dynamic user experiences
                and creating innovative web applications. With a dab hand at
                both frontend and backend development, I am committed to
                delivering high quality solutions that meet the needs of modern
                digital environments.
            </Text>
            <Text fontSize={{ lg: "lg" }} mb="3" lineHeight={7}>
                I am currently working as a frontend developer at @Shopdoora
                eCommerce. I am dedicated to continuously learning and growth in
                the field of web development. Always eager to contribute my
                skills to a dynamic team, collaborate on exciting projects, and
                contribute to the creation of innovative digital solutions.
            </Text>
        </Box>
    );
};

export default Description;
