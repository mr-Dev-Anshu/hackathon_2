import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const currentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/v1/users/currentuser");
        const userData = response.data;
        console.log(userData);
        setCurrUser(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching current user:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <currentUserContext.Provider value={{ currUser, setCurrUser }}>
      {!loading ? (
        children
      ) : (
        <div className=" w-full h-screen flex justify-center items-center text-6xl">
          Loading...
        </div>
      )}
    </currentUserContext.Provider>
  );
};
