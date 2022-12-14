import Image from 'next/image';
import Link from 'next/link';
import teamSampleImage from '../../images/team/sample.jpeg';
import imageBarney from '../../images/team/barney.jpeg';
import imageSteven from '../../images/team/steven.jpeg';
import imageSmoke from '../../images/team/smoke.jpeg';
import imageCuff from '../../images/team/sample.jpeg';
import imageCayla from '../../images/team/cayla.jpeg';
import imageTodd from '../../images/team/sample.jpeg';
import imageShahin from '../../images/team/sample.jpeg';
import imageChristina from '../../images/team/christina.jpeg';
import imageJunLi from '../../images/team/sample.jpeg';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '../Icons/SocialIcons';

const people = [
    {
        name: 'Barney',
        role: 'Community Manager and President',
        image: imageBarney,
        bio: 'Ultricies massa malesuada viverra cras lobortis.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Steven',
        role: 'Operating Manager',
        image: imageSteven,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Smoke',
        role: 'Artist Relation, Lifestyle Consultant at We The Best Music',
        image: imageSmoke,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cuff',
        role: 'Athlete Relation, Host of SomeDude Show (executively produced by Lebron James)',
        image: imageCuff,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cayla',
        role: 'Secretary and Administration',
        image: imageCayla,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Todd Kramer',
        role: 'Artist Relation, ROSS + Kramer Gallery Owner, founder of GODA',
        image: imageTodd,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Shahin',
        role: 'NFT/Web3 Advisor',
        image: imageShahin,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Christina',
        role: 'Growth and Global Relation',
        image: imageChristina,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Jun Li',
        role: 'Economics Advisor, Professor of Mathematics Department at Stanford',
        image: imageJunLi,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
]


export default function Example() {
    return (

        <div className="py-12 lg:py-24">
            <div className="space-y-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Meet our leadership
                </h2>
                <ul
                    role="list"
                    className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                                <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                                    <Image className="rounded-lg object-cover shadow-lg hover:saturate-150" src={person.image} alt="" />
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="space-y-4">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>
                                                {person.name}
                                            </h3>
                                            <p className="text-sec-700">
                                                {person.role}
                                            </p>
                                        </div>
                                        <div className="text-base">
                                            <p className="text-gray-500">
                                                {person.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
