import styled from "styled-components";
import Button from "@mui/material/Button";
import data from "../../staticData/data.json";
import { useNavigate, useLocation } from "react-router-dom";

const NavSection = styled.section`
  padding: 2px 49px;
  background-color: ${({ theme }) => (theme.dark ? "#0d0d0d" : "#EFEEEA")};
  border-radius: 50px;

  @media screen and (max-width: 992px) {
    padding: 2px 30px;
  }

  @media screen and (max-width: 767px) {
    padding: 2px 49px;
  }
  @media screen and (max-width: 479px) {
    padding: 1px 20px;
  }

  .nav-item {
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "#0d0d0d")};
    font-size: 24px;
    font-weight: bold;
    &.active {
      color: #c3073f;
    }
    @media screen and (max-width: 992px) {
      font-size: 18px;
    }
  }
  .nav-list {
    display: flex;
    gap: 108px;
    align-items: center;
    padding-left: 0px;
    @media screen and (max-width: 1199px) {
      gap: 50px;
    }

    @media screen and (max-width: 991px) {
      gap: 30px;
    }
    @media screen and (max-width: 767px) {
      gap: 0px;
      justify-content: space-between;
    }
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickButton = (path) => {
    navigate(path);
  };

  return (
    <NavSection>
      <ul className="nav-list">
        {data.navList.map((list) => (
          <li key={list.id}>
            <Button
              className={`nav-item ${
                location.pathname === list.path ? "active" : ""
              }`}
              onClick={() => onClickButton(list.path)}
            >
              {list.text}
            </Button>
          </li>
        ))}
      </ul>
    </NavSection>
  );
};

export default Navbar;
