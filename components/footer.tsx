"use client";

export default function Footer() {
    return <div className="bg-[#f45455] mt-20 border-t-4 border-b-0 rounded-5xl rounded-b-none rounded-tl-3xl rounded-tr-3xl">
        <div className="p-5 flex justify-start items-start gap-10 flex-wrap pl-20 pr-30 pt-10">
            <div className="text-white">
                <h1 className="text-5xl flex items-center gap-2" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif', fontWeight: 'bold' }}>
                    Flossum
                </h1>
                <div className="flex gap-10 mt-3 mr-8">
                    <ul className="cursor-pointer text-3xl" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}>
                        <li onClick={() => window.location.hash = "#"}>Home</li>
                        <li onClick={() => window.location.hash = "#about"}>About</li>
                        <li onClick={() => window.location.hash = "#feedback"}>Feedback</li>
                        <li onClick={() => window.location.hash = "#help"}>Help Center</li>
                    </ul>
                    <ul className="cursor-pointer text-3xl ml-[-10px]" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}>
                        <li onClick={() => window.location.hash = "#contribute"}>Contribute</li>
                        <li onClick={() => window.location.hash = "#sponsor"}>Sponsor</li>
                    </ul>
                </div>
            </div>
            <div className="text-white mr-8">
                <h1 className="text-5xl flex items-center gap-2" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif', fontWeight: 'bold' }}>
                    Socials
                </h1>
                <ul className="cursor-pointer text-3xl mt-3" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}>
                    <li onClick={() => window.location.href = "https://github.com/pushkarsinghh/"}>GitHub</li>
                    <li onClick={() => window.location.href = "https://twitter.com/"}>Twitter(X)</li>
                    <li onClick={() => window.location.href = "https://linkedin.com/in/pushkarsinghh"}>LinkedIn</li>
                </ul>
            </div>
            <div>
                <h1 className="text-5xl text-white flex items-center gap-2" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif', fontWeight: 'bold' }}>
                    Updates
                </h1>
                <div className="bg-white p-2 rounded-lg w-60 mt-3 flex flex-col gap-1 text-[#f45455] hover:scale-101 transition-transform duration-200">
                    <p className="text-5xl p-2 font-semibold font-stretch-condensed" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}>See What&apos;s New</p>
                    <p className="bg-[#f45455] rounded text-white flex justify-center font-semibold cursor-pointer p-1 m-2 hover:scale-97 transition-transform duration-200 text-5xl" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}>v1.0.9</p>
                </div>
            </div>
        </div>
        <div className="text-white text-3xl flex justify-center pb-4 mt-6" style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}>
            <p>
                © {new Date().getFullYear()} Flossum. MIT Licensed. Open source on <a href="https://github.com/pushkarsinghh/flossum" className="underline hover:text-gray-200" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
    </div>
}