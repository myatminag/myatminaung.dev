import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        blue: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
    initialColorMode: "dark",
    useSystemColorMode: false,
});

export default theme;
