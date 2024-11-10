


import React from 'react';
import Trending from './Trending';
import main from '../images/main.png';

const Main = () => {
  return (
    <>
      <div className="firs pt-8 flex flex-col lg:flex-row h-auto">
        <div className="leftmain text-black px-6 py-8  tracking-wider w-full lg:w-7/12">
          <div className="textmain mb-6">
            <p className="text-3xl font-bold leading-tight">
              Unlock Your Potential with World-Class Courses
            </p>
            <p className="text-2xl mt-2 font-bold">
              Learn Anytime, Anywhere!
            </p>
          </div>
          <div className="mainbtn text-center">
            <button 
              className="bg-[#32CD32] text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
        
        <div className="rightmain lg:w-5/12 h-full  w-full">
          <img src={main} className='h-full w-full object-cover' alt="Main" />
        </div>
      </div>

      <Trending />
    </>
  );
}

export default Main;
