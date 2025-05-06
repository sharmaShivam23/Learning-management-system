import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios'
import { RiLockPasswordFill } from "react-icons/ri";

import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading2 from './Loading2';



const Login = () => {

  
  
  let navigate = useNavigate()
  
  let [password ,setpassword] = useState("")
  let [email ,setemail] = useState("")
  let [error , setError] = useState("")
  let [passvalid , setPassValid] = useState(false)
  const [loading , setLoading] = useState(false)
  

  // };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
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
        localStorage.setItem("token" , response.data.token);
        console.log(response);
        
        console.log("Response Data:", response.data);
        navigate("/profile")
    }
    
    catch (error) {
        // if (error.response) {
        //     console.error("Error Response:", error.response.data);
        //     setPassValid(true)
        // }
        //  else if (error.request) {
        //     console.error("No Response:", error.request);
        // }
        //  else {
        //     console.error("Error:", error.message);
        //     toast.error(error.message)
        //     setError(error)
        // console.log(error);
        if (error.response) {
            console.error("Error Response:", error.response.data.message);
            toast.error(error.response.data.message)
            setPassValid(true)
        }
          else if (error.request) {
            console.error("No Response:", error.request);
            toast.error(error.request)
            toast.error(error.request.data.message)
            toast.error(error.request.message)
            
        }
        else{
        console.log(error.message);
        toast.error(error.message)
        }
      }
    
    finally{
      setLoading(false)
    }
    
  
}



  return (
    <>
    <ToastContainer/>
      <h1 className='text-4xl text-center font-bold  bg-red-950 py-5 text-white mt-10'>Login</h1>
      {/* <button onClick={(e => logout())}>Logout</button> */}
      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
        <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">

        {/* <div className="logo flex mt-10 py-4 max-[400px]:w-[300px] max-[750px]:w-[400px] sm:w-96 md:w-[600px] lg:w-[400px] text-xl font-bold justify-evenly border-2 items-center border-black text-black">
            <div className="img">
              <img src={gicon} alt="" className="h-8 sm:h-10 max-w-full" />
            </div>
            <div className="text text-center tracking-wider" onClick={e => loginWithRedirect()}>
              Sign Up with Google
            </div>
          </div> */}
               
          {/* <div className="or h-10 flex justify-center w-full items-center mt-5">
            <span className="border-2 mr-2 w-96 border-black"></span>
            <span className="text-xl font-bold mb-1">or</span>
            <span className="border-2 ml-2 w-96 border-black"></span>
          </div> */}
     
            <div className="first mt-4 max-[400px]:w-[300px] max-[750px]:w-[400px] md:w-[600px] lg:w-[800px]">
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

            <div className="first mt-4 w-full max-[400px]:w-[300px] max-[750px]:w-[400px] md:w-[600px] lg:w-[800px]">
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
          {loading ? <Loading2/> : (
        <button className='text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[400px] text-xl text-center md:text-2xl font-bold max-[700px]:w-[200px]'>
              Log in
            </button>
            )}
            </div>
        {/* <div className='flex justify-center items-center mt-7'>
        <button className='text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[400px] text-xl text-center md:text-2xl font-bold'>
              Log in
            </button>
            </div> */}
             {/* {error && <p className="text-2xl text-red-600 text-center">{`Failed to login : ${error}  Try Again`}</p>}
             {passvalid && <p className="text-2xl text-red-600 text-center">{`Failed to login : ${error}  Try Again`}</p>} */}
             {/* {passvalid && <p className="text-2xl text-red-600 text-center">{`${error.response.data.message}`}</p>} */}
             {/* {passvalid && <p className="text-2xl text-red-600 text-center">{`Either email or password is wrong? User Not Found`}</p>} */}

            <div className="already mt-8 text-center">
            <span className="text-lg text-black font-bold">
              Don't have an account?
            </span>
            <span className="text-lg text-blue-600 ml-1">Sign In</span>
          </div>
          

          {/* <div className="last border-2 w-[800px] border-black mt-8 "></div> */}

<div className="mt-5  flex justify-center items-center text-center">
  I accept Learnify's
  <span className="font-bold underline ml-2 mr-2">Terms of Use</span>
  and
  <span className="font-bold underline ml-2 mr-2">Privacy Notice</span>
</div>


      </form>
    </>
  )
}

export default Login;








// import React, { useState } from "react";
// import { MdAttachEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import axios from "axios";
// import gicon from "../images/gicon.png";
// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider } from "../firebase-config"; // Firebase setup
// import { signInWithPopup } from "firebase/auth";

// const Login = () => {
//   let navigate = useNavigate();

//   let [password, setpassword] = useState("");
//   let [email, setemail] = useState("");
//   let [error, setError] = useState("");

//   // Handle Form Submission
//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const items = { email, password };
//       const response = await axios.post(
//         "https://lms-j25h.onrender.com/api/auth/login",
//         items,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       localStorage.setItem("token", response.data.token);
//       console.log("Response Data:", response.data);
//       navigate("/profile");
//     } catch (error) {
//       if (error.response) {
//         console.error("Error Response:", error.response.data);
//         setError(error.response.data.message);
//       } else if (error.request) {
//         console.error("No Response:", error.request);
//       } else {
//         console.error("Error:", error.message);
//       }
//     }
//   }

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       console.log("Google User Info:", user);

//       // You can send the token to your backend for user creation
//       const response = await axios.post(
//         "https://lms-j25h.onrender.com/api/auth/google-login",
//         { token: user.accessToken },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       localStorage.setItem("token", response.data.token);
//       navigate("/profile");
//     } catch (error) {
//       console.error("Google Sign-In Error:", error.message);
//       setError("Failed to sign in with Google. Try again.");
//     }
//   };

//   return (
//     <>
//       <h1 className="text-4xl text-center font-bold bg-red-950 py-5 text-white mt-10">
//         Login
//       </h1>
//       {error && (
//         <p className="text-2xl text-red-600 text-center">{`Failed to login: ${error}`}</p>
//       )}
//       <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
//         <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">

//           {/* Google Sign-In Button */}
//           <div
//             className="logo flex mt-10 py-4 max-[400px]:w-[300px] max-[750px]:w-[400px] sm:w-96 md:w-[600px] lg:w-[400px] text-xl font-bold justify-evenly border-2 items-center border-black text-black cursor-pointer"
//             onClick={handleGoogleSignIn}
//           >
//             <div className="img">
//               <img src={gicon} alt="" className="h-8 sm:h-10 max-w-full" />
//             </div>
//             <div className="text text-center tracking-wider">Sign Up with Google</div>
//           </div>

//           {/* Email Input */}
//           <div className="first mt-4 max-[400px]:w-[300px] max-[750px]:w-[400px] md:w-[600px] lg:w-[800px]">
//             <label
//               htmlFor="email"
//               className="font-bold text-xl mb-4 text-red-950 ml-1"
//             >
//               Email Address
//             </label>
//             <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
//               <div className="icon absolute left-3 flex items-center text-black">
//                 <MdAttachEmail />
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setemail(e.target.value)}
//                 id="email"
//                 className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
//                 placeholder="Enter Email Address"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div className="first mt-4 w-full max-[400px]:w-[300px] max-[750px]:w-[400px] md:w-[600px] lg:w-[800px]">
//             <label
//               htmlFor="password"
//               className="font-bold text-xl mb-4 text-red-950 ml-1"
//             >
//               Enter Password
//             </label>
//             <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
//               <div className="icon absolute left-3 flex items-center text-black">
//                 <RiLockPasswordFill />
//               </div>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//                 id="password"
//                 className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
//                 placeholder="Enter Password"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center items-center mt-7">
//           <button className="text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[400px] text-xl text-center md:text-2xl font-bold max-[700px]:w-[200px]">
//             Log in
//           </button>
//         </div>

//         <div className="already mt-8 text-center">
//           <span className="text-lg text-black font-bold">
//             Don't have an account?
//           </span>
//           <span className="text-lg text-blue-600 ml-1">Sign In</span>
//         </div>

//         <div className="mt-5 tracking-wide flex justify-center items-center">
//           I accept Learnify's
//           <span className="font-bold underline mx-1">Terms of Use</span>
//           and
//           <span className="font-bold underline mx-1">Privacy Notice</span>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Login;
