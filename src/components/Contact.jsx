import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";

const Contact = () => {
  let [contact, setcontact] = useState("");
  let [email, setemail] = useState("");
  let [fullName, setname] = useState("");
  let [username, setuser] = useState("");

  return (
    <>
      <form>
        <h1 className="text-4xl text-center font-bold  bg-red-950 py-5 text-white mt-1">
          Contact
        </h1>
        <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">
          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="fullName"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Full Name
            </label>
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
                placeholder="Enter  fullName"
                required
              />
            </div>
          </div>

          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="username"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Username
            </label>
            <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
              <div className="icon absolute left-3 flex items-center text-black">
                <FaUserPlus />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setuser(e.target.value)}
                id="username"
                className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
                placeholder="Enter Username"
                required
              />
            </div>
          </div>

          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="email"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Contact Number
            </label>
            <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
              <div className="icon absolute left-3 flex items-center text-black">
                <RiLockPasswordFill />
              </div>
              <input
                type="contact"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
                id="email"
                className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
                placeholder="Enter Contact Number"
              />
            </div>
          </div>

          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="email"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Email Address
            </label>
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

          <div className="div text-lg mt-8 text-black text-center">
            <p className="tracking-wide">
              By submitting this form, you conset to our Terms of use & Privacy
            </p>
            <p>Policy and to be contacted by us via Email/Call/Whatsapp/SMS</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <button className="text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[600px] text-xl text-center md:text-2xl font-bold">
            Schedule a call
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
