// import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';

import {
    useEffect,
    useState,
    KeyboardEvent,
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
    // const addRecentTransaction = useAddRecentTransaction();

    const { address } = useAccount();
    const { data: signer, isError, isLoading } = useSigner();
    const provider = useProvider();

    // use `useContract` but not `useContractRead` to avoid calling the contract mulitple times
    const contract = useContract({
        ...MONARCH_MIXER_CONTRACT_CONFIG,
        signerOrProvider: signer || provider,
    });

    // `mintCode`
    const [mintCode, setMintCode] = useState<string>('');
    const [mintCodeError, setMintCodeError] = useState<string>();
    const [mintCodeJSON, setMintCodeJSON] = useState<MintCodeJSON>();
    useEffect(() => {
        const s = mintCode;
        if (s) {
            try {
                const strJson = new TextDecoder().decode(ethers.utils.base58.decode(s));
                setMintCodeJSON(JSON.parse(strJson));
                setMintCodeError(undefined);
            } catch (e) {
                setMintCodeJSON(undefined);
                setMintCodeError('MintCode: invalid');
            }
        } else {
            setMintCodeJSON(undefined);
            setMintCodeError(undefined);
        }
    }, [mintCode]);

    // `mintCodeJSON`
    useEffect(() => {
        (async () => {
            if (mintCodeJSON) {
                const resp = await contract.check(
                    address,
                    mintCodeJSON.tokenId,
                    mintCodeJSON.proofId,
                    mintCodeJSON.proof,
                );

                switch (resp.err) {
                    case 1:
                        setMintCodeError('You have claimed before')
                        break;
                    case 2:
                        setMintCodeError('MintCode is already used')
                        break;
                    case 3:
                        setMintCodeError('MintCode is not valid')
                        break;
                    case 0:
                        setMintCodeError(undefined);
                        break;
                }
                console.log(resp);
            } else {
                setMintCodeError(undefined);
            }
        })();
    }, [mintCodeJSON, address]);

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



    const [mintLoading, setMintLoading] = useState(false);

    const onMintClick = async () => {
        if (mintCodeJSON) {
            setMintLoading(true);

            const tx = await contract.mint(
                mintCodeJSON.tokenId,
                mintCodeJSON.proofId,
                mintCodeJSON.proof,
            );

            // addRecentTransaction({
            //     hash: tx.hash,
            //     description: `Mint #${mintCodeJSON.tokenId}`,
            // });

            const receipt = await tx.wait()
                .catch((_e: Error) => {
                    console.warn('>>> tx.wait() catch');

                    if (_e.hasOwnProperty('reason')) {
                        console.warn(`_e['reason']`);
                        console.error(_e['reason']);
                        // _e['reason'];

                        if (_e.hasOwnProperty('replacement')) {
                            console.warn(`_e['replacement']`);
                            console.error(_e['replacement']);
                        }

                        if (_e.hasOwnProperty('receipt')) {
                            console.warn(`_e['receipt']`);
                            console.error(_e['receipt']);
                        }
                    }
                });

            if (receipt) {
                console.log('TX receipt', receipt);
            }

            setMintLoading(false);
        }
    };





    return (
        <div>
            <p>Mint Code</p>
            <div>
                <input
                    type="text"
                    onKeyUp={(e) => setMintCode(e.currentTarget.value)}
                    className="text-gray-500"
                />
            </div>
            <p>
                {mintCodeError}
            </p>
            <button onClick={onMintClick}>Mint</button>
            <p>
                mintLoading: {mintLoading.toString()}
            </p>
        </div>
    );
}