import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GiCrossedAxes } from "react-icons/gi";
import logimg from "../Images/logimg.png";
import le1 from "../Images/le1.png";
import le2 from "../Images/le2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Navbar = ({ username }) => {
  
  const token = localStorage.getItem("token");
  const [menu, setMenu] = useState(false);
  const [click, setclick] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenu(!menu);
    setclick(true)
  };
  const handleMenuToggles = () => {
    setMenu(!menu);
    setclick(false)
  };


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logOut = () => {
    localStorage.clear();
    username = null;
    navigate("/Signup");
  };

  const handleSelectChange = (event) => {
    if (event.target.value === "logout") {
      logOut();
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className="sticky top-0 py-3 backdrop-blur-lg z-50">
      <nav className="flex justify-between items-center">
        <div className="left flex items-center">
          <div className="logo">
            <img src={logimg} alt="Learnify Logo" className="h-12" />
          </div>
          <div className="text flex justify-center font-bold text-orange-900 tracking-wider text-xl ml-3">
            learnify
          </div>
        </div>

        <div className="right flex gap-8 items-center">
          <div className="md:hidden">
            {!menu ? (
              <button
                onClick={handleMenuToggle}
                className={`text-4xl font-bold   text-black`}
                // className={`text-4xl font-bold ${click ? 'transition-all  duration-3000 ease-in-out delay-0' : ''} text-black`}
              >
                &#8801;
              </button>
            ) : (
              <button
                onClick={handleMenuToggles}
                className="text-4xl font-bold text-black transition-all  duration-3000 ease-in-out delay-0"
              >
                <GiCrossedAxes />
              </button>
            )}
          </div>

          <ul className="hidden md:flex gap-8 text-lg font-bold">
            {/* <li className='hover:underline transition-all ease-in-out delay-0 duration-1000'><Link to="/Main">Home</Link></li> */}
            <li className="relative group"><Link to="/" className="transition-all ease-in-out duration-300 text-black " >
                Home
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group"><Link to="/Contact" className="transition-all ease-in-out duration-300 text-black" >
                Contact
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            {token && (
            <li className="relative group"><Link to="/profile" className="transition-all ease-in-out duration-300 text-black" >
                Profile
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
           )}
            <li className="relative group hidden"><Link to="/showCourses" className="transition-all ease-in-out duration-300 text-black" >
                showCourses
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group"><Link to="/Courses" className="transition-all ease-in-out duration-300 text-black" >
                Courses
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>

            <li className="relative group"><Link to="/Assistant" className="transition-all ease-in-out duration-300 text-black" >
                Assistant
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>

          </ul>

          <div className="hidden md:flex gap-4">
          
            {token ? (
              <>
                <select
                  onChange={handleSelectChange}
                  className="bg-orange-700 text-white px-4 py-2 rounded cursor-pointer transition-all ease-in-out delay-0 duration-1000 hover:bg-red-800 hover:scale-105 hover:shadow-md shadow-orange-700 font-bold"
                >
                  <option value="">{username}</option>
                  <option value="logout">Logout</option>
                </select>
              </>
            ) : (
              <>
              <button className="bg-orange-700 text-white px-4 py-2 rounded mx-2 transition-all ease-in-out delay-0 duration-1000 hover:bg-red-800 hover:scale-105 hover:shadow-md shadow-orange-700 font-bold">
              <Link to="/Signup">Sign Up</Link>
            </button>
              <button className="bg-orange-700 text-white px-4 py-2 rounded transition-all ease-in-out delay-0 duration-1000 hover:bg-red-800 hover:scale-105 hover:shadow-md shadow-orange-700 font-bold">
                <Link to="/Login">Log in</Link>
              </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {menu && (
        <div className={`list2 fixed z-50 bg-amber-500 h-screen w-7/12  top-0 left-0 ${click ? "animate-slideIn" : "animate-slideOut"} `}>
          <ul className="flex flex-col justify-evenly items-center text-xl font-bold mt-10">
            <li>
              <img src={logimg} alt="Learnify Logo" className="h-16" />
              <div className="text flex justify-center font-bold text-white tracking-wider text-xl">
                learnify
              </div>
            </li>
            <li className="relative group mt-10"><Link to="/" className="transition-all ease-in-out duration-300 text-black" >
                Home
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group mt-10"><Link to="/Contact" className="transition-all ease-in-out duration-300 text-black" >
                Contact
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group mt-10"><Link to="/profile" className="transition-all ease-in-out duration-300 text-black" >
                Profile
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group mt-10 hidden"><Link to="/showCourses" className="transition-all ease-in-out duration-300 text-black" >
                showCourses
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group mt-10"><Link to="/Courses" className="transition-all ease-in-out duration-300 text-black" >
                Courses
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>

            <li className="relative group mt-10"><Link to="/Assistant" className="transition-all ease-in-out duration-300 text-black" >
                Assistant
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </li>

          </ul>
         

          <div className="flex justify-center items-center flex-col gap-4">
          
          {token ? (
            <>
              <select
                onChange={handleSelectChange}
                className="bg-orange-700 text-white px-4 py-2 rounded cursor-pointer transition-all ease-in-out delay-0 duration-1000 hover:bg-red-800 hover:scale-105 hover:shadow-md shadow-orange-700 font-bold mt-10"
              >
                <option value="">{username}</option>
                <option value="logout">Logout</option>
              </select>
            </>
          ) : (
            <>
            <button className="bg-orange-700  text-white px-4 py-2 rounded mx-2 transition-all ease-in-out delay-0 duration-1000 hover:bg-red-800 hover:scale-105 hover:shadow-md shadow-orange-700 font-bold mt-10">
            <Link to="/Signup">Sign Up</Link>
          </button>
            <button className="bg-orange-700 text-white px-4 py-2 rounded transition-all ease-in-out delay-0 duration-1000 hover:bg-red-800 hover:scale-105 hover:shadow-md shadow-orange-700 font-bold mt-10">
              <Link to="/Login">Log in</Link>
            </button>
            </>
          )}
        </div>

        </div>
     

      
      )}


      {/* {menu && (
        <div className="list2 fixed z-50 bg-amber-500 h-screen w-7/12 top-0 left-0">
          <ul className="flex flex-col justify-evenly items-center text-xl font-bold mt-10">
            <li>
              <img src={logimg} alt="Learnify Logo" className="h-16" />
              <div className="text flex justify-center font-bold text-white tracking-wider text-xl">
                learnify
              </div>
            </li>
            <li className="mt-10">
              <Link to="/Main">Home</Link>
            </li>
            <li className="mt-10">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="mt-10">
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li className="mt-10">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="mt-10">
              <Link to="/Assistant">Assistant</Link>
            </li>
            <li className="mt-10">
              <button className="bg-orange-900 text-white px-4 py-2 rounded ">
                <Link to="/Signup">Sign Up</Link>
              </button>
            </li>
            <li>
              <button className="bg-orange-900 text-white px-4 py-2 rounded mt-10">
                <Link to="/Login">Log in</Link>
              </button>
            </li>
            <li>
              <button onClick={logOut}  className="bg-orange-900 text-white px-4 py-2 rounded mt-10">
                <Link to="/logOut">logOut</Link>
              </button>
            </li>
            <li>
             
            </li>
          </ul>
        </div>
      )} */}

  
      <div
        className="fixed bottom-0 left-0 h-1 bg-orange-900 rounded-r-2xl"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
    </>
  );
};

export default Navbar;
