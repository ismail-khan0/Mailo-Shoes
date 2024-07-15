import React from 'react'

import img1 from '../Images/pic1.jpg'
import img2 from '../Images/pic2.jpg'
import img3 from '../Images/pic3.jpg'

export default function Protfolio() {
  return (
    <div className='bg-[#8173B2] flex-wrap  '>
          <div className='flex-col flex justify-center items-center content-center'>
            <p className='text-yellow-500 mt-4 lg:text-xl text-sm'>Our Protfolio</p>
            <div className='font-bold lg:text-6xl text-2xl space-x-2 flex flex-row'>
                <span>STEP INTO</span>
                 <span className=' text-yellow-500'>STYLE</span>
            </div>
            <div className='my-4 space-x-6 text-white flex flex-wrap '>
                
                <button className="bg-[#9987D6] text-white p-2  rounded-2xl font-bold ">High Heals</button>
                <button className="bg-[#9987D6] text-white p-2 rounded-2xl  font-bold">Sneakers</button>
                <button className="bg-[#9987D6] text-white p-2 rounded-2xl  font-bold">Flat Sandals</button>
                <button className="bg-[#9987D6] text-white p-2 rounded-2xl mt-4 lg:mt-0 font-bold">Weeding Flats</button>
            </div>
        </div>
        <div className='flex justify-center items-center content-center lg:my-4 my-0 space-x-2'>
            <div className='lg:w-80 lg:h-80 w-52 h-52  lg:flex lg:flex-row lg:bg-cover   flex flex-row bg-cover'><img src={img1} alt="no image show" /> </div>
            <div className='lg:w-80 lg:h-80 w-52 h-52  lg:flex lg:flex-row lg:bg-cover    flex flex-row bg-cover'><img src={img2} alt="no image show" /> </div>
            <div className='lg:w-80 lg:h-80 w-52 h-52  lg:flex lg:flex-row lg:bg-cover   flex flex-row bg-cover'><img src={img3} alt="no image show" /> </div>
           
        </div>
      
    </div>
  )
}
