import { createContext, useState, useEffect, useContext } from "react";
import { useDark } from "./ThemContext";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { dark } = useDark;
  const backgroundGradient = `linear-gradient(

     135deg,
  #2f2f2f 0%,
  #444444 40%,
  #1e1e1e 100%

)`;

  const loadingColor = "#5A5A5A";

  const handleLoading = () => {
    setLoading((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ loading, handleLoading, backgroundGradient, loadingColor }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);
export default useLoading;
export { LoadingContext };
