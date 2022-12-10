import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
    return (
        <Html className="h-full antialiased" lang="en">
            <Head>

            </Head>
            <body className="flex h-full flex-col bg-black dark:bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;
