import { connectorsForWallets, wallet } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";


// console.log();

export const { chains, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.goerli],
    [
        // alchemyProvider({ priority: 2, apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        // jsonRpcProvider({ priority: 1, rpc: (chain) => ({ http: chain.rpcUrls.default }) }),
        // publicProvider({ priority: 0 }),

        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID }),
        // jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) }),
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
            wallet.metaMask({ chains, shimDisconnect: true }),
            wallet.brave({ chains, shimDisconnect: true }),
            wallet.rainbow({ chains }),
            wallet.walletConnect({ chains }),
            wallet.coinbase({ appName: "Coinbase", chains }),
            ...(needsInjectedWalletFallback ? [wallet.injected({ chains, shimDisconnect: true })] : []),
        ],
    },
    {
        groupName: "Other",
        wallets: [wallet.trust({ chains, shimDisconnect: true }), wallet.steak({ chains }), wallet.imToken({ chains })],
    },
]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});
