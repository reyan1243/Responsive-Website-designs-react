import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa"

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-12 text-gray-300 '>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum repellat excepturi aut minima atque adipisci repudiandae iure amet ab quaerat, accusantium nisi!</p>
            <div className='flex md:w-[75%] justify-between my-6 text-4xl'>
                <FaDribbbleSquare/>
                <FaFacebookSquare/>
                <FaGithubSquare/>
                <FaInstagram/>
                <FaTwitterSquare/>
            </div>
        </div>
        
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>insights</li>
                </ul>
            </div>
              <div>
                  <h6 className='font-medium text-gray-400'>support</h6>
                  <ul>
                      <li className='py-2 text-sm'>Pricing</li>
                      <li className='py-2 text-sm'>Docs</li>
                      <li className='py-2 text-sm'>Guides</li>
                      <li className='py-2 text-sm'>API Status</li>
                  </ul>
              </div>
              <div>
                  <h6 className='font-medium text-gray-400'>Company</h6>
                  <ul>
                      <li className='py-2 text-sm'>About</li>
                      <li className='py-2 text-sm'>Blog</li>
                      <li className='py-2 text-sm'>Jobs</li>
                      <li className='py-2 text-sm'>Press</li>
                      <li className='py-2 text-sm'>Careers</li>
                  </ul>
              </div>
        </div>
    </div>
  )
}

export default Footer