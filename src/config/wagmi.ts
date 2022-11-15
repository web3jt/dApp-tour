import { Chain, connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
    injectedWallet,
    metaMaskWallet,
    braveWallet,
    rainbowWallet,
    walletConnectWallet,
    coinbaseWallet,
    trustWallet,
    imTokenWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { chain, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const ethereumPoWChainMainnet: Chain = {
    id: 10_001,
    name: 'EthereumPoW',
    network: 'ETHW-mainnet',
    iconUrl: '',
    iconBackground: '#fff',
    nativeCurrency: {
        decimals: 18,
        name: 'EthereumPoW',
        symbol: 'ETHW',
    },
    rpcUrls: {
        default: 'https://mainnet.ethereumpow.org',
    },
    blockExplorers: {
        default: { name: 'OKLink', url: 'https://www.oklink.com/en/ethw' },
        ethwscan: { name: 'ETHWScan', url: 'https://mainnet.ethwscan.com' },
    },
    testnet: false,
};


// console.log();

export const { chains, provider, webSocketProvider } = configureChains(
    [
        chain.mainnet,
        chain.goerli,
        // ethereumPoWChainMainnet,
    ],
    [
        alchemyProvider({ priority: 3, apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        jsonRpcProvider({ priority: 2, rpc: (chain) => ({ http: chain.rpcUrls.default }) }),
        infuraProvider({ priority: 1, apiKey: process.env.NEXT_PUBLIC_INFURA_ID }),
        publicProvider({ priority: 0 }),

        // jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) }),
        // alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        // infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID }),
        // publicProvider(),
    ],
);

const needsInjectedWalletFallback =
    typeof window !== "undefined" &&
    window.ethereum &&
    !window.ethereum.isMetaMask &&
    !window.ethereum.isCoinbaseWallet;

const connectors = connectorsForWallets([
    {
        groupName: "Popular",
        wallets: [
            metaMaskWallet({ chains }),
            braveWallet({ chains }),
            rainbowWallet({ chains }),
            walletConnectWallet({ chains }),
            coinbaseWallet({ appName: "Coinbase", chains }),
            ...(needsInjectedWalletFallback ? [injectedWallet({ chains })] : []),
        ],
    },
    {
        groupName: "Other",
        wallets: [
            trustWallet({ chains }),
            imTokenWallet({ chains })
        ],
    },
]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});
