import React from 'react'
import logimg from "../Images/logimg.png";
import le1 from "../Images/le1.png";
import le2 from "../Images/le2.png";
import { motion } from 'framer-motion';

const Start = () => {

  return (
    <div className='flex justify-center items-center'>
      <div  className='flex justify-center items-center flex-col relative top-52'>
        <motion.div
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10)",
          rotateY: 180,
          y : 200
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          filter: "blur(0)",
          rotateY: 0,
          y : 0
        }}
        transition={{ duration: 3 }}
        >
       {/* <img src={logimg} className='h-52' alt="" /> */}
       <img src={le2} className='h-80' alt="" />
       </motion.div>
       {/* <h2 className='text-3xl font-bold text-red-900 mt-7'>learnify</h2> */}
       </div>
    </div>
  )
}

export default Start

