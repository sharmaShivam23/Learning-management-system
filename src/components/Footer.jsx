import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";

import logimg from '../Images/logimg.png';



const Footer = () => {
  const courseTopics = [
    "Big Data Analytics", "Machine Learning", "Data Science",
    "Artificial Intelligence", "Deep Learning", "Data Visualization",
    "Predictive Analytics", "Data Engineering"
  ];

  const CourseSection = ({ title }) => (
    <div className=" p-6 rounded-lg">
      <h1 className="text-xl font-bold underline mb-4">{title}</h1>
      {courseTopics.map((topic, index) => (
        <div key={index} className="flex items-center gap-2 mb-2 mt-5 underline hover:bg-red-950 text-center transition-all ease-in-out delay-0 duration-1000 transform hover:scale-105 hover:text-white">
          <FaHandPointRight />
          <p className="text-lg text-center">{topic}</p>
        </div>
      ))}
    </div>
  );

  const ContactInfo = ({ region, email }) => (
    <div className="mt-4">
      <p className="text-2xl font-bold">{region}</p>
      <div className="flex items-center gap-2 mt-2">
        <FaEnvelopeOpenText className="text-2xl" />
        <p className="text-lg">{email}</p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <IoIosContacts className="text-2xl" />
        <p className="text-lg">{email}</p>
      </div>
    </div>
  );

  return (
    <div className="mt-10  text-black py-12 -z-10 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -z-10">
        
        
        <CourseSection title="Data Science & Analytics Courses" />
        <CourseSection title="Advanced Analytics Courses" />
        <CourseSection title="Popular Machine Learning Courses" />
        
  
        <div className=" p-6 rounded-lg text-center flex justify-center items-center flex-col">
          <div className="logo mb-6">
            <img src={logimg} className="h-20 mx-auto" alt="Learnify Logo" />
            <p className="text-3xl font-bold text-red-950">Learnify</p>
          </div>
          <ContactInfo region="India :" email="learnify@gmail.com" />
          <ContactInfo region="US & Other Countries" email="us.learnify@gmail.com" />

          
          <div className="flex justify-center gap-5 mt-8 text-5xl">
            <FaFacebook  className="hover:text-blue-600 transition-all ease-in-out delay-0 duration-1000" aria-label="Facebook" />
            <IoLogoYoutube className="hover:text-red-700 transition-all ease-in-out delay-0 duration-1000" aria-label="YouTube" />
            <FaLinkedin className="hover:text-blue-800 transition-all ease-in-out delay-0 duration-1000" aria-label="LinkedIn" />
            <FaSquareTwitter className="hover:text-violet-700 transition-all ease-in-out delay-0 duration-1000" aria-label="Twitter" />
            <FaSquareInstagram className=" hover:bg-gradient-to-r from-red-600 to-violet-600 transition-all ease-in-out delay-0 duration-1000" aria-label="Instagram" />
          </div>
        </div>
      </div>

      <div className="foot">
       <div className='w-full border-2 border-black'></div>
      </div>
   

   <div className="text text-center mt-16">
    <p className='font-bold text-xl text-black italic'>@2024 Learnify Inc. All rights reserved.</p>
   </div>
    </div>


   
  );
};

export default Footer;
