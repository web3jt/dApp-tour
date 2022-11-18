import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import {
    useAccount,
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";
import { useDebounce } from 'usehooks-ts';
import CONTRACT_ABI from '../../config/abi/monarchMixer';
import Max7 from "../../components/Layout/max7";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const MONARCH_MIXER_CONTRACT_CONFIG = {
    address: '0x60B2D8fF61EA7adbee55BfC574F68AFFBaA9441b',
    abi: CONTRACT_ABI,
};

interface MintCodeJSON {
    tokenId: number,
    proofId: number,
    proof: readonly `0x${string}`[],
}

const product = {
    id: 1,
    name: 'Distant Mountains Artwork Tee',
    price: '$36.00',
    description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    href: '#',
    status: 'Processing',
    step: 1,
    date: 'March 24, 2021',
    datetime: '2021-03-24',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
    imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
}























const Mint = () => {
    const { address } = useAccount();

    // `mintCode`
    const [mintCode, setMintCode] = useState<string>('');
    const [mintCodeError, setMintCodeError] = useState<string>();
    const [mintCodeJSON, setMintCodeJSON] = useState<MintCodeJSON>();
    useEffect(() => {
        if (mintCode) {
            try {
                const strJson = new TextDecoder().decode(ethers.utils.base58.decode(mintCode));
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


    const DEFAULT_MINT_TEXT = 'Enter Mint-Code to Claim';
    const [mintButtonText, setMintButtonText] = useState<string>(DEFAULT_MINT_TEXT);

    useEffect(() => {
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
    }, [mintCodeJSON, mintCodeErrorMessage, prepareMint]);




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

                <p className="text-indigo-300">
                    --- PREPARE ---
                </p>
                <p>
                    {prepareMint && (
                        JSON.stringify(prepareMint)
                    )}
                </p>

                <p className="text-indigo-300">
                    --- WRITE ---
                </p>
                <p>
                    {writeMint && (
                        JSON.stringify(writeMint)
                    )}
                </p>

            </div>
        );
    }


    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-100">
                    Claim your MonarchMixer NFT
                </h1>

                <div className="mt-2 border-b border-gray-600 pb-5 text-sm sm:flex sm:justify-between">
                    <dl className="flex">
                        <dt className="text-gray-300">
                            ERC1155
                        </dt>
                        <dt>
                            <span className="sr-only">Date</span>
                            <span className="mx-2 text-gray-300" aria-hidden="true">
                                &middot;
                            </span>
                        </dt>
                        <dd className="font-medium text-gray-400">
                            {MONARCH_MIXER_CONTRACT_CONFIG.address}
                        </dd>
                    </dl>
                    <div className="mt-4 sm:mt-0">
                        <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                            Explore on OpenSEA
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="sr-only">
                        Products purchased
                    </h2>

                    <div className="space-y-24">
                        <div className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
                            <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-50">
                                    <img src={tokenMeta.imageSrc} alt={tokenMeta.imageAlt} className="object-cover object-center" />
                                </div>
                            </div>
                            <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                                <h3 className="text-lg font-medium text-gray-100">
                                    Claim by using a valid Mint-Code
                                </h3>
                                <p className="mt-1 font-medium text-gray-400">
                                    FREE MINT
                                </p>
                                <p className="mt-3 text-gray-300">
                                    Nulla mattis eros eu orci volutpat feugiat. Fusce faucibus porta ligula.
                                </p>
                            </div>
                            <div className="sm:col-span-12 md:col-span-7">
                                <div className="border-b border-gray-600 py-8 space-y-2">
                                    <div>
                                        <textarea
                                            rows={4}
                                            onKeyUp={(e) => setMintCode(e.currentTarget.value.trim())}
                                            className="block w-full rounded-md bg-gray-700 border-gray-600 shadow-sm focus:border-indigo-400 focus:ring-indigo-400 font-mono text-sm sm:text-base text-gray-300"
                                            placeholder="Enter your Mint-Code here"
                                            defaultValue={''}
                                        />
                                    </div>
                                    {mintCodeErrorMessage && (
                                        <div className="text-rose-400">
                                            {mintCodeErrorMessage}
                                        </div>
                                    )}
                                    <div className="flex justify-center">
                                        <button
                                            disabled={!writeMint.write || !writeMint.isIdle}
                                            onClick={onClickMint}
                                            className="w-full inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700 text-center"
                                        >
                                            {mintButtonText}
                                        </button>
                                    </div>
                                </div>
                                {/* <p className="mt-6 font-medium text-gray-400 md:mt-10">
                                    Processing...
                                </p>
                                <div className="mt-6">
                                    <div className="overflow-hidden rounded-full bg-gray-700">
                                        <div
                                            className="h-2 rounded-full bg-indigo-300"
                                            style={{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }}
                                        />
                                    </div>
                                    <div className="mt-6 hidden grid-cols-4 font-medium text-gray-400 sm:grid">
                                        <div className="text-indigo-400">
                                            Mixer Ready
                                        </div>
                                        <div className={classNames(product.step > 0 ? 'text-indigo-300' : '', 'text-center')}>
                                            Enter Mint Code
                                        </div>
                                        <div className={classNames(product.step > 1 ? 'text-indigo-300' : '', 'text-center')}>
                                            Claim/Mint
                                        </div>
                                        <div className={classNames(product.step > 2 ? 'text-indigo-300' : '', 'text-right')}>
                                            Recieved
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Max7>
                <DebugInfo />
            </Max7>
        </div>
    );
}

export default Mint;