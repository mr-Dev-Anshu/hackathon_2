import React, { useEffect } from "react";
import { currentUserContext } from "./CurrentUserContext";
import axios from "axios";

export const CurrentUserProvider = ({ children }) => {
  const [currUser, setCurrUser] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/v1/users/currentuser");
        const userData = response.data;
        setCurrUser(userData);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <currentUserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </currentUserContext.Provider>
  );
};

export default CurrentUserProvider;
