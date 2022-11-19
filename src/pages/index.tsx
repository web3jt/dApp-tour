import React from 'react';

import type { NextPage } from "next";
import Head from "next/head";

// import Hero from "../components/Debug/Hero";
import Account from "../components/Debug/Account";
// import Test from "../components/Debug/test";
import Max7 from "../components/Layout/max7";
import Mint from "../components/Monarch/mint";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>RainbowKit DEMO</title>
                <meta name="description" content="RainbowKit DEMO, with wagmi, react, next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Max7>
                    <div className="py-20">
                        <Account />
                    </div>
                </Max7>
            </div>
        </div>
    );
};

export default Home;
