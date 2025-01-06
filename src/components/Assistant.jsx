
import React, { useState } from 'react';
import axios from 'axios';
import botimg from '../Images/botimg.png'


const Assistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [relevantCourses, setRelevantCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [goal , setGoal] = useState('')
  const [completed_courses , setCourses] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');
    setRelevantCourses([]);

    
    const userProfile = {
      goal,
      completed_courses
    };
  

    try {
      const res = await axios.post('https://lms-hk98.onrender.com/chat', {
        user_profile: userProfile,
        query
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
       console.log(res);
      setResponse(res.data.response);
      setRelevantCourses(res.data.relevant_courses);
    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <>
    <h1 className="text-2xl font-bold mb-4 w-full text-white text-center py-4 bg-red-950">Course Assistant</h1>
    <div className=" mx-auto p-4 bg-transparent text-black rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='sm:flex block justify-evenly'>
          <div className='flex flex-col sm:w-6/12 w-full justify-center items-center' >
          <h1 className='text-center font-bold text-2xl'>Enter your Details Here?</h1>
        <div className="space-y-2 mt-5 w-full">
          <label className="block font-bold">Enter your query</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-white text-xl p-2 border borde bg-gradient-to-br rounded-xl shadow-lg shadow-orange-500 from-yellow-500 to-orange-600 "
            placeholder="Enter query."
          />
        </div>

        <div className="space-y-2 mt-5 w-full">
          <label className="block font-bold">Enter your goal</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-2 border text-white text-xl border-gray-300  bg-gradient-to-br rounded-xl shadow-lg shadow-orange-500 from-yellow-500 to-orange-600"
            placeholder="Enter your Goal"
          />
        </div>

        <div className="space-y-2 mt-5 w-full">
          <label className="block font-bold">What you want to learn</label>
          <input
            type="text"
            value={completed_courses}
            onChange={(e) => setCourses(e.target.value)}
            className="w-full p-2 border text-white text-xl border-gray-300  bg-gradient-to-br rounded-xl shadow-lg shadow-orange-500 from-yellow-500 to-orange-600"
            placeholder="what do you want to learn."
          />
          <div>
            <img src="" alt=""  className='h-10'/>
          </div>
           <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-800"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
        </div>
        </div>


        <div className='sm:w-4/12 w-full text-cente flex justify-center items-center flex-col'>
          <img src={botimg} alt="" className='h-80 text-cent'/>
          <p className='text-black shadow-black shadow-xl text-center font-bold text-2xl p-2 px-20'>Feel Free To ask</p>
          <p className='text-black shadow-black shadow-xl text-center font-bold text-2xl p-2 px-20'>I will assist you</p>
          <p className='text-black shadow-black shadow-xl text-center font-bold text-2xl p-2 px-20'>Helper!</p>
        </div>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      
      <div className='w-full'>
      {response && (
        <div className="mt-6 shadow-xl">
          <p className="font-bold text-lg">Assistant's Response:</p>
          <p>{response}</p>
        </div>
      )}

      {relevantCourses.length > 0 && (
        <div className="mt-6">
          <p className="font-bold text-lg ">Recommended Courses:</p>
          <ul className="space-y-4 mt-10 text-black">
            {relevantCourses.map((course, index) => (
              <li key={index} className="p-4 border border-gray-200 rounded-md">
                <h3 className="font-bold text-lg shadow-xl">{course.course_title}</h3>
                <p className="text-sm text-black shadow-red-100 shadow-xl">{course.description}</p>
                <p className="text-sm text-black shadow-red-100 shadow-xl">Category: {course.category}</p>
                <p className="text-sm text-black shadow-red-100 shadow-xl">Rating: {course.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
    </>
  );
};

export default Assistant;













// import React, { useState } from 'react';
// import axios from 'axios';

// const Assistant = () => {
//   const [query, setQuery] = useState('');
//   const [response, setResponse] = useState('');
//   const [relevantCourses, setRelevantCourses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setResponse('');
//     setRelevantCourses([]);

    
//     const userProfile = {
//       goal: "Data Science",  // Default goal
//       completed_courses: ["Python for Beginners", "Intro to SQL"],
//     };
  

//     try {
//       const res = await axios.post('https://lms-hk98.onrender.com/chat', {
//         user_profile: userProfile,
//         query
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//         }
//       })
//        console.log(res);
//       setResponse(res.data.response);
//       setRelevantCourses(res.data.relevant_courses);
//     } 
//     catch (err) {
//       setError(err.message);
//     } 
//     finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <h1 className="text-2xl font-bold mb-4 w-full text-white text-center py-4 bg-red-950">Course Assistant</h1>
//     <div className="max-w-md mx-auto p-4 bg-transparent text-black rounded-lg shadow-lg">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="space-y-2 mt-5">
//           <label className="block font-bold">Enter your query</label>
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="what do you want to learn."
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-800"
//           disabled={loading}
//         >
//           {loading ? 'Loading...' : 'Get Recommendations'}
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {response && (
//         <div className="mt-6">
//           <p className="font-bold text-lg">Assistant's Response:</p>
//           <p>{response}</p>
//         </div>
//       )}

//       {relevantCourses.length > 0 && (
//         <div className="mt-6">
//           <p className="font-bold text-lg ">Recommended Courses:</p>
//           <ul className="space-y-4 mt-10 text-black">
//             {relevantCourses.map((course, index) => (
//               <li key={index} className="p-4 border border-gray-200 rounded-md">
//                 <h3 className="font-bold text-lg">{course.course_title}</h3>
//                 <p className="text-sm text-black">{course.description}</p>
//                 <p className="text-sm text-black">Category: {course.category}</p>
//                 <p className="text-sm text-black">Rating: {course.rating}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default Assistant;








