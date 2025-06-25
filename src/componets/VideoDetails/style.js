import styled from "styled-components";
const VideoSection = styled.section`
  background-color: ${({ theme }) => (theme.dark ? "#1A1A1D" : "#fffff")};
  .poster-container {
    width: 100%;
    height: inherit;
    position: relative;
  }
  .player-container {
    height: 550px;
    margin-top: -35px;
    @media screen and (max-width: 767px) {
      height: 400px;
      margin-top: 20px;
    }

    @media screen and (max-width: 575px) {
      height: 350px;
    }
  }

  .title {
    font-size: 32px;
    font-weight: 700;
    color: #c3073f;
    margin-top: 30px;
    margin-bottom: 10px;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
  .duration {
    font-size: 24px;
    color: #585858;
    @media screen and (max-width: 575px) {
      font-size: 18px;
    }
  }
  .pouse-container {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    background-color: #c3073f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 50px;
    bottom: -35px;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      height: 50px;
      width: 50px;
      right: 30px;
      bottom: -25px;
    }
  }
  .react-player {
    border: 1px solid red;
  }
  .play-icon {
    font-size: 30px;
    color: #ffffff;
  }
  .tab-container {
    display: flex;
    gap: 10px;
  }
  .tab-btn {
    color: ${({ theme }) => (theme.dark ? "#ffffff" : "#5a5a5a")};

    &.active {
      border: 1px solid #c3073f;
      color: #c3073f;
    }
  }

  .tab-description {
    font-size: 24px;
    color: #5a5a5a;
    text-align: justify;
    @media screen and (max-width: 575px) {
      font-size: 18px;
    }
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .reting {
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : " #5a5a5a")};

    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
  .like-save-container {
    display: flex;
    gap: 25px;
    @media screen and (max-width: 767px) {
      gap: 10px;
    }
  }
  .like-icon,
  .save-icon {
    font-size: 35px;
    color: ${({ theme }) => (theme.dark ? "#ffffff" : " #5a5a5a")};
  }
  .like-icon.active,
  .save-icon.active {
    color: green;
  }
  .top-rated {
    margin-bottom: 20px;
  }
  .error-msg {
    height: 80vh;
    width: 100%;
    margin-bottom: 40px;
    @media screen and (max-width: 767px) {
      height: 50vh;
    }
  }
  .error-msg img {
    border-radius: 10px;
  }
`;
export default VideoSection;
