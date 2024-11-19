import React from 'react'
import boy from '../images/boy.png';
import Show from './Show';
import Learning from './Learning';
import Footer from './Footer';

const Course = () => {
  return (
    <>
      <div className="courses">
        <div className="main mt-0 h-auto  gap-11 sm:flex block justify-center items-center">

          <div className="left w-full flex justify-start items-center flex-col sm:w-5/12">
            <p className='text-3xl font-bold text-red-950 max-[700px]:text-2xl  max-[500px]:text-lg'>Master the Future with Tech Courses</p>
            <p className='text-3xl font-bold text-red-950  max-[700px]:text-2xl mt-5  max-[500px]:text-lg text-start'>Learn Anytime, Anywhere!</p>
            <button className="bg-[#32CD32] text-white font-semibold py-4 px-6 mt-10 rounded-lg hover:bg-green-600 transition duration-200">
              Enroll Now
            </button>
          </div>
        
          <div className="right w-full  sm:w-7/12 h-auto  flex justify-center items-center relative mt-10">
              <div className="first h-80  sm:ml-0 w-80 rounded-full bg-gradient-to-t from-pink-400 to-violet-500 flex lg:w-[600px] lg:h-[600px] justify-center items-center relative">
              <div className="sec h-72 w-72  bg-gradient-to-t from-pink-500 to-violet-600 lg:w-[520px] lg:h-[520px] lg:top-20 rounded-full absolute top-7 flex justify-center items-center">
                <img src={boy} className='h-80 lg:h-[550px]' alt="" />
                 <div className="1 h-6 w-40 top-64 lg:w-60 lg:h-14 lg:top-[467px] text-center py-5 flex justify-center items-center bg-gradient-to-t from-pink-400 to-violet-500 border-2 border-black font-bold absolute">
                    <p>Chat GPT & Gen AI</p>
                </div>
                
                <div className=" h-6 w-40 top-80 right-96 lg:w-60 lg:h-14 text-center  py-5 flex justify-center items-center bg-gradient-to-t from-pink-400 to-violet-500 border-2 border-black font-bold  absolute">
                    <p>Chat GPT & Gen AI</p>
                </div>
               
                <div className="1 h-6 w-40  py-5  lg:w-60  top-48 right-[500px]  lg:h-14 text-center flex justify-center items-center bg-gradient-to-t from-pink-400 to-violet-500 border-2 border-black font-bold  absolute">
                    <p>Chat GPT & Gen AI</p>
                </div>
               
                <div className="1 h-6 w-40  py-5 lg:w-60 bottom-48  top-14 right-[400px]  lg:h-14 text-center flex justify-center items-center bg-gradient-to-t from-pink-400 to-violet-500 border-2 border-black font-bold  absolute">
                    <p>Chat GPT & Gen AI</p>
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
