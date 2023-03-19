import React from 'react'
import laptop from "../assets/laptop.png"

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
        <div className='flex flex-col justify-center sm:px-2 md:px-1  px-4'>
          <p className='capitalize text-[#00df9a] font-bold'>data analysis dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analysis Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur , a dolorum. Voluptatum omnis et recusandae non repellat? Voluptate excepturi recusandae inventore veritatis soluta, consectetur quibusdam! Dolores iste accusamus illum, quod mollitia rem quam sequi, necessitatibus odio error aspernatur ex. Iste!</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3  text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>

  )
}

export default Analytics