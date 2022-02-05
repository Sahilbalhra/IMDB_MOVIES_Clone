import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesItem from "./MoviesItem";
import { BallTriangle } from "react-loader-spinner";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const tUrl =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=0bae37183e022e230d9a998151559acd";
  useEffect(() => {
    //getting the data from api
    axios.get(tUrl).then((res) => {
      // console.log(res.data.results);
      setMovies(res.data.results);
    });
  },[]);

  return (
    <>
      <div
        className="mt-8
        mb-8
      text-center
      font-bold 
      text-3xl"
      >
        Trending Movies
      </div>
      {/* spinner and movies card */}
      {movies.length == 0 ? (
        <div className="flex justify-center ">
          <BallTriangle color="black" height={40} width={40} />
        </div>
      ) : (
        <div
          className="flex flex-wrap justify-center"
        >
          {movies.map((movie) => {
            return <MoviesItem title={movie.title} Image={movie.backdrop_path}/>;
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
