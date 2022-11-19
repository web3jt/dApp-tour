import { ReactNode } from 'react';

import Header from './header';
import Nav from './nav';
import Footer from './footer';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => (
    <div className="text-white">
        <Header />
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
    </div>
);

export default Layout;
