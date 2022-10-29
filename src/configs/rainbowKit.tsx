import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { chain, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://polygon-rpc.com",
        };
      },
    }),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai",
        };
      },
    }),
    publicProvider(),
  ]
);

export const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains, shimDisconnect: true }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ appName: "Noize", chains }),
      rainbowWallet({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      argentWallet({ chains }),
      braveWallet({
        chains,
        shimDisconnect: true,
      }),
      imTokenWallet({ chains }),
      injectedWallet({
        chains,
        shimDisconnect: true,
      }),
      ledgerWallet({
        chains,
      }),
      trustWallet({ chains, shimDisconnect: true }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
