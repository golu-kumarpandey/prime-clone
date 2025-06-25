import { createContext, useContext, useState, useEffect } from "react";
import { useTheme } from "styled-components";

const CustomeLoadingContext = createContext();

const CustomeLoadingProvider = ({ children }) => {
  const { dark } = useTheme();
  const [customeLoader, setCustomeLoader] = useState(false);
  const backgroundGradient = dark
    ? `linear-gradient(90deg, #333 25%, #444 50%, #333 75%)`
    : `linear-gradient(
      30deg,
      #f0f0f0 0%,
      #e0e0e0 20%,
      #f0f0f0 40%,
      #f0f0f0 100%
    )`;

  const hanldeCustomeLoader = () => {
    setCustomeLoader(!customeLoader);
    console.log("custome loaderClick");
  };
  useEffect(() => {
    const timer = setTimeout(() => setCustomeLoader(false), 1000);
    return () => clearTimeout(timer);
  }, [customeLoader]);

  return (
    <CustomeLoadingContext.Provider
      value={{ customeLoader, hanldeCustomeLoader, backgroundGradient }}
    >
      {children}
    </CustomeLoadingContext.Provider>
  );
};

const useCustomeLoader = () => useContext(CustomeLoadingContext);
export default useCustomeLoader;
export { CustomeLoadingProvider };
