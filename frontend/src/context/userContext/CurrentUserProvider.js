import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const currentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState();
  let isVerified = currUser?.isVerified;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/v1/users/currentuser");
        const userData = response.data;
        console.log(userData);
        setCurrUser(userData);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchData();
  }, [isVerified]); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <currentUserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </currentUserContext.Provider>
  );
};

