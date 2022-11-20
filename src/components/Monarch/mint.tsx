import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { ethers } from 'ethers';
import {
    useAccount,
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import CONTRACT_ABI from '../../config/abi/monarchMixer';

import FCTxStatus from "../../components/Tx/status";

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
    const { address } = useAccount();

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


    const [txSuccess, setTxSuccess] = useState<boolean>();
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


    // const txTip = () => {
    //     if (txSuccess !== undefined) {

    //     }
    // }

    // const

    // const [indicator, setIndicator] = useState<string>('');
    // const [statusClassName, setStatusClassName] = useState<string>('');

    // write, tx pending
    // write, tx success
    // write, tx error
    // prepare, success
    // prepare, error
    // mintCode, empty




    // TODO: onSuccess, set status
    enum TxStatus {
        Idle,
        Error,
        Loading,
        Success,
    }
    const [txStatus, setTxStatus] = useState<TxStatus>(TxStatus.Idle);

    // useEffect(() => {
    //     console.log('waitForMintTx');
    //     console.log(waitForMintTx);
    // }, [waitForMintTx])

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


    const DEFAULT_MINT_TEXT = 'Enter Mint-Code to Claim XXX';
    const [mintButtonText, setMintButtonText] = useState<string>(DEFAULT_MINT_TEXT);

    const btnText = () => {
        if (mintCodeJSON) {
            if (prepareMint?.isFetching) {
                return `Querying...`;
            }

            if (mintCodeErrorMessage) {
                return `Can NOT claim TokenID#${mintCodeJSON.tokenId}`;
            }

            return `Claim TokenID#${mintCodeJSON.tokenId}`;
        }

        return DEFAULT_MINT_TEXT;
    }


    useEffect(() => {
        if (waitForMintTx) {
            if (waitForMintTx.isLoading || waitForMintTx.isFetching) {
                setMintButtonText(`Claiming...`);
                return;
            }

            if (waitForMintTx.isSuccess) {
                setMintButtonText(`Claim Successfully`);
                return;
            }

            if (waitForMintTx.isError) {
                setMintButtonText(`Claim Failed`);
                return;
            }
        }

        if (mintCodeJSON) {
            if (prepareMint?.isFetching) {
                setMintButtonText(`Querying...`);
                return;
            }

            if (mintCodeErrorMessage) {
                setMintButtonText(`Can NOT claim TokenID#${mintCodeJSON.tokenId}`);
                return;
            }

            setMintButtonText(`Claim TokenID#${mintCodeJSON.tokenId}`);
            return;
        }

        setMintButtonText(DEFAULT_MINT_TEXT);
    }, [mintCodeJSON, mintCodeErrorMessage, prepareMint, waitForMintTx]);




    interface TokenMeta {
        imageSrc: string,
        imageAlt: string,
    }

    const [tokenMeta, setTokenMeta] = useState<TokenMeta>({
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
        imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
    });







    const DebugInfo = () => {
        return (
            <div className="mt-4">

                {/* <p className="text-indigo-300">
                    --- PREPARE ---
                </p>
                <p>
                    {prepareMint && (
                        JSON.stringify(prepareMint)
                    )}
                </p> */}

                <p className="text-indigo-300">
                    --- WRITE ---
                </p>
                {writeMint && (
                    <p>
                        {JSON.stringify(writeMint)}
                    </p>
                )}

                <p className="text-indigo-300">
                    --- WAIT ---
                </p>

                <FCTxStatus waitForTx={waitForMintTx} />
            </div>
        );
    }


    const Status = () => {
        if (waitForMintTx?.isSuccess) {
            return (
                <p className="mt-3 text-sm text-green-300 sm:mt-4">
                    Claim Successfully!
                </p>
            );
        }

        if (waitForMintTx?.isLoading) {
            return (
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Pending...
                </p>
            );
        }

        if (writeMint?.isLoading) {
            return (
                <p className="mt-3 text-sm text-green-300 sm:mt-4">
                    Wait for authorization...
                </p>
            );
        }

        if (waitForMintTx?.error) {
            if (waitForMintTx.error.hasOwnProperty('reason')) {
                return (
                    <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                        {waitForMintTx.error['reason']}
                    </p>
                );
            } else {
                return (
                    <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                        {waitForMintTx.error.message}
                    </p>
                );
            }
        }

        if (writeMint?.error) {
            if (writeMint.error.hasOwnProperty('reason')) {
                return (
                    <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                        {writeMint.error['reason']}
                    </p>
                );
            } else {
                return (
                    <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                        {writeMint.error.message}
                    </p>
                );
            }
        }

        if (prepareMint?.isLoading) {
            return (
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Querying...
                </p>
            );
        }

        if (prepareMint?.error) {
            if (prepareMint.error.hasOwnProperty('reason')) {
                return (
                    <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                        {prepareMint.error['reason']}
                    </p>
                );
            } else {
                return (
                    <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                        {prepareMint.error.message}
                    </p>
                );
            }
        }

        if (mintCodeError) {
            return (
                <p className="mt-3 text-sm text-rose-300 sm:mt-4">
                    {mintCodeError}
                </p>
            );
        }

        if (!mintCode) {
            return (
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Please enter Mint-Code then claim your Monarch-Mixer...
                </p>
            );
        }

        if (mintCodeJSON) {
            return (
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    You can claim MonarchMixer: TokenID#{mintCodeJSON.tokenId}
                </p>
            );
        }









        // return (
        //     <>
        //         {!mintCode && (
        //             <p className="mt-3 text-sm text-gray-300 sm:mt-4">
        //                 Please enter Mint-Code then claim your Monarch-Mixer...
        //             </p>
        //         )}
        //         {!mintCodeErrorMessage && (
        //             <p className="mt-3 text-sm text-rose-300 sm:mt-4">
        //                 Error Message...
        //             </p>
        //         )}
        //         <p className="mt-3 text-sm text-rose-300 sm:mt-4">
        //             {mintCodeErrorMessage}
        //         </p>

        //         <p className="mt-3 text-sm text-green-300 sm:mt-4">
        //             Claimed Successfully...
        //         </p>
        //     </>
        // );
    }



    return (
        <>
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
                                                        className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                    />
                                                </div>
                                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                                    <button
                                                        type="button"
                                                        disabled={!writeMint.write || writeMint.isLoading || waitForMintTx?.isLoading}
                                                        onClick={onClickMint}
                                                        className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                    >
                                                        Claim Now
                                                    </button>
                                                </div>
                                            </div>
                                            <Status />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl lg:px-8">
                <DebugInfo />
                {/* <p>
                    {JSON.stringify(prepareMint)}
                </p> */}
            </div>
        </>
    )
}
