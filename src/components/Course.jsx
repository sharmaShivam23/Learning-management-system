import React from 'react'
import BoyImg from '../Images/BoyImg.png';
import Show from './Show';
import Learning from './Learning';
import Footer from './Footer';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
const Course = () => {
  return (
    <>
      <div className="courses -z-10">
        <div className="main mt-0 h-auto  gap-11 sm:flex block justify-center items-center">

          <div className="left w-full flex justify-start items-center flex-col sm:w-5/12">
            <p className='text-3xl font-bold text-red-950 max-[700px]:text-2xl  max-[500px]:text-lg'>Master the Future with Tech Courses</p>
            <p className='text-3xl font-bold text-red-950  max-[700px]:text-2xl mt-5  max-[500px]:text-lg text-start'>Learn Anytime, Anywhere!</p>
            <button className="bg-[#32CD32] text-white font-semibold py-4 px-6 mt-10 rounded-lg hover:bg-green-600 transition duration-200">
              Enroll Now
            </button>

            <div className="flex justify-center mt-12 gap-10 text-black text-6xl">
            <FaFacebook  className="hover:text-blue-600 transition-all ease-in-out delay-0 duration-[4s]" aria-label="Facebook" />
            <IoLogoYoutube className="hover:text-red-700 transition-all ease-in-out delay-0 duration-1000" aria-label="YouTube" />
            <FaLinkedin className="hover:text-blue-800 transition-all ease-in-out delay-0 duration-1000" aria-label="LinkedIn" />
          </div> 
          </div>
        
          <div className="right w-full  sm:w-7/12 h-auto  flex justify-center items-center relative mt-10 -z-10">
              <div className="first h-80 bg-[#F8C521] sm:ml-0 w-80 rounded-full bg-yellow- flex lg:w-[600px] lg:h-[600px] justify-center items-center relative">
              <div className="sec h-72 w-72  bg-[#ECA350] lg:w-[520px] lg:h-[520px] lg:top-20 rounded-full absolute top-7 flex justify-center items-center">
                <img src={BoyImg} className='h-80 lg:h-[550px]' alt="" />
                 <div className="1 h-6 w-40 top-64 lg:w-60 lg:h-14 bg-[#fa5c30] lg:top-[467px] text-center py-5 flex justify-center items-center bg- border-2 border-black font-bold absolute">
                    <p>Chat GPT & Gen AI</p>
                </div>
                
                <div className=" h-6 w-40 top-80 right-96 lg:w-60 lg:h-14 text-center border-2 border-black py-5 flex justify-center items-center bg-[#F46F36]  font-bold  absolute">
                    <p>Web Development</p>
                </div>
               
                <div className="1 h-6 w-40  py-5  lg:w-60  top-48 right-[500px]  lg:h-14 text-center flex justify-center items-center bg-[#F46F36] border-2 border-black font-bold  absolute">
                    <p>Data Science</p>
                </div>
               
                <div className="1 h-6 w-40  py-5 lg:w-60 bottom-48  top-14 right-[400px]  lg:h-14 text-center flex justify-center items-center bg-[#F46F36] border-2 border-black font-bold  absolute">
                    <p>Machine Learning</p>
                </div>
               
              </div>
              </div>
               
             </div>

        </div>

        <Show/>
        <Learning/>
        <Footer/>
      </div>
    </>
  )
}

export default Course
