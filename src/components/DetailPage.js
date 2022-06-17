import React, { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import { globalData } from "../App";
const DetailPage = () => {
  let useMyGData = useContext(globalData);
  let imageNotFound = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHAwcaJl_jPE170TrvcvzyuF27S0IWk_jJg&usqp=CAU`;
  console.log(useMyGData.cardDetail);
  return (
    <div
      className={`before:opacity-75 before:content-[''] before:bg-[url(https://image.tmdb.org/t/p/w500/${
        useMyGData.cardDetail.backdrop_path
          ? useMyGData.cardDetail.backdrop_path
          : imageNotFound
      })] before:absolute before:z-10 mt-4 mb-4 h-[88vh] w-[100vw] bg-center bg-cover flex items-center justify-between p-20 relative`}
    >
      <div
        className={`relative bg-[url(https://image.tmdb.org/t/p/w500/${
          useMyGData.cardDetail.poster_path
            ? useMyGData.cardDetail.poster_path
            : imageNotFound
        })]
        h-[100%] w-[30vw] rounded-lg`}
      ></div>
      <div className="relative h-[100%] w-[100%] ml-20 items-center">
        <div className="pt-10">
          <div className="text-4xl font-bold">
            {useMyGData.cardDetail.title
              ? useMyGData.cardDetail.title
              : useMyGData.cardDetail.name}
          </div>
          <div className="mt-5 mb-5 text-xl">
            <span className="mr-5">
              <Link
                to="/player"
                onClick={() => {
                  useMyGData.setPlayerVideo(
                    useMyGData.cardDetail.title
                      ? useMyGData.cardDetail.title
                      : useMyGData.cardDetail.name
                  );
                }}
                className="playButton"
              >
                <button class="rounded-full bg-sky-900 p-2">
                  Play Now
                  <PlayCircleOutlineIcon
                    style={{
                      fontSize: "3rem",
                      color: "#ffffff",
                      opacity: ".6",
                    }}
                  />
                </button>
              </Link>
            </span>
          </div>
          <div className="mt-5 mb-5 text-xl">
            <span>
              <strong>Rating :</strong> {useMyGData.cardDetail.vote_average}⭐
            </span>
          </div>
          <div className="mt-5 mb-5 text-xl">
            <span className="mr-5">
              <strong>Date:</strong>{" "}
              {useMyGData.cardDetail.first_air_date
                ? useMyGData.cardDetail.first_air_date
                : useMyGData.cardDetail.release_date}
            </span>
          </div>
          <div className="mt-5 mb-5 text-xl">
            <span className="mr-5">
              <strong>Language: </strong>{" "}
              {useMyGData.cardDetail.original_language === "en"
                ? "English"
                : useMyGData.cardDetail.original_language}
            </span>
          </div>
          <h5 className="text-3xl font-bold">Overview</h5>
          <p className="mt-3 text-xl">{useMyGData.cardDetail.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
