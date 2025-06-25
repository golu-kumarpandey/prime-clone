import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";
import useLoading from "../../context/LoadingContext";
import Stack from "@mui/material/Stack";
import CustomeSliderContainer from "./style";
import useCategory from "../../context/CategoryContext";
import useCustomeLoader from "../../context/CustomeLoadingContext";
import useVideo from "../../context/VideoContext";
import deta from "../../staticData/data.json";
import { useNavigate } from "react-router-dom";

const CustomeSlider = ({ data, title }) => {
  const { loading, backgroundGradient } = useLoading();
  const { customeLoader } = useCustomeLoader();
  const navigate = useNavigate();
  const { categoryId } = useCategory();
  const { videoData, handleVideoData } = useVideo();
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const customeFunction = () => {
    const { categoryId } = useCategory();
    const removeCategory = data.filter((e) => e.category !== categoryId);
    const fillterCategory =
      categoryId === "all"
        ? data
        : [...data.filter((e) => e.category === categoryId), ...removeCategory];
    return fillterCategory;
  };

  const fillterData = customeFunction();

  const onClickVideo = (props) => {
    console.log("customeClick");
    const videoDetails = deta.videoDetails;
    const videoData = {
      ...props,
      ...videoDetails,
    };

    handleVideoData(videoData);
    navigate("/video");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <CustomeSliderContainer>
      <div className="container">
        <div className="content">
          <div className="header">
            {loading ? (
              <Skeleton
                variant="text"
                sx={{ background: backgroundGradient, width: "10%" }}
              />
            ) : (
              <h2 className="title">{title}</h2>
            )}
          </div>

          <SlickSlider {...settings}>
            {fillterData.map((item) => (
              <div
                className="slider-item"
                key={item.id}
                onClick={() => onClickVideo(item)}
              >
                <div className="slider-banner">
                  {loading || customeLoader ? (
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        background: backgroundGradient,
                        height: "100%",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <img src={item.image} />
                  )}
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </CustomeSliderContainer>
  );
};
export default CustomeSlider;
