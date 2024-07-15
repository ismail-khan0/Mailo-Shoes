import React from 'react'
import imgs from "../Images/bg2.jpg";
export default function Contact() {
  return (
    <div className="flex text-white h-[100vh] flex-col lg:flex-row">
     <div className='flex-1 bg-dark  content-center  flex-col space-y-2 '>
       <div className='w-[85%] ml-12 '>
        <p className='mb-2 text-yellow-400'>Contact Us</p>
            <div className='font-bold text-4xl flex-col flex space-y-2 '>
                <span>GET IN TOUCH</span>
                
            </div>
            <div className='space-y-2 t'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
            </div>
            <div className=' text-yellow-400 mt-2'>
            <h4>E-mail:</h4>
                <h4>Ik8323253@gmail.com</h4>
                </div>
            </div>
        </div>

    <div className="right flex-1 content-center mr-4 lg:mt-12 mt-0 mb-4 items-center ml-4 flex-col lg:space-y-6 space-y-0"><div className='lg:w-[85%] w-full'>
    <form action="#" class="space-y-2">
    <div>
            
              <input type="text" id="subject" class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Inter your full name" required/>
          </div>
          <div>
         
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Email ID" required/>
          </div>
          <div>
             
              <input type="text" id="subject" class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject" required/>
          </div>
          <div class="sm:col-span-2">
             
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="py-3  px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-yellow-500">Send message</button>
          
      </form>
    </div>
    </div>
  </div>
   
  )
}
