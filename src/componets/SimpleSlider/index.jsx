import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";
import useLoading from "../../context/LoadingContext";
import Stack from "@mui/material/Stack";
import useVideo from "../../context/VideoContext";
import { useNavigate } from "react-router-dom";

import SliderContainer from "./style";
import { useRef, useState } from "react";
import deta from "../../staticData/data.json";
import { Link } from "react-router-dom";

const SimpaleSlider = ({ data }) => {
  const { loading, backgroundGradient } = useLoading();
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const { handleVideoData, videoData } = useVideo();
  const navigate = useNavigate();

  const onClickVideo = (props) => {
    const videoDetails = deta.videoDetails;
    const videoData = {
      ...props,
      ...videoDetails,
    };

    handleVideoData(videoData);
    navigate("/video");
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    afterChange: (current) => {
      setActiveDot(Math.floor(current / 3));
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <div className="container">
        <SlickSlider {...settings} ref={sliderRef}>
          {data.map((item) =>
            loading ? (
              <Stack>
                <div className="loading-container">
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      background: backgroundGradient,
                      height: "100%",
                    }}
                  />
                </div>
              </Stack>
            ) : (
              <div className="slider-banner" key={item.id}>
                <div
                  className="banner-content"
                  onClick={() => onClickVideo(item)}
                >
                  <img src={item.image} alt="slider-img" />
                </div>
              </div>
            )
          )}
        </SlickSlider>

        <ul className="btn-list">
          {[...Array(Math.floor(data.length / 3))].map((_, index) => (
            <li
              className={`btn-item ${activeDot === index ? "active" : ""}`}
              key={index}
              onClick={() => {
                setActiveDot(index);
                sliderRef.current.slickGoTo(index * 3);
              }}
            >
              <span className="dot"></span>
            </li>
          ))}
        </ul>
      </div>
    </SliderContainer>
  );
};
export default SimpaleSlider;
