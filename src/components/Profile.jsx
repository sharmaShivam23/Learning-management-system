
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GrNext } from "react-icons/gr";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import Footer from './Footer';
import newsimage from '../Images/newsimage.jpeg';
import profile1 from '../Images/profile.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShowCardContext } from "../CreateContext";
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Profile({ setUsername }) {
  const { user, isLoading } = useAuth0();
  const { enrolledCourses } = useContext(ShowCardContext);
  const [profile, setProfile] = useState('');
  const [ratings, setRatings] = useState([0]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [card, setCard] = useState([]);

  useEffect(() => {
    const handleClick = () => {
      const token = localStorage.getItem('token');
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      if (!token) {
        alert("Signup first then your profile will show");
        // toast.error("Signup first");
        navigate("/signup");
      }

    const res =   axios
        .get('https://lms-j25h.onrender.com/api/auth/profile', header)
        .then((res) => {
          console.log(res);
          
          setUsername(res.data.username);
          setProfile(res.data);
        })
        .catch((err) => {
          console.log("error", err);
          setError(err.message);
        });
    };

    const sendAuthDetailsToAPI = async () => {
      if (user) {
        try {
          const token = localStorage.getItem('token');
          const header = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const authDetails = {
            email: user.email,
            fullName: user.name,
            username: user.nickname,
            dateOfBirth: user.updated_at,
          };
          await axios.post(
            'https://lms-j25h.onrender.com/api/auth/profile',
            authDetails,
            header
          );
          console.log('User details sent to profile API successfully.');
        } 
        catch (error) {
          console.error('Error sending user details to profile API:', error);
        }
      }
    };

    handleClick();
    sendAuthDetailsToAPI();
  }, []); 


//   useMemo(() => {
//   useEffect(() => {
//     toast.success("Login Successful");
//   // },[])
// },[])

  const handleRangeChange = (e, index) => {
    const newRatings = [...ratings];
    newRatings[index] = e.target.value;
    setRatings(newRatings);
  };

  const obj = [
    {
      img: newsimage,
      name: "Chat gpt for beginner",
      star: "4.45",
      rate: "1.5 Learners",
      rate2: "Beginner",
      text: "7.5 hour",
      btn: "Enroll now",
    },
    {
      img: newsimage,
      name: "Chat gpt for beginner",
      star: "4.45",
      rate: "1.5 Learners",
      rate2: "Beginner",
      text: "7.5 hour",
      btn: "Enroll now",
    },
    {
      img: newsimage,
      name: "Chat gpt for beginner",
      star: "4.45",
      rate: "1.5 Learners",
      rate2: "Beginner",
      text: "7.5 hour",
      btn: "Enroll now",
    },
  ];

  if (error) return <p className="text-red-500 text-2xl text-center">{` failed to fetch data of your profile : ${error}`}</p>;
  return (
  <>
   {/* <ToastContainer/>
    <div className="main flex justify-center items-center">
      <div className="mx-auto text-center font-bold mt-8 flex justify-center items-center flex-col">
        <h1 className="text-3xl text-red-950 mb-4">A lifelong learner on a journey to create and inspire</h1>
        <div className="pht bg-orange-500 h-80 w-80 rounded-full mt-5 object-cover overflow-hidden flex justify-center items-center">
          <img src={profile} className="object-cover h-80" alt="" />
        </div>
        <div className="name flex justify-evenly items-center flex-col">
          <div className="user flex justify-between gap-20 items-center mt-5">
            <div className="text-2xl font-bold tracking-wider">User_Name</div>
            <div className="h-10 border-2 border-black w-96 px-3 flex justify-center items-center rounded-xl bg-orange-500 text-2xl">
              {profile?.username}
            </div>
          </div>
          <div className="user flex justify-between gap-20 items-center mt-5">
            <div className="text-2xl font-bold tracking-wider">E-mail</div>
            <div className="h-10 border-2 border-black w-96 px-3 flex justify-center items-center rounded-xl bg-orange-500 text-2xl">
              {profile?.email}
            </div>
          </div>
          <div className="user flex justify-between gap-20 items-center mt-5">
            <div className="text-2xl font-bold tracking-wider">Full Name</div>
            <div className="h-10 border-2 border-black w-96 px-3 flex justify-center items-center rounded-xl bg-orange-500 text-2xl">
              {profile?.fullName}
            </div>
          </div>
          <div className="user flex justify-between gap-20 items-center mt-5">
            <div className="text-2xl font-bold tracking-wider">Date of Birth</div>
            <div className="h-10 border-2 border-black w-96 px-3 flex justify-center items-center rounded-xl bg-orange-500 text-2xl">
              {profile?.dateOfBirth
                ? new Date(profile.dateOfBirth).toLocaleDateString('en-US')
                : null}
            </div>
          </div>
        </div>

        <div className="div flex justify-center my-16">
          <Link
            to="/Update"
            className="border-2 border-red-700 p-4 px-10 rounded-xl font-bold text-black text-xl bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-br from-yellow-500 to-orange-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Update
          </Link>
        </div>

         <div className="right flex gap-32 flex-wrap justify-center items-center">
          {enrolledCourses ? (
            enrolledCourses.map((course, index) => (
              <div key={index} className="course-card text-white ">
                 <img
                  src={course.course_image || newsimage}
                  alt={course.title}
                  className="h-48 w-full mb-1 object-cover"
                />
                <div className='bg-[#FF8800] h-auto p-4'>
                <h3 className="text-xl font-bold">{course.course_title || course.title}</h3>
                <p className="text-sm">{course.course_content}</p>
                <div className='flex justify-evenly'>
                <p>{`${course.rating} rating`}</p>
                <p>{`${course.duration} duration`}</p>
                </div>
                <p className='mt-3'>{course.description}</p>
                <div className='text-2xl text-black  mt-2 hover:text-blue'>Enroll now</div>
               </div>

               <div>

               </div>
    
               </div>
            ))
          ) : (
          <div><p className='text-2xl text-black'>No Enroll COurses</p></div>
          )}
            {obj.map((item, index) => (
              <div
                key={index}
                className="card w-full sm:w-72 rounded-lg overflow-hidden hover:scale-105 transform transition"
              >
                <img
                  src={item.img}
                  className="h-48 w-full mb-1 object-cover"
                  alt={item.name}
                />
                <div className="content bg-[#FF8800] p-4 text-white">
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
                <div className="w-full h-6 mt-5 mb-20 rounded-2xl">
                  <input
                    type="range"
                    min={0}
                    max={5}
                    value={ratings[index]}
                    onChange={(e) => handleRangeChange(e, index)}
                    className="text-[#32CD32] cursor-pointer"
                  />
                  <div className="text-black text-xl">Rating: {ratings[index]} stars</div>
                  <div className="flex justify-center items-center gap-4">
                    {Array.from({ length: ratings[index] }, (_, i) => (
                      <IoStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div> 
      
      </div>
    </div>
    
    <Footer/> */}


<>
  <ToastContainer />
  <div className="main flex flex-col justify-center items-center p-4 sm:p-8">
    <div className="mx-auto text-center font-bold mt-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl text-red-950 mb-4">
        A lifelong learner on a journey to create and inspire
      </h1>
      <div className="pht border-2 border-black h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full mt-5 overflow-hidden flex justify-center items-center">
        <img src={profile1} className="object-cover h-full w-full" alt="" />
      </div>
      <div className="name flex font-serif tracking-normal flex-col gap-5 items-center mt-5 w-full   lg:w-[43vw]">
        {[
          { label: "UserName", value: profile?.username },
          { label: "E-mail", value: profile?.email },
          { label: "Full Name", value: profile?.fullName },
          {
            label: "Date of Birth",
            value: profile?.dateOfBirth
              ? new Date(profile.dateOfBirth).toLocaleDateString("en-US")
              : null,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="user flex justify-between w-full gap-4 items-center"
          >
            <div className="text-lg sm:text-2xl font-bold tracking-wider">
              {item.label}
            </div>
            <div className="h-10 border-2 border-black w-full sm:w-2/4 px-3 flex justify-center items-center rounded-xl bg-orange-500 text-lg sm:text-xl">
              {item.value}
            </div>
          </div>
        ))}
      </div>
      <div className="div flex justify-center my-8 sm:my-16">
        <Link
          to="/Update"
          className="border-2 border-red-700 p-3 sm:p-4 px-6 sm:px-10 rounded-xl font-bold text-black text-lg sm:text-xl bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-br from-yellow-500 to-orange-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          Update
        </Link>
      </div>
      <div className="right flex flex-wrap gap-8 justify-center items-center w-full">
        {enrolledCourses?.length ? (
          enrolledCourses.map((course, index) => (
            <div
              key={index}
              className="course-card text-white w-full sm:w-72 rounded-lg overflow-hidden hover:scale-105 transform transition"
            >
              <img
                src={course.course_image || newsimage}
                alt={course.title}
                className="h-32 sm:h-48 w-full mb-1 object-cover"
              />
              <div className="bg-[#FF8800] h-auto p-4">
                <h3 className="text-lg sm:text-xl font-bold">
                  {course.course_title || course.title}
                </h3>
                <p className="text-sm">{course.course_content}</p>
                <div className="flex justify-between mt-2">
                  <p>{`${course.rating} rating`}</p>
                  <p>{`${course.duration} duration`}</p>
                </div>
                <p className="mt-3 text-sm">{course.description}</p>
                <div className="text-lg sm:text-2xl text-black mt-2 hover:text-blue">
                  Enroll now
                </div>
              </div>
            </div>
          ))
        ) : (
          // <p className="text-2xl text-black">No Enrolled Courses</p>
          <p></p>
        )}
        {obj.map((item, index) => (
          <div
            key={index}
            className="card w-full sm:w-72 rounded-lg overflow-hidden hover:scale-105 flex justify-center items-center flex-col transform transition"
          >
            <img
              src={item.img}
              className="h-32 sm:h-48 w-full mb-1 object-cover"
              alt={item.name}
            />
            <div className="content bg-[#FF8800] p-4 text-white">
              <h3 className="name text-lg sm:text-2xl font-bold text-center">
                {item.name}
              </h3>
              <div className="stats flex justify-between mt-3 text-sm sm:text-lg">
                <div className="flex items-center gap-2">
                  <IoStar className="text-yellow-400 text-lg" />
                  <span>{item.star}</span>
                </div>
                <div>{item.rate}</div>
                <div>{item.rate2}</div>
              </div>
              <div className="info flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <MdAccessTimeFilled className="text-lg sm:text-xl" />
                  <span>{item.text}</span>
                </div>
                <button className="flex items-center gap-2 text-black font-bold text-lg sm:text-xl hover:text-blue-800">
                  {item.btn} <GrNext />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <Footer />
</>

    </>

  );


}

//       </div>
//     </div>
//   );
// }
