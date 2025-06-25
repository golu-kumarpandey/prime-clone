import styled from "styled-components";

const FooterSection = styled.section`
  padding-bottom: 30px;
  .content {
    padding: 34px 100px;

    background-color: ${({ theme }) => (theme.dark ? "#0D0D0D" : "#EFEEEA")};
    border-radius: 10px;
    @media screen and (max-width: 1199px) {
      padding: 34px 40px;
    }
    @media screen and (max-width: 575px) {
      padding: 20px;
    }

    @media screen and (max-width: 575px) {
      padding: 10px;
    }
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .logo-text {
    font-size: 40px;
    font-weight: 700;
    color: #c3073f;
    margin: 0px;
  }
  .custom-select {
    display: flex;
    align-items: center;
  }

  .custom-select select {
    background: transparent;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "#585858")};
    border: none;
    appearance: none;

    padding: 8px 32px 8px 8px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 2;
    padding-right: 0px;
  }
  .list-heading {
    font-size: 24px;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "#000000")};
    font-weight: 700;
    @media screen and (max-width: 479px) {
      font-size: 18px;
    }
  }
  .list-container a {
    text-decoration: none;
    font-size: 16px;
    color: #c3073f;
  }
  .icon {
    color: #c3073f;
    font-size: 20px;
  }
  .flex-container {
    display: flex;
    gap: 150px;

    @media screen and (max-width: 991px) {
      flex-direction: column;
      gap: 20px;
    }

    @media screen and (max-width: 479px) {
      gap: 10px;
    }
  }

  /* @media screen and (max-width: 479px) {
    .list-container {
      flex: 0 0 100%;
      max-width: 100%;
    } 
  } */
  .nav-container {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .right-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    flex-wrap: wrap;
  }
  .list-container ul {
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .copy-right {
    color: #585858;
    font-size: 11px;
  }
`;
export default FooterSection;
