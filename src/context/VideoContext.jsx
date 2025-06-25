import { createContext, use, useContext, useEffect, useState } from "react";

const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videoData, setVideoData] = useState(() => {
    const saved = localStorage.getItem("videoData");
    return saved ? JSON.parse(saved) : [];
  });
  console.log("videoData", videoData);

  const [like, setLike] = useState(() => {
    const saved = localStorage.getItem("like");
    return saved ? JSON.parse(saved) : [];
  });

  console.log("like", like);

  const [save, setSave] = useState(() => {
    const saved = localStorage.getItem("save");
    return saved ? JSON.parse(saved) : [];
  });

  console.log("save", save);

  useEffect(
    () => localStorage.setItem("videoData", JSON.stringify(videoData)),
    [videoData]
  );

  useEffect(() => localStorage.setItem("like", JSON.stringify(like)), [like]);

  useEffect(() => localStorage.setItem("save", JSON.stringify(save)), [save]);

  const handleVideoData = (video) => {
    setVideoData({ ...video });
  };

  const handleLike = (id) => {
    const isLiked = like.includes(id);
    console.log("handle like");

    if (isLiked) {
      const filteredLikes = like.filter((e) => e !== id);

      setVideoData((prevVideo) => ({
        ...prevVideo,
        like: false,
      }));

      setLike(filteredLikes);
    } else {
      setVideoData((prevVideo) => ({
        ...prevVideo,
        like: true,
      }));

      setLike((prev) => [...prev, id]);
    }
  };

  const handleSave = (video) => {
    const isSave = save.some((e) => e.id === video.id);
    if (isSave) {
      const filterSave = save.filter((e) => e.id !== video.id);
      setSave(filterSave);
      setVideoData((prevSave) => ({
        ...prevSave,
        save: false,
      }));
    } else {
      setSave([...save, video]);
      setVideoData((prevSave) => ({
        ...prevSave,
        save: true,
      }));
    }
  };

  const handleDelete = (id) => {
    const filterData = save.filter((e) => e.id !== id);
    setSave(filterData);
  };

  const handleDeleteAll = () => {
    setSave([]);
  };

  return (
    <VideoContext.Provider
      value={{
        videoData,
        handleVideoData,
        handleLike,
        handleSave,
        handleDelete,
        like,
        save,
        handleDeleteAll,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export default useVideo;
export { VideoContextProvider };
