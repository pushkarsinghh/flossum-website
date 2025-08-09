import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: ['300', '400', '700', '700'], subsets: ['latin'] });

export default function Playground() {
    return (
        <div className="mt-0 ml-[3vw] mr-[3vw] p-4 sm:p-8 md:p-10 pb-0">
            <div className="flex justify-between items-end">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Live Playground
                        </h1>
                        <p
                            className="ml-0 m-1 text-lg sm:text-xl md:text-2xl"
                            style={{ fontFamily: ubuntu.style.fontFamily }}
                        >
                            Try Flossum in Action. Right here. Right now. Straight from your browser
                        </p>
                    </div>
                </div>
                
        </div>
    )
}