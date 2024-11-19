import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import radio2 from '../images/radio2.png';

// const Footer = () => {
//   let obj1 = ["Big Data Analytics","Machine Learning","Big Data Analytics","Big Data Analytics","Big Data Analytics","Big Data Analytics","Big Data Analytics","Big Data Analytics",]
//   return (
//     <div className='mt-20 flex justify-center items-center'>
//       <div className='grid  grid-cols-4 flex-wrap'>
//          <div className='bg-red-600 w-1fr h-auto text-center p-9'>
//           <h1 className='text-xl font-bold underline'>Data Science & Analytics Courses</h1>

//           {obj1.map((text) => (
//           <div className="div flex justify-center items-center gap-2">
//           <div>  < FaHandPointRight /></div>
//             <p className='text-lg mt-1'>{text}</p>
//           </div>
//           ))}
//           <h1 className='text-xl font-bold underline mt-5'>Data Science & Analytics Courses</h1>

//           {obj1.map((text) => (
//           <div className="div flex justify-center items-center gap-2">
//           <div>  < FaHandPointRight /></div>
//             <p className='text-lg mt-1'>{text}</p>
//           </div>
//           ))}
//          </div>
         
//          <div className='bg-red-600 w-1fr h-auto text-center p-9'>
//           <h1 className='text-xl font-bold underline'>Data Science & Analytics Courses</h1>

//           {obj1.map((text) => (
//           <div className="div flex justify-center items-center gap-2">
//           <div>  < FaHandPointRight /></div>
//             <p className='text-lg mt-1'>{text}</p>
//           </div>
//           ))}
//           <h1 className='text-xl font-bold underline mt-5'>Data Science & Analytics Courses</h1>

//           {obj1.map((text) => (
//           <div className="div flex justify-center items-center gap-2">
//           <div>  < FaHandPointRight /></div>
//             <p className='text-lg mt-1'>{text}</p>
//           </div>
//           ))}
//          </div>

       

//          <div className='bg-red-600 w-1fr h-auto text-center p-9'>
//           <h1 className='text-xl font-bold underline'>Data Science & Analytics Courses</h1>

//           {obj1.map((text) => (
//           <div className="div flex justify-center items-center gap-2">
//           <div>  < FaHandPointRight /></div>
//             <p className='text-lg mt-1'>{text}</p>
//           </div>
//           ))}
//           <h1 className='text-xl font-bold underline mt-5'>Data Science & Analytics Courses</h1>

//           {obj1.map((text) => (
//           <div className="div flex justify-center items-center gap-2">
//           <div>  < FaHandPointRight /></div>
//             <p className='text-lg mt-1'>{text}</p>
//           </div>
//           ))}
//          </div>

       

//          <div className='bg-blue-600 w-1fr h-auto text-center p-9'>
//             <div className="logo flex justify-center items-center flex-col">
//               <img src={radio2} className='h-32' alt="" />
//               <p className='text-3xl font-bold text-red-950 wider'>Learnify</p>
//             </div>

//             <div className="sec flex justify-start mt-8 items-center text-center flex-col">
//               <p className='text-2xl font-bold text-start'>India : </p>
//               <div className='flex justify-start gap-2 items-center text-center'>
//                 <div className="icon text-3xl mt-4">< FaEnvelopeOpenText/></div>
//                 <div className="mail text-center text-2xl">learnify@gmail.com</div>
//               </div>
//               <div className='flex justify-start gap-2 items-center text-center'>
//                 <div className="icon text-3xl mt-4"><  IoIosContacts/></div>
//                 <div className="mail text-center text-2xl">learnify@gmail.com</div>
//               </div>

//               <h1 className='text-3xl font-bold mt-5'>US and other countries : </h1>
//               <div className='flex justify-start gap-2 items-center text-center'>
//                 <div className="icon text-3xl mt-4">< FaEnvelopeOpenText/></div>
//                 <div className="mail text-center text-2xl">learnify@gmail.com</div>
//               </div>
//               <div className='flex justify-start gap-2 items-center text-center'>
//                 <div className="icon text-3xl mt-4"><  IoIosContacts/></div>
//                 <div className="mail text-center text-2xl">learnify@gmail.com</div>
//               </div>
//             </div>


//             <div className="icons flex justify-center items-center gap-5 flex-wrap text-4xl mt-10">
//               <div><FaFacebook/></div>
//               <div><IoLogoYoutube /></div>
//               <div><FaLinkedin/></div>
//               <div><FaSquareTwitter/></div>
//               <div><FaSquareInstagram/></div>
//             </div>
//          </div>

       
//       </div>
//     </div>
//   )
// }

// export default Footer




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
    <div className="mt-10  text-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Course Sections */}
        <CourseSection title="Data Science & Analytics Courses" />
        <CourseSection title="Advanced Analytics Courses" />
        <CourseSection title="Popular Machine Learning Courses" />
        
        {/* Contact Section */}
        <div className=" p-6 rounded-lg text-center flex justify-center items-center flex-col">
          <div className="logo mb-6">
            <img src={radio2} className="h-20 mx-auto" alt="Learnify Logo" />
            <p className="text-3xl font-bold text-red-950">Learnify</p>
          </div>
          <ContactInfo region="India :" email="learnify@gmail.com" />
          <ContactInfo region="US & Other Countries" email="us.learnify@gmail.com" />

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-8 text-5xl">
            <FaFacebook className="hover:text-blue-600 transition-all ease-in-out delay-0 duration-1000" aria-label="Facebook" />
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
