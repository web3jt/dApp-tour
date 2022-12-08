import Image from 'next/image';
import teamSampleImage from '../../images/team/sample.avif';

const people = [
    {
        name: 'Barney',
        role: 'Community Manager and President',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Steven',
        role: 'Operating Manager',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Smoke',
        role: 'Artist Relation, Lifestyle Consultant at We The Best Music',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cuff',
        role: 'Athlete Relation, Host of SomeDude Show (executively produced by Lebron James)',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Cayla',
        role: 'Secretary and Administration',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Todd Kramer',
        role: 'Artist Relation, ROSS + Kramer Gallery Owner, founder of GODA',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Shahin',
        role: 'NFT/Web3 Advisor',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Christina',
        role: 'Growth and Global Relation',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Jun Li',
        role: 'Economics Advisor, Professor of Mathematics Department at Stanford',
        image: teamSampleImage,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
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
                    <p className="text-base text-zinc-400">
                        Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                        vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <ul role="list" className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-zinc-600/60 lg:gap-x-8 lg:space-y-0">
                        {people.map((person) => (
                            <li key={person.name} className="sm:py-8">
                                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                        <Image className="rounded-lg object-cover shadow-lg" src={person.image} alt="" />

                                        {/* <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" /> */}
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="space-y-4">
                                            <div className="space-y-2 text-lg font-medium text-zinc-50 leading-6">
                                                <h3>
                                                    {person.name}
                                                </h3>
                                                <p className="text-zinc-200/70">
                                                    {person.role}
                                                </p>
                                            </div>
                                            <div className="text-base">
                                                <p className="text-zinc-500">{person.bio}</p>
                                            </div>
                                            <ul role="list" className="flex space-x-5">
                                                <li>
                                                    <a href={person.twitterUrl} className="text-zinc-500 hover:text-zinc-400">
                                                        <span className="sr-only">Twitter</span>
                                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={person.linkedinUrl} className="text-zinc-500 hover:text-zinc-400">
                                                        <span className="sr-only">LinkedIn</span>
                                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
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