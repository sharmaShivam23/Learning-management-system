import React from 'react'
import {  Link } from 'react-router-dom'
import radio from '../images/radio.png';
import radio2 from '../images/radio2.png';

const Navbar = () => {
  return (
    <div>
       <nav className='flex justify-between  items-center'>
        <div className="left">
          <div className="logo">
            <img src={radio2} alt="" className='h-16'/>
          </div>
          <div className="text flex justify-center font-bold text-orange-900 tracking-wider text-xl">
            learnify
          </div>

        </div>
          
        <div className="right flex gap-8">
          <div className='md:hidden'>
        <a href="#" className="text-5xl text-center mb-20 font-bold text-decoration-none text-black">&#8801;</a>
        </div>
          <div className="list">
            <ul className='md:flex  hidden gap-8 text-2xl font-bold mt-2 max-[900px]:gap-2 max-[900px]:text-xl'>
              <li><a href="Home">Home</a></li>
              <li><a href="Trending">Trending</a></li>
              <li><a href="Courses">Courses</a></li>
              <li><a href="Contact US">Contact Us</a></li>
            </ul>
          </div>
          <div className="btn md:flex hidden gap-8 text-2xl font-bold max-[900px]:gap-2 max-[900px]:text-xl">
            <button className='bg-orange-900 text-white p-2'>Log in</button>
            <button className='bg-orange-900 text-white p-2'>Sign up</button>
          </div>
        </div>

       </nav>
    </div>
  )
}

export default Navbar
