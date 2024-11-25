import React, { createContext, useState, useContext } from 'react';

const EnrolledCoursesContext = createContext();

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enrollCourse }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};

export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);
