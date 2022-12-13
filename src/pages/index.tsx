import type { NextPage } from "next";
import React from 'react';
import Head from "next/head";
import Ani from "../components/Monarch/Ani";
import Def from "../components/Monarch/Def";
import Mixer from "../components/Monarch/Mixer";
import JoinDiscord from "../components/Monarch/JoinDiscord";
import Team from "../components/Monarch/Team";
import LogoCloud from "../components/Monarch/LogoCloud";
// import Team2 from "../components/Monarch/Team2";
import Container, { OuterContainer, InnerContainer } from "../components/Layout/Container";

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Monarch</title>
                <meta name="description" content="Monarch" />
            </Head>

            <Container className="mt-12">
                <Ani />
                <Def />
                <Mixer />
                <Team />
                <LogoCloud />
                {/* <Team2 /> */}
                <JoinDiscord />
            </Container>
        </>
    );
};

export default Page;
