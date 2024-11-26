import React, { useEffect, useState } from 'react';
import learn from "../Images/learn.jpg";
import pexell from "../Images/pexell.jpg";
import pexelll from "../Images/pexelll.jpg";
import course from "../Images/course.webp"
import boysImg from "../Images/boysImg.webp"
import ed from "../Images/ed.webp"
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";

const Carousel = () => {
  const images = [learn, pexell , pexelll , course , boysImg , ed];
  const [currentIndex, setCurrentIndex] = useState(0); 

  function handleRight() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handleLeft() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }


useEffect(() => {
  const interval = setInterval(() => {
    handleRight(); 
  }, 3000);
  return () => clearInterval(interval);
}, []); 


  return (
    <div className='flex justify-center rounded-2xl flex-col items-center mt-4 z-10 shadow-lg shadow-red-950'>
      <div className="h-[620px] w-full object-cover">
  <img 
    src={images[currentIndex]} 
    className="object-cover w-full h-full transition-all ease-in-out duration-500" 
    alt={`Slide ${currentIndex + 1}`} 
  />
</div>


      <div className='flex gap-5'>
        <div className='text-4xl mt-4 cursor-pointer h-16 w-16 flex justify-center items-center bg-red-950 text-white rounded-full transform  hover:scale-125 transition-all ease-in-out delay-0 duration-150 hover:bg-amber-500 hover:text-black'>
          <FaHandPointLeft onClick={handleLeft} />
        </div>
        <div className='text-4xl mt-4 cursor-pointer  h-16 w-16 flex justify-center items-center bg-red-950 text-white rounded-full  transform hover:scale-125 transition-all ease-in-out delay-0 duration-150 hover:bg-amber-500 hover:text-black'>
          <FaHandPointRight onClick={handleRight} />
        </div>
      </div>
    </div>

  );
};

export default Carousel;
