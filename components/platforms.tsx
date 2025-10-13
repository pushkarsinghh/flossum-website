"use client";
import { Ubuntu } from "next/font/google";
import Image from "next/image";

const ubuntu = Ubuntu({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Products() {
    return (
        <div className="mt-8 ml-[3vw] mr-[3vw] p-4 sm:p-8 md:p-10 pb-0" id="platforms">
            {/* Heading Section */}
            <div className="text-left">
                <h1
                    className="text-3xl font-bold sm:text-4xl md:text-5xl"
                    style={{ fontFamily: ubuntu.style.fontFamily }}
                >
                    Available across Platforms
                </h1>
                <p
                    className="ml-0 m-1 text-lg sm:text-xl md:text-2xl"
                    style={{ fontFamily: ubuntu.style.fontFamily }}
                >
                    Flossum is available on NPM, Yarn & PNPM—so you can freely use it in
                    any of your NodeJS projects.
                </p>
            </div>

            {/* Two Column Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-6">
                {/* Left: Commands */}
                <div className="flex flex-col flex-1 items-start">
                    {/* NPM */}
                    <div
                        className="bg-[#1e1e2e] rounded-md p-3 sm:p-4 mt-4 text-lg sm:text-xl md:text-2xl w-full sm:w-[60vw] md:w-full flex justify-between items-center cursor-pointer"
                        onClick={() => navigator.clipboard.writeText("npm install flossum")}
                        title="Copy npm install command to clipboard"
                    >
                        <p className="font-mono">npm install flossum</p>
                        <div className="relative ml-2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]">
                            <Image
                                src="/npmLogo.png"
                                alt="NPM Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 50px, 70px"
                            />
                        </div>
                    </div>

                    {/* Yarn */}
                    <div
                        className="bg-[#1e1e2e] rounded-md p-3 sm:p-4 mt-4 text-lg sm:text-xl md:text-2xl w-full sm:w-[60vw] md:w-full flex justify-between items-center cursor-pointer"
                        onClick={() => navigator.clipboard.writeText("yarn add flossum")}
                        title="Copy yarn add command to clipboard"
                    >
                        <p className="font-mono">yarn add flossum</p>
                        <div className="relative ml-2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]">
                            <Image
                                src="/yarnLogo.png"
                                alt="Yarn Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 50px, 70px"
                            />
                        </div>
                    </div>

                    {/* PNPM */}
                    <div
                        className="bg-[#1e1e2e] rounded-md p-3 sm:p-4 mt-4 text-lg sm:text-xl md:text-2xl w-full sm:w-[60vw] md:w-full flex justify-between items-center cursor-pointer"
                        onClick={() => navigator.clipboard.writeText("pnpm add flossum")}
                        title="Copy pnpm add command to clipboard"
                    >
                        <p className="font-mono">pnpm add flossum</p>
                        <div className="relative ml-2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]">
                            <Image
                                src="/pnpmLogo.png"
                                alt="PNPM Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 50px, 70px"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
                    <div className="relative w-[90%] sm:w-[70%] md:w-[40vw] h-auto"
                        onClick={() => {
                            window.open("https://marketplace.visualstudio.com/items?itemName=pushkarscripts.flossum-devtools", "_blank");
                        }}
                    >
                        <Image
                            src="/devtools.png"
                            alt="Flossum DevTools"
                            width={700}
                            height={400}
                            className="rounded-xl shadow-lg object-contain transition-transform duration-300 hover:scale-95 cursor-pointer"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                </div>
            </div>

            <hr className="border-[#2f2f4a] border-2 mt-12" />
        </div>
    );
}
