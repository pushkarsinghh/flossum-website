import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

export default function Tutorial() {
    return (
        <div
            className="mt-0 mx-[3vw] p-4 sm:p-6 md:p-10 pb-0"
            id="tutorial"
        >
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                <div>
                    <h1
                        className="text-3xl sm:text-4xl font-bold md:text-5xl leading-tight"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        How to Use?
                    </h1>
                    <p
                        className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-100"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        Follow these steps to get started with Flossum:
                    </p>
                </div>
            </div>

            {/* Code Examples Section */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="bg-[#f45455] p-4 rounded-lg w-full md:w-1/2">
                    <p
                        className="text-white text-xl sm:text-2xl font-semibold mb-2"
                        style={{
                            fontFamily:
                                '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif',
                        }}
                    >
                        For JavaScript/TypeScript files:
                    </p>
                    <div className="bg-[#1e1e2f] p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm sm:text-base text-gray-200">
                            <code>
                                import &#123; flossum &#125; from &apos;flossum&apos;;{'\n'}
                                {'\n'}
                                await flossum.effectName(&apos;Hello World!&apos;);
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="bg-[#f45455] p-4 rounded-lg w-full md:w-1/2">
                    <p
                        className="text-white text-xl sm:text-2xl font-semibold mb-2"
                        style={{
                            fontFamily:
                                '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif',
                        }}
                    >
                        For direct Terminal usage:
                    </p>
                    <div className="bg-[#1e1e2f] p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm sm:text-base text-gray-200">
                            <code>
                                flossum effectName &quot;Hello World!&quot;;{'\n\n\n'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="mt-8">
                    <h3
                        className="text-xl sm:text-2xl font-semibold mb-2"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        Demo Video:
                    </h3>
                    <div className="relative pb-[56.25%] h-0 rounded overflow-hidden shadow-lg">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/18lzkb331Gk?si=KD4V8ue8MkfpVBXR"
                            title="Flossum demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            {/* Available Effects Section */}
            <section className="flex flex-col mt-10">
                <h2
                    className="text-2xl underline sm:text-3xl mb-4"
                    style={{ fontFamily: ubuntu.style.fontFamily }}
                >
                    Available Effects:
                </h2>

                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base sm:text-lg"
                    style={{ fontFamily: ubuntu.style.fontFamily }}
                >
                    {[
                        ['⌨️', 'Typewriter', 'typeOut', 'Simulates typing text'],
                        ['⏪', 'Reverse Typewriter', 'reverseType', 'Deletes text like rewinding'],
                        ['🌊', 'Wavy Text', 'wave', 'Animated wave motion'],
                        ['🌈', 'Color Pulse', 'colorPulse', 'Pulsing color animation'],
                        ['🔁', 'Spinner', 'spinner', 'Loading spinner effect'],
                        ['📊', 'Progress Bar', 'progressBar', 'Animated progress bar'],
                        ['🤯', 'Glitch', 'glitch', 'Glitchy text distortion'],
                        ['🧩', 'Scramble Decoder', 'scramble', 'Scrambled-to-clear text'],
                        ['🌈', 'Rainbow Text', 'rainbow', 'Animated rainbow colors'],
                        ['🎞', 'Frame Player', 'playFrames', 'ASCII animation frames'],
                        ['🅰️', 'ASCII Art', 'asciiArt', 'Text as ASCII art'],
                        ['⚡', 'Flash', 'flash', 'Flashing/blinking text'],
                        ['✂️', 'Type-Delete', 'typeDelete', 'Type and delete animation'],
                    ].map(([emoji, title, code, desc]) => (
                        <li key={code} className="flex flex-wrap items-center">
                            <span className="mr-2">{emoji}</span>
                            <b>{title}</b>{' '}
                            <code className="bg-gray-100 px-1 rounded text-black mx-1 text-sm">
                                {code}
                            </code>
                            <span className="text-gray-500 text-sm sm:text-base">{` - ${desc}`}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <hr className="border-[#2f2f4a] border-2 mt-12 mb-0" />
        </div>
    );
}
