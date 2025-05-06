// import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Courses from "./components/Course";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contact from "./components/Contact";
// import Password from "./components/Password";
// import ShowCourses from "./components/ShowCourses";
// import Update from "./components/Update";
// import Assistant from "./components/Assistant";
// // import { EnrolledCoursesProvider } from "./EnrolledCoursesContext.jsx";
// import { ShowCardProvider } from "./CreateContext";
// import { useAuth0 } from "@auth0/auth0-react";

// function App() {
//   const { user , loginWithRedirect} = useAuth0()
//   const [username, setUsername] = useState(null);
  

//   return (
//     <>
//       <ShowCardProvider>
     
//   <Router>
//     <Navbar username={username} />
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <h1 className="text-4xl text-center font-bold">
//             Welcome to the app
//           </h1>
//         }
//       />
//       <Route path="/Main" element={<Main />} />
//       <Route path="/Signup" element={<Signup />} />
//       <Route path="/Login" element={<Login />} />
//       <Route
//         path="/profile"
//         element={<Profile setUsername={setUsername} />}
//       />
//       <Route path="/courses" element={<Courses />} />
//       <Route path="/Contact" element={<Contact />} />
//       <Route path="/Password" element={<Password />} />
//       <Route path="/ShowCourses" element={<ShowCourses />} />
//       <Route path="/Update" element={<Update />} />
//       <Route path="/Assistant" element={<Assistant />} />
//     </Routes>
//   </Router>
// </ShowCardProvider>

//     </>
//   );
// }

// export default App;





import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Courses from "./components/Course";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Password from "./components/Password";
import ShowCourses from "./components/ShowCourses";
import Update from "./components/Update";
import Assistant from "./components/Assistant";
import { ShowCardProvider } from "./CreateContext";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setInterval(() => {
      setLoading(false);
    }, 4000);

    return () => clearInterval(time);
  }, []);

  return (
    <>
      <ShowCardProvider>
        {loading ? (
          <Start />
        ) : (
          <Router>
            <Navbar username={username} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/profile" element={<Profile setUsername={setUsername} />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Password" element={<Password />} />
              <Route path="/ShowCourses" element={<ShowCourses />} />
              <Route path="/Update" element={<Update />} />
              <Route path="/Assistant" element={<Assistant />} />
            </Routes>
          </Router>
        )}
      </ShowCardProvider>
    </>
  );
}

export default App;
