"use client";

import {
    Box,
    UnorderedList,
    ListItem,
    VStack,
    Text,
    Divider,
} from "@chakra-ui/react";

const Experience = () => {
    return (
        <Box mt={10}>
            <Box>
                <Box mb={4}>
                    <Text fontSize="md" fontWeight="semibold">
                        Frontend Developer At @Shopdoora
                    </Text>
                    <Text fontSize="xs">January 2023 - Present</Text>
                </Box>
                <UnorderedList>
                    <ListItem mb={3}>
                        Collaborated with cross-functional teams, including
                        designers, testers, and backend developers, to deliver
                        high-quality features on tight timelines.
                    </ListItem>
                    <ListItem mb={3}>
                        Developed and maintained micro-frontends using React,
                        Next and state management libraries like Redux and
                        Zustand.
                    </ListItem>
                    <ListItem mb={3}>
                        Implemented responsive design strategies and
                        mobile-first development approach to ensure seamless
                        user experiences across all devices.
                    </ListItem>
                    <ListItem mb={3}>
                        Worked alongside with five front-end developers for
                        developing eCommerce service platforms for variety of
                        seller, retailer, and vendor.
                    </ListItem>
                    <ListItem>
                        Implemented and shipped the front-end of Aya Zay
                        multi-seller web app for Aya Bank which let users can
                        buy various kinds of products at Aya Pay application.
                    </ListItem>
                </UnorderedList>
            </Box>
            <Divider my={6} />
            <Box>
                <Box mb={4}>
                    <Text fontSize="md" fontWeight="semibold">
                        Fullstack Developer At @TeeHtwin
                    </Text>
                    <Text fontSize="xs">November 2023 - Present</Text>
                </Box>
                <UnorderedList>
                    <ListItem mb={3}>
                        Collaborated with a team of developers and designers to
                        create responsive and user-friendly web applications.
                    </ListItem>
                    <ListItem mb={3}>
                        Implemented front-end frameworks such as React and
                        Nextjs to enhance the user interface and improve overall
                        user experience.
                    </ListItem>
                    <ListItem mb={3}>
                        Utilized server-side programming languages like Node.js
                        and Express.js to build robust and scalable back-end
                        functionality.
                    </ListItem>
                    <ListItem mb={3}>
                        Collaborated closely with team members to understand
                        project requirements, provide feedback, and deliver
                        non-profit projects.
                    </ListItem>
                    <ListItem>
                        Kept up-to-date with the latest technologies, industry
                        trends, and best practices through continuous learning
                        and self-improvement.
                    </ListItem>
                </UnorderedList>
            </Box>
        </Box>
    );
};

export default Experience;
