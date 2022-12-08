import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Container, { OuterContainer, InnerContainer } from "./Container";
import Image from "next/image";
import clsx from 'clsx';


export const CustomConnect = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                if (!connected) {
                    return (
                        <button
                            type="button"
                            aria-label="Toggle dark mode"
                            className={clsx([
                                'transition backdrop-blur',
                                'rounded-full px-3 py-2',
                                'shadow-lg shadow-zinc-800/5',
                                'bg-zinc-800/90',
                                'ring-1 ring-white/10 hover:ring-white/20',
                                'text-sm font-medium',
                                'text-white hover:text-teal-400',
                            ])}
                            onClick={openConnectModal}
                        >
                            Connect
                        </button>
                    )
                }

                if (chain.unsupported) {
                    return (
                        <button
                            type="button"
                            aria-label="Toggle dark mode"
                            className={clsx([
                                'transition backdrop-blur',
                                'inline-flex items-center gap-1',
                                'rounded-full pl-4 pr-2 py-2',
                                'shadow-lg shadow-rose-800/5',
                                'bg-rose-800/90',
                                'ring-1 ring-white/20 hover:ring-white',
                                'font-medium text-sm text-rose-50/90 hover:text-white',
                            ])}
                            onClick={openChainModal}
                        >
                            <span>
                                Wrong Network
                            </span>

                            <ChevronDownIcon className="h-auto w-5 " aria-hidden="true" />
                        </button>
                    );
                }

                return (
                    <button
                        onClick={openAccountModal}
                        type="button"
                        className={clsx([
                            'transition backdrop-blur',
                            'inline-flex items-center gap-1',
                            'rounded-full pl-4 pr-2 py-2',
                            'shadow-lg shadow-zinc-800/5',
                            'bg-zinc-800/90',
                            'ring-1 ring-white/10 hover:ring-white/20',
                            'font-medium text-sm text-white hover:text-teal-400',
                        ])}
                    >
                        <span>
                            {account.displayName}
                        </span>
                        {/* {account.displayBalance ? ` (${account.displayBalance})` : ""} */}

                        <ChevronDownIcon className="h-auto w-5 " aria-hidden="true" />
                    </button>
                );
            }}
        </ConnectButton.Custom>
    );
};


export default function Header() {
    return (
        <>
            <CustomConnect></CustomConnect>
        </>
    );
};