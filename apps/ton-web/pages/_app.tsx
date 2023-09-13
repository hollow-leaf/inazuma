import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NextHead from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
          <NextHead>
            <title>INAZUMA</title>
            <link rel="icon" href="favicon.ico" />
          </NextHead>
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
      </div>
  );
}

export default MyApp;
