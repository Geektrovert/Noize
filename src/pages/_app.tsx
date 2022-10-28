import { ChakraProvider } from "@chakra-ui/react";
import {
  RainbowKitProvider,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono/400.css";

import theme from "../theme";
import { AppProps } from "next/app";
import { wagmiClient, chains } from "../configs/rainbowKit";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            appInfo={{
              appName: "Noize",
              learnMoreUrl: "https://crypto.com/university/crypto-wallets",
            }}
            modalSize="compact"
            theme={midnightTheme({
              accentColor: "var(--chakra-colors-purple-600)",
              accentColorForeground: "var(--chakra-colors-purple-50)",
              overlayBlur: "large",
              borderRadius: "none",
            })}
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
