import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const fonts = {
  heading: `'Bebas Neue', serif`,
  body: `'Inter', sans-serif`,
  mono: `'JetBrains Mono', monospace`,
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
