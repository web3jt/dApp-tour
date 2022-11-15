import { ReactNode } from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => (
    <>
        <Header />
        <Nav />
        {children}
        <Footer />
    </>
);

export default Layout;