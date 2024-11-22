
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { GiCrossedAxes } from "react-icons/gi";
import radio2 from "../images/radioo.png"; // Uncommented or added placeholder image

const Navbar = ({ username }) => {
  const [menu, setMenu] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const navigate = useNavigate(); // Added useNavigate hook

  // Toggle menu
  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  // Handle scroll for dynamic line width
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/Signup");
  };

  const handleSelectChange = (event) => {
    if (event.target.value === "logout") {
      logOut(); // Call the logout function
    }
  };

  return (
    <div className='sticky top-0 py-3 backdrop-blur-lg z-50'>
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="left flex items-center">
          <div className="logo">
            <img src={radio2} alt="Learnify Logo" className='h-12' />
          </div>
          <div className="text flex justify-center font-bold text-orange-900 tracking-wider text-xl ml-3">
            learnify
          </div>
        </div>

        {/* Right Section */}
        <div className="right flex gap-8 items-center">
          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            {!menu ? (
              <button onClick={handleMenuToggle} className="text-4xl font-bold text-black">&#8801;</button>
            ) : (
              <button onClick={handleMenuToggle} className="text-4xl font-bold text-black">
                <GiCrossedAxes />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <ul className='hidden md:flex gap-8 text-lg font-bold'>
            <li><Link to="/Main">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li className='hidden'><Link to="/ShowCourses">showCourses</Link></li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex gap-4">
          <button className="bg-orange-700 text-white px-4 py-2 rounded mx-2">
            <Link to="/Signup">Sign Up</Link>
          </button>
            {!username ? (
        <>
          <button className="bg-orange-700 text-white px-4 py-2 rounded">
            <Link to="/Login">Log in</Link>
          </button>
        </>
      ) : (
        <select
          onChange={handleSelectChange}
          className="bg-orange-700 text-white px-4 py-2 rounded cursor-pointer"
        >
          <option value="">{username}</option>
          <option value="logout">Logout</option>
        </select>
      )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="list2 fixed z-50 bg-amber-600 h-screen w-7/12 top-0 left-0">
          <ul className="flex flex-col justify-evenly items-center text-xl font-bold mt-10">
            <li>
              <img src={radio2} alt="Learnify Logo" className='h-16' />
              <div className="text flex justify-center font-bold text-white tracking-wider text-xl">
                learnify
              </div>
            </li>
            <li className='mt-10'><Link to="/Main">Home</Link></li>
            <li className='mt-10'><Link to="/courses">Courses</Link></li>
            <li className='mt-10'><Link to="/Contact">Contact Us</Link></li>
            <li className='mt-10'><Link to="/profile">Profile</Link></li>
            <li className='mt-10'>
              <button className='bg-orange-900 text-white px-4 py-2 rounded'>
                <Link to="/Signup">Sign Up</Link>
              </button>
            </li>
            <li>
              <button className='bg-orange-900 text-white px-4 py-2 rounded mt-10'>
                <Link to="/Login">Log in</Link>
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Dynamic Scroll Line */}
      <div className="fixed bottom-0 left-0 h-1 bg-orange-900 rounded-r-2xl" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default Navbar;






