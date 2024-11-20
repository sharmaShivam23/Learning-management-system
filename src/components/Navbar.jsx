import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import radio2 from "../images/radioo.png"
import { GiCrossedAxes } from "react-icons/gi";

const Navbar = () => {

  const [menu , setMenu] = useState(false)
  // let [profile , setProfile] = useState(null)

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const token = localStorage.getItem('token');
  //     try {
  //       const response = await axios.get('https://e-learning-slfj.onrender.com/user/profile/', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setProfile(response.data);
  //       console.log(profile.username);
        
  //     }
  //      catch (error) {
  //       localStorage.removeItem('token');
  //     } 
  //   };

  //   fetchProfile();
  // }, []);
 
  const handle = () => {
    setMenu(!menu)
  }
  return (
    <div className='relative overflow-x-hidden'>
       <nav className={`flex justify-between  items-center`}>
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
            {!menu && (
        <a href="#" onClick={handle} className="text-7xl relative text-center mb-20 font-bold text-decoration-none text-black ">&#8801;</a>
      )}
        {menu && (
        <a href="#" onClick={handle} className="text-5xl z-50  fixed right-14 top-16 text-center mb-20 font-bold text-decoration-none  text-black 
        }
        ">< GiCrossedAxes/></a>
      )}
        </div>

          <div className="list">
            <ul className='md:flex  hidden gap-8 text-2xl font-bold mt-2 max-[900px]:gap-2 max-[900px]:text-xl'>
              <li><Link to="/Main" className=''>Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </div>

          <div className="btn md:flex hidden gap-8 text-2xl font-bold max-[900px]:gap-2 max-[900px]:text-xl">
            
            <button className='bg-orange-900 text-white p-2'><Link to="/Signup">Sign Up</Link></button>
            {localStorage.getItem('user-info') ? 
            <button className="text-white text-xl">
              {/* <NavDropdown title= {profile.username}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown> */}
            </button>
             : 
            // <button><Link to="/Login" className="text-white no-underline md:text-2xl">Log in</Link></button>
            <button className='bg-orange-900 text-white p-2'><Link to="/Login">Log in</Link></button>
          }
          </div>
        </div>

       </nav>

   {menu && (
  <div
    className={`list2 fixed z-50 bg-amber-600 h-screen w-7/12 top-0 left-0 transition-all duration-[5000ms] ease-in-out delay-0`}
  >
    <ul className="flex flex-col justify-evenly items-center text-2xl font-bold mt-2 max-[900px]:gap-2 max-[900px]:text-xl ">
      <li className='mt-7'> <img src={radio2} alt="" className='h-16'/>
      <div className="text flex justify-center font-bold text-white tracking-wider text-xl">
            learnify
          </div>
          </li>
      {/* <li className="mt-6"><a href="Home">Home</a></li>
      <li className="mt-6"><a href="Trending">Trending</a></li>
      <li className="mt-6"><a href="Courses">Courses</a></li>
      <li className="mt-6"><a href="Contact US">Contact Us</a></li> */}
        <li className='mt-4'><Link to="/Main" >Home</Link></li>
        <li className='mt-4'><Link to="/courses">Courses</Link></li>
        <li className='mt-4'><Link to="/Contact">Contact Us</Link></li>
         <li className='mt-4'><Link to="/profile">Profile</Link></li>
      {/* <li><Link to="/profile">Profile</Link></li> */}
      
      <li className="mt-6"><button className='bg-orange-900 text-white p-2'><Link to="/Signup">Sign Up</Link></button></li>
      <li className="mt-6"><button className='bg-orange-900 text-white p-2'><Link to="/Login">Log in</Link></button></li>
      
      {/* <li className="mt-6"><button className="bg-orange-900 text-white p-2">Sign up</button></li> */}
    </ul>
  </div>
)}


    </div>
  )
}

export default Navbar
