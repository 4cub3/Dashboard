import React, { useState } from "react";

export const DarkModeContext = React.createContext({
  isDark: null,
  toggleDarkmode: () => {},
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider
      value={{
        isDark: darkMode,
        toggleDarkmode: ()=>{setDarkMode((prev) => !prev)},
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider
