import React from 'react'
import Typed from "react-typed"

function Hero() {

    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] h-screen mx-auto w-full text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Growing with data</h1>
                <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>fast, flexible financing for</p>
                <Typed
                className='text-gray-400 font-bold md:text-5xl sm:text-4xl text-xl pl-2 md:pl-4 '
                strings={["SASS","B2B","BTC"]}
                startDelay={30}
                typeSpeed={120}
                backSpeed={140}
                showCursor={true}
                loop
                />
                </div>
                <p className='md:text-2xl text-xl  font-bold text-gray-600'>Monitor your data analysis to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero