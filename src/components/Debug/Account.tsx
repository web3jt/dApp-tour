import { useEffect, useState } from 'react';
import { GetAccountResult } from '@wagmi/core';
import { useAccount } from "wagmi";


export default function Account() {
    const _account = useAccount();
    const [account, setAccount] = useState<GetAccountResult>();

    useEffect(() => {
        setAccount(_account);
    }, [_account.address]);

    return (
        <div>
            <p>Account: {account ? account.address : ''}</p>
        </div>
    );
}