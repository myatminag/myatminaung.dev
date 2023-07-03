import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Dark Mode Toggle"
            variant="ghost"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            _hover={{ background: "none" }}
            _focus={{ background: "none", border: "none" }}
        />
    );
};

export default ThemeSwitch;