import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState("1");

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContextValue = () => useContext(UserContext);
