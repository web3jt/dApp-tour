// import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';

import {
    useEffect,
    useState,
    KeyboardEvent,
    ReactNode,
} from 'react';
import { GetAccountResult } from '@wagmi/core';
import {
    useAccount,
    useContract,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSigner,
} from "wagmi";
import { ethers } from 'ethers';
import { readContract, prepareWriteContract, writeContract } from "@wagmi/core";
import CONTRACT_ABI from '../../config/abi/monarchMixer';

import { useDebounce } from 'usehooks-ts';

const MONARCH_MIXER_CONTRACT_CONFIG = {
    addressOrName: '0x60B2D8fF61EA7adbee55BfC574F68AFFBaA9441b',
    contractInterface: CONTRACT_ABI,
};

interface MintCodeJSON {
    tokenId: number,
    proofId: number,
    proof: string[],
}




export default () => {
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

    // prepare `mint`
    const debouncedMintCodeJSON = useDebounce(mintCodeJSON, 1000);
    const {
        config: writeMintConfig,
        error: prepareWriteMintError,
        // isIdle: isPrepareWriteMintIdle,
        // isLoading: isPrepareWriteMintLoading,
        isFetching: isPrepareWriteMintFetching,
        // isSuccess: isPrepareWriteMintSuccess,
        isError: isPrepareWriteMintError,
        // isFetched: isPrepareWriteMintFetched,
        // isFetchedAfterMount: isPrepareWriteMintFetchedAfterMount,
        // isRefetching: isPrepareWriteMintRefetching,
        // refetch: refetchPrepareWriteMint,
        // status: prepareWriteMintStatus,
    } = usePrepareContractWrite({
        ...MONARCH_MIXER_CONTRACT_CONFIG,
        functionName: 'mint',
        args: [
            debouncedMintCodeJSON?.tokenId,
            debouncedMintCodeJSON?.proofId,
            debouncedMintCodeJSON?.proof,
        ],
        cacheTime: 13_000,
        enabled: Boolean(debouncedMintCodeJSON) && !mintCodeError,
    });

    // write `mint`
    const {
        data: writeMintTxResp,
        error: writeMintTxError,
        isError: isWriteMintError,
        isIdle: isWriteMintIdle,
        isLoading: isWriteMintLoading,
        isSuccess: isWriteMintSuccess,
        write: writeMint,
        reset: resetWriteMint,
        status: writeMintStatus,
    } = useContractWrite(writeMintConfig);

    // onClick `mint`
    const handleMint = async () => {
        if (writeMint) {
            writeMint();
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

        if (prepareWriteMintError) {
            if (prepareWriteMintError.hasOwnProperty('reason')) {
                setMintCodeErrorMessage(prepareWriteMintError['reason']);
            } else {
                setMintCodeErrorMessage(prepareWriteMintError.message);
            }
            return;
        }

        setMintCodeErrorMessage(undefined);
    }, [mintCodeError, prepareWriteMintError]);


    const DEFAULT_MINT_TEXT = 'Enter Mint-Code to Claim';
    const [mintButtonText, setMintButtonText] = useState<string>(DEFAULT_MINT_TEXT);

    useEffect(() => {
        if (mintCodeJSON) {
            if (isPrepareWriteMintFetching) {
                setMintButtonText(`Querying...`);
                return;
            }

            if (mintCodeErrorMessage) {
                setMintButtonText(`Cannot claim TokenID#${mintCodeJSON.tokenId}`);
                return;
            }

            setMintButtonText(`Claim TokenID#${mintCodeJSON.tokenId}`);
            return;
        }

        setMintButtonText(DEFAULT_MINT_TEXT);
    }, [mintCodeJSON, mintCodeErrorMessage, isPrepareWriteMintFetching]);


    const Info = () => {
        return (
            <>
                <div className="mt-4">
                    <p className="text-indigo-300">
                        --- PREPARE ---
                    </p>
                    {/* <p>
                    isPrepareWriteMintIdle: {isPrepareWriteMintIdle.toString()}
                </p>
                <p>
                    isPrepareWriteMintLoading: {isPrepareWriteMintLoading.toString()}
                </p> */}
                    <p>
                        isPrepareWriteMintFetching: {isPrepareWriteMintFetching.toString()}
                    </p>
                    {/* <p>
                    isPrepareWriteMintSuccess: {isPrepareWriteMintSuccess.toString()}
                </p> */}
                    <p>
                        isPrepareWriteMintError: {isPrepareWriteMintError.toString()}
                    </p>
                    {/* <p>
                    isPrepareWriteMintFetched: {isPrepareWriteMintFetched.toString()}
                </p>
                <p>
                    isPrepareWriteMintRefetching: {isPrepareWriteMintRefetching.toString()}
                </p>
                <p>
                    prepareWriteMintStatus: {prepareWriteMintStatus.toString()}
                </p> */}
                </div>

                <div className="mt-4">
                    <p className="text-indigo-300">
                        --- WRITE ---
                    </p>
                    <p>
                        writeMintTxResp.hash: {writeMintTxResp?.hash}
                    </p>
                    <p>
                        writeMintTxError: {writeMintTxError && (JSON.stringify(writeMintTxError))}
                    </p>
                    <p>
                        isWriteMintError: {isWriteMintError.toString()}
                    </p>
                    <p>
                        isWriteMintIdle: {isWriteMintIdle.toString()}
                    </p>
                    <p>
                        isWriteMintLoading: {isWriteMintLoading.toString()}
                    </p>
                    <p>
                        isWriteMintSuccess: {isWriteMintSuccess.toString()}
                    </p>
                    <p>
                        writeMintStatus: {writeMintStatus}
                    </p>
                </div>
            </>
        );
    }


    return (
        <div>
            {mintCodeJSON && (
                <div className="flex justify-center">
                    <div className="shrink mx-auto border-2 border-gray-500 p-12">
                        #{mintCodeJSON.tokenId}
                    </div>
                </div>
            )}

            <div>
                <label>Mint Code</label>
                <div>
                    <input
                        type="text"
                        onKeyUp={(e) => setMintCode(e.currentTarget.value.trim())}
                        className="text-gray-500"
                    />
                </div>

                {mintCodeErrorMessage && (
                    <div className="text-rose-400">
                        {mintCodeErrorMessage}
                    </div>
                )}

            </div>
            <button
                disabled={!writeMint || !isWriteMintIdle}
                onClick={handleMint}
                className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >
                {mintButtonText}
            </button>

            <Info />
        </div>
    );
}