import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios'
import { RiLockPasswordFill } from "react-icons/ri";
import gicon from "../images/gicon.png";
import {  useNavigate } from 'react-router-dom';

const Login = () => {

  
  let navigate = useNavigate()
  
  let [password ,setpassword] = useState("")
  let [email ,setemail] = useState("")
  

  // };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const items = { email, password };
        const response = await axios.post(
            "https://lms-j25h.onrender.com/api/auth/login",
            items,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        // localStorage.setItem("token", response.data.token);
        localStorage.setItem("token" , response.data.token);
        console.log("Response Data:", response.data);
        navigate("/profile")
    }
    catch (error) {
        if (error.response) {
            console.error("Error Response:", error.response.data);
        } else if (error.request) {
            console.error("No Response:", error.request);
        } else {
            console.error("Error:", error.message);
        }
    }
}



  return (
    <>
      <h1 className='text-4xl text-center font-bold  bg-red-950 py-5 text-white mt-10'>Login</h1>
      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
        <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">

        <div className="logo flex mt-10 py-4 w-full sm:w-96 md:w-[600px] lg:w-[400px] text-xl font-bold justify-evenly border-2 items-center border-black text-black">
            <div className="img">
              <img src={gicon} alt="" className="h-8 sm:h-10 max-w-full" />
            </div>
            <div className="text text-center tracking-wider">
              Sign Up with gicon
            </div>
          </div>
               
          <div className="or h-10 flex justify-center items-center mt-5">
            <span className="border-2 mr-2 w-96 border-black"></span>
            <span className="text-xl font-bold mb-1">or</span>
            <span className="border-2 ml-2 w-96 border-black"></span>
          </div>
     
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="email" className='font-bold text-xl mb-4 text-red-950 ml-1'>Email Address</label>
              <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  <MdAttachEmail />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  id="email" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter Email Address" 
                />
              </div>
            </div>

            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="password" className='font-bold text-xl mb-4 text-red-950 ml-1'>Enter Password</label>
              <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  < RiLockPasswordFill  />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  id="password" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter Password" 
                />
              </div>
            </div>


            <div className="div">

            </div>
       

        </div>
        <div className='flex justify-center items-center mt-7'>
        <button className='text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[400px] text-xl text-center md:text-2xl font-bold'>
              Log in
            </button>
            </div>
        {/* <div className='flex justify-center items-center mt-7'>
        <button className='text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[400px] text-xl text-center md:text-2xl font-bold'>
              Log in
            </button>
            </div> */}

            <div className="already mt-8 text-center">
            <span className="text-lg text-black font-bold">
              Don't have an account?
            </span>
            <span className="text-lg text-blue-600 ml-1">Sign In</span>
          </div>

          <div className="last border-2 w-[800px] border-black mt-8 "></div>

<div className="mt-5 tracking-wide flex justify-center items-center">
  I accept Learnify's
  <span className="font-bold underline mx-1">Terms of Use</span>
  and
  <span className="font-bold underline mx-1">Privacy Notice</span>
</div>


      </form>
    </>
  )
}

export default Login





