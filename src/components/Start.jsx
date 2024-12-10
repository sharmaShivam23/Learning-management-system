import React from 'react'
import logimg from "../Images/logimg.png";

const Start = () => {

  return (
    <div className='flex justify-center items-center'>
      <div  className='flex justify-center items-center flex-col relative top-52'>
       <img src={logimg} className='h-24 animate-bounce' alt="" />
       <h2 className='text-3xl font-bold text-red-900 mt-3'>learnify</h2>
       </div>
    </div>
  )
}

export default Start

