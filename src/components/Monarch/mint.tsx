import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import Image from 'next/image';
import Link from 'next/link';
import { ethers } from 'ethers';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import {
    useAccount,
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import CONTRACT_ABI from '../../config/abi/monarchMixer';

import TokenImage0 from '../../../public/images/tokens/cloud-illustration-indigo-400.svg';
import TokenImage1 from '../../../public/images/tokens/cloud-illustration-indigo-400.svg';
import TokenImage2 from '../../../public/images/tokens/cloud-illustration-indigo-400.svg';

type TokenMeta = {
    imageSrc: any,
    imageAlt: string,
}

const TOKEN_METAS = [
    {
        imageSrc: TokenImage0,
        imageAlt: 'Default Image',
    },
    {
        imageSrc: TokenImage1,
        imageAlt: 'Token #1 Image',
    },
    {
        imageSrc: TokenImage2,
        imageAlt: 'Token #2 Image',
    },
]

const MONARCH_MIXER_CONTRACT_CONFIG = {
    address: '0x60B2D8fF61EA7adbee55BfC574F68AFFBaA9441b',
    abi: CONTRACT_ABI,
};

interface MintCodeJSON {
    tokenId: number,
    proofId: number,
    proof: readonly `0x${string}`[],
}

function isMintCodeJSON(obj: any): obj is MintCodeJSON {
    if (typeof obj.tokenId !== 'number') return false;
    if (typeof obj.proofId !== 'number') return false;
    if (!Array.isArray(obj.proof)) return false;
    return true;
}

export default function Example() {
    const { address, isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    // `mintCode`
    const [mintCode, setMintCode] = useState<string>('');
    const [mintCodeError, setMintCodeError] = useState<string>();
    const [mintCodeJSON, setMintCodeJSON] = useState<MintCodeJSON>();
    useEffect(() => {
        writeMint.reset();

        if (mintCode) {
            try {
                const strJson = new TextDecoder().decode(ethers.utils.base58.decode(mintCode));
                const json = JSON.parse(strJson);

                if (!isMintCodeJSON(json)) {
                    setMintCodeJSON(undefined);
                    setMintCodeError('MintCode: invalid');
                    return;
                }

                setMintCodeJSON(JSON.parse(strJson));
                setMintCodeError(undefined);
            } catch (e) {
                setMintCodeJSON(undefined);
                setMintCodeError('MintCode: invalid');
            }

            return;
        }

        setMintCodeJSON(undefined);
        setMintCodeError(undefined);
    }, [mintCode]);

    // prepare and `mint`
    const debouncedMintCodeJSON = useDebounce(mintCodeJSON, 1000);
    const prepareMint = usePrepareContractWrite({
        ...MONARCH_MIXER_CONTRACT_CONFIG,
        functionName: 'mint',
        args: debouncedMintCodeJSON ? [
            ethers.BigNumber.from(debouncedMintCodeJSON.tokenId),
            ethers.BigNumber.from(debouncedMintCodeJSON.proofId),
            debouncedMintCodeJSON.proof,
        ] : undefined,
        cacheTime: 13_000,
        enabled: Boolean(debouncedMintCodeJSON) && !mintCodeError,
    });
    const writeMint = useContractWrite(prepareMint?.data);
    const waitForMintTx = useWaitForTransaction({
        hash: writeMint?.data?.hash,
        confirmations: 1,
        enabled: Boolean(writeMint?.data),
        timeout: 600_000,
        onSuccess(data) {
            console.warn('Success', data)
        },
        onError(error) {
            console.warn('Error', error)
        },
    });

    // onClick `mint`
    const onClickMint = async () => {
        if (writeMint?.write) {
            writeMint.write();
        }
    }

    // `mintCodeErrorMessage`
    const [mintCodeErrorMessage, setMintCodeErrorMessage] = useState<string>();
    useEffect(() => {
        if (!mintCode) {
            setMintCodeErrorMessage(undefined);
            return;
        }

        if (mintCodeError) {
            setMintCodeErrorMessage(mintCodeError);
            return;
        }

        if (prepareMint?.error) {
            if (prepareMint.error.hasOwnProperty('reason')) {
                setMintCodeErrorMessage(prepareMint.error['reason']);
            } else {
                setMintCodeErrorMessage(prepareMint.error.message);
            }
            return;
        }

        setMintCodeErrorMessage(undefined);
    }, [mintCode, mintCodeError, prepareMint]);


    const [tokenMeta, setTokenMeta] = useState<TokenMeta>(TOKEN_METAS[0]);
    useEffect(() => {
        if (
            mintCodeJSON
            &&
            0 < mintCodeJSON.tokenId
            &&
            TOKEN_METAS.length >= mintCodeJSON.tokenId
        ) {
            setTokenMeta(TOKEN_METAS[mintCodeJSON.tokenId]);
            return;
        }

        setTokenMeta(TOKEN_METAS[0]);
    }, [mintCodeJSON]);



    enum TipType {
        Info,
        Error,
        Success,
    }

    type Tip = {
        type: TipType,
        message: string,
    }

    const DEFAULT_TIP = {
        type: TipType.Info,
        message: 'Enter a valid Mint-Code then claim Monarch-Mixer...'
    } as Tip;

    const Button = () => {
        if (!isConnected) {
            return (
                <button
                    type="button"
                    onClick={openConnectModal}
                    className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Connect Wallet
                </button>
            )
        }

        return (
            <button
                type="button"
                disabled={!writeMint.write || writeMint.isLoading || waitForMintTx?.isLoading}
                onClick={onClickMint}
                className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
                Claim Now
            </button>
        )
    }


    // const [tip, setTip] = useState<Tip>(DEFAULT_TIP);
    // useEffect(() => {
    //     if (waitForMintTx?.isSuccess) {
    //         setTip({
    //             type: TipType.Success,
    //             message: 'Claim Successfully',
    //         });
    //         return;
    //     }

    //     if (waitForMintTx?.isLoading) {
    //         setTip({
    //             type: TipType.Info,
    //             message: 'Pending...',
    //         });
    //         return;
    //     }

    //     if (writeMint?.isLoading) {
    //         setTip({
    //             type: TipType.Info,
    //             message: 'Wait for authorization...',
    //         });
    //         return;
    //     }

    //     if (waitForMintTx?.error) {
    //         setTip({
    //             type: TipType.Error,
    //             message: (waitForMintTx.error.hasOwnProperty('reason')) ?
    //                 waitForMintTx.error['reason'] : waitForMintTx.error.message,
    //         });
    //         return;
    //     }

    //     if (writeMint?.error) {
    //         setTip({
    //             type: TipType.Error,
    //             message: (writeMint.error.hasOwnProperty('reason')) ?
    //                 writeMint.error['reason'] : writeMint.error.message,
    //         });
    //         return;
    //     }

    //     if (prepareMint?.isLoading) {
    //         setTip({
    //             type: TipType.Info,
    //             message: 'Querying...',
    //         });
    //         return;
    //     }

    //     if (prepareMint?.error) {
    //         setTip({
    //             type: TipType.Error,
    //             message: (prepareMint.error.hasOwnProperty('reason')) ?
    //                 prepareMint.error['reason'] : prepareMint.error.message,
    //         });
    //         return;
    //     }

    //     if (mintCodeError) {
    //         setTip({
    //             type: TipType.Error,
    //             message: mintCodeError
    //         });
    //         return;
    //     }

    //     if (!mintCode) {
    //         setTip({
    //             type: TipType.Info,
    //             message: 'Please enter Mint-Code then claim your Monarch-Mixer...',
    //         });
    //         return;
    //     }

    //     if (mintCodeJSON) {
    //         setTip({
    //             type: TipType.Info,
    //             message: `You can claim MonarchMixer: TokenID#${mintCodeJSON.tokenId}`,
    //         });
    //         return;
    //     }

    //     setTip({
    //         type: TipType.Info,
    //         message: 'Enter a valid Mint-Code then claim Monarch-Mixer...',
    //     });

    // }, [
    //     mintCode,
    //     mintCodeJSON,
    //     mintCodeError,
    //     prepareMint,
    //     writeMint,
    //     waitForMintTx,
    // ]);







    function getTip(): Tip {
        // console.log('getTip');

        if (!isConnected) {
            return {
                type: TipType.Info,
                message: 'Please connect wallet first...',
            };
        }

        if (waitForMintTx?.isSuccess) {
            return {
                type: TipType.Success,
                message: 'Claim Successfully.',
            };
        }

        if (waitForMintTx?.isLoading) {
            return {
                type: TipType.Info,
                message: 'Pending...',
            };
        }

        if (writeMint?.isLoading) {
            return {
                type: TipType.Info,
                message: 'Wait for authorization...',
            };
        }

        if (waitForMintTx?.error) {
            return {
                type: TipType.Error,
                message: (waitForMintTx.error.hasOwnProperty('reason')) ?
                    waitForMintTx.error['reason'] : waitForMintTx.error.message,
            };
        }

        if (writeMint?.error) {
            return {
                type: TipType.Error,
                message: (writeMint.error.hasOwnProperty('reason')) ?
                    writeMint.error['reason'] : writeMint.error.message,
            };
        }

        if (prepareMint?.isLoading) {
            return {
                type: TipType.Info,
                message: 'Querying...',
            };
        }

        if (prepareMint?.error) {
            return {
                type: TipType.Error,
                message: (prepareMint.error.hasOwnProperty('reason')) ?
                    prepareMint.error['reason'] : prepareMint.error.message,
            };
        }

        if (mintCodeError) {
            return {
                type: TipType.Error,
                message: mintCodeError
            };
        }

        if (!mintCode) {
            return {
                type: TipType.Info,
                message: 'Please enter Mint-Code then claim your Monarch-Mixer...',
            };
        }

        if (mintCodeJSON) {
            return {
                type: TipType.Info,
                message: `You can claim MonarchMixer: TokenID#${mintCodeJSON.tokenId}`,
            };
        }

        return DEFAULT_TIP;
    }

    const Tip = () => {
        const tip = getTip();

        if (tip.type === TipType.Error) {
            return (
                <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                    {tip.message}
                </p>
            )
        }

        if (tip.type === TipType.Success) {
            return (
                <p className="mt-3 text-sm text-green-300 sm:mt-4">
                    {tip.message}
                </p>
            )
        }

        return (
            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                {tip.message}
            </p>
        )
    }


    return (
        <div className="relative overflow-hidden">
            <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                            <div className="lg:py-24">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                                >
                                    <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                        Discord
                                    </span>
                                    <span className="ml-4 text-sm">
                                        Welcome to Monarch Family
                                    </span>
                                    <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                </a>
                                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                    <span className="block">
                                        Claim Monarch-Mixer
                                    </span>
                                    <span className="block text-indigo-400">
                                        Join our Journey
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Monarch Mixer are NFT mementos, minted in recognition for our early supporters.
                                </p>
                                <div className="mt-10 sm:mt-12">
                                    <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                                        <div className="sm:flex">
                                            <div className="min-w-0 flex-1">
                                                <label htmlFor="mint-code" className="sr-only">
                                                    Mint-Code
                                                </label>
                                                <input
                                                    id="mint-code"
                                                    type="mint-code"
                                                    onChange={(e) => setMintCode(e.currentTarget.value.trim())}
                                                    placeholder="Enter your Mint-Code"
                                                    className="block w-full rounded-md border-0 px-4 py-3 disabled:bg-gray-300 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:placeholder-gray-400"
                                                    disabled={!isConnected}
                                                />
                                            </div>
                                            <div className="mt-3 sm:mt-0 sm:ml-3">

                                                <Button />
                                            </div>
                                        </div>
                                        <Tip />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                <Image
                                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={tokenMeta.imageSrc}
                                    alt={tokenMeta.imageAlt}
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
