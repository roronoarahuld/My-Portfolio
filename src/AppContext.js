import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("Home");

  return (
    <GlobalContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
