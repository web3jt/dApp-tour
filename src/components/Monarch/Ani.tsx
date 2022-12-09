import Image from 'next/image';
import { Logo } from '../Monarch/Logo';
import clsx from 'clsx';


function Ani() {
    return (
        <div className="py-12 lg:py-24">
            <div className="py-12 flex flex-col items-center justify-center text-zinc-600">
                <Logo className={clsx(
                    'pointer-events-auto',
                    'transition ease-in-out duration-500 backdrop-blur',
                    'h-auto w-32', // rounded-full p-0.5
                    'shadow-lg shadow-zinc-800/5',
                    // 'bg-zinc-800/90 hover:bg-zinc-400/30',
                    // 'ring-1 ring-white/10',
                    'text-zinc-400/50 hover:text-white',
                )} />

                <div className="text-sm">
                    Another animated image here...
                </div>
            </div>
        </div>
    )
}

export default Ani;
