import { Poppins } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/react";

const nextFont = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("dark", "#001219")(props),
            },
        }),
    },
    fonts: {
        body: nextFont.style.fontFamily,
    },
});

export default theme;
