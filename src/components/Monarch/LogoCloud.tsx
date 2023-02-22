import Image from "next/image";


import logoSample1 from "../../images/logo/transistor-logo-gray-400.svg";
import logoSample2 from "../../images/logo/mirage-logo-gray-400.svg";
import logoSample3 from "../../images/logo/tuple-logo-gray-400.svg";
import logoSample4 from "../../images/logo/laravel-logo-gray-400.svg";
import logoSample5 from "../../images/logo/statickit-logo-gray-400.svg";
import logoSample6 from "../../images/logo/statamic-logo-gray-400.svg";


const logos = [
    { src: logoSample1, alt: "Workcation" },
    { src: logoSample2, alt: "Mirage" },
    { src: logoSample3, alt: "Tuple" },
    { src: logoSample4, alt: "Laravel" },
    { src: logoSample5, alt: "StaticKit" },
    { src: logoSample6, alt: "Statamic" },
];


export default function Example() {
    return (
        <div className="py-12 lg:py-24">
            <p className="text-center text-lg font-semibold text-pure-400">
                Trusted by over 5 planets from the universe
            </p>
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                {logos.map((logo, index) => (
                    <div key={index} className="col-span-1 flex justify-center bg-pure-800 hover:bg-pure-800/50 py-8 px-8">
                        <Image className="max-h-12" src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}
