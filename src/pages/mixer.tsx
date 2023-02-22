import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import MintMixer from "../components/Monarch/MintMixer";
import Container, { OuterContainer, InnerContainer } from "../components/Layout/Container";

const Page: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Claim MonarchMixer</title>
                <meta name="description" content="Claim MonarchMixer ERC1155 NFT" />
            </Head>
            <Container>
                <MintMixer />
            </Container>
        </div>
    );
};

export default Page;
