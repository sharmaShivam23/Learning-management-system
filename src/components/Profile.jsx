

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import card1 from '../Images/card1.png'
import { GrNext } from "react-icons/gr";
import { MdAccessTimeFilled } from "react-icons/md";
import News from '../Images/News.jpeg';
import { IoStar } from "react-icons/io5";
import Footer from './Footer';
import { RiLockPasswordFill } from "react-icons/ri";


export default function Profile() {
  const [profile, setProfile] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // navigate('/login');
        return;
      }

      try {
        const response = await axios.get('https://e-learning-slfj.onrender.com/user/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } 
      catch (error) {
        setError('Failed to load profile. Please log in again.');
        localStorage.removeItem('token');
        // navigate('/login');
      } 
      finally {
        // setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);


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
  ]

  // if (loading) return <p><Loading/></p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className='main flex justify-center items-center'>
    <div className="mx-auto text-center font-bold mt-8 flex justify-center items-center flex-col">
      <h1 className="text-3xl text-red-950 mb-4">A lifelong learner on a journey to create and inspire</h1>
     
     
     <div className="pht bg-blue-700 h-80 w-80 rounded-full mt-5 object-cover overflow-hidden flex justify-center items-center">
       <img src={card1} className='object-cover h-80' alt="" />
     </div>

    <div className="name flex justify-evenly items-center flex-col">
      <div className="user flex justify-between gap-20 items-center mt-5">
        <div className='text-2xl font-bold tracking-wider'>User_Name</div>
        <div className='h-10 border-2 border-black w-96 px-3  flex justify-center items-center rounded-xl bg-orange-500 text-2xl'>Shivam</div>
      </div>
      <div className="user flex justify-between gap-20 items-center mt-5">
        <div className='text-2xl font-bold tracking-wider'>E-mail</div>
        <div className='h-10 border-2 border-black w-96 px-3  flex justify-center items-center rounded-xl bg-orange-500 text-2xl'>shivam</div>
      </div>
      <div className="user flex justify-between gap-20 items-center mt-5">
        <div className='text-2xl font-bold tracking-wider'>Full Name</div>
        <div className='h-10 border-2 border-black w-96 px-3  flex justify-center items-center rounded-xl bg-orange-500 text-2xl'>shivam</div>
      </div>
      <div className="user flex justify-between gap-20 items-center mt-5">
        <div className='text-2xl font-bold tracking-wider'>Full Name</div>
        <div className='h-10 border-2 border-black w-96 px-3  flex justify-center items-center rounded-xl bg-orange-500 text-2xl'>shivam</div>
      </div>
    </div>



        
    <div className="div flex justify-center my-16">
  <button className="border-2 border-red-700 p-4 px-10 rounded-xl font-bold text-black text-xl bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-br from-violet-500 to-pink-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
    Show All Courses
  </button>
</div>

<div className="right flex gap-32">
        {obj.map((item, index) => (
          <div key={index} className="card w-full sm:w-72  flex-grow   rounded-lg  overflow-hidden hover:scale-105 transform transition">
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
            <div className='w-full h-6 mt-4 rounded-2xl'>
              <input type="range" className='text-[#32CD32]'/>
            </div>
          </div>
        ))}
      </div>



     <Footer/>


      {/* <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Full Name:</strong> {profile.fullname}</p>
      {profile.profile_picture && (
        <div className="mt-4">
          <img
            src={`https://e-learning-slfj.onrender.com/${profile.profile_picture}`}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
        </div>
      )} */}
    </div>
    </div>
  );
}
