import React, { useState } from "react";
import themeContext from "./themeContext";
export default function themContextProvider({ children }) {
    const [theme,setTheme ] = useState(false) ; 
    return (
    <themeContext.Provider value={{theme , setTheme}}>
            {children}
         </themeContext.Provider>
    )
}
