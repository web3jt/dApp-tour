import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

// wagmi
import { WagmiConfig } from "wagmi";
import { chain } from 'wagmi';
import { chains, wagmiClient } from "config/wagmi";

// RainbowKit
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

//
import "../styles/globals.css";
import Layout from '../components/Layout';


function DApp({ Component, pageProps }: AppProps) {
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => setMounted(true), []);
    // if (!mounted) return null;

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                theme={darkTheme()}
                chains={chains}
                initialChain={chain.goerli}
                // showRecentTransactions={true}
                appInfo={{
                    // TODO
                    appName: 'Rainbowkit Demo',
                    learnMoreUrl: 'https://learnaboutcryptowallets.example',
                }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default DApp;
