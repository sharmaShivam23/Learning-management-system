


import React from 'react';
import Trending from './Trending';
import phone from '../Images/phone.png';
import vector1 from '../Images/vector1.png';
import vector2 from '../Images/vector2.png';
import thumbup from '../Images/thumbup.png';
import boy from '../Images/boy.png';
import crown from '../Images/crown.png';
import glassesimoji from '../Images/glassesimoji.png';
import Foating from './FloatingDiv/Foating';

const Main = () => {
  return (
    <>
      <div className="firs pt-8 flex flex-col lg:flex-row h-auto ">
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
        
        <div className="rightmain lg:w-6/12 h-auto  w-full relative bottom-16 ">
          {/* <img  className='absolute transform scale-50 -left-20' src={vector1} alt="" />
          <img className='absolute transform scale-50' src={vector2} alt="" />
          <img  className='absolute left-40 transform scale-125 top-20 'src={boy} alt="" /> */}
          
          {/* <div>
            <Foating/>
          </div> */}
          {/* <img src={phone} className='transform scale-150 relative top-20 lg:mt-16' alt="" /> */}
        </div>
      </div>
  
      <Trending />
    </>
  );
}

export default Main;
