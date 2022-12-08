import Link from 'next/link';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../Icons/SocialIcons';
import social from '../../config/constants/social';


interface SocialLinkProps {
    className?: string;
    href: string;
    ariaLabel: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ className, href, ariaLabel, icon: Icon }) => {
    return (
        <Link className="group -m-1 p-1" href={href} aria-label={ariaLabel}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}


function Example() {
    return (
        <div className="py-12 lg:py-24">
            <div className="max-w-3xl mt-9">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                    What is Monarch?
                </h1>
                <p className="mt-6 text-base text-zinc-400">
                    Monarch is a circle for creative desires of Web3.
                    We believe in trendsetters and tastemakers will shape the digital future.
                    Our passion is to propel them by providing access to unique resources,
                    and as a group we bring higher echelon experience to the space and skyrocket it.
                    The name Monarch derives from Monarch Butterfly,
                    which is known for its transatlantic overwinter migration in group of one million butterflies.
                </p>
            </div>
            <div className="max-w-5xl">
                <div className="mt-4 border-l-4 border-gray-500/50 px-4 xl:px-6 py-1 text-base text-zinc-500">
                    We are a 1-year-old project in development started
                    on October 2021 with many young athletes, emerging artists,
                    entrepreneurs joined who are passionate about contents and web3.
                    We want Monarch to be a permanent hub and transformational center,
                    connecting the tastemakers to creative resources,
                    education and activities that will explore new pathways to digital world.
                </div>
                <div className="mt-6 flex gap-6">
                    <SocialLink
                        href={social.twitter}
                        ariaLabel="Follow on Twitter"
                        icon={TwitterIcon}
                    />
                    <SocialLink
                        href={social.instagram}
                        ariaLabel="Follow on Instagram"
                        icon={InstagramIcon}
                    />
                    <SocialLink
                        href={social.github}
                        ariaLabel="Follow on GitHub"
                        icon={GitHubIcon}
                    />
                    <SocialLink
                        href={social.linkedin}
                        ariaLabel="Follow on LinkedIn"
                        icon={LinkedInIcon}
                    />
                </div>
            </div>
        </div>
    )
}

export default Example;