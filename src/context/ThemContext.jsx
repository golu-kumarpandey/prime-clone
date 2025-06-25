import { createContext, useState, useContext } from "react";

const ThemContext = createContext();

const ThemProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemContext.Provider value={{ toggleTheme, dark }}>
      {children}
    </ThemContext.Provider>
  );
};

const useDark = () => useContext(ThemContext);

export { ThemProvider, useDark };
