import Link from 'next/link';
import Container, { OuterContainer, InnerContainer } from './Container'

const links = [
    {
        target: "",
        href: "/about",
        title: "About"
    },
    {
        target: "",
        href: "/mixer",
        title: "Monarch Mixer"
    },
    // {
    //     target: "_blank",
    //     href: "https://github.com/web3jt",
    //     title: "GitHub"
    // },
]

export function Footer() {
    return (
        <footer className="mt-32">
            <OuterContainer>
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                    <InnerContainer>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                {links.map((link, key) => (
                                    <Link
                                        key={key}
                                        target={link.target}
                                        href={link.href}
                                        className="transition hover:text-teal-400"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                            <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                &copy; 2020 - {new Date().getFullYear()} Monarch Group. All rights reserved.
                            </p>
                        </div>
                    </InnerContainer>
                </div>
            </OuterContainer>
        </footer>
    )
}
