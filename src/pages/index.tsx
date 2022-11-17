import React from 'react';

import type { NextPage } from "next";
import Head from "next/head";

// import Hero from "../components/Debug/Hero";
import Account from "../components/Debug/Account";
import Max7 from "../components/Layout/max7";
import Mint from "../components/Monarch/mint";
import Mint2 from "../components/Monarch/mint2";



const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>RainbowKit DEMO</title>
                <meta name="description" content="RainbowKit DEMO, with wagmi, react, next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="bg-gray-800">
                    <Max7>
                        <div className="py-12">
                            <Mint />
                        </div>
                        <div className="py-12">
                            <Mint2 />
                        </div>
                    </Max7>
                </div>

            </div>
        </div>
    );
};

export default Home;
