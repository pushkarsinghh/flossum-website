import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: ['300', '400', '700', '700'], subsets: ['latin'] });

export default function Tutorial() {
    return (
        <div className="mt-0 ml-[3vw] mr-[3vw] p-4 sm:p-8 md:p-10 pb-0" id='tutorial'>
            <hr className='border-[#2f2f4a] border-2 mb-18'/>
            <div className="flex justify-between items-end">
                <div>
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        How to Use?
                    </h1>
                    <p
                        className="ml-0 m-1 text-lg sm:text-xl md:text-2xl"
                        style={{ fontFamily: ubuntu.style.fontFamily }}
                    >
                        Follow these steps to get started with Flossum:
                    </p>
                </div>
            </div>
            <div className='flex flex-row gap-4 mt-6 sm: flex-wrap md:flex-nowrap'>
                <div className='bg-[#f45455] p-4 rounded-lg mt-4 w-full'>
                    <p className='text-white text-2xl font-semibold' style={{ fontFamily: '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif' }}>For JavaScript/TypeScript files:</p>
                    <div className='bg-[#1e1e2f] p-4 rounded-lg mt-2 h-[75%]'>
                        <pre>
                            <code>
                                import &#123; Flossum &#125; from &apos;flossum&apos;;<br />
                                <br />
                                await Flossum.effectName(&apos;Hello World!&apos;);
                            </code>
                        </pre>
                    </div>
                </div>
                <div className='bg-[#f45455] p-4 rounded-lg mt-4 w-full'>
                    <p className='text-white text-2xl font-semibold' style={{ fontFamily: '"Bahnschrift Condensed", Bahnschrift, Arial, sans-serif' }}>For direct Terminal usage:</p>
                    <div className='bg-[#1e1e2f] p-4 rounded-lg mt-2 h-[75%]'>
                        <pre>
                            <code>
                                flossum effectName &quot;Hello World!&quot;;
                                <br />
                                <br />
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <section className="flex flex-col mt-8">
                <h2
                    className="text-3xl font-semibold mb-2"
                    style={{ fontFamily: ubuntu.style.fontFamily }}
                >
                    Available Effects
                </h2>
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 ml-2 text-base sm:text-lg"
                    style={{ fontFamily: ubuntu.style.fontFamily }}
                >
                    <li>
                        <span className="mr-2">⌨️</span>
                        <b>Typewriter</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">typeOut</code>
                        <span className="text-gray-500 ml-1"> - Simulates typing text</span>
                    </li>
                    <li>
                        <span className="mr-2">⏪</span>
                        <b>Reverse Typewriter</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">reverseType</code>
                        <span className="text-gray-500 ml-1"> - Deletes text like rewinding</span>
                    </li>
                    <li>
                        <span className="mr-2">🌊</span>
                        <b>Wavy Text</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">wave</code>
                        <span className="text-gray-500 ml-1"> - Animated wave motion</span>
                    </li>
                    <li>
                        <span className="mr-2">🌈</span>
                        <b>Color Pulse</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">colorPulse</code>
                        <span className="text-gray-500 ml-1"> - Pulsing color animation</span>
                    </li>
                    <li>
                        <span className="mr-2">🔁</span>
                        <b>Spinner</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">spinner</code>
                        <span className="text-gray-500 ml-1"> - Loading spinner effect</span>
                    </li>
                    <li>
                        <span className="mr-2">📊</span>
                        <b>Progress Bar</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">progressBar</code>
                        <span className="text-gray-500 ml-1"> - Animated progress bar</span>
                    </li>
                    <li>
                        <span className="mr-2">🤯</span>
                        <b>Glitch</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">glitch</code>
                        <span className="text-gray-500 ml-1"> - Glitchy text distortion</span>
                    </li>
                    <li>
                        <span className="mr-2">🧩</span>
                        <b>Scramble Decoder</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">scramble</code>
                        <span className="text-gray-500 ml-1"> - Scrambled-to-clear text</span>
                    </li>
                    <li>
                        <span className="mr-2">🌈</span>
                        <b>Rainbow Text</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">rainbow</code>
                        <span className="text-gray-500 ml-1"> - Animated rainbow colors</span>
                    </li>
                    <li>
                        <span className="mr-2">🎞</span>
                        <b>Frame Player</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">playFrames</code>
                        <span className="text-gray-500 ml-1"> - ASCII animation frames</span>
                    </li>
                    <li>
                        <span className="mr-2">🅰️</span>
                        <b>ASCII Art</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">asciiArt</code>
                        <span className="text-gray-500 ml-1"> - Text as ASCII art</span>
                    </li>
                    <li>
                        <span className="mr-2">⚡</span>
                        <b>Flash</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">flash</code>
                        <span className="text-gray-500 ml-1"> - Flashing/blinking text</span>
                    </li>
                    <li>
                        <span className="mr-2">✂️</span>
                        <b>Type-Delete</b> <code className="bg-gray-100 px-1 rounded text-black p-[0.5]">typeDelete</code>
                        <span className="text-gray-500 ml-1"> - Type and delete animation</span>
                    </li>
                </ul>
            </section>
            <hr className='border-[#2f2f4a] border-2 mt-18 mb-18'/>
        </div>
    )
}