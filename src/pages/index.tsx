import type { NextPage } from "next";
import React from 'react';
import Head from "next/head";
import What from "../components/Monarch/what1";
import Mixer from "../components/Monarch/mixer";
import JoinDiscord from "../components/Monarch/JoinDiscord";
import Team from "../components/Monarch/Team";
import Container, { OuterContainer, InnerContainer } from "../components/Layout/Container";

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Monarch</title>
                <meta name="description" content="Monarch" />
            </Head>

            <Container className="mt-12">
                <div className="py-12 lg:py-24">
                    <div className="h-64 border-2 border-zinc-600/50 rounded-xl">

                    </div>
                </div>

                <What />
                <Mixer />
                <Team />
                <JoinDiscord />
            </Container>
        </>
    );
};

export default Page;
