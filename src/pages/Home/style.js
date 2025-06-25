import styled from "styled-components";
const HomeSection = styled.section`
  background-color: ${({ theme }) => (theme.dark ? "#1A1A1D" : "#fffff")};
  padding: 10px 0px;
  padding-bottom: 20px;

  .mobile-nav {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 30px;

    display: none;
    @media screen and (max-width: 767px) {
      display: block;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 479px) {
      margin-bottom: 10px;
    }
  }
`;
export default HomeSection;
