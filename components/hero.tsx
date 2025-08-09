import Head from "next/head"

export default function Hero() {


    return (
        <div>
            <Head>
                <meta property="og:image" content="./public/FlossumBanner.png" />
            </Head>
            <div className="flex flex-col justify-center items-center h-auto mx-[5vw] mb-0 mt-[2vw] pt-[6vw] pb-[6vw] text-[white] bg-[#f45455] border-0 rounded-[2vw] px-[3vw]">
                <h1 className="text-[9vw] font-extrabold font-stretch-semi-condensed mb-[-3vw]" style={{ fontFamily: '"Agency FB", Arial, sans-serif' }}>
                    TextFX for Terminals ✨
                </h1>
                <div
                    className="flex gap-[2vw] *:hover:scale-103 transition-transform duration-10000 mt-[5vw] font-[Lilita One]"
                    style={{ fontFamily: '"Bahnschrift Condensed", "Bahnschrift", "Agency FB", Arial, sans-serif' }}
                >
                    <div className="text-[#F45455] bg-gradient-to-b from-[#FFEAB5] to-[#ffd47b] border-[0.3vw] py-[1vw] px-[3vw] text-[5vw] flex items-center justify-center font-extrabold rounded-[2vw] text-center border-[#F45455] hover:cursor-pointer">
                        GET STARTED!
                    </div>
                </div>
            </div>
        </div>
    )
}