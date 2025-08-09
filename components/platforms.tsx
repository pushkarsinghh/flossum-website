"use client"
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: ['300', '400', '700', '700'], subsets: ['latin'] });

export default function Products() {
    return (
        <div className="mt-8 ml-[3vw] p-4 sm:p-8 md:p-10 pb-0" id='platforms'>
            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Available across Platforms
                        </h1>
                        <p
                            className="ml-0 m-1 text-lg sm:text-xl md:text-2xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Flossum is available on NPM, Yarn & PNPM—so you can freely use it in any of your NodeJS projects.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col flex-start mt-4 mb-4 items-start">
                    <div className="bg-[#1e1e2e] rounded-md p-3 sm:p-4 mt-4 text-lg sm:text-xl md:text-2xl w-full sm:w-[60vw] md:w-[40vw] flex justify-between items-center cursor-pointer"
                        onClick={() => navigator.clipboard.writeText('npm install flossum')}
                        title="Copy npm install command to clipboard"
                    >
                        <p className="font-mono">npm install flossum</p>
                        <div className="relative ml-2" style={{ width: 70, height: 70 }}>
                            <Image
                                src="/npmLogo.png"
                                alt="NPM Logo"
                                layout="fill"
                                objectFit="contain"
                                className="sm:w-[70px] sm:h-[70px]"
                                sizes="(max-width: 640px) 50px, 70px"
                            />
                        </div>
                    </div>
                    <div
                        className="bg-[#1e1e2e] rounded-md p-3 sm:p-4 mt-4 text-lg sm:text-xl md:text-2xl w-full sm:w-[60vw] md:w-[40vw] flex justify-between items-center cursor-pointer"
                        onClick={() => navigator.clipboard.writeText('yarn add flossum')}
                        title="Copy yarn add command to clipboard"
                    >
                        <p className="font-mono">yarn add flossum</p>
                        <div className="relative ml-2" style={{ width: 70, height: 70 }}>
                            <Image
                                src="/yarnLogo.png"
                                alt="Yarn Logo"
                                layout="fill"
                                objectFit="contain"
                                className="sm:w-[70px] sm:h-[70px]"
                                sizes="(max-width: 640px) 50px, 70px"
                            />
                        </div>
                    </div>
                    <div className="bg-[#1e1e2e] rounded-md p-3 sm:p-4 mt-4 text-lg sm:text-xl md:text-2xl w-full sm:w-[60vw] md:w-[40vw] flex justify-between items-center cursor-pointer"
                        onClick={() => navigator.clipboard.writeText('pnpm add flossum')}
                        title="Copy pnpm add command to clipboard"
                    >
                        <p className="font-mono">pnpm add flossum</p>
                        <div className="relative ml-2" style={{ width: 60, height: 60 }}>
                            <Image
                                src="/pnpmLogo.png"
                                alt="PNPM Logo"
                                layout="fill"
                                objectFit="contain"
                                className="sm:w-[70px] sm:h-[70px]"
                                sizes="(max-width: 640px) 50px, 70px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-[#2f2f4a] border-2 mt-18'/>
        </div>
    );
}