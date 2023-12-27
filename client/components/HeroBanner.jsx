import React from 'react'

const HeroBanner = () => {
    return (
        <main className='pt-40 ps-5 md:ps-20 pb-24 shadow-xl bg-gradient-to-r from-slate-500 to-blue-200 '>
            <div className='md:w-1/2 flex flex-col gap-7 items-start'>
                <h1 className='md:text-6xl text-5xl font-bold'>Find your next perfect place with ease</h1>
                <p className='opacity-70'>Be Estate will help you find your home fast, easy and comfortable.Our expert support are always available.</p>
                <button className=' bg-slate-300 px-4 py-2 rounded transtion-all
                ease-in-out duration-200 hover:bg-slate-400 text-center'>
                    Let's Start now</button>
            </div>
        </main>
    )
}

export default HeroBanner;