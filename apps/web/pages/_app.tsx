import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider,Theme } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi';
import {
  goerli,
  mainnet,
  polygonMumbai,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: '...',
  },
  colors: {
    accentColor: '#00A650',  // 主要強調色，代表綠色的能源
    accentColorForeground: '#FFFFFF',  // 主要強調色的文字前景色，可能是白色
    actionButtonBorder: '#00A650',  // 按鈕邊框色，與主要強調色一致
    actionButtonBorderMobile: '#00A650',  // 手機版按鈕邊框色
    actionButtonSecondaryBackground: '#E0E0E0',  // 次要按鈕的背景色，淺灰色
    closeButton: '#555555',  // 關閉按鈕的文字色，中灰色
    closeButtonBackground: 'transparent',  // 關閉按鈕的背景色（透明）
    connectButtonBackground: '#00A650',  // 連接按鈕的背景色，與主要強調色一致
    connectButtonBackgroundError: '#FF0000',  // 連接出錯時的背景色，紅色
    connectButtonInnerBackground: '#FFFFFF',  // 連接按鈕內部的背景色，白色
    connectButtonText: '#FFFFFF',  // 連接按鈕文字色，白色
    connectButtonTextError: '#FFFFFF',  // 連接出錯時的文字色，白色
    connectionIndicator: '#00A650',  // 連接指示器的顏色，與主要強調色一致
    downloadBottomCardBackground: '...',
    downloadTopCardBackground: '...',
    error: '...',
    generalBorder: '...',
    generalBorderDim: '...',
    menuItemBackground: '...',
    modalBackdrop: '...',
    modalBackground: '...',
    modalBorder: '...',
    modalText: '...',
    modalTextDim: '...',
    modalTextSecondary: '...',
    profileAction: '...',
    profileActionHover: '...',
    profileForeground: '...',
    selectedOptionBorder: '...',
    standby: '...',
  },
  fonts: {
    body: '...',
  },
  radii: {
    actionButton: '...',
    connectButton: '...',
    menuButton: '...',
    modal: '...',
    modalMobile: '...',
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: '...',
    selectedWallet: '...',
    walletLogo: '...',
  },
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
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
      <RainbowKitProvider chains={chains} theme={myCustomTheme} coolMode>
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
