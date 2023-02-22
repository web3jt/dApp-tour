import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Container, { OuterContainer, InnerContainer } from "../components/Layout/Container";

const Page: NextPage = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    function switchLight() {
        setTheme('light');
    }


    function switchDark() {
        setTheme('dark');
    }

    function switchSystem() {
        setTheme('system');
    }

    return (
        <div>
            <Head>
                <title>Test</title>
                <meta name="description" content="Test Page" />
            </Head>
            <Container className="h-64">
                <div className="flex gap-x-2 text-white dark:text-white">
                    <button className="py-1 px-3 bg-black dark:bg-sec-500" onClick={switchLight}>light</button>
                    <button className="py-1 px-3 bg-black dark:bg-sec-500" onClick={switchDark}>dark</button>
                    <button className="py-1 px-3 bg-black dark:bg-sec-500" onClick={switchSystem}>system</button>
                </div>

            </Container>
        </div>
    );
};

export default Page;
