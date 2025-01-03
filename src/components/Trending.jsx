import React, { useState } from "react";
import card1 from "../Images/card1.png";
import card2m from "../Images/card2m.png";
import card3 from "../Images/card3.png";
import lockerimage from "../Images/lockerimage.png";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import bulbimg from "../Images/bulbimg.png";
import { IoStar } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Trending = () => {
  const [rating, setRating] = useState(null);
  let Navigate = useNavigate();
  let obj = [
    {
      img: card1,
      about: "Learnify : Signup to get more info",
      about2: "industry 's standard dummy",
      title: "(14 courses)",
      bottom: "bottom-[178px]",
      hover: "bottom-[190px]",
      bg: "bg-yellow-300",
      ani: "slideIn",
    },
    {
      img: card2m,
      about: "Learnify : Go to courses section",
      about2: "industry 's standard dummy",
      title: "(15 courses)",
      bottom: "bottom-[192px]",
      bg: "bg-[#32CD32]",
      ani: "zoomUp",
    },
    {
      img: card3,
      about: "Learnify : Contact us",
      about2: "industry 's standard dummy",
      title: "(10 courses)",
      bottom: "bottom-[193px]",
      right: "right-[38px]",
      bg: "bg-blue-400",
      ani: "slideOut",
    },
  ];

  let obj2 = [
    {
      img: image1,
      head: "Learnify : Signup to get more info",
      p1: "Explore any interest ot trending topic,",
      p2: "take prerequisites, and advance your",
      p3: "Skills",
      main: "Learn anything",
    },
    {
      img: image2,
      head: "Learnify : Signup to get more info",
      p1: "Explore any interest ot trending topic,",
      p2: "take prerequisites, and advance your",
      p3: "Skills",
      main: "Flexible learning",
    },
    {
      img: lockerimage,
      head: "Learnify : Signup to get more info",
      p1: "Explore any interest ot trending topic,",
      p2: "take prerequisites, and advance your",
      p3: "Skills",
      main: "Save money",
    },
    {
      img: bulbimg,
      head: "Learnify : Signup to get more info",
      p1: "Explore any interest ot trending topic,",
      p2: "take prerequisites, and advance your",
      p3: "Skills",
      main: "Unlimited certificates",
    },
  ];

  let obj3 = [
    {
      head: "Personal Plan",
      head2: "For you",
      icon: <IoMdPerson />,
      p1: "individual",
      p2: "Starting at $850 per month",
      p3: "Billed monthly or annually. Cancel anytime",
    },
    {
      head: "Personal Plan",
      head2: "For you",
      icon: <IoPeopleSharp />,
      p1: "2 people",
      p2: "Starting at $950 per month",
      p3: "Billed monthly or annually. Cancel anytime",
    },
    {
      head: "Personal Plan",
      head2: "For you",
      icon: <IoIosPeople />,
      p1: "More than 2 people",
      p2: "Starting at $250 per month",
      p3: "Billed monthly or annually. Cancel anytime",
    },
  ];

  function subscribe() {
    Navigate("/Signup");
  }

  const animationVariants = {
    slideIn: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { type: "spring", stiffness: 50, duration: 2 },
    },
    slideOut: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { type: "spring", stiffness: 50, duration: 2 },
    },
    zoomUp: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", duration: 4 },
    },
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10 overflow-x-hidden z-10">
      <h1 className="text-center p-5 text-4xl font-bold">Trending Topics</h1>

      <div className="trending flex  mt-32 justify-evenly items-center flex-wrap gap-32 rounded-lg">
        {obj.map((item, index) => (
          <motion.div
            key={index}
            initial={animationVariants[item.ani].initial}
            whileInView={animationVariants[item.ani].animate}
            transition={animationVariants[item.ani].transition}
            // viewport={{ once: true }}
            className="cardr text-center transform  relative cursor-pointer"
          >
            <div
              className={`cards text-center relative -z-10 ${item}   cursor-pointer`}
            >
              <img
                src={item.img}
                alt="image"
                className={`absolute ${item.bottom} ${item.right} h-80`}
              />

              <div className="card h-96 w-80 bg-red-500">
                <div className={`imgT mb-0 pb-0 h-48 ${item.bg}`}></div>

                <div className="contentT bg-white p-3 h-48">
                  <div className="about mt-3">
                    <p>{item.about}</p>
                    <p>{item.about2}</p>
                  </div>

                  <div className="title mt-3">{item.title}</div>

                  <div className="rating flex justify-center gap-2 text-3xl mt-5   animate-zoomUp  text-yellow-400">
                    {[...Array(5)].map((star, index) => (
                      <>
                        <label>
                          {/* <input type="radio" name="rate" value={index+1} onClick={() => setRating(index+1)}/> */}
                          <IoStar />
                        </label>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* <div className="green h-56 w-full bg-green-800 rounded-lg absolute max-[1300px]:hidden z-0 top-[920px]"></div> */}
      </div>

      {/* third page */}

      <div className="third ">
      <motion.div
            initial={{ opacity: 0 , filter : 'blur(10px)'}}
            whileInView={{ opacity: 1 ,  filter : 'blur(0px)' }}
            transition={{ duration: 2 }}
            // viewport={{ once: true }}
          >
        <h1 className="text-center text-3xl font-bold mt-16">
          Invest in your career with Learnify
        </h1>
       
        <div className="text-center mt-6">
          <p>
            LGet more Information about consectetur adipisicing elit. Voluptate,
            minima. Get more Information about .
          </p>
          <p>Get more Information about consectetur.</p>
        </div>
        </motion.div>
        <div className="cards flex justify-evenly items-center mt-10 flex-wrap">
          {obj2.map((content, index) => (
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
                filter: "blur(10)",
                backgroundColor: "white",
                rotateY: 180,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                filter: "blur(0)",
                backgroundColor: "transparent",
                rotateY: 0,
              }}
              transition={{ duration: 2 }}
              // viewport={{once : true}}
            >
              <div
                className={`card h-auto w-80 ${index} flex flex-col hover:shadow-xl hover:shadow-orange-300 justify-center items-center text-center p-4  hover:scale-110 transition-all ease-in-out delay-0 duration-100`}
              >
                <div className="img">
                  <img src={content.img} className="h-60" alt="" />
                </div>
                <div className="head text-xl font-bold text-yellow-900">
                  {content.main}
                </div>
                <div className="content">
                  <p className="mt-2">{content.p1}</p>
                  <p className="mt-2">{content.p2}</p>
                  <p className="mt-2">{content.p3}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* fourth page */}
      <div className="fourth mt-36 ">
        <div className="text text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 50 }}
            // viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold">
              Achieve your goals faster with personalized plans and programs
            </h1>

            <h2 className="text-2xl mt-4">
              ___start a free trial or connect with our team to learn more
            </h2>
          </motion.div>
        </div>

        <div className="cards mt-20 flex justify-evenly flex-wrap items-center gap-16">
          {obj3.map((card, index) => (
            <div
              key={index}
              className={`card h-auto sm:w-96 w-80 ${index} rounded-2xl border-4 border-yellow-300`}
            >
              <div className="upper h-52 bg-yellow-300 rounded-t-2xl">
                <div className="yellow h-10 bg-yellow-400 rounded-t-2xl"></div>
                <div className="head px-10 pt-6 text-2xl font-bold">
                  {card.head}
                </div>
                <div className="head2 px-10">{card.head2}</div>
                <div className="people flex px-10 pt-5 text-xl font-bolder">
                  <div className="icon mt-1 mr-1 text-2xl">{card.icon}</div>
                  <div className="p1">{card.p1}</div>
                </div>
              </div>

              <div className="lower flex justify-center items-center flex-col p-4 text-center mt-4">
                <div className="month text-xl font-bold mt-2">{card.p2}</div>
                <div className="p mt-2">{card.p3}</div>

                <div className="btn flex justify-center  items-center mt-5">
                  <motion.button
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 1,
                      type: "ease-out",
                      stiffness: 50,
                    }}
                    // viewport={{ once: true }}
                  >
                    <button
                      onClick={subscribe}
                      className="sm:w-80 w-64 h-10 hover:scale-110 hover:bg-amber-500 hover:font-bold hover:text-black transform bg-gray-800 text-white text-xl font-bold py-2 pb-1 transition-all ease-in-out delay-0 duration-1000"
                    >
                      Start Subscription
                    </button>
                  </motion.button>
                </div>

                <div className="content mt-6 pb-14">
                  <div className="first flex mt-2">
                    {/* <motion.div initial = {{top : "4"}} whileInView={{top : "0"}} transition={{duration : 1}}>
                    <div className="icont mt-1 text-[#32CD32]">
                      <FaCheckCircle />
                    </div>
                    </motion.div> */}
                      <div className="icont mt-1 text-[#32CD32] animate-bounce">
                        <FaCheckCircle />
                      </div>
                    

                    <div className="text hidden sm:block">
                      Get more Information about consectetur.{" "}
                    </div>
                    <div className="text block sm:hidden">
                      Get more Information about .{" "}
                    </div>
                  </div>
                  <div className="first flex mt-2">
                    <div className="icont mt-1 text-[#32CD32] animate-bounce">
                      <FaCheckCircle />
                    </div>
                    <div className="text hidden sm:block">
                      Get more Information about consectetur.{" "}
                    </div>
                    <div className="text block sm:hidden">
                      Get more Information about .{" "}
                    </div>
                  </div>
                  <div className="first flex mt-2">
                    <div className="icont mt-1 text-[#32CD32] animate-bounce">
                      <FaCheckCircle />
                    </div>
                    <div className="text hidden sm:block">
                      Get more Information about consectetur.{" "}
                    </div>
                    <div className="text block sm:hidden">
                      Get more Information about .{" "}
                    </div>
                  </div>
                  <div className="first flex mt-2">
                    <div className="icont mt-1 text-[#32CD32] animate-bounce">
                      <FaCheckCircle />
                    </div>
                    <div className="text hidden sm:block">
                      Get more Information about consectetur.{" "}
                    </div>
                    <div className="text block sm:hidden">
                      Get more Information about .{" "}
                    </div>
                  </div>
                  <div className="first flex mt-2">
                    <div className="icont mt-1 text-[#32CD32] animate-bounce">
                      <FaCheckCircle />
                    </div>
                    <div className="text hidden sm:block">
                      Get more Information about consectetur.{" "}
                    </div>
                    <div className="text block sm:hidden">
                      Get more Information about .{" "}
                    </div>
                  </div>
                  <div className="first flex mt-2">
                    <div className="icont mt-1 text-[#32CD32] animate-bounce">
                      <FaCheckCircle />
                    </div>
                    <div className="text hidden sm:block">
                      Get more Information about consectetur.{" "}
                    </div>
                    <div className="text block sm:hidden">
                      Get more Information about .{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* fifth page */}
      <div className="fifth mt-20 bg-red-950 h-auto w-full pb-10 px-16 text-center text-lg text-amber-500 flex  items-center flex-col">
        <motion.div
          initial={{ translateX: "-100px"  }}
          whileInView={{ translateX: "0px" }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-4xl mt-4 font-bold">Learnify Plus</h1>
          <div className="text mt-9">
            <p className="hidden lg:block">
              Get more Information about consectetur adipisicing elit. Sit
              aliquid saepe asperiores dignissimos itaque consequatur beatae!
              Incidunt distentiu!
            </p>
            <p className="block lg:hidden">
              Get more Information about consectetur adipisicing elit. Sit aliq
            </p>
            <p className="mt-2 hidden lg:block">
              Get more Information about consectetur adipisicing elit.
            </p>
            <p className="mt-2 block lg:hidden">Get more Information about .</p>
          </div>

          <div className="btn mt-8 flex justify-center items-center">
            <button
              onClick={subscribe}
              className="flex justify-center items-center bg-amber-600 h-16 w-60 sm:w-80 text-red-950 font-bold text-lg 
               relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-red-950 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></span>
              <span className="absolute inset-0 bg-amber-600 translate-x-0 group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-white text-red-950">
                Start 7-day Free Trial
              </span>
            </button>
          </div>

          <div className="text mt-4">
            <p>
              <span className="text-amber-600">or</span>{" "}
              <span className="font-bolder">
                $33,528/year with 14-day money-back guarantee
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Trending;

// import React, { useState } from "react";
// import card1 from "../Images/card1.png";
// import card2m from "../Images/card2m.png";
// import card3 from "../Images/card3.png";
// import lockerimage from "../Images/lockerimage.png";
// import image1 from "../Images/image1.png";
// import image2 from "../Images/image2.png";
// import bulbimg from "../Images/bulbimg.png";
// import { IoStar } from "react-icons/io5";
// import { IoMdPerson } from "react-icons/io";
// import { IoPeopleSharp } from "react-icons/io5";
// import { IoIosPeople } from "react-icons/io";
// import { FaCheckCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Trending = () => {

//   const [rating , setRating] = useState(null)
//   let Navigate = useNavigate();
//   let obj = [
//     {
//       img: card1,
//       about: "Learnify : Signup to get more info",
//       about2: "industry 's standard dummy",
//       title: "(14 courses)",
//       bottom: "bottom-[178px]",
//       hover: "bottom-[190px]",
//       bg: "bg-yellow-300",
//       ani : "slideIn"
//     },
//     {
//       img: card2m,
//       about: "Learnify : Go to courses section",
//       about2: "industry 's standard dummy",
//       title: "(15 courses)",
//       bottom: "bottom-[192px]",
//       bg: "bg-[#32CD32]",
//       ani : "zoomUp"
//     },
//     {
//       img: card3,
//       about: "Learnify : Contact us",
//       about2: "industry 's standard dummy",
//       title: "(10 courses)",
//       bottom: "bottom-[193px]",
//       right: "right-[38px]",
//       bg: "bg-blue-400",
//       ani : "slideOut"
//     },
//   ];

//   let obj2 = [
//     {
//       img: image1,
//       head: "Learnify : Signup to get more info",
//       p1: "Explore any interest ot trending topic,",
//       p2: "take prerequisites, and advance your",
//       p3: "Skills",
//       main: "Learn anything",
//     },
//     {
//       img: image2,
//       head: "Learnify : Signup to get more info",
//       p1: "Explore any interest ot trending topic,",
//       p2: "take prerequisites, and advance your",
//       p3: "Skills",
//       main: "Flexible learning",
//     },
//     {
//       img: lockerimage,
//       head: "Learnify : Signup to get more info",
//       p1: "Explore any interest ot trending topic,",
//       p2: "take prerequisites, and advance your",
//       p3: "Skills",
//       main: "Save money",
//     },
//     {
//       img: bulbimg,
//       head: "Learnify : Signup to get more info",
//       p1: "Explore any interest ot trending topic,",
//       p2: "take prerequisites, and advance your",
//       p3: "Skills",
//       main: "Unlimited certificates",
//     },
//   ];

//   let obj3 = [
//     {
//       head: "Personal Plan",
//       head2: "For you",
//       icon: <IoMdPerson />,
//       p1: "individual",
//       p2: "Starting at $850 per month",
//       p3: "Billed monthly or annually. Cancel anytime",
//     },
//     {
//       head: "Personal Plan",
//       head2: "For you",
//       icon: <IoPeopleSharp />,
//       p1: "2 people",
//       p2: "Starting at $950 per month",
//       p3: "Billed monthly or annually. Cancel anytime",
//     },
//     {
//       head: "Personal Plan",
//       head2: "For you",
//       icon: <IoIosPeople />,
//       p1: "More than 2 people",
//       p2: "Starting at $250 per month",
//       p3: "Billed monthly or annually. Cancel anytime",
//     },
//   ];

//   function subscribe() {
//     Navigate("/Signup");
//   }

//   return (
//     <div className="flex justify-center items-center flex-col mt-10 overflow-x-hidden z-10">
//       <h1 className="text-center p-5 text-4xl font-bold">Trending Topics</h1>

//       <div className="trending flex  mt-32 justify-evenly items-center flex-wrap gap-32 rounded-lg">
//         {obj.map((item,index) => (
//           <div key={index}
//             className={`cards text-center relative -z-10 ${item} ${item.ani === 'slideIn' ? 'animate-slideIn' : item.ani === 'slideOut' ? 'animate-slideOut' : item.ani === 'zoomUp' ? 'animate-zoomUp' : ''} cursor-pointer`}
//           >
//             <img
//               src={item.img}
//               alt="image"
//               className={`absolute ${item.bottom} ${item.right} h-80`}
//             />

//             <div className="card h-96 w-80 bg-red-500">
//               <div className={`imgT mb-0 pb-0 h-48 ${item.bg}`}></div>

//               <div className="contentT bg-white p-3 h-48">
//                 <div className="about mt-3">
//                   <p>{item.about}</p>
//                   <p>{item.about2}</p>
//                 </div>

//                 <div className="title mt-3">{item.title}</div>

//                 <div className="rating flex justify-center gap-2 text-3xl mt-5   animate-zoomUp  text-yellow-400">
//                   {[...Array(5)].map((star, index) => (

//                     <>
//                      <label>
//                       {/* <input type="radio" name="rate" value={index+1} onClick={() => setRating(index+1)}/> */}
//                     <IoStar/>
//                     </label>
//                     </>

//                 ))}
//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}
//         {/* <div className="green h-56 w-full bg-green-800 rounded-lg absolute max-[1300px]:hidden z-0 top-[920px]"></div> */}
//       </div>

//       {/* third page */}

//       <div className="third ">
//         <h1 className="text-center text-3xl font-bold mt-16">
//           Invest in your career with Learnify
//         </h1>
//         <div className="text-center mt-6">
//           <p>
//             LGet more Information about  consectetur adipisicing elit. Voluptate,
//             minima. Get more Information about .
//           </p>
//           <p>Get more Information about  consectetur.</p>
//         </div>

//         <div className="cards flex justify-evenly items-center mt-10 flex-wrap">
//           {obj2.map((content, index) => (
//             <div
//               className={`card h-auto w-80 ${index} flex flex-col hover:shadow-xl hover:shadow-orange-300 justify-center items-center text-center p-4  hover:scale-110 transition-all ease-in-out delay-0 duration-100`}
//             >
//               <div className="img">
//                 <img src={content.img} className="h-60" alt="" />
//               </div>
//               <div className="head text-xl font-bold text-yellow-900">
//                 {content.main}
//               </div>
//               <div className="content">
//                 <p className="mt-2">{content.p1}</p>
//                 <p className="mt-2">{content.p2}</p>
//                 <p className="mt-2">{content.p3}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* fourth page */}
//       <div className="fourth mt-36 ">
//         <div className="text text-center">
//           <h1 className="text-3xl font-bold">
//             Achieve your goals faster with personalized plans and programs
//           </h1>
//           <h2 className="text-2xl mt-4">
//             ___start a free trial or connect with our team to learn more
//           </h2>
//         </div>

//         <div className="cards mt-20 flex justify-evenly flex-wrap items-center gap-16">
//           {obj3.map((card, index) => (
//             <div key={index}
//               className={`card h-auto sm:w-96 w-80 ${index} rounded-2xl border-4 border-yellow-300`}
//             >
//               <div className="upper h-52 bg-yellow-300 rounded-t-2xl">
//                 <div className="yellow h-10 bg-yellow-400 rounded-t-2xl"></div>
//                 <div className="head px-10 pt-6 text-2xl font-bold">
//                   {card.head}
//                 </div>
//                 <div className="head2 px-10">{card.head2}</div>
//                 <div className="people flex px-10 pt-5 text-xl font-bolder">
//                   <div className="icon mt-1 mr-1 text-2xl">{card.icon}</div>
//                   <div className="p1">{card.p1}</div>
//                 </div>
//               </div>

//               <div className="lower flex justify-center items-center flex-col p-4 text-center mt-4">
//                 <div className="month text-xl font-bold mt-2">{card.p2}</div>
//                 <div className="p mt-2">{card.p3}</div>

//                 <div className="btn flex justify-center items-center mt-5">
//                   <button
//                     onClick={subscribe}
//                     className="sm:w-80 w-64 h-10 hover:scale-110 hover:bg-amber-500 hover:font-bold hover:text-black transform bg-gray-800 text-white text-xl font-bold py-2 pb-1 transition-all ease-in-out delay-0 duration-1000"
//                   >
//                     Start Subscription
//                   </button>
//                 </div>

//                 <div className="content mt-6 pb-14">
//                   <div className="first flex mt-2">
//                     <div className="icont mt-1 text-[#32CD32]">
//                       <FaCheckCircle />
//                     </div>
//                     <div className="text hidden sm:block">
//                       Get more Information about  consectetur.{" "}
//                     </div>
//                     <div className="text block sm:hidden">
//                       Get more Information about .{" "}
//                     </div>
//                   </div>
//                   <div className="first flex mt-2">
//                     <div className="icont mt-1 text-[#32CD32]">
//                       <FaCheckCircle />
//                     </div>
//                     <div className="text hidden sm:block">
//                       Get more Information about  consectetur.{" "}
//                     </div>
//                     <div className="text block sm:hidden">
//                       Get more Information about .{" "}
//                     </div>
//                   </div>
//                   <div className="first flex mt-2">
//                     <div className="icont mt-1 text-[#32CD32]">
//                       <FaCheckCircle />
//                     </div>
//                     <div className="text hidden sm:block">
//                       Get more Information about  consectetur.{" "}
//                     </div>
//                     <div className="text block sm:hidden">
//                       Get more Information about .{" "}
//                     </div>
//                   </div>
//                   <div className="first flex mt-2">
//                     <div className="icont mt-1 text-[#32CD32]">
//                       <FaCheckCircle />
//                     </div>
//                     <div className="text hidden sm:block">
//                       Get more Information about  consectetur.{" "}
//                     </div>
//                     <div className="text block sm:hidden">
//                       Get more Information about .{" "}
//                     </div>
//                   </div>
//                   <div className="first flex mt-2">
//                     <div className="icont mt-1 text-[#32CD32]">
//                       <FaCheckCircle />
//                     </div>
//                     <div className="text hidden sm:block">
//                       Get more Information about  consectetur.{" "}
//                     </div>
//                     <div className="text block sm:hidden">
//                       Get more Information about .{" "}
//                     </div>
//                   </div>
//                   <div className="first flex mt-2">
//                     <div className="icont mt-1 text-[#32CD32]">
//                       <FaCheckCircle />
//                     </div>
//                     <div className="text hidden sm:block">
//                       Get more Information about  consectetur.{" "}
//                     </div>
//                     <div className="text block sm:hidden">
//                       Get more Information about .{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* fifth page */}
//       <div className="fifth mt-20 bg-red-950 h-auto w-full pb-10 px-16 text-center text-lg text-amber-500 flex  items-center flex-col">
//         <h1 className="text-white text-4xl mt-4 font-bold">Learnify Plus</h1>
//         <div className="text mt-9">
//           <p className="hidden lg:block">
//             Get more Information about  consectetur adipisicing elit. Sit aliquid
//             saepe asperiores dignissimos itaque consequatur beatae! Incidunt
//             distentiu!
//           </p>
//           <p className="block lg:hidden">
//             Get more Information about  consectetur adipisicing elit. Sit aliq
//           </p>
//           <p className="mt-2 hidden lg:block">
//             Get more Information about  consectetur adipisicing elit.
//           </p>
//           <p className="mt-2 block lg:hidden">Get more Information about .</p>
//         </div>

//         <div className="btn mt-8">
//           <button
//             onClick={subscribe}
//             className="flex justify-center items-center bg-amber-600 h-16 w-60 sm:w-80 text-red-950 font-bold text-lg
//                relative overflow-hidden group"
//           >
//             <span className="absolute inset-0 bg-red-950 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></span>
//             <span className="absolute inset-0 bg-amber-600 translate-x-0 group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></span>
//             <span className="relative z-10 group-hover:text-white text-red-950">
//               Start 7-day Free Trial
//             </span>
//           </button>
//         </div>

//         <div className="text mt-4">
//           <p>
//             <span className="text-amber-600">or</span>{" "}
//             <span className="font-bolder">
//               $33,528/year with 14-day money-back guarantee
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;
