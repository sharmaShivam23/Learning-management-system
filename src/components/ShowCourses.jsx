// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { IoStar } from "react-icons/io5";
// import { MdAccessTimeFilled } from "react-icons/md";
// import { GrNext } from "react-icons/gr";
// import Loading from "./Loading";
// import ed from "../Images/ed.webp";
// import { ShowCardContext } from "../CreateContext";
// import { useContext } from "react";
// import { ToastContainer } from "react-toastify";

// const News = () => {
//   const { enrolledCourses, setEnrolledCourses } = useContext(ShowCardContext);
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [interest, setInterest] = useState("");
//   const [courseTitle, setCoursetitle] = useState("");

//   const fetchArticles = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(
//         "https://lms-recommend.onrender.com/recommend/",
//         {
//           profile_details: {
//             interest,
//             goal: "become a data scientist, full stack , backend developer , machine learning , ",
//             experience: "beginner",
//             skills: "python, machine learning , java , javascript , c , c++ , nodejs , react js",
//           },
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response);
//       console.log(response.data.recommendations[0]);
//       console.log(response.data.recommendations[0].course_title);
//       setArticles(response.data.recommendations);
//     } catch (err) {
//       console.error("Error:", err);
//       setError(err.message || "An error occurred while fetching articles.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchArticles2 = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`https://lms-j25h.onrender.com/api/courses`);
//       const result = await response.json();
//       setArticles(result.slice(0, 100));
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEnroll = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.post(
//         "https://lms-j25h.onrender.com/api/courses/enroll",
//         { title: courseTitle },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     handleEnroll();
//   });

//   useEffect(() => {
//     fetchArticles2();
//   },[])

//   useEffect(() => {
//     fetchArticles();
//   }, [interest]);

//   const handleCourse = (course) => {
//     if (course.course_title) {
//       setCoursetitle(course.course_title);
//     } else {
//       setCoursetitle(course.course_title);
//     }
//     if (!enrolledCourses.some((enrolled) => enrolled.title === course.title)) {
//       setEnrolledCourses([...enrolledCourses, course]);
//       toast.success(`${course.course_title} added to your profile!`);
//     } else {
//       toast.success(`${course.course_title} is already in your profile.`);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />

//       {error && (
//         <p className="error text-red-600 text-center mt-4">Error: {error}</p>
//       )}

//       <div className="flex justify-center items-center my-4 text-black">
//         <input
//           type="text"
//           placeholder="Enter your interest"
//           className="h-10 w-full max-w-md px-4 text-black text-xl border rounded-lg"
//           value={interest}
//           onChange={(e) => setInterest(e.target.value)}
//         />
//       </div>

//       <div className="m-16">
//         {interest ? (
//           <p className="text-3xl text-center font-bold underline ">{`Course Recommended for your Domain : ${interest}`}</p>
//         ) : (
//           <p className="text-3xl text-center font-bold underline">
//             All Courses
//           </p>
//         )}
//       </div>

//       <div className="article-container flex justify-center items-center flex-wrap gap-20 mt-6 h-auto w-auto px-4">
//         {isLoading ? (
//           <div className="text-center">
//             <Loading />
//           </div>
//         ) : articles.length > 0 ? (
//           articles.map((item, index) => (
//             <div
//               key={index}
//               className={`card w-full sm:w-96  flex-grow bg-white hover:${(
//                 <span className="m-2 text-black">{item.course_content}</span>
//               )} rounded-lg shadow-lg  overflow-hidden hover:scale-105 transform transition`}
//             >
//               <>
//                 {item.course_image ? (
//                   <img
//                     src={item.course_image}
//                     className="h-48 w-full mb-1 object-cover"
//                     alt={item.title}
//                   />
//                 ) : (
//                   <img
//                     src={ed}
//                     className="h-48 w-full mb-1 object-cover"
//                     alt={item.title}
//                   />
//                 )}
//                 <div className="content bg-[#FF8800] p-4 text-white">
//                   {item.title ? (
//                     <h3 className="name text-2xl font-bold text-center">
//                       {item.title}
//                     </h3>
//                   ) : (
//                     <h3 className="name text-2xl font-bold text-center">
//                       {item.course_title}
//                     </h3>
//                   )}
//                   <div className="stats flex justify-between mt-3 text-lg">
//                     <div className="flex items-center gap-2">
//                       <IoStar className="text-yellow-400 text-lg" />
//                       <span>{item.rating}</span>
//                     </div>
//                     {item.price ? (
//                       <div>{`${item.price}$ price`}</div>
//                     ) : (
//                       <div>50.2$</div>
//                     )}
//                     {item.level ? <div>{item.level}</div> : <p>Hard</p>}
//                   </div>
//                   <div className="info flex justify-between items-center mt-4">
//                     <div className="flex items-center gap-2">
//                       <MdAccessTimeFilled className="text-xl" />
//                       {item.content_duration ? (
//                         <span>{`${item.content_duration} minutes`}</span>
//                       ) : (
//                         <span>20 minutes</span>
//                       )}
//                       <span className="ml-4 text-center">
//                         {item.learners || 20}
//                       </span>
//                     </div>

//                     <button
//                       className="flex items-center gap-2 text-black font-bold text-lg hover:text-blue-800"
//                       onClick={() => handleCourse(item)}
//                     >
//                       <a href={item.url}>Enroll now</a> <GrNext />
//                     </button>
//                   </div>
//                 </div>
//               </>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-xl mt-4">No courses available for.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default News;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IoStar } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { ShowCardContext } from "../CreateContext";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";
import ed from "../Images/ed.webp";

const News = () => {
  const { enrolledCourses, setEnrolledCourses } = useContext(ShowCardContext);
  const [articles, setArticles] = useState([]);
  const [recommend, setrecommend] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [interest, setInterest] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

   useEffect(() => {
  const fetchArticles = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://lms-recommend.onrender.com/recommend/",
        {
          profile_details: {
            interest,
            goal: "become a data scientist, full stack  , machine learning , ",
            experience: "beginner",
            skills:
              "python, machine learning",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setrecommend(response.data.recommendations);
      // console.log(response);
      console.log(response.data.recommendations[0]);
      
    } catch (err) {
      setError("An error occurred while fetching articles.");
    } finally {
      setIsLoading(false);
    }
  };
  fetchArticles()
},[interest])
  

  useEffect(() => {
  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://lms-j25h.onrender.com/api/courses`);
      const result = await response.json();
      console.log(result);
      
      setArticles(result.slice(0, 400));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  fetchCourses()
},[])

  const handleEnroll = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://lms-j25h.onrender.com/api/courses/enroll",
        { title: courseTitle },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(`${courseTitle} enrolled successfully!`);
    } catch (error) {
      toast.error("Failed to enroll in the course.");
    }
  };


  // useEffect(() => {
  //   if (interest) {
  //     fetchArticles();
  //   } else {
  //     fetchCourses();
  //   }
  // }, [interest]);

  const handleCourse = (course) => {
    const { course_title, title, url } = course;
    const courseName = course_title || title;

    if (!enrolledCourses.some((enrolled) => enrolled.title === courseName)) {
      setEnrolledCourses((prev) => [...prev, course]);
      toast.success(`${courseName} added to your profile!`);
    } else {
      toast.info(`${courseName} is already in your profile.`);
    }

    setCourseTitle(courseName);
    handleEnroll();
  };

  return (
    <div>
      <ToastContainer />
      {error && (
        <p className="error text-red-600 text-center mt-4">Error: {error}</p>
      )}

      <div className="flex justify-center items-center my-4 text-black">
        <input
          type="text"
          placeholder="Enter your interest"
          className="h-10 w-full max-w-md px-4 text-black text-xl border rounded-lg"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div>

      <div className="m-16">
        <p className="text-3xl text-center font-bold underline">
          {interest
            ? `Courses Recommended for your Domain: ${interest}`
            : "All Courses"}
        </p>
      </div>


      <div className="article-container flex justify-center items-center flex-wrap gap-20 mt-6 h-auto w-auto px-4">
        {isLoading ? (
          <div className="text-center">
            <Loading />
          </div>
        ) : articles.length > 0 ? (
          !interest ? (
            articles.map((item, index) => (
              <div
                key={index}
                className="card w-full sm:w-96 flex-grow bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden hover:scale-105 transform transition"
              >
                <img
                  src={item.course_image || ed}
                  className="h-48 w-full mb-1 object-cover"
                  alt={item.title}
                />
                <div className="content bg-[#FF8800] p-4 text-white">
                  <h3 className="name text-2xl font-bold text-center">
                    {item.course_title || item.title}
                  </h3>
                  <div className="stats flex justify-between mt-3 text-lg">
                    <div className="flex items-center gap-2">
                      <IoStar className="text-yellow-400 text-lg" />
                      <span>{item.rating}</span>
                    </div>
                    <div>{item.price ? `${item.price}$ price` : "50.2$"}</div>
                    <div>{item.level || "Hard"}</div>
                  </div>
                  <div className="info flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <MdAccessTimeFilled className="text-xl" />
                      <span>{item.content_duration || "20 minutes"}</span>
                      <span className="ml-4 text-center">
                        {item.learners || 20}
                      </span>
                    </div>
                    <button
                      className="flex items-center gap-2 text-black font-bold text-lg hover:text-blue-800"
                      onClick={() => handleCourse(item)}
                    >
                      <a href={item.url}>Enroll now</a> <GrNext />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
           
            recommend.map((item, index) => (
              <div
                key={index}
                className="card w-full sm:w-96 flex-grow bg-white rounded-lg cursor-pointer shadow-lg overflow-hidden hover:scale-105 transform transition"
              >
                <img
                  src={item.course_image || ed}
                  className="h-48 w-full mb-1 object-cover"
                  alt={item.title}
                />
                <div className="content bg-[#FF8800] p-4 text-white">
                  <h3 className="name text-2xl font-bold text-center">
                    {item.course_title || item.title}
                  </h3>
                  <div className="stats flex justify-between mt-3 text-lg">
                    <div className="flex items-center gap-2">
                      <IoStar className="text-yellow-400 text-lg" />
                      <span>{item.rating}</span>
                    </div>
                    <div>{item.price ? `${item.price}$ price` : "50.2$"}</div>
                    <div>{item.level || "Hard"}</div>
                  </div>
                  <div className="info flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <MdAccessTimeFilled className="text-xl" />
                      <span>{item.content_duration || "20 minutes"}</span>
                      <span className="ml-4 text-center">
                        {item.learners || 20}
                      </span>
                    </div>
                    <button
                      className="flex items-center gap-2 text-black font-bold text-lg hover:text-blue-800"
                      onClick={() => handleCourse(item)}
                    >
                      <a href={item.url}>Enroll now</a> <GrNext />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )
        ) : (
          <p className="text-center text-xl mt-4">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default News;
