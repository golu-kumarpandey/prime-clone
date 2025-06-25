import { ThemeProvider } from "styled-components";
import { useDark } from "./ThemContext";

const StyledThem = ({ children }) => {
  const { dark } = useDark();
  return <ThemeProvider theme={{ dark }}>{children}</ThemeProvider>;
};

export default StyledThem;
