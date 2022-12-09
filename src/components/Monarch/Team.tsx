import Image from 'next/image';
import Link from 'next/link';
import teamSampleImage from '../../images/team/sample.avif';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../Icons/SocialIcons';

const people = [
    {
        name: 'Barney',
        role: 'Community Manager and President',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Steven',
        role: 'Operating Manager',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Smoke',
        role: 'Artist Relation, Lifestyle Consultant at We The Best Music',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cuff',
        role: 'Athlete Relation, Host of SomeDude Show (executively produced by Lebron James)',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cayla',
        role: 'Secretary and Administration',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Todd Kramer',
        role: 'Artist Relation, ROSS + Kramer Gallery Owner, founder of GODA',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Shahin',
        role: 'NFT/Web3 Advisor',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Christina',
        role: 'Growth and Global Relation',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Jun Li',
        role: 'Economics Advisor, Professor of Mathematics Department at Stanford',
        image: teamSampleImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
]


export default function Example() {
    return (
        <div id="team" className="py-12 lg:py-24">
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        About Us
                    </h2>
                    <p className="text-base text-pure-400">
                        Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                        vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <ul role="list" className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-pure-600/60 lg:gap-x-8 lg:space-y-0">
                        {people.map((person) => (
                            <li key={person.name} className="sm:py-8">
                                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                        <Image className="rounded-lg object-cover shadow-lg" src={person.image} alt="" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="space-y-4">
                                            <div className="space-y-2 text-lg font-medium text-pure-50 leading-6">
                                                <h3>
                                                    {person.name}
                                                </h3>
                                                <p className="text-pure-200/70">
                                                    {person.role}
                                                </p>
                                            </div>
                                            <div className="text-base">
                                                <p className="text-pure-500">{person.bio}</p>
                                            </div>
                                            <ul role="list" className="flex space-x-5">
                                                <li>
                                                    <a href={person.twitterUrl} className="group fill-pure-500">
                                                        <span className="sr-only">Twitter</span>
                                                        <TwitterIcon className="transition h-auto w-6 group-hover:fill-pri-400" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={person.linkedinUrl} className="group fill-pure-500">
                                                        <span className="sr-only">LinkedIn</span>
                                                        <LinkedInIcon className="transition h-auto w-6 group-hover:fill-pri-400" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}