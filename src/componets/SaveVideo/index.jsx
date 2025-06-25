import Header from "../Header";
import Footer from "../Footer";
import useVideo from "../../context/VideoContext";
import IconButton from "@mui/material/IconButton";
import SaveVideoSection from "./style";
import emtyCart from "../../assets/emty.png";
import { MdDelete } from "react-icons/md";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaPlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SaveVideo = () => {
  const { save, handleDelete, handleDeleteAll } = useVideo();

  const showingList = save.length === 0;
  const poster = save.length !== 0 && save[0].image;
  const movieTitle = save.length !== 0 && save[0].movieTitle;
  const duration = save.length !== 0 && save[0].duration;
  const navigate = useNavigate();
  const onDeleteClick = (id) => {
    handleDelete(id);
  };

  const onClickDeleteAll = () => {
    handleDeleteAll();
  };

  const onClickPoster = () => {
    navigate("/video");
  };
  return (
    <SaveVideoSection>
      <Header />
      <div className="container">
        <div className="save-content">
          {showingList ? (
            <div className="emty-cart">
              <img src={emtyCart} />
            </div>
          ) : (
            <>
              <Stack
                direction="row"
                spacing={2}
                className="mobile-delete"
                onClick={onClickDeleteAll}
              >
                <Button variant="outlined" color="error">
                  Delete All
                </Button>
              </Stack>

              <div className="preview-container">
                <div className="card-content">
                  <div className="card-banner" onClick={onClickPoster}>
                    <img src={poster} />
                    <div className="over-lay">
                      <FaPlay className=" over-lay-icon" />
                    </div>
                  </div>
                  <div className="card-detals">
                    <h4 className="card-title">{movieTitle}</h4>
                    <p className="card-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Incidunt itaque id odit consequatur expedita fugit,
                      voluptatibus atque ratione, dolores odio quia iusto magni
                      officiis beatae maiores? Dolorum voluptatum at cum.
                    </p>
                    <p className="card-duration">{duration}</p>
                  </div>
                </div>
              </div>
              <ul className="delete-list">
                <div className="desktop-delete">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={onClickDeleteAll}
                  >
                    Delete All
                  </Button>
                </div>

                {save.map((list) => {
                  const { duration, image, movieTitle } = list;
                  return (
                    <li className="save-list" key={list.id}>
                      <div className="left-side">
                        <div className="banner-container">
                          <img src={image} />
                        </div>
                        <div className="save-details">
                          <p className="movie-title">{movieTitle}</p>
                          <p className="duration">{duration}</p>
                        </div>
                      </div>

                      <div className="right-side">
                        <IconButton
                          className="delete-btn "
                          onClick={() => onDeleteClick(list.id)}
                        >
                          <MdDelete />
                        </IconButton>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>

      <Footer />
    </SaveVideoSection>
  );
};

export default SaveVideo;
