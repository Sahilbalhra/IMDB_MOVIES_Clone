import React, { useState, useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import { globalData } from "../App";
const Card = ({ movie }) => {
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);
  let useMyGData = useContext(globalData);
  let imageNotFound = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHAwcaJl_jPE170TrvcvzyuF27S0IWk_jJg&usqp=CAU`;

  let add = (movie) => {
    let newArray = [...favourites, movie];
    setFavourites([...newArray]);
    //saving the fav movies to local storage
    localStorage.setItem("tmdb", JSON.stringify(newArray));
    // console.log(newArray);
  };

  let del = (movie) => {
    let newArray = favourites.filter((m) => m.id !== movie.id);
    setFavourites([...newArray]);
    localStorage.setItem("tmdb", JSON.stringify(newArray));
  };

  return (
    <Link
      to="/detail"
      onClick={() => {
        useMyGData.setCardDetail(movie);
      }}
    >
      <div
        className={`
                      bg-[url(https://image.tmdb.org/t/p/w500/${
                        movie.backdrop_path
                          ? movie.backdrop_path
                          : imageNotFound
                      })] 
                      md:h-[30vh] md:w-[250px] 
                      h-[25vh] w-[150px]
                      bg-center bg-cover
                      rounded-xl
                      flex items-end
                      m-4
                      hover:scale-110
                      ease-out duration-300
                      relative
                  `}
        onMouseEnter={() => {
          setHover(movie.id);
        }}
        onMouseLeave={() => setHover("")}
        // onClick={() => {
        //   useMyGData.setPlayerVideo(movie.title);
        // }}
      >
        {hover === movie.id && (
          <>
            {!favourites.find((m) => m.id === movie.id) ? (
              <div
                className="absolute top-2 right-2
                      p-2
                      bg-gray-800
                      rounded-xl
                      text-xl
                      cursor-pointer
                      "
                onClick={() => add(movie)}
              >
                ❤️
              </div>
            ) : (
              <div
                className="absolute top-2 right-2
                      p-2
                      bg-gray-800
                      rounded-xl
                      text-xl
                      cursor-pointer
                      "
                onClick={() => del(movie)}
              >
                ❌
              </div>
            )}
          </>
        )}
        <div className="w-full bg-gray-900 text-white py-2 rounded-b-xl flex justify-between items-center px-1 py-1">
          <div>{movie.title ? movie.title : movie.name}</div>
          <Link
            to="/player"
            onClick={() => {
              useMyGData.setPlayerVideo(movie.title ? movie.title : movie.name);
            }}
            className="playButton"
          >
            <PlayCircleOutlineIcon
              style={{
                fontSize: "3rem",
                color: "#ffffff",
                opacity: ".6",
              }}
            />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
