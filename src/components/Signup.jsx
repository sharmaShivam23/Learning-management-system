import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading2 from "./Loading2";

const Signup = () => {
  let navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  let [fullName, setname] = useState("");
  let [username, setuser] = useState("");
  let [dob, setdob] = useState("");
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");
  let [cpass, setcpass] = useState("");
  let [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showmsg, setShowmsg] = useState(false);
  let [fullNameValid, setnameValid] = useState(true);
  let [usernameValid, setuserValid] = useState(true);
  let [dobValid, setdobValid] = useState(true);
  let [emailValid, setemailValid] = useState(true);
  let [passValid, setpassValid] = useState(true);
  let [cpassValid, setcpassValid] = useState(true);
  

  async function handleSubmit(e) {
    e.preventDefault();
    if (clear()) {
      setLoading(true)
      let item = {
        fullName,
        username,
        dateOfBirth: dob,
        email,
        password: pass,
        confirmPassword: cpass,
      };

      console.log(item);
      axios
        .post("https://lms-j25h.onrender.com/api/auth/register", item, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          console.log(res.data.message);
          if(res.status === 201){
          navigate("/login");
          toast.success(res.data.message);
          }
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message);
          toast.error(error.response.data.message);
          setError(error.message);
          setLoading(false)
        });
    }
  }

  function clear() {
    if (
      fullName == "" ||
      email == "" ||
      pass == "" ||
      cpass == "" ||
      dob == "" ||
      username == ""
    ) {
      toast.error("Fill all the fields first");
      return false;
    }
    if (fullName == "") {
      setnameValid(false);
    }
    if (username == "") {
      setuserValid(false);
    }
    if (dob === "") {
      setdobValid(false);
    } else {
      setdobValid(true);
    }
    if (email == "") {
      setemailValid(false);
    }
    if (pass == "") {
      setpassValid(false);
    }
    if (cpass == "") {
      setcpassValid(false);
    }
    if (fullName) {
      if (fullName.split("").some((char) => !isNaN(char))) {
        toast.error("Name can't take space and numbers");
        setnameValid(false);
        return false
      } else {
        setnameValid(true);
      }
    }
    if (username) {
      if (!username.includes("123")) {
        toast.error("username must have with 123");
        setuserValid(false);
        return false
      } else {
        setuserValid(true);
      }
    }
    if (email) {
      if (!email.includes("@gmail.com")) {
        toast.error("Email must ends with @gmail.com");
        setemailValid(false);
        return false
      } else {
        setemailValid(true);
      }
    }

    if (pass) {
      if (pass.length < 6) {
        toast.error("Password must contain at least 6 characters");
        setpassValid(false);
        return false
      } else if (!containSpecial(pass)) {
        toast.error("Password must contain special characters");
        
        setpassValid(false);
        return false
      } else if (!containsUpper(pass)) {
        toast.error("Password must contain uppercase letters");
        setpassValid(false);
        return false
      } else if (!containsLower(pass)) {
        toast.error("Password must contain lowercase letters");
        setpassValid(false);
        return false
      } else {
        setpassValid(true);
      }
    }

    if (cpass) {
      if (pass != cpass) {
        toast.error("Password and Confirm password must same");
        setpassValid(false);
        setcpassValid(false);
        return false
      } else {
        setpassValid(true);
        setcpassValid(true);
      }
    }

    return true;
  }

  function containSpecial(str) {
    const specialChars = "!@#$%^&*()_+=-";
    for (let i = 0; i < str.length; i++) {
      if (specialChars.includes(str[i])) {
        return true;
      }
    }
    return false;
  }

  function containsUpper(str) {
    for (const char of str) {
      if (char >= "A" && char <= "Z") {
        return true;
      }
    }
    return false;
  }

  const containsLower = (str) => {
    for (const char of str) {
      if (char >= "a" && char <= "z") {
        return true;
      }
    }
    return false;
  };

  const handleToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const login = () => {
    navigate("/login");
  };

  // const clearFieldname = () => {
  //   if (fullName) {
  //     setname("");
  //   } else if (username) {
  //     setuser("");
  //   } 
  //   else if (dob) {
  //     setdob("");
  //   }else if (email) {
  //     setemail("");
  //   } else if (pass) {
  //     setpass("");
  //   } else if (cpass) {
  //     setcpass("");
  //   }
  // };
  const clearField = (fieldName) => {
    if (fieldName === 'fullName') setname('');
    else if (fieldName === 'username') setuser('');
    else if (fieldName === 'email') setemail('');
    else if (fieldName === 'dob') setdob('');
    else if (fieldName === 'pass') setpass('');
    else if (fieldName === 'cpass') setcpass('');
  };

  function msg() {
    if (firstClick) {
      setShowmsg(true);
      // setfirstClick(true);
    }
  }

  function passManager() {
    navigate("/Password");
  }

  function msg() {
    setShowmsg(true);
  }

  function cutmsg() {
    setShowmsg(false);
  }
  

  return (
    <>
      <ToastContainer />

      <form onSubmit={handleSubmit} className="overflow-x-hidden">
        <h1 className="text-4xl text-center font-bold mt-1 w-full bg-red-950 py-5 text-white h-auto">
          Registration
        </h1>
        {error && (
          <p className="text-2xl mt-2 text-red-600 text-center">{`Failed to Signup : ${error}  Try Again`}</p>
        )}

        <div className="form px-4 md:px-8 lg:px-16 max-w-full">


          <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">
            {/* Full Name Input */}
            <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
              <label
                htmlFor="fullName"
                className="font-bold text-xl mb-4 text-red-950 ml-1"
              >
                Full Name
              </label>
              <div
                className={`fullName flex rounded-lg justify-start items-center relative h-full border-2 ${
                  fullNameValid ? "border-black" : "border-red-700"
                }`}
              >
                <div
                  className={`icon absolute left-3 flex items-center  ${
                    fullNameValid ? "text-black" : "text-red-700"
                  }`}
                >
                  <FaUserPlus />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setname(e.target.value)}
                  id="fullName"
                  className={`text-xl text-black w-full pl-12 py-[14.3px] rounded-lg h-full bg-transparent rounded-r-none  ${
                    !fullNameValid
                      ? "placeholder:text-red-700 text-red-700"
                      : ""
                  }`}
                  placeholder="Enter fullName"
                />
                {fullName && (
                  <span
                  onClick={() => clearField('fullName')} 
                    className="sm:text-xl cursor-pointer  text-lg text-center font-bold bg-red-950 h-full py-[13.4px] rounded-l-none sm:w-32 w-24 text-white rounded-md"
                  >
                    Clear
                  </span>
                )}
              </div>
            </div>

            {/* Username Input */}
            <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
              <label
                htmlFor="username"
                className="font-bold text-xl mb-4 text-red-950 ml-1"
              >
                Username
              </label>
              <div
                className={`fullName flex rounded-lg justify-start items-center relative h-full border-2 ${
                  usernameValid ? "border-black" : "border-red-700"
                }`}
              >
                <div
                  className={`icon absolute left-3 flex items-center  ${
                    usernameValid ? "text-black" : "text-red-700"
                  }`}
                >
                  <FaUserPlus />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setuser(e.target.value)}
                  id="username"
                  className={`text-xl text-black w-full pl-12 py-[14.3px] rounded-lg h-full bg-transparent rounded-r-none  ${
                    usernameValid
                      ? "placeholder:text-black"
                      : "placeholder:text-red-700  text-red-700"
                  }`}
                  placeholder="Enter Username"
                />
                {username && (
                  <span
                  onClick={() => clearField('username')}
                    className="sm:text-xl text-center cursor-pointer text-lg font-bold bg-red-950 h-full py-[13.8px]  rounded-l-none sm:w-32 w-24 text-white rounded-md"
                  >
                    Clear
                  </span>
                )}
              </div>
            </div>

            {/* Date of Birth Input */}
            <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
              <label
                htmlFor="dob"
                className="font-bold text-xl mb-4 text-red-950 ml-1"
              >
                Date of Birth
              </label>
              <div
                className={`fullName flex rounded-lg justify-start items-center relative h-full border-2 ${
                  dobValid ? "border-black" : "border-red-700"
                }`}
              >
                <div
                  className={`icon absolute left-3 flex items-center  ${
                    dobValid ? "text-black" : "text-red-700"
                  }`}
                >
                  <FaUserPlus />
                </div>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  id="dob"
                  className={`text-xl text-black w-full pl-12 py-[14.3px] rounded-lg h-full bg-transparent rounded-r-none  ${
                    dobValid
                      ? "placeholder:text-black"
                      : "placeholder:text-red-700  text-red-700"
                  }`}
                  placeholder="e.g yyyy-mm-dd"
                />
                {dob && (
                  <sspan
                  onClick={() => clearField('dob')}
                    className="sm:text-xl text-center cursor-pointer rounded-l-none text-lg font-bold bg-red-950 h-full py-[15.4px]  sm:w-32 w-24 text-white rounded-md"
                  >
                    Clear
                  </sspan>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
              <label
                htmlFor="email"
                className="font-bold text-xl mb-4 text-red-950 ml-1"
              >
                Email Address
              </label>
              <div
                className={`fullName flex rounded-lg justify-start items-center relative h-full border-2 ${
                  emailValid ? "border-black" : "border-red-700"
                }`}
              >
                <div
                  className={`icon absolute left-3 flex items-center  ${
                    emailValid ? "text-black" : "text-red-700"
                  }`}
                >
                  <MdAttachEmail />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  className={`text-xl text-black w-full pl-12 py-[14.3px] rounded-lg h-full bg-transparent rounded-r-none  ${
                    emailValid
                      ? "placeholder:text-black"
                      : "placeholder:text-red-700  text-red-700"
                  }`}
                  placeholder="Enter Email Address"
                />
                {email && (
                  <span
                  onClick={() => clearField('email')}
                    className="sm:text-xl text-center cursor-pointer rounded-l-none text-lg font-bold bg-red-950 h-full py-[13.8px]  sm:w-32 w-24 text-white rounded-md"
                  >
                    Clear
                  </span>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
              <label
                htmlFor="pass"
                className="font-bold text-xl mb-4 text-red-950 ml-1"
              >
                Password
              </label>
              <div
                className={`fullName flex rounded-lg justify-start items-center relative h-full border-2 ${
                  passValid ? "border-black" : "border-red-700"
                }`}
              >
                <div
                  className={`icon absolute left-3 flex items-center  ${
                    passValid ? "text-black" : "text-red-700"
                  }`}
                >
                  <RiLockPasswordFill />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={pass}
                  onChange={(e) => {
                    setpass(e.target.value);
                    if (e.target.value) {
                      setShowmsg(false);
                    }
                  }}
                  onClick={msg}
                  id="pass"
                  className={`text-xl text-black w-full pl-12 py-[14.3px] rounded-lg h-full bg-transparent rounded-r-none  ${
                    !passValid ? "placeholder:text-red-700  text-red-700" : ""
                  }`}
                  placeholder="Password@123"
                />
                {pass && (
                  <span
                  onClick={() => clearField('pass')}
                    className="sm:text-xl text-center cursor-pointer rounded-l-none text-lg font-bold bg-red-950 h-full py-[13.4px] sm:w-32 w-24 text-white rounded-md"
                  >
                    Clear
                  </span>
                )}
              </div>
            </div>

            {showmsg && (
              <div className="absolute flex p-10 justify-center items-center sm:w-80 w-52 h-40 bg-white shadow-xl shadow-white">
                <p
                  onClick={passManager}
                  className="sm:text-2xl text-lg font-bold text-center ml-2"
                >
                  Suggest strong password
                  <p className="text-black pt-2 text-lg">Password must be combination of Capital , small,num,special char</p>
                  <p className="text-sm text-black">Password@123</p>
                </p>
                <div
                  onClick={cutmsg}
                  className="relative bottom-12 cursor-pointer"
                >
                  <ImCross />
                </div>
              </div>
            )}

            {/* Confirm Password Input */}
            <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
              <label
                htmlFor="c"
                className="font-bold text-xl mb-4 text-red-950 ml-1"
              >
                Confirm Password
              </label>
              <div
                className={`fullName flex rounded-lg justify-start items-center relative h-full border-2 ${
                  cpassValid ? "border-black" : "border-red-700"
                }`}
              >
                <div
                  className={`icon absolute left-3 flex items-center  ${
                    cpassValid ? "text-black" : "text-red-700"
                  }`}
                >
                  <RiLockPasswordFill />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={cpass}
                  onChange={(e) => setcpass(e.target.value)}
                  id="c"
                  className={`text-xl text-black w-full pl-12 py-[14.3px] rounded-lg h-full bg-transparent rounded-r-none  ${
                    cpassValid
                      ? "placeholder:text-black"
                      : "placeholder:text-red-700 text-red-700"
                  }`}
                  placeholder="Confirm Password"
                />
                {cpass && (
                  <span
                  onClick={() => clearField('cpass')}
                    className="sm:text-xl text-center cursor-pointer  text-lg font-bold bg-red-950 h-full py-[13.4px] rounded-l-none sm:w-32 w-24 text-white rounded-md"
                  >
                    Clear
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4">
          {/* Show Password Toggle */}
          <div className="text-center mt-2 text-2xl text-black font-bold flex justify-center items-center gap-2 ">
            <input
              type="checkbox"
              className="transform scale-150 mr-2"
              id="check"
              onChange={handleToggle}
            />
            <label htmlFor="check" className="cursor-pointer">
              Show Password
            </label>
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="secondpart text-center mt-10 flex justify-center items-center flex-col">
        {loading ? <Loading2/> : (
          <div className="btn">
            <button className="text-red-950 py-4 px-5  bg-transparent border-2  w-full sm:w-96 lg:w-[400px] text-xl md:text-2xl border-red-950 font-bold hover:bg-gradient-to-br from-yellow-500 to-orange-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-black">
              Sign Up
            </button>
          </div>
          )}

          {/* Or Divider */}
          {/* <div className="or h-10 flex justify-center items-center mt-5">
            <span className="border-2 mr-2 w-96 border-black"></span>
            <span className="text-xl font-bold mb-1">or</span>
            <span className="border-2 ml-2 w-96 border-black"></span>
          </div> */}

          <div className="block sm:flex justify-evenly gap-2 cursor-pointer">
            {/* Social SignUp Buttons */}
            {/* <div className="logo flex mt-10 py-4  sm:w-96 md:w-[400px] lg:w-[400px] text-xl font-bold justify-evenly border-2 items-center border-black text-black">
              <div className="img">
                <img src={faceimg} alt="" className="h-8 sm:h-10 max-w-full" />
              </div>
              <div className="text text-center tracking-wider">
                Sign Up with Facebook
              </div>
            </div>

            <div className="logo flex mt-10 py-4  sm:w-96 md:w-[400px] lg:w-[400px] text-xl font-bold justify-evenly border-2 items-center border-black text-black">
              <div className="img">
                <img src={gicon} alt="" className="h-8 sm:h-10 max-w-full" />
              </div>
              <div className="text text-center tracking-wider">
                Sign Up with Google
              </div>
            </div> */}
          </div>

          {/* Already Have an Account Link */}
          <div className="already mt-8">
            <span className="text-xl text-black font-bold">
              Already on Learnify?
            </span>
            <span
              onClick={login}
              className="text-lg text-blue-600 font-bold ml-2 cursor-pointer"
            >
              Log in
            </span>
          </div>

          {/* Terms of Use */}
          <div className="last border-2 w-[800px] border-black mt-8 "></div>

          <div className="mt-5 tracking-wide">
            I accept Learnify's
            <span className="font-bold underline mx-1 ml-3 mr-2">Terms of Use</span>
            and
            <span className="font-bold underline mx-1 ml-3 mr-2">Privacy Notice</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
