import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


function Navbar() {
const [nav,setNav]=useState(true)
// const [slider,setSlider]=useState(false)
const hanandleNav = ()=>{
  setNav(!nav)
}
  return (
    <div className="h-24 flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        React.
      </h1>

      <ul className='md:flex hidden'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={hanandleNav} className="block md:hidden">
        {!nav?<AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        
      </div>
      <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':"fixed left-[-100%]"}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          React.
        </h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>Company</li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>Resources</li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar