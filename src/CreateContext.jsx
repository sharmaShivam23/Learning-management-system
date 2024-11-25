// import { createContext } from "react";

// export const showCard = createContext() 


import React, { createContext, useState } from "react";


export const ShowCardContext = createContext();

export const ShowCardProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <ShowCardContext.Provider value={{ enrolledCourses, setEnrolledCourses }}>
      {children}
    </ShowCardContext.Provider>
  );
};
