import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const tUrl =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=0bae37183e022e230d9a998151559acd";
  useEffect(() => {
    //getting the data from api
    axios.get(tUrl).then((res) => {
      // console.log(res.data.results);
      setMovies(res.data.results[0]);
    });
  }, []);
  return (
    <div
      className={`bg-[url(https://image.tmdb.org/t/p/original${movies.backdrop_path})]
  h-[40vh]
  md:h-[50vh]
  bg-center
  bg-cover 
  flex items-end 
  `}
    >
      <div className="text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center">
        {movies.title}
      </div>
    </div>
  );
};

export default Banner;
