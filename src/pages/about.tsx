import React from 'react';
import type { NextPage } from "next";

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

import Container, { OuterContainer, InnerContainer } from "../components/Layout/Container";

import {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
    MailIcon,
} from '../components/Icons/SocialIcons';


import portraitImage from '../images/portrait.jpg';
import social from '../config/constants/social';

interface SocialLinkProps {
    className?: string;
    href: string;
    children: React.ReactNode;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ className, href, children, icon: Icon }) => {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                target="_blank"
                href={href}
                className="group flex text-sm font-medium text-pure-800 transition hover:text-pri-500 dark:text-pure-200 dark:hover:text-pri-500"
            >
                <Icon className="h-6 w-6 flex-none fill-pure-500 transition group-hover:fill-pri-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    );
}




const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | Monarch</title>
                <meta
                    name="description"
                    content="About | Monarch"
                />
            </Head>
            <Container className="py-16 sm:py-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-pure-100 object-cover dark:bg-pure-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-pure-800 dark:text-pure-100 sm:text-5xl">
                            About Monarch
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-pure-600 dark:text-pure-400">
                            <p>
                                Behind every extraordinary collectible, there is a unique story and journey.
                            </p>
                            <p>
                                Our name Monarch is inspired by the monarch butterfly, an insect whose transatlantic migration is an effort of sheer perseverance and generational effort. The flutter strengthens the butterfly, and the butterfly strengthens the flutter.
                            </p>
                            <p>
                                Similarly, Monarch attracts those who translate the ethos of collecting to an entire lifestyle. Many of our members are friends for decades during which we collected different tastes and traveled around the world. Monarch strengthens our members, and our members strengthens Monarch.
                            </p>
                            <p>
                                We now welcome people who want to dig in, build Monarch together, and discover something special for themselves. We are releasing an NFT membership collection for our friends, artists, partners, and builders. The 2,100 NFT membership will be released in 3 stages: Invitation, Application, Public Mint. The support we generate will become fire and gas to make Monarch a bigger hub.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href={social.twitter} icon={TwitterIcon}>
                                Follow on Twitter
                            </SocialLink>
                            <SocialLink href={social.instagram} icon={InstagramIcon} className="mt-4">
                                Follow on Instagram
                            </SocialLink>
                            <SocialLink href={social.github} icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            {/* <SocialLink href={social.linkedin} icon={LinkedInIcon} className="mt-4">
                                Follow on LinkedIn
                            </SocialLink> */}
                            <SocialLink
                                href={`mailto:${social.email}`}
                                icon={MailIcon}
                                className="mt-8 border-t border-pure-100 pt-8 dark:border-pure-700/40"
                            >
                                {social.email}
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Page;
