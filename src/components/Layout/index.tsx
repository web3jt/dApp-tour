import { ReactNode } from 'react';
import Head from 'next/head';

import Header from './header';
import Nav from './nav';
import Footer from './footer';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => (
    <div className="text-white">
        <Head>
            <title>Default Title</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Header />
        {/* <Nav /> */}
        {children}
        <Footer />
    </div>
);

export default Layout;
