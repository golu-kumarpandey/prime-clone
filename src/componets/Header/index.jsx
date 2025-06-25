import HeaderSection from "./style";

import { IoPersonCircleSharp } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

import { FaSave } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Navbar from "../NavBar";
import useLoading from "../../context/LoadingContext";
import Skeleton from "@mui/material/Skeleton";
import { useDark } from "../../context/ThemContext";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import useVideo from "../../context/VideoContext";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const { loading, backgroundGradient } = useLoading();
  const { save } = useVideo();

  const { dark, toggleTheme } = useDark();
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };

  const onSaveClick = () => {
    navigate("/save");
  };

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <HeaderSection>
      <div className="container">
        <div className="content">
          <button className="logo-btn" onClick={onClickLogo}>
            <span className="logo-text">Climex</span>
          </button>
          <div className="nav-container">
            <Navbar />
          </div>

          <div className="icon-container">
            <IconButton className="btn-icon" onClick={onClickHome}>
              <FaHome />
            </IconButton>
            {loading ? (
              <Skeleton
                variant="circular"
                sx={{
                  height: "30px",
                  width: "30px",
                  background: backgroundGradient,
                  marginRight: "2px",
                }}
              />
            ) : (
              <IconButton className="btn-icon" onClick={onSaveClick}>
                <PiShoppingCartBold className="icon" />
                <div className="badge">
                  <span>{save.length}</span>
                </div>
              </IconButton>
            )}

            {loading ? (
              <Skeleton
                variant="circular"
                sx={{
                  height: "30px",
                  width: "30px",
                  background: backgroundGradient,
                  marginRight: "2px;",
                }}
              />
            ) : (
              <IconButton className="btn-icon" onClick={toggleTheme}>
                {dark ? <MdLightMode /> : <MdDarkMode />}
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;
