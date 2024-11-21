// import React from 'react'
// import { GrNext } from "react-icons/gr";
// import { MdAccessTimeFilled } from "react-icons/md";
// import News from '../Images/News.jpeg'
// import { IoStar } from "react-icons/io5";
// const Show = () => {


//   let obj1 = ["Popular Courses" , "Data Science" , "Machine Learning" , "Python Programming" , "Digital Marketing", "Web Development" , "Graphic Designing" , "Deep Learning"]

//   let obj = [
//     {
//       img :News,
//       name : "Chat gpt for begginer",
//       star : "4.45",
//       rate : ".1.5 Learners",
//       rate2 : "Begineer",
//       text : "7.5 hour",
//       btn : "Enroll now"
//     } , 
//     {
//       img :News,
//       name : "Chat gpt for begginer",
//       star : "4.45",
//       rate : ".1.5 Learners",
//       rate2 : "Begineer",
//       text : "7.5 hour",
//       btn : "Enroll now"
//     } , 
//     {
//       img :News,
//       name : "Chat gpt for begginer",
//       star : "4.45",
//       rate : ".1.5 Learners",
//       rate2 : "Begineer",
//       text : "7.5 hour",
//       btn : "Enroll now"
//     } , 
//     {
//       img :News,
//       name : "Chat gpt for begginer",
//       star : "4.45",
//       rate : ".1.5 Learners",
//       rate2 : "Begineer",
//       text : "7.5 hour",
//       btn : "Enroll now"
//     } , 
//     {
//       img :News,
//       name : "Chat gpt for begginer",
//       star : "4.45",
//       rate : ".1.5 Learners",
//       rate2 : "Begineer",
//       text : "7.5 hour",
//       btn : "Enroll now"
//     } , 
//     {
//       img :News,
//       name : "Chat gpt for begginer",
//       star : "4.45",
//       rate : ".1.5 Learners",
//       rate2 : "Begineer",
//       text : "7.5 hour",
//       btn : "Enroll now"
//     } , 
    
//   ]
  
//   return (
//     <>
//       <div className="main mt-10 sm:flex gap-5 h-auto">
//         <div className="left text-white sm:w-6/12 h-auto">
//           <div className="course flex h-20 w-full bg-orange-500 rounded-tr-xl  items-center  font-bold text-3xl">
//               <p className='ml-10'>hrvrfrfrbbfr</p>
//               <div className="icon font-bold flex ml-auto mr-6">< GrNext/></div>
//           </div>
//           {obj1.map((item , index) => (
//           <div className="course flex h-20 w-full bg-orange-500 mt-1   items-center font-bold text-3xl">
//               <p key={index} className='ml-10'>{item}</p>
//               <div className="icon font-bold flex ml-auto  mr-6">< GrNext/></div>
//           </div>
//            ))}
//         </div>

         

//         <div className="right   flex gap-4 flex-wrap justify-evenly sm:w-full h-auto">
//           {obj.map((item) => ( 
//           <div className="card h-96 w-96 sm:w-72 sm:h-w-72 p-4 bg-red-700 flex-grow">
//             <div className="img">
//               <img src={News} className='h-48 sm:h-8/12 w-full' alt="" />
//             </div>
              
//               <div className="content h-1/12 bg-orange-500 mt-6 px-2">
//                 <div className="name text-3xl pt-1 text-white sm:text-2xl font-bold text-center">{item.name}</div>
//                 <div className="2 flex gap-4 text-xl sm:text-lg font-bold mt-3">
//                    <div className="rate flex gap-2">
//                     <div className="icon text-yellow-400 text-3xl sm:text-2xl mt-0"><IoStar /></div>
//                     <div className="star">{item.star}</div>
//                    </div>
//                    <div className="rate">{item.rate}</div>
//                    <div className="rate2">{item.rate2}</div>
//                 </div>
//                 <div className="div flex justify-between gap-2">
//                 <div className="3 flex text-2xl sm:text-xl mt-5">
//                   <div className="icon text-3xl sm:text-xl mt-1"><MdAccessTimeFilled /></div>
//                   <div className="text">{item.text}</div>
//                 </div>
//                 <div className="btn flex text-3xl font-bold text-blue-700 sm:text-2xl mt-5 gap-1">
//                   <div className="button ">{item.btn}</div>
//                   <div className="icon mt-2"><GrNext/></div>
//                 </div>
//               </div>
//               </div>
//           </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Show

// import React from 'react';
// import { GrNext } from "react-icons/gr";
// import { MdAccessTimeFilled } from "react-icons/md";
// import News from '../Images/News.jpeg';
// import { IoStar } from "react-icons/io5";

// const Show = () => {
//   let obj1 = [
//     "Popular Courses", "Data Science", "Machine Learning", 
//     "Python Programming", "Digital Marketing", 
//     "Web Development", "Graphic Designing", "Deep Learning"
//   ];

//   let obj = [
//         {
//           img :News,
//           name : "Chat gpt for begginer",
//           star : "4.45",
//           rate : ".1.5 Learners",
//           rate2 : "Begineer",
//           text : "7.5 hour",
//           btn : "Enroll now"
//         } , 
//         {
//           img :News,
//           name : "Chat gpt for begginer",
//           star : "4.45",
//           rate : ".1.5 Learners",
//           rate2 : "Begineer",
//           text : "7.5 hour",
//           btn : "Enroll now"
//         } , 
//         {
//           img :News,
//           name : "Chat gpt for begginer",
//           star : "4.45",
//           rate : ".1.5 Learners",
//           rate2 : "Begineer",
//           text : "7.5 hour",
//           btn : "Enroll now"
//         } , 
//         {
//           img :News,
//           name : "Chat gpt for begginer",
//           star : "4.45",
//           rate : ".1.5 Learners",
//           rate2 : "Begineer",
//           text : "7.5 hour",
//           btn : "Enroll now"
//         } , 
//         {
//           img :News,
//           name : "Chat gpt for begginer",
//           star : "4.45",
//           rate : ".1.5 Learners",
//           rate2 : "Begineer",
//           text : "7.5 hour",
//           btn : "Enroll now"
//         } , 
//         {
//           img :News,
//           name : "Chat gpt for begginer",
//           star : "4.45",
//           rate : ".1.5 Learners",
//           rate2 : "Begineer",
//           text : "7.5 hour",
//           btn : "Enroll now"
//         } , 
        
//       ]

//   return (
//     <>
//       <div className="main mt-10 sm:flex  gap-6 flex-wrap h-auto">
//         {/* Left Section */}
//         <div className="left text-white sm:w-1/3 w-full h-auto">
//           <div className="course flex items-center bg-orange-500 rounded-tr-xl p-4 text-2xl font-bold">
//             <p className="ml-4">Course Categories</p>
//             <div className="ml-auto"><GrNext className="text-xl" /></div>
//           </div>
//           {obj1.map((item, index) => (
//             <div key={index} className="course flex items-center bg-orange-500 mt-1 p-4 text-xl font-semibold">
//               <p className="ml-4">{item}</p>
//               <div className="ml-auto"><GrNext className="text-xl" /></div>
//             </div>
//           ))}
//         </div>

//         {/* Right Section */}
//         <div className="right flex gap-6 flex-wrap justify-center sm:w-2/3 w-full">
//           {obj.map((item, index) => (
//             <div key={index} className="card h-auto w-80 bg-red-700 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
//               <div className="img">
//                 <img src={item.img} className="h-48 w-full object-cover" alt={item.name} />
//               </div>
//               <div className="content bg-orange-500 p-4 text-white">
//                 <h3 className="name text-2xl font-bold text-center">{item.name}</h3>
//                 <div className="stats flex justify-between mt-3 text-lg">
//                   <div className="flex items-center gap-2">
//                     <IoStar className="text-yellow-400 text-xl" />
//                     <span>{item.star}</span>
//                   </div>
//                   <div>{item.rate}</div>
//                   <div>{item.rate2}</div>
//                 </div>
//                 <div className="info flex justify-between items-center mt-4">
//                   <div className="flex items-center gap-2">
//                     <MdAccessTimeFilled className="text-xl" />
//                     <span>{item.text}</span>
//                   </div>
//                   <button className="flex items-center gap-2 text-blue-700 font-bold text-lg hover:text-blue-800">
//                     {item.btn} <GrNext />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Show;


import React from 'react';
import { GrNext } from "react-icons/gr";
import { MdAccessTimeFilled } from "react-icons/md";
import News from '../images/News.jpeg';
import { IoStar } from "react-icons/io5";

const Show = () => {
  let obj1 = [
    "Popular Courses", "Data Science", "Machine Learning",
    "Python Programming", "Digital Marketing",
    "Web Development", "Graphic Designing", "Deep Learning"
  ];

  let obj = [
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            
          ]

  return (
    <>

    <h1 className='text-4xl font-bold text-center -z-10 mt-16 mb-10'>Explore all new and trending courses</h1>
    <div className="main mt-10 flex flex-wrap sm:flex-nowrap gap-6">

      {/* Left Section */}
      <div className="left text-white bg-pink-400  sm:w-[470px] w-full p-4 rounded-lg">
        <div className="header flex items-center justify-between p-4 text-2xl font-bold bg-violet rounded-t-lg">
          <p>Course Categories</p>
          <GrNext className="text-xl" />
        </div>
        {obj1.map((item, index) => (
          <div key={index} className="course flex items-center justify-between p-4 text-lg font-semibold bg-bg-pink-400 hover:bg-gradient-to-br from-violet-500 to-pink-600 mt-2 rounded-lg ">
            <p>{item}</p>
            <GrNext className="text-xl" />
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="right flex flex-wrap gap-6 sm:w-2/3 w-full -z-10">
        {obj.map((item, index) => (
          <div key={index} className="card w-full sm:w-72 flex-grow bg-white  rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
            <img src={item.img} className="h-48 w-full mb-1 object-cover" alt={item.name} />
            <div className="content bg-gradient-to-br from-violet-500 to-pink-600 p-4 text-white">
              <h3 className="name text-2xl font-bold text-center">{item.name}</h3>
              <div className="stats flex justify-between mt-3 text-lg">
                <div className="flex items-center gap-2">
                  <IoStar className="text-yellow-400 text-lg" />
                  <span>{item.star}</span>
                </div>
                <div>{item.rate}</div>
                <div>{item.rate2}</div>
              </div>
              <div className="info flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <MdAccessTimeFilled className="text-xl" />
                  <span>{item.text}</span>
                </div>
                <button className="flex items-center gap-2 text-black font-bold text-lg hover:text-blue-800">
                  {item.btn} <GrNext />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="div flex justify-center my-16">
  <button className="border-2 border-red-700 p-4 px-10 rounded-xl font-bold text-black text-xl bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-br from-violet-500 to-pink-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
    Show All Courses
  </button>
</div>




    </>
  );
};

export default Show;
