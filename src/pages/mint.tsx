import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Mint from "../components/Monarch/mint";
import Logo from "../components/Monarch/logo";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Claim MonarchMixer</title>
                <meta name="description" content="Claim MonarchMixer ERC1155 NFT" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {/* <div className="bg-gray-900">
                    <Logo />
                </div> */}
                <div className="bg-gray-800">
                    <Mint />
                </div>
            </div>
        </div>
    );
};

export default Home;
