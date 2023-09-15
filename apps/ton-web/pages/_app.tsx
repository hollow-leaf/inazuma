import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NextHead from "next/head";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 10,
      cacheTime: 1000 * 60 * 3,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
          <NextHead>
            <title>INAZUMA</title>
            <link rel="icon" href="favicon.ico" />
          </NextHead>
          <div className="min-h-screen flex flex-col relative" >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
    </QueryClientProvider>
  );
}

export default MyApp;
