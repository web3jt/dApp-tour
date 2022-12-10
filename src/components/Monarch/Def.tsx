import Link from 'next/link';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../Icons/SocialIcons';
import social from '../../config/constants/social';
import clsx from 'clsx';


interface SocialLinkProps {
    href: string;
    ariaLabel: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, icon: Icon }) => {
    return (
        <Link className="group -m-1 p-1" href={href} aria-label={ariaLabel}>
            <Icon className="transition h-6 w-6 fill-pure-500 group-hover:fill-pri-400" />
        </Link>
    );
}


function Example() {
    return (
        <div className="py-12 lg:py-24">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-pure-100 sm:text-5xl">
                    What is Monarch?
                </h1>
                <p className="mt-6 text-base text-pure-400">
                    Monarch is a circle for creative desires of Web3.
                    We believe in trendsetters and tastemakers will shape the digital future.
                    Our passion is to propel them by providing access to unique resources,
                    and as a group we bring higher echelon experience to the space and skyrocket it.
                    The name Monarch derives from Monarch Butterfly,
                    which is known for its transatlantic overwinter migration in group of one million butterflies.
                </p>
            </div>
            <div className="max-w-5xl">
                <div className="mt-4 border-l-4 border-pure-500/50 px-4 xl:px-6 py-1 text-base text-pure-500">
                    We are a 1-year-old project in development started
                    on October 2021 with many young athletes, emerging artists,
                    entrepreneurs joined who are passionate about contents and web3.
                    We want Monarch to be a permanent hub and transformational center,
                    connecting the tastemakers to creative resources,
                    education and activities that will explore new pathways to digital world.
                </div>
                <div className="mt-6 flex gap-6">

                    {[
                        {
                            href: social.twitter,
                            ariaLabel: "Follow on Twitter",
                            icon: TwitterIcon,
                        },
                        {
                            href: social.instagram,
                            ariaLabel: "Follow on Instagram",
                            icon: InstagramIcon,

                        },
                        {
                            href: social.github,
                            ariaLabel: "Follow on GitHub",
                            icon: GitHubIcon,
                        },
                        {
                            href: social.linkedin,
                            ariaLabel: "Follow on LinkedIn",
                            icon: LinkedInIcon,
                        },
                    ].map((link, key) => (
                        <SocialLink key={key} href={link.href} ariaLabel={link.ariaLabel} icon={link.icon} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Example;