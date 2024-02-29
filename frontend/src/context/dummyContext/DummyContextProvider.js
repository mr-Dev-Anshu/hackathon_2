import React, { useState } from "react";

export const DummyContext = React.createContext();

export default function DummyContextProvider({ children }) {
  const [data, setData] = useState();
  return (
    <DummyContext.Provider value={{ data, setData }}>
      {children}
    </DummyContext.Provider>
  );
}
