import React, { useState } from "react";

export const DarkModeContext = React.createContext({
  isDark: null,
  toggleDarkmode: () => {},
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") ? true : false
  );

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
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
