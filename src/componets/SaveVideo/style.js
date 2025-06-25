import styled from "styled-components";
const SaveVideoSection = styled.section`
  background-color: ${({ theme }) => (theme.dark ? "#000000" : "#ffffff")};

  .save-content {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    @media screen and (max-width: 991px) {
      gap: 20px;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .preview-container {
    width: 60%;

    @media screen and (max-width: 991px) {
      width: 50%;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  .delete-list {
    width: 40%;
    padding-left: 0px;
    background-color: ${({ theme }) => (theme.dark ? "#0D0D0D" : "#EFEEEA")};
    padding: 20px;
    border-radius: 10px;
    margin: 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;

    @media screen and (max-width: 991px) {
      width: 50%;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      padding: 1px;
    }
  }
  .save-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => (theme.dark ? "#000000" : "#e3d4d4")};
    padding: 10px;
    border-radius: 10px;
  }
  .banner-container {
    flex: 0 0 80px;
    max-width: 80px;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      flex: 0 0 50px;
      max-width: 50px;
    }
  }
  .banner-container img {
    border-radius: 10px;
  }
  .delete-btn {
    color: red;
    font-size: 24px;
  }
  .left-side {
    display: flex;
    gap: 20px;
  }
  .movie-title {
    font-size: 18px;
    margin: 10px 0px;
    font-weight: bold;
    color: red;
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  .duration {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "#000000")};
  }
  .card-banner {
    position: relative;
    height: 400px;
    @media screen and (max-width: 991px) {
      height: 300px;
    }
    @media screen and (max-width: 575px) {
      height: 250px;
    }

    .over-lay {
      position: absolute;
      visibility: hidden;
      opacity: 0;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.71);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &:hover .over-lay {
      visibility: visible;
      opacity: 1;
    }
  }
  .over-lay-icon {
    font-size: 30px;
    color: #ffffff;
  }
  .card-banner img {
    border-radius: 10px;
  }

  .card-content {
    padding: 20px;
    cursor: pointer;
    background-color: ${({ theme }) => (theme.dark ? "#0D0D0D" : "#EFEEEA")};
    border-radius: 10px;
  }
  .card-title {
    font-size: 24px;
    font-weight: 500;
    color: red;
    @media screen and (max-width: 991px) {
      font-size: 18px;
    }
  }
  .card-description {
    font-size: 18px;

    color: ${({ theme }) => (theme.dark ? "#ffffff" : "0D0D0D")};
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  .card-duration {
    font-size: 14px;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "0D0D0D")};
  }
  .emty-cart {
    height: 80vh;
    width: 100%;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
      height: 50vh;
    }
  }
  .empty-cart img {
    border-radius: 10px;
  }
  .mobile-delete {
    display: none;
    text-align: right;
  }
  @media screen and (max-width: 767px) {
    .mobile-delete {
      display: inline-block;
    }
  }

  .desktop-delete {
    display: inline-block;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 767px) {
    .desktop-delete {
      display: none;
    }
  }
`;
export default SaveVideoSection;
