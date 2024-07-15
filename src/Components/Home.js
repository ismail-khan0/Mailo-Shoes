import React from 'react';
import bgImg from '../Images/bg1.jpg'; // Ensure this path is correct

function Home() {
  return (
    <div className=' flex-wrap lg:h-screen lg:flex lg:flex-row lg:bg-cover h-[54vh] flex flex-row bg-cover   w-full ' style={{ backgroundImage: `url(${bgImg})` }}>
        <div className='lg:flex-1 w-1/2 bg-dark  content-center ml-12 flex-col space-y-2'>
            <div className='font-bold text-4xl flex-col flex space-y-2 text-white'>
                <span>UNLOCK</span>
                <span className=' text-yellow-500'>YOUR STYLE</span>
            </div>
            <div className='space-y-2 text-white'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-md  ">
              Shop Know
            </button>
            </div>
        </div>
        <div className='lg:w-1/2 hidden lg:block'></div>
    </div>
  );
}

export default Home;
