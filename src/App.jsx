import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Courses from './components/Course'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './components/Contact'
import Password from './components/Password'
import ShowCourses from './components/ShowCourses'
import Update from './components/update'


function App() {
  const [username, setUsername] = useState(null);

  return (
    <>
    <Router>
    <Navbar username={username}/>
    <Routes>
      <Route path="/" element={<h1 className='text-4xl text-center font-bold'>Welcome to the app</h1>}></Route>
      <Route path="/Main" element={<Main/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile setUsername={setUsername} />}></Route>
      <Route path="//courses" element={<Courses/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Password" element={<Password/>}></Route>
      <Route path="/ShowCourses" element={<ShowCourses/>}></Route>
      <Route path="/Update" element={<Update/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
