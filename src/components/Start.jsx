import React from 'react'
import logimg from "../Images/logimg.png";
import le1 from "../Images/le1.png";
import le2 from "../Images/le2.png";

const Start = () => {

  return (
    <div className='flex justify-center items-center'>
      <div  className='flex justify-center items-center flex-col relative top-52'>
       <img src={le2} className='h-80 animate-zoomUp' alt="" />
       {/* <h2 className='text-3xl font-bold text-red-900 mt-7 animate-zoomUp'>learnify</h2> */}
       </div>
    </div>
  )
}

export default Start

