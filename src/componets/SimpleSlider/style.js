import styled from "styled-components";

const SliderContainer = styled.div`
  margin-bottom: 35px;
  .banner-content {
    padding: 10px;
    height: 400px;

    cursor: pointer;
    @media screen and (max-width: 767px) {
      height: 350px;
    }
    @media screen and (max-width: 479px) {
      height: 300px;
    }
  }
  .banner-content img {
    border-radius: 10px;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.03);
    }
  }
  .btn-list {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-left: 0px;
  }
  .btn-item {
    height: 20px;
    width: 20px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      border: 1px solid #950740;
    }
  }
  .dot {
    height: 10px;
    width: 10px;
    background-color: #950740;
    border-radius: 50%;
    border-width: 0px;
  }

  .loading-container {
    height: 400px;
    padding: 10px;
    @media screen and (max-width: 767px) {
      height: 350px;
    }
  }
`;
export default SliderContainer;
