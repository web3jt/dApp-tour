import Image from 'next/image';
import Link from 'next/link';
import imageSample from '../../images/team/sample.jpeg';
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
        role: 'President and Founder @ Monarch, Passionate in rare collectibles',
        image: imageBarney,
        bio: 'Ultricies massa malesuada viverra cras lobortis.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Steven',
        role: 'Executive Member and Management Committee',
        image: imageSteven,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Smoke',
        role: 'Artist Relation in Music, Lifestyle Consultant at We The Best Music',
        image: imageSmoke,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cuff',
        role: 'Global Sports Development, Founder @ SomeDude Show (EP by Lebron James)',
        image: imageCuff,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cayla',
        role: 'Secretary and Head Member of Management Committee',
        image: imageCayla,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Todd Kramer',
        role: 'Artist Relation, Owner @ ROSS + Kramer Gallery and Founder @ GODA',
        image: imageTodd,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Christina',
        role: 'Growth and Global Relation, Previously MD of a global venture capital',
        image: imageChristina,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Yanyan',
        role: 'Board of Advisor, extensive network in talents across Asia Pacific Region',
        image: imageSample,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Jun Li',
        role: 'Economics Advisor, Professor @ Mathematics Department at Stanford',
        image: imageJunLi,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
]


export default function Example() {
    return (
        <div id="team" className="py-12 lg:py-24">
            <div className="space-y-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Management Committee and Community Leadership
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
                                            <p className="text-sec-500">
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
