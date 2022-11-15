import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Debug/Hero";

import { useAccount } from "wagmi";
import { GetAccountResult } from '@wagmi/core';
import { useEffect, useState } from 'react';


const Home: NextPage = () => {
    const _account = useAccount();
    const [account, setAccount] = useState<GetAccountResult>();

    useEffect(() => {
        setAccount(_account);
    }, [_account.address]);

    const Account = () => {
        return (
            <div>
                <p>Account: {account ? account.address : ''}</p>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>RainbowKit DEMO</title>
                <meta name="description" content="RainbowKit DEMO, with wagmi, react, next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {/* <Hero /> */}
                <Account />

            </div>
        </div>
    );
};

export default Home;
