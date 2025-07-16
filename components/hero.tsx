export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-[-12rem] w-screen">
            <section className="bg-[#FF5C5C] text-white py-20 px-4 md:px-16 text-center rounded-3xl m-4 shadow-xl">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
                    TextFX for Terminals<span className="inline-block drop-shadow-[0_0_3px_black]">✨</span>
                </h1>
                <button className="bg-[#FFD966] text-[#FF5C5C] font-bold text-2xl px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
                    GET STARTED!
                </button>
            </section>
        </div>
    );
}
