"use client"
import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: ['300', '400', '700', '700'], subsets: ['latin'] });

export default function Contribute() {
    return (
        <div className="mt-0 ml-[3vw] mr-[3vw] p-4 sm:p-8 md:p-10 pb-0" id='contribute'>
            <div>
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1
                            className="text-3xl font-bold sm:text-4xl md:text-5xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Contributions are Welcome!
                        </h1>
                        <p
                            className="ml-0 m-1 text-lg sm:text-xl md:text-2xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Flossum is an open-source project, and we are always looking for contributions!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                <div className="flex-shrink-0">
                    <Image
                        src="/issuesOnGitHub.png"
                        alt="GitHub Issues"
                        width={450}
                        height={180}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="flex-1">
                    <h2
                        className="text-3xl sm:text-3xl font-semibold mb-4"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        Browse and Tackle Issues
                    </h2>
                    <p
                        className="text-md sm:text-xl mb-4"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        Check out the available issues on our{" "}
                        <a
                            href="https://github.com/pushkarsinghh/flossum/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#549ff4]"
                        >
                            GitHub repository
                        </a>
                        . Pick one to work on, or raise your own if you spot something new!
                    </p>
                    <ul
                        className="list-disc ml-8 text-md sm:text-xl space-y-2"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        <li>Find beginner-friendly and advanced issues</li>
                        <li>Discuss solutions and get feedback</li>
                        <li>Help us improve by reporting bugs or suggesting features</li>
                    </ul>
                </div>
            </div>
            <hr className='border-[#2f2f4a] border-2 mt-18'/>
        </div>
    )
}