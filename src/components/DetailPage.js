import React, { useContext, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link, useNavigate } from "react-router-dom";
import { globalData } from "../App";
const DetailPage = () => {
  let useMyGData = useContext(globalData);
  let imageNotFound = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHAwcaJl_jPE170TrvcvzyuF27S0IWk_jJg&usqp=CAU`;
  let navigate = useNavigate();
  useEffect(()=>{
    console.log(useMyGData.cardDetail)
    if(useMyGData.cardDetail===undefined||useMyGData.cardDetail==="") {
      navigate("/")
    }
  },[navigate,useMyGData.cardDetail])

  return (
    <div
      className={`bg-[url(https://image.tmdb.org/t/p/original/${
        useMyGData.cardDetail.backdrop_path
          ? useMyGData.cardDetail.backdrop_path
          : imageNotFound
      })] relative mt-4 mb-4 h-[88vh] w-[100vw] bg-center bg-cover flex items-center justify-between p-20 rounded-lg `}
      style={{ backgroundColor:"rgba(0,0,0,0.6)" }}
    >
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/w500/${
          useMyGData.cardDetail.poster_path
            ? useMyGData.cardDetail.poster_path
            : imageNotFound
        })]
        h-[100%] w-[30vw] bg-center bg-cover rounded-lg`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"}}
      ></div>
      <div className="h-[100%] w-[100%] ml-20 items-center" >
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
                <button class="rounded-full bg-black pl-4 font-bold ">
                  Play Now
                  <PlayCircleOutlineIcon
                    style={{
                      fontSize: "3rem",
                      color: "white",
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
