import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Mint from "../components/Monarch/mint";

const Page: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Claim MonarchMixer</title>
                <meta name="description" content="Claim MonarchMixer ERC1155 NFT" />
            </Head>
            <div className="bg-gray-800">
                <Mint />
            </div>
        </div>
    );
};

export default Page;
