import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
    return (
        <Html className="h-full antialiased bg-black dark" lang="en">
            <Head>

            </Head>
            <body className="flex h-full flex-col bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;
