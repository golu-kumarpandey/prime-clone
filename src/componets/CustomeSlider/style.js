import styled from "styled-components";
const CustomeSliderContainer = styled.div`
  .header {
    margin-bottom: 10px;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
    color: #c3073f;
    @media screen and (max-width: 479px) {
      font-size: 18px;
    }
  }

  .slider-banner {
    padding: 10px;
    height: 150px;
    cursor: pointer;
  }
  .slider-banner img {
    border-radius: 10px;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export default CustomeSliderContainer;
