
import React, { useState } from 'react';
import { FaUserPlus } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import google from '../images/google.png';
import axios from 'axios'
import facebook from '../images/facebook.png';


const Signup = () => {

  let [fullName ,setname] = useState('')
  let [username ,setuser] = useState('')
  let [dob ,setdob] = useState('')
  let [email ,setemail] = useState('')
  let [pass ,setpass] = useState('')
  let [cpass ,setcpass] = useState('')




async function handleSubmit(e) {
  e.preventDefault();

  let item = {
        fullName,
        username,
        dateOfBirth : dob,
        email,
        password : pass,
        confirmPassword : cpass
  };

  console.log(item);

  try {
    // let response = await axios.post("https://e-learning-slfj.onrender.com/username/signup/", item, {
    let response = await axios.post("http://localhost:5000/api/auth/register", item, {
      headers: {
        "Content-Type": "application/json",
      },
    });
   
    let result = response.data;
    console.log(result);
    // localStorage.setItem('token', response.data.access);
    // localStorage.setItem('username-info', JSON.stringify(result));
  } 
  catch (error) {
    console.error("Error during sign-up:", error);
  }
}


  return (
    <>
      <form onSubmit={handleSubmit} className='overflow-x-hidden'>
        <h1 className='text-4xl text-center font-bold mt-1 w-full bg-red-950 py-5 text-white h-auto'>Registration</h1>
        
        <div className="form px-4 md:px-8 lg:px-16 max-w-full">
          <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">
            
            {/* Full Name Input */}
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="fullName" className='font-bold text-xl mb-4 text-red-950 ml-1'>Full Name</label>
              <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  <FaUserPlus />
                </div>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setname(e.target.value)}
                  id="fullName" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter fullName" 
                  required
                />
              </div>
            </div>

            {/* Username Input */}
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="username" className='font-bold text-xl mb-4 text-red-950 ml-1'>Username</label>
              <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  <FaUserPlus />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) =>setuser(e.target.value)}
                  id="username" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter Username" 
                  required
                />
              </div>
            </div>

    
            {/* Date of Birth Input */}
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="dob" className='font-bold text-xl mb-4 text-red-950 ml-1'>Date of Birth</label>
              <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  <FaUserPlus />
                </div>
                <input 
                  type="date" 
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  id="dob" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter Date of Birth" 
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="email" className='font-bold text-xl mb-4 text-red-950 ml-1'>Email Address</label>
              <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
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

            {/* Password Input */}
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="pass" className='font-bold text-xl mb-4 text-red-950 ml-1'>Password</label>
              <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  <RiLockPasswordFill />
                </div>
                <input 
                  type="password" 
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  id="pass" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Enter Password"
                  required 
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
              <label htmlFor="c" className='font-bold text-xl mb-4 text-red-950 ml-1'>Confirm Password</label>
              <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
                <div className="icon absolute left-3 flex items-center text-black">
                  <RiLockPasswordFill />
                </div>
                <input 
                  type="password" 
                  value={cpass}
                  onChange={(e) => setcpass(e.target.value)}
                  id="c" 
                  className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent" 
                  placeholder="Confirm Password" 
                />
              </div>
            </div>

          </div>
        </div>

        {/* Sign Up Button */}
        <div className="secondpart text-center mt-10 flex justify-center items-center flex-col">
          <div className="btn">
            <button className='text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[600px] text-xl md:text-2xl font-bold'>
              Sign Up
            </button>
          </div>

          {/* Or Divider */}
          <div className="or h-10 flex justify-center items-center mt-5">
            <span className='border-2 mr-2 w-96 border-black'></span><span className='text-xl font-bold mb-1'>or</span><span className='border-2 ml-2 w-96 border-black'></span>
          </div>

          {/* Social SignUp Buttons */}
          <div className="logo flex mt-6 py-4 w-full sm:w-96 md:w-[600px] lg:w-[600px] text-xl font-bold justify-evenly border-2 items-center border-black text-black">
            <div className="img">
              <img src={facebook} alt="" className='h-8 sm:h-10 max-w-full' />
            </div>
            <div className="text text-center tracking-wider">Sign Up with Facebook</div>
          </div>

          <div className="logo flex mt-10 py-4 w-full sm:w-96 md:w-[600px] lg:w-[600px] text-xl font-bold justify-evenly border-2 items-center border-black text-black">
            <div className="img">
              <img src={google} alt="" className='h-8 sm:h-10 max-w-full' />
            </div>
            <div className="text text-center tracking-wider">Sign Up with Google</div>
          </div>

          {/* Already Have an Account Link */}
          <div className="already mt-8">
            <span className='text-xl text-black font-bold'>Already on Learnify?</span>
            <span className='text-lg text-blue-600'>Log in</span>
          </div>

          {/* Terms of Use */}
          <div className="last border-2 w-[800px] border-black mt-8 "></div>

          <div className='mt-5 tracking-wide'>
            I accept Learnify's 
            <span className='font-bold underline mx-1'>Terms of Use</span> 
            and 
            <span className='font-bold underline mx-1'>Privacy Notice</span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;











// import React, { useState } from 'react';
// import { FaUserPlus } from "react-icons/fa";
// import { MdAttachEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import google from '../images/google.png';
// import facebook from '../images/facebook.png';
// import axios from 'axios';

// const Signup = () => {
//   const [fullName, setFullName] = useState('');
//   const [username, setUsername] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [cpass, setCpass] = useState('');
//   const [error, setError] = useState('');

//   const validateForm = () => {
//     if (pass !== cpass) {
//       setError('Passwords do not match.');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

       
//     const item = {
//       // fullName,
//       // username,
//       // dateOfBirth: dob,
//       // email,
//       // password: pass,
//       // confirmPassword: cpass,
//       username,
//       fullname : fullName,
//       email,
//       password : pass
//     };
  

   
//     let result = await fetch("https://e-learning-slfj.onrender.com/username/signup/", {
//     // let result = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(item),
//     })

//     result = await result.json();
//     console.log(result);
//     localStorage.setItem('user-info', JSON.stringify(result));
//     localStorage.setItem("token" , JSON.stringify(result.access));

//   };

//   return (
//     <form onSubmit={handleSubmit} className="overflow-x-hidden">
//       <h1 className="text-4xl text-center font-bold mt-14 w-full bg-red-950 py-5 text-white">
//         Registration
//       </h1>

//       <div className="form px-4 md:px-8 lg:px-16 max-w-full">
//         <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">
//           {/* Input Field Component */}
//           {[
//             { label: "Full Name", id: "fullName", value: fullName, onChange: setFullName, icon: FaUserPlus, type: "text", placeholder: "Enter Full Name" },
//             { label: "Username", id: "username", value: username, onChange: setUsername, icon: FaUserPlus, type: "text", placeholder: "Enter Username" },
//             { label: "Date of Birth", id: "dob", value: dob, onChange: setDob, icon: FaUserPlus, type: "date" },
//             { label: "Email Address", id: "email", value: email, onChange: setEmail, icon: MdAttachEmail, type: "email", placeholder: "Enter Email Address" },
//             { label: "Password", id: "pass", value: pass, onChange: setPass, icon: RiLockPasswordFill, type: "password", placeholder: "Enter Password" },
//             { label: "Confirm Password", id: "cpass", value: cpass, onChange: setCpass, icon: RiLockPasswordFill, type: "password", placeholder: "Confirm Password" },
//           ].map(({ label, id, value, onChange, icon: Icon, type, placeholder }) => (
//             <div key={id} className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
//               <label htmlFor={id} className="font-bold text-xl mb-4 text-red-950 ml-1">{label}</label>
//               <div className="flex rounded-lg justify-start items-center relative h-full border-2 border-black">
//                 <div className="icon absolute left-3 flex items-center text-black">
//                   <Icon />
//                 </div>
//                 <input
//                   type={type}
//                   value={value}
//                   onChange={(e) => onChange(e.target.value)}
//                   id={id}
//                   className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
//                   placeholder={placeholder}
//                   required={type !== 'date'}
//                 />
//               </div>
//             </div>
//           ))}

//           {error && <p className="text-red-600 mt-2">{error}</p>}
//         </div>
//       </div>

//       <div className="text-center mt-10 flex justify-center items-center flex-col">
//         <button className="text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[600px] text-xl md:text-2xl font-bold">
//           Sign Up
//         </button>
        
//         {/* Additional Content */}
//         {/* Social Media */}
//         {/* Terms */}
//       </div>
//     </form>
//   );
// };

// export default Signup;
