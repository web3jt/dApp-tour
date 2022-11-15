import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Max7 = ({ children }: Props) => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
    </div>
);

export default Max7;
