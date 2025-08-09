import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

export default function Products() {
    return <div className='mt-8 ml-[3vw] p-10 pb-0'>
        <div>
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-5xl" style={{ fontFamily: ubuntu.style.fontFamily }}>Available across Platforms</h1>
                    <p className="m-1" style={{ fontFamily: ubuntu.style.fontFamily }}>Flossum is available on NPM, Yarn & PNPM—so you can freely use it in any of your NodeJS projects.</p>
                </div>
            </div>
            <div className='flex flex-col flex-start mt-4 mb-4 items-start'>
                <div className='bg-[#1e1e2e] rounded-md p-4 mt-4 text-2xl w-[40vw]'>
                    <p>npm install flossum</p>
                    
                </div>
                <div className='bg-[#1e1e2e] rounded-md p-4 mt-4 text-2xl w-[40vw]'>
                    <p>yarn add flossum</p>

                </div>
                <div className='bg-[#1e1e2e] rounded-md p-4 mt-4 text-2xl w-[40vw]'>
                    <p>pnpm add flossum</p>

                </div>
            </div>
        </div>
    </div>
}