import React, { useState } from "react";

export const DarkModeContext = React.createContext({
  isDark: null,
  toggleDarkmode: () => {},
  modalTrue: null,
  addModal: () => {},
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") ? true : false
  );
  const [modal,setModal] = useState(!!localStorage.getItem("modal"))

  return (
    <DarkModeContext.Provider
      value={{
        isDark: darkMode,
        toggleDarkmode: () => {
          setDarkMode((prev) => !prev);
          if (localStorage.getItem("darkMode")) {
            localStorage.removeItem("darkMode");
          } else {
            localStorage.setItem("darkMode", "1");
          }
        },
        modalTrue: modal,
        addModal: ()=>{
          localStorage.setItem("modal", "true");
          setModal(true)
        }
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
