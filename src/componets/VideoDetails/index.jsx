import ReactPlayer from "react-player";
import videoUrl from "../../assets/movie.mp4";
import VideoSection from "./style";
import Header from "../Header";
import Footer from "../Footer";
import useVideo from "../../context/VideoContext";
import { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import { BiSolidLike } from "react-icons/bi";
import CustomeSlider from "../CustomeSlider";
import deta from "../../staticData/data.json";
import { Navigate } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { FaRegSave } from "react-icons/fa";
import { AiFillSave } from "react-icons/ai";
import errorImage from "../../assets/videoError.jpg";
const VideoDetails = () => {
  const { videoData, handleLike, handleSave, like, save } = useVideo();

  const { id, duration, image, movieTitle, tabs, ratting, cast } = videoData;

  const [isPlaying, setIsPalaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const description = tabs?.[activeTab].tabDescreption;
  const relatedData = deta.movies.sciFy;
  const topRated = deta.movies.romantic;
  const likeIcon = like.includes(id) ? <BiSolidLike /> : <SlLike />;
  const isSave = save.some((e) => e.id === id);
  const saveIcon = isSave ? <AiFillSave /> : <FaRegSave />;

  console.log(duration);

  const onClickLike = () => {
    handleLike(id);
  };
  const onClickSave = () => {
    handleSave(videoData);
  };

  useEffect(() => {
    return () => setIsPalaying(false);
  }, []);

  return (
    <VideoSection>
      <Header />
      <div className="container">
        {videoData.length === 0 ? (
          <div className="error-msg">
            <img src={errorImage} />
          </div>
        ) : (
          <>
            {" "}
            <div className="player-container">
              {isPlaying ? (
                <ReactPlayer
                  url={videoUrl}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  onEnded={() => setIsPalaying(false)}
                  onPause={() => setIsPalaying(false)}
                  onPlay={() => setIsPalaying(true)}
                />
              ) : (
                <div className="poster-container">
                  <img src={image} />
                  <div
                    className="pouse-container"
                    onClick={() => setIsPalaying(true)}
                  >
                    <IoIosPlay className="play-icon" />
                  </div>
                </div>
              )}
            </div>
            <div className="header-section">
              <h4 className="title">{movieTitle}</h4>
              <p className="duration">{duration}</p>
            </div>
            <div className="description-section">
              <div className="tab-container">
                {tabs?.map((tab, index) => (
                  <Button
                    variant="outline"
                    className={`tab-btn ${activeTab === index ? "active" : ""}`}
                    key={index}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.tabName}
                  </Button>
                ))}
              </div>

              <p className="tab-description">{description}</p>
            </div>
            <div className="details">
              <div className="reting-container">
                <span className="reting">{ratting}</span>
              </div>

              <div className="like-save-container">
                <IconButton onClick={onClickLike}>
                  <div
                    className={`like-icon ${like.includes(id) ? "active" : ""}`}
                  >
                    {likeIcon}
                  </div>
                </IconButton>

                <IconButton onClick={onClickSave}>
                  <div className={`save-icon ${isSave ? "active" : ""}`}>
                    {saveIcon}
                  </div>
                </IconButton>
              </div>
            </div>
            <div className="cast-container">
              {videoData && <CustomeSlider data={cast} title={"Cast"} />}
            </div>
            <div className="releted-container">
              {videoData && (
                <CustomeSlider data={relatedData} title={"Related Movies"} />
              )}
            </div>
            <div className="top-rated">
              <CustomeSlider data={topRated} title={"Top Ratted"} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </VideoSection>
  );
};
export default VideoDetails;
