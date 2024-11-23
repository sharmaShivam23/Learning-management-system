

import React, { useState, useEffect } from 'react';
import { IoStar } from 'react-icons/io5';
import { MdAccessTimeFilled } from 'react-icons/md';
import { GrNext } from 'react-icons/gr';
import Loading from './Loading';
import ed from "../images/ed.webp";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  // const [course, setCourse] = useState("Introduction to Programming");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (!course) return;

    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://lms-j25h.onrender.com/api/courses`);
        const result = await response.json();
        // Assuming the API returns an array of courses
        // console.log(result.courses);
        
        setArticles(result || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [])//course);

  return (
    <div>
      {/* Error Handling */}
      {error && <p className="error text-red-600 text-center mt-4">Error: {error}</p>}

      {/* <div>
        <ul className="listNews hidden sm:flex justify-center items-center gap-4 text-2xl font-bold bg-white w-full cursor-pointer">
          <li onClick={() => setCourse("Introduction to Programming")}>Introduction to Programming</li>
          <li onClick={() => setCourse("America")}>America</li>
          <li onClick={() => setCourse("Australia")}>Australia</li>
          <li onClick={() => setCourse("Sports")}>Sports</li>
          <li onClick={() => setCourse("Election")}>Election</li>
          <li onClick={() => setCourse("War")}>War</li>
        </ul>
      </div>

      {/* Articles Display */}
      <div className="article-container flex justify-center items-center flex-wrap gap-10 mt-6 h-auto w-auto px-4">
        {isLoading ? (
          <div className="text-center">
            <Loading />
          </div>
        ) : articles.length > 0 ? (
          articles.map((item, index) => (
            <div
              key={index}
              className="card w-full sm:w-96  bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              
                <>
              {item.course_image ? 
              <img
                src={item.course_image}
                className="h-48 w-full mb-1 object-cover"
                alt={item.title}
              />
              :
              <img
              src={ed}
              className="h-48 w-full mb-1 object-cover"
              alt={item.title}
            /> 
              }
              <div className="content bg-[#FF8800] p-4 text-white">
                {item.title ? 
                <h3 className="name text-2xl font-bold text-center">{item.title}</h3>
                :  <h3 className="name text-2xl font-bold text-center">{item.course_title}</h3>}
                <div className="stats flex justify-between mt-3 text-lg">
                  <div className="flex items-center gap-2">
                    <IoStar className="text-yellow-400 text-lg" />
                    <span>{item.rating}</span>
                  </div>
                  <div>{`${item.price} price`}</div>
                  <div>{item.level}</div>
                </div>
                <div className="info flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <MdAccessTimeFilled className="text-xl" />
                    <span>{item.content_duration}</span>
                  </div>
                  <button className="flex items-center gap-2 text-black font-bold text-lg hover:text-blue-800">
                    <a href={item.url}>Enroll now</a> <GrNext />
                  </button>
                </div>
              </div>
              </>
            
            </div>
          
          ))
        ) : (
          // <p className="text-center text-xl mt-4">No courses available for "{course}".</p>
          <p className="text-center text-xl mt-4">No courses available for.</p>
        )}
      
      </div>
    </div>
  );
};

export default News;
