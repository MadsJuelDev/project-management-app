import { createContext, useContext, useState } from "react";

export const SelectedInboxContext = createContext();
export const SelectedInboxProvider = ({ children }) => {
  const [selectedInbox, setSelectedInbox] = useState("INBOX");

  return (
    <SelectedInboxContext.Provider value={{ selectedInbox, setSelectedInbox }}>
      {children}
    </SelectedInboxContext.Provider>
  );
};

export const useSelectedInboxValue = () => useContext(SelectedInboxContext);
