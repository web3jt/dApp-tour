import React, { Fragment, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, SunIcon, MoonIcon, WalletIcon } from '@heroicons/react/20/solid';

import Container, { OuterContainer, InnerContainer } from "./Container";
import Connect from './Connect';

import { Logo } from '../Monarch/Logo';


type LinkProps = {
    href: string;
    children: React.ReactNode;
};

type StyleProps = {
    className?: string;
    style?: React.CSSProperties;
};

type NodeProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}



const MobileNavItem = ({ href, children }: LinkProps) => {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    );
};


const NavItem = ({ href, children }: LinkProps) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'hover:text-teal-500 dark:hover:text-teal-400'
                )}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
            </Link>
        </li>
    );
};


const DesktopNav = ({ className, style }: StyleProps) => {
    return (
        <nav className={className} style={style}>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-pure-800 shadow-lg shadow-pure-800/5 ring-1 ring-pure-900/5 backdrop-blur dark:bg-pure-800/90 dark:text-pure-200 dark:ring-white/10">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/#mixer">Mixer</NavItem>
                <NavItem href="/#team">Team</NavItem>
                <NavItem href="/about">About</NavItem>
            </ul>
        </nav>
    );
};


const MobileNavigation = ({ className, style }: StyleProps) => {
    return (
        <Popover className={className} style={style}>
            <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-pure-800 shadow-lg shadow-pure-800/5 ring-1 ring-pure-900/5 backdrop-blur dark:bg-pure-800/90 dark:text-pure-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDownIcon className="ml-2 h-auto w-5 stroke-pure-500 group-hover:stroke-pure-700 dark:group-hover:stroke-pure-400" />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 z-50 bg-pure-800/40 backdrop-blur-sm dark:bg-black/80" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-pure-900/5 dark:bg-pure-900 dark:ring-pure-800"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                                <XMarkIcon className="h-6 w-6 text-pure-500 dark:text-pure-400" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-pure-600 dark:text-pure-400">
                                Navigation
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-pure-100 text-base text-pure-800 dark:divide-pure-100/5 dark:text-pure-300">
                                <MobileNavItem href="/home">Home</MobileNavItem>
                                <MobileNavItem href="/articles">Articles</MobileNavItem>
                                <MobileNavItem href="/projects">Projects</MobileNavItem>
                                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                                <MobileNavItem href="/uses">Uses</MobileNavItem>
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    );
};




function AvatarContainer() {
    return (
        <Logo className={clsx(
            'pointer-events-auto',
            'transition ease-in-out duration-500 backdrop-blur',
            'h-auto w-10',
            'shadow-lg shadow-pure-800/5',
            'text-pure-400 hover:text-pri-400',
        )} />
    );
}


export const Nav = () => {
    return (
        <div className="pointer-events-none select-none relative z-50 flex flex-col">
            <nav className="top-0 z-10 h-16 pt-6">
                <Container className="top-[var(--header-top,theme(spacing.6))] w-full">
                    <div className="relative flex gap-4">
                        <div className="flex flex-1">
                            <AvatarContainer />
                        </div>
                        <div className="flex flex-1 justify-end md:justify-center">
                            <MobileNavigation className="pointer-events-auto md:hidden" />
                            <DesktopNav className="pointer-events-auto hidden md:block" />
                        </div>
                        <div className="pointer-events-auto flex justify-end md:flex-1">
                            <Connect />
                        </div>
                    </div>
                </Container>

            </nav>
        </div>
    )
}
