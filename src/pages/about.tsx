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
                className="group flex text-sm font-medium text-pure-800 transition hover:text-teal-500 dark:text-pure-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-pure-500 transition group-hover:fill-teal-500" />
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-pure-600 dark:text-pure-400">
                            <p>
                                Ut vestibulum scelerisque tortor, sit amet blandit ex interdum vitae. In ac fringilla dolor, non gravida orci. Cras cursus non massa ut facilisis.
                            </p>
                            <p>
                                Nullam nec posuere purus. Integer vestibulum faucibus quam, id commodo justo fringilla at. Phasellus blandit aliquam ligula, vitae vestibulum turpis. Praesent a odio velit. Nulla et lacus purus. Nullam ante dolor, consequat vel accumsan at, mollis a massa.
                            </p>
                            <p>
                                Nullam efficitur nulla in quam egestas auctor. Maecenas faucibus placerat molestie. Phasellus est sapien, pulvinar quis tristique in, sollicitudin ut erat. Vivamus et luctus velit. Cras gravida auctor blandit.
                            </p>
                            <p>
                                Mauris pulvinar neque et commodo molestie. Etiam a consequat sem. Nulla faucibus laoreet justo, sit amet fermentum diam vestibulum id. Nullam viverra justo leo, eu euismod augue lobortis ullamcorper. Maecenas malesuada tellus eu dui consectetur tempor.
                            </p>
                            <p>
                                Donec neque odio, imperdiet id dapibus lacinia, euismod non est. Vivamus sit amet ligula sit amet odio imperdiet efficitur. Praesent in arcu sit amet massa imperdiet dignissim vel ut purus. Cras luctus eget leo et gravida. Aenean at lacus at purus efficitur semper a ac diam. Cras interdum erat lorem, nec varius lorem egestas sit amet.
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
                            <SocialLink href={social.linkedin} icon={LinkedInIcon} className="mt-4">
                                Follow on LinkedIn
                            </SocialLink>
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
