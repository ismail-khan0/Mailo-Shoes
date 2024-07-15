import React from "react";
import imgs from "../Images/pic4.jpg";

export default function About() {
  return (
    <div className="lg:flex lg:flex-row flex-col bg-black text-white ">
      <div className="left flex-1 flex justify-center content-center items-center">
        <div className="lg:w-[400px] lg:h-[600px] w-full h-full  flex justify-center content-center items-center">
          <img src={imgs} alt="no image show" className="h-[300px]" />
        </div>
      </div>

      <div className="right w-full h-[50vh] lg:h-auto lg:w-1/2 content-center ml-4 flex-col space-y-2">
        <p className="text-yellow-300 mt-4 lg:mt-0">About Company</p>
        <div className="font-bold text-4xl flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center">
          <div className="">
            <span>WHERE</span> <span className="text-yellow-500"> STYLE</span>
          </div>
          <span>MEETS COMFORT!</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ">
          <div className="space-y-2">
            <h3 className="font-bold">OUR MISSION</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
          <div className="space-y-2 ">
            <h3 className="font-bold">OUR VISION</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md  ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
