import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: ['300', '400', '700', '700'], subsets: ['latin'] });

export default function Tutorial() {
    return (
        <div className="mt-0 ml-[3vw] mr-[3vw] p-4 sm:p-8 md:p-10 pb-0">
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
        </div>
    )
}