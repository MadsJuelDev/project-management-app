import { createContext, useContext, useState } from "react";

export const SelectedcollabProjectContext = createContext();
export const SelectedcollabProjectProvider = ({ children }) => {
  const [selectedcollabProject, setSelectedcollabProject] = useState("INBOX");

  return (
    <SelectedcollabProjectContext.Provider
      value={{ selectedcollabProject, setSelectedcollabProject }}
    >
      {children}
    </SelectedcollabProjectContext.Provider>
  );
};

export const useSelectedcollabProjectValue = () =>
  useContext(SelectedcollabProjectContext);
