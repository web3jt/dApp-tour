import React from "react";
import { UseQueryResult } from "wagmi/dist/declarations/src/hooks/utils/query";


type Props = {
    waitForTx: UseQueryResult<import("@ethersproject/providers").TransactionReceipt, Error>
};


const TxStatus: React.FC<Props> = (props) => {
    const wft = props.waitForTx;

    return (
        <div className="w-full border bg-pure-500">
            {wft?.isIdle && (
                <p>
                    isIdle: {wft.isIdle.toString()}
                </p>
            )}
            {wft?.data && (
                <p>
                    data: {JSON.stringify(wft.data)}
                </p>
            )}
            {wft?.error && (
                <p>
                    error: {JSON.stringify(wft.error)}
                </p>
            )}
            {wft?.fetchStatus && (
                <p>
                    fetchStatus: {JSON.stringify(wft.fetchStatus)}
                </p>
            )}
            {wft?.isError && (
                <p>
                    isError
                </p>
            )}
            {wft?.isFetched && (
                <p>
                    isFetched
                </p>
            )}
            {wft?.isFetchedAfterMount && (
                <p>
                    isFetchedAfterMount
                </p>
            )}
            {wft?.isFetching && (
                <p>
                    isFetching
                </p>
            )}
            {wft?.isLoading && (
                <p>
                    isLoading
                </p>
            )}
            {wft?.isRefetching && (
                <p>
                    isFetching
                </p>
            )}
            {wft?.isSuccess && (
                <p>
                    isSuccess
                </p>
            )}
            {wft?.status && (
                <p>
                    status: {JSON.stringify(wft.status)}
                </p>
            )}
        </div>
    );
};

export default TxStatus;
