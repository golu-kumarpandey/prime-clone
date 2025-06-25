import styled from "styled-components";
const blackColor = "#000000";
const whiteColor = "#ffffff";
const HeaderSection = styled.section`
  padding: 20px 0px;
  margin-bottom: 35px;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 479px) {
    padding: 10px 0px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-container {
    display: flex;
    gap: 2px;
    align-items: center;
  }
  .logo-text {
    background: linear-gradient(45deg, #a5d44c, #20c2c2, #ff1361, #feb47b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
  }
  .logo-btn {
    background-color: transparent;
    border-width: 0px;
    cursor: pointer;
  }
  .btn-icon {
    font-size: 30px;
    color: ${({ theme }) => {
      console.log(theme.dark);
      return theme.dark ? whiteColor : blackColor;
    }};
    position: relative;
  }
  .badge {
    position: absolute;
    background-color: #ff1361;
    height: 20px;
    width: 20px;
    right: 0px;
    top: 0px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .badge span {
    font-size: 10px;
    color: #ffffff;
  }

  .nav-container {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;
export default HeaderSection;
