import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi';
import {
  goerli,
  mainnet,
  polygon,
  polygonMumbai,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    goerli,
    sepolia,
    polygonMumbai,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Cathay Co2 App',
  projectId: 'aee029c7cbcb082fb760081017c3dec5',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className='min-h-screen flex flex-col'>
          <Navbar/>
            <Component {...pageProps} />
          <Footer/>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
