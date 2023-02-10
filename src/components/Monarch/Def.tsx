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
                    Collectible is a universal language. Monarch is a global village for collectors & artists to exchange resources and opportunities. We share the passion of discovering new collectibles and the "if you know, you know”. We are releasing an NFT membership collection for our friends, builders, artists, and partners. The support we generate will become fire and gas to make Monarch a bigger hub. A hub that discovers new creators and explores their imagination since day one. A hub that bridges people, culture, creatives around the world.
                </p>
            </div>
            <div className="max-w-5xl">
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
                        // {
                        //     href: social.linkedin,
                        //     ariaLabel: "Follow on LinkedIn",
                        //     icon: LinkedInIcon,
                        // },
                    ].map((link, key) => (
                        <SocialLink key={key} href={link.href} ariaLabel={link.ariaLabel} icon={link.icon} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Example;