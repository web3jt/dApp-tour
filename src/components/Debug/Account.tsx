import { useEffect, useState } from 'react';
import { GetAccountResult } from '@wagmi/core';
import { useAccount } from "wagmi";


export default function Account() {
    const { address: _address } = useAccount();
    const [address, setAddress] = useState<string>();

    useEffect(() => {
        setAddress(_address);
    }, [_address]);

    return (
        <div>
            <p>Account: {address ? address : ''}</p>
        </div>
    );
}