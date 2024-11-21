import React from 'react'
// import { FaUserPlus } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios'
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {


  
  let [password ,setpassword] = useState('')
  let [email ,setemail] = useState('')




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://e-learning-slfj.onrender.com/user/login/', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.access);
      alert("Login SuccessFull")
    }
     catch (error) {
      alert("Login fail")
      console.log(error);
      
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl text-center font-bold  bg-red-950 py-5 text-white mt-10'>Login</h1>
        <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">

           

     
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
              <label htmlFor="name" className='font-bold text-xl mb-4 text-red-950 ml-1'>Enter Password</label>
              <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  < RiLockPasswordFill  />
                </div>
                <input 
                  type="text" 
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  id="name" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter Password" 
                  required
                />
              </div>
            </div>


            <div className="div">

            </div>
       

        </div>
        <div className='flex justify-center items-center mt-7'>
        <button className='text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[600px] text-xl text-center md:text-2xl font-bold'>
              Log in
            </button>
            </div>
      </form>
    </>
  )
}

export default Login






// import React, { useState } from 'react';
// import { MdAttachEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   async function handleLogin(e) {
//     e.preventDefault();

//     const credentials = { email, password };

//     try {
//       const response = await axios.post('https://e-learning-slfj.onrender.com/user/login/', credentials, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//       });

//       const result = response.data;

//       // Storing user info and token in localStorage
//       localStorage.setItem('user-info', JSON.stringify(result));
//       localStorage.setItem('token', JSON.stringify(result.access));

//       // Success Alert
//       alert('Login successful! Welcome back.');
//       setErrorMessage('');
//     }
//      catch (error) {
//       if (error.response && error.response.status === 404) {
//         // User not found scenario
//         alert('User not registered. Please sign up first.');
//       } else if (error.response && error.response.status === 401) {
//         // Incorrect password or unauthorized
//         setErrorMessage('Invalid email or password.');
//       } else {
//         console.error('Error during login:', error);
//         setErrorMessage('Something went wrong. Please try again.');
//       }
//     }
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
//         <h1 className="text-3xl text-center font-bold text-red-950 mb-6">Login</h1>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-red-950 font-bold mb-2">Email Address</label>
//           <div className="relative">
//             <MdAttachEmail className="absolute left-3 top-3 text-gray-500 text-2xl" />
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full pl-12 pr-3 py-3 border rounded-lg text-lg bg-gray-100"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//         </div>

//         {/* Password Input */}
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-red-950 font-bold mb-2">Password</label>
//           <div className="relative">
//             <RiLockPasswordFill className="absolute left-3 top-3 text-gray-500 text-2xl" />
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full pl-12 pr-3 py-3 border rounded-lg text-lg bg-gray-100"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//         </div>

//         {/* Error Message */}
//         {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

//         {/* Login Button */}
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-3 text-xl font-bold rounded-lg">
//           Login
//         </button>

//         {/* Already Have an Account */}
//         <div className="mt-6 text-center">
//           <span className="text-gray-700">Don’t have an account? </span>
//           <span className="text-blue-600 font-bold cursor-pointer">Sign Up</span>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

