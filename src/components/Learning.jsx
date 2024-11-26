import React from "react";
import notes2 from "../Images/notes2.png";
import graph from "../Images/graph.png";
import user from "../Images/user.png";
import certi from "../Images/certi.png";
import clockImg from "../Images/clockImg.png";
import callImg from "../Images/callImg.png";
import {  useNavigate } from "react-router-dom";

const Learning = () => {

  let navigate = useNavigate()

  function handleContact(){
    navigate("/Contact")
  }

  let img = [
    {
      img: notes2,
      about: "Flexible",
      about2: "Learning",
    },
    {
      img: graph,
      about: "Analytics",
    },
    {
      img: user,
      about: "Learn from",
      about2: "industry",
      about3: "experts",
    },
    {
      img: certi,
      about: "Certification",
      about2: "Preparation",
    },
    {
      img: clockImg,
      about: "Free Lifetime",
      about2: "Access",
    },
  ];

  return (
    <div>
      <div className="fifth mt-20 -z-10 bg-red-950 h-auto w-full pb-16 px-16 text-center text-lg text-amber-500 flex items-center flex-col">
        <h1 className="text-white text-4xl mt-7 hidden sm:block font-bold bg-gradient-to-r from-amber-400 to-amber-700 text-transparent bg-clip-text animate-pulse">
          Learning Aligned with Your Ambitions
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl mt-7 sm:hidden font-bold bg-gradient-to-r from-amber-400 to-amber-700 text-transparent bg-clip-text">
          Learning Aligned
        </h1>

        <div className="text mt-9">
          <p className="hidden lg:block hover:scale-105 transition-transform duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid
            saepe asperiores dignissimos itaque consequatur beatae! Incidunt
            distentiu!
          </p>
          <p className="block sm:hidden hover:scale-105 transition-transform duration-300">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="mt-2 hidden lg:block hover:scale-105 transition-transform duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-2 block lg:hidden hover:scale-105 transition-transform duration-300">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex justify-evenly gap-10 flex-wrap">
          {img.map((image, index) => (
            <div
              key={index}
              className="photos mt-8 flex flex-col text-lg sm:text-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.img}
                className="sm:h-56 h-32 max-[700px]:h-20 max-[400px]:h-16 hover:scale-110 transition-transform duration-500"
                alt=""
              />
              <p>{image.about}</p>
              <p>{image.about2}</p>
              <p>{image.about3}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="btn mt-20 flex justify-evenly w-full items-center text-center h-56 rounded-2xl bg-amber-600 m-auto max-[800px]:flex-wrap">
        <div className="text text-lg text-red-950">
          <p
            className="text-4xl text-red-950 font-bold tracking-wider bg-gradient-to-r from-red-600 to-violet-600
           text-transparent bg-clip-text"
          >
            Got some Questions?
          </p>
          <p>Talk to our team, they will reach out soon...</p>
        </div>

        <div className="flex justify-center items-center gap-6 py-14 max-[650px]:py-4 bg-red-950 text-amber-600 h-16 w-60 sm:w-80 font-bold text-2xl rounded-2xl hover:bg-amber-700 hover:text-black border-2 border-black transition-all duration-300 ease-in-out">
          <img
            src={callImg}
            className="h-20 max-[650px]:h-8 transform hover:scale-110 hover:rotate-45 transition-transform duration-500"
            alt="Call Icon"
          />
          <button onClick={handleContact} className="flex justify-center items-center max-[650px]:text-lg text-3xl hover:underline hover:scale-105 transition-transform duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
