import Link from 'next/link';
import Image from 'next/image';
import discordImage from '../../images/discord.jpeg';

function Example() {
    return (
        <div id="contact" className="relative py-12 lg:py-24">
            <div className="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
            <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                    <div className="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
                    <div className="mx-auto lg:max-w-none lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                            <Image
                                className="rounded-3xl object-cover object-center shadow-2xl"
                                src={discordImage}
                                alt="Discord"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative lg:bg-sec-800 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                    <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                        <svg
                            className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-sec-500/30" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                        </svg>
                        <svg
                            className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-sec-500/30" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                        </svg>
                    </div>
                    <div className="relative mx-auto space-y-6 py-12 px-4 sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                            Join the Discord
                        </h2>
                        <p className="text-lg text-white">
                            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                            dui laoreet diam sed lacus, fames.
                        </p>
                        <Link
                            className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-sec-700 shadow-md hover:bg-pure-50 sm:inline-block sm:w-auto"
                            href="#"
                        >
                            Seek for more infomation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example;