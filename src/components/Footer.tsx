import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { HStack, Text, VStack, IconButton } from "@chakra-ui/react";

const Footer = () => {
    const FOOTER_DATA = [
        {
            id: 1,
            label: "facebook",
            link: "https://www.facebook.com/profile.php?id=100008542208276",
            icon: <FaFacebook fontSize="20px" />,
        },
        {
            id: 1,
            label: "linkedin",
            link: "https://www.linkedin.com/in/myatmin-aung-830039245/",
            icon: <FaLinkedin fontSize="20px" />,
        },
        {
            id: 1,
            label: "github",
            link: "https://github.com/myatminag",
            icon: <FaGithub fontSize="20px" />,
        },
    ];

    return (
        <VStack>
            <HStack gap={6}>
                {FOOTER_DATA.map((data) => (
                    <IconButton
                        key={data.id}
                        as="a"
                        aria-label={data.label}
                        variant="ghost"
                        href={data.link}
                        icon={data.icon}
                    />
                ))}
            </HStack>
            <Text fontSize="xs">Developed by Myatmin Aung</Text>
        </VStack>
    );
};

export default Footer;
