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

type Props = {
    children: ReactNode;
};







export default () => {
    // const addRecentTransaction = useAddRecentTransaction();

    const { address } = useAccount();
    // const { data: signer, isError, isLoading } = useSigner();
    // const provider = useProvider();

    // // use `useContract` but not `useContractRead` to avoid calling the contract mulitple times
    // const contract = useContract({
    //     ...MONARCH_MIXER_CONTRACT_CONFIG,
    //     signerOrProvider: signer || provider,
    // });

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
    const { config: writeMintConfig, error: writeMintConfigError } = usePrepareContractWrite({
        ...MONARCH_MIXER_CONTRACT_CONFIG,
        functionName: 'mint',
        args: [
            debouncedMintCodeJSON?.tokenId,
            debouncedMintCodeJSON?.proofId,
            debouncedMintCodeJSON?.proof,
            // {
            //     from: address,
            // }
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
        writeAsync: writeMint,
        reset: resetWriteMint,
        status: writeMintStatus,
    } = useContractWrite(writeMintConfig);

    // onClick `mint`
    const handleMint = async () => {
        if (writeMint) {
            await writeMint();
        }
    }

    // `mintCodeTip`
    const [mintCodeTip, setMintCodeTip] = useState<string>();
    useEffect(() => {
        if (!mintCode) {
            setMintCodeTip(undefined);
            return;
        }

        if (mintCodeError) {
            setMintCodeTip(mintCodeError);
            return;
        }

        if (writeMintConfigError) {
            if (writeMintConfigError.hasOwnProperty('reason')) {
                setMintCodeTip(writeMintConfigError['reason']);
            } else {
                setMintCodeTip(writeMintConfigError.message);
            }
            return;
        }

        setMintCodeTip(undefined);
    }, [mintCodeError, writeMintConfigError]);

    // const { writeAsync: mint, error: mintError } = useContractWrite({
    //     mode: 'recklesslyUnprepared',
    //     ...MONARCH_MIXER_CONTRACT_CONFIG,
    //     functionName: 'mint',
    // });

    // useEffect(() => {
    //     if (mintError) {
    //         console.warn('>>> mintError');
    //         console.error(mintError);

    //         if (mintError.hasOwnProperty('reason')) {
    //             console.warn(`mintError['reason']`);
    //             console.error(mintError['reason']);

    //             if (mintError.hasOwnProperty('replacement')) {
    //                 // tx.value = mintError['replacement'];
    //                 console.warn(`mintError['replacement']`);
    //                 console.error(mintError['replacement']);
    //             }

    //             if (mintError.hasOwnProperty('receipt')) {
    //                 console.warn(`mintError['receipt']`);
    //                 console.error(mintError['receipt']);
    //             }
    //         }
    //     }
    // }, [mintError]);








    return (
        <div>
            {mintCodeJSON && (
                <div>
                    <div>tokenId: {mintCodeJSON.tokenId}</div>
                </div>
            )}


            <p>Mint Code</p>
            <div>
                <input
                    type="text"
                    onKeyUp={(e) => setMintCode(e.currentTarget.value.trim())}
                    className="text-gray-500"
                />
            </div>
            {mintCodeTip && (
                <div className="text-gray-500">
                    {mintCodeTip}
                </div>
            )}
            <button
                disabled={!writeMint || isWriteMintLoading}
                onClick={handleMint}
            >
                Mint
            </button>

            <div className="mt-4">
                Can writeMint {writeMint ? 'YES' : 'NO'}
            </div>

            <div>
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

        </div>
    );
}