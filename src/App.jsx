import { useState } from "react";
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
import ShowCourses from "./components/showCourses";
import Update from "./components/update";
import Assistant from "./components/Assistant";
// import { EnrolledCoursesProvider } from "./EnrolledCoursesContext.jsx";
import { ShowCardProvider } from "./CreateContext";
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  const [username, setUsername] = useState(null);
  

  return (
    <>
{/* 
   <ShowCardProvider>
      <ShowCourses />
      <Profile />
    </ShowCardProvider>
   
      <Router>
        <Navbar username={username} />
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-4xl text-center font-bold">
                Welcome to the app
              </h1>
            }
          ></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/profile"
            element={<Profile setUsername={setUsername} />}
          ></Route>
          <Route path="//courses" element={<Courses />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Password" element={<Password />}></Route>
          <Route path="/ShowCourses" element={<ShowCourses />}></Route>
          <Route path="/Update" element={<Update />}></Route>
          <Route path="/Assistant" element={<Assistant />}></Route>
        </Routes>
      </Router> */}
      <Auth0Provider>
      <ShowCardProvider>
  <Router>
    <Navbar username={username} />
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-4xl text-center font-bold">
            Welcome to the app
          </h1>
        }
      />
      <Route path="/Main" element={<Main />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/profile"
        element={<Profile setUsername={setUsername} />}
      />
      <Route path="/courses" element={<Courses />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/ShowCourses" element={<ShowCourses />} />
      <Route path="/Update" element={<Update />} />
      <Route path="/Assistant" element={<Assistant />} />
    </Routes>
  </Router>
</ShowCardProvider>
</Auth0Provider>

    </>
  );
}

export default App;
