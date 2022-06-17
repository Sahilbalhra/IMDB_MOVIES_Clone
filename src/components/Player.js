import React, { useEffect, useState, useContext } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { globalData } from "../App";

const Player = () => {
  let useMyGData = useContext(globalData);
  const [video, setVideo] = useState("");
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBo8Rp9zi0V9Zh3zbi91gV8f-BNpdsfFD4&type=videos&q=${useMyGData.playerVideo}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setVideo(res.data.items[0].id.videoId);
      console.log(res.data.items[0].id.videoId);
    });
  }, [url]);

  return (
    <div
      // className="mt-5"
      style={{ height: "100%", margin: "auto", width: "100%" }}
    >
      <ReactPlayer
        url={`https://youtube.com/embed/${video}`}
        width="100%"
        height="90vh"
        playing="true"
        playIcon="true"
        controls="true"
        style={{ justifyContent: "center" }}
      />
    </div>
  );
};

export default Player;
