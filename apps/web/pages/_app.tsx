import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygonMumbai } from "wagmi/chains";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, sepolia, polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Cathay Co2 App",
  projectId: "aee029c7cbcb082fb760081017c3dec5",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        retry: 10,
        cacheTime: 1000*60*3
      }
    }
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} coolMode>
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default MyApp;
