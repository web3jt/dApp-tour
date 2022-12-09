import Image from 'next/image';
import { Logo } from '../Monarch/Logo';
import clsx from 'clsx';


function Ani() {
    return (
        <div className="py-12 lg:py-24">
            <div className="py-12 flex flex-col items-center justify-center text-pure-600">
                <Logo className={clsx(
                    'pointer-events-auto',
                    'transition ease-in-out duration-500 backdrop-blur',
                    'h-auto w-32', // rounded-full p-0.5
                    'shadow-lg shadow-pure-800/5',
                    'text-pure-400/50 hover:text-white',
                )} />

                <div className="text-sm">
                    Another animated image here...
                </div>
            </div>
        </div>
    )
}

export default Ani;
