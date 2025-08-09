"use client"
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: ['300', '400', '700', '700'], subsets: ['latin'] });

export default function Support() {
    return (
        <div className="mt-0 ml-[3vw] p-4 sm:p-8 md:p-10 pb-0" id='sponsor'>
            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Support Us
                        </h1>
                        <p
                            className="ml-0 m-1 text-lg sm:text-xl md:text-2xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            If you find Flossum useful, consider supporting us to keep the project alive:
                        </p>
                    </div>
                </div>
                <div className='flex flex-row width-full gap-3.5'>
                    <div className="flex flex-wrap gap-4 mt-5 mb-12">
                        <div
                            onClick={() => window.open("https://github.com/pushkarsinghh/flossum", "_blank", "noopener,noreferrer")}
                            className="hover:scale-102 transition-transform duration-200 cursor-pointer"
                        >
                            <Image src={"/StarOnGitHub.png"} alt="Star Us On GitHub" height={180} width={250} />
                        </div>
                        <a
                            href="https://buymeacoffee.com/pushkarsinghh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={"/BMAC.png"} alt="Buy Me a Coffee" height={180} width={300} className="hover:scale-102 transition-transform duration-200 cursor-pointer" />
                        </a>
                        <div
                            onClick={() => window.open("https://github.com/sponsors/pushkarsinghh", "_blank", "noopener,noreferrer")}
                            className="rounded-xl hover:scale-102 transition-transform duration-200 cursor-pointer"
                        >
                            <Image src={"/SponsorOnGitHub.png"} alt="Sponsor on GitHub" height={180} width={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}