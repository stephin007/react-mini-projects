import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="i am here">{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
