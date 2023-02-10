import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import social from '../../config/constants/social';
import clsx from 'clsx';

function Example() {
    return (
        <div id="mixer" className="relative overflow-hidden">
            {/* <div className="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
                <svg
                    className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-pure-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                </svg>
            </div> */}
            <div className="relative pt-6 py-12 lg:py-24">
                <main className="mt-16 sm:mt-24">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                            <div>
                                <Link
                                    target="_blank"
                                    href={social.openSea}
                                    className="inline-flex items-center rounded-full bg-zinc-800 p-1 pr-2 text-white hover:text-pure-200 sm:text-base lg:text-sm xl:text-base"
                                >
                                    <span className="rounded-full bg-gradient-to-r from-pri-700 to-pri-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                        Explore
                                    </span>
                                    <span className="ml-4 text-sm">
                                        on OpenSEA
                                    </span>
                                    <ChevronRightIcon className="ml-2 h-5 w-5 text-pure-500" aria-hidden="true" />
                                </Link>
                                <h1 className="mt-4 text-4xl font-bold tracking-tight text-pure-100 sm:text-5xl">
                                    Monarch Mixer
                                </h1>
                                <p className="mt-6 text-base text-pure-400">
                                    Monarch Mixer is a collection of NFT mementos,
                                    minted in recognition for our early supporters.
                                    The word
                                    <span className="font-bold italic">
                                        &nbsp;Mixer&nbsp;
                                    </span>
                                    describes our journey and mission –
                                    bring different names to collaborate something
                                    you wouldn’t expect and skyrocket the experience.
                                    We will continuously facilitate activities and
                                    bridging the right people in the right place to thrive.
                                    There will be a limited amount of Monarch Mixers
                                    given out during these activities. Stay tuned!
                                </p>
                                <div className="mt-8">
                                    <Link
                                        href="/mixer"
                                        className={clsx(
                                            'mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full',
                                            'hover:bg-gradient-to-br hover:from-pri-600 hover:via-pri-500 hover:to-pri-600'
                                        )}
                                    >
                                        Claim Monarch Mixer
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                            <div className="h-64 w-64 bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">

                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    )
}

export default Example;