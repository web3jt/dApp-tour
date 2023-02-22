import { ReactNode } from 'react';
import Head from 'next/head';
import { Nav } from './Nav';
import { Footer } from './Footer';

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
        <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-pure-100 dark:bg-pure-900 dark:ring-pure-300/20">
                </div>
            </div>
        </div>

        <div className="relative">
            <Nav />
            {children}
            <Footer />
        </div>


    </div>
);

export default Layout;
