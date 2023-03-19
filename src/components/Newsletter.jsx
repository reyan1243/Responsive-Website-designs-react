import React from 'react'

function Newsletter() {
    return (
        <div className='w-full py-16 px-4 text-white'>
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 sm:justify-center">
                <div className='md:col-span-2 flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>signup to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 rounded-md w-full text-black border-none' type="text" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>notify me</button>
                    </div>
                    <p className='text-center'>we care about the protection of your data. Read our 
                        <span className='text-[#00df9a] ml-2'>Privacy Policy</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Newsletter