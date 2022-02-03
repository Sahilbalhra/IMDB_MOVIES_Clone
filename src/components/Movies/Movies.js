import React from "react";
import MoviesItem from "./MoviesItem";

const Movies = () => {
  return (
    <>
      <div className="mt-8
      text-center
      font-bold 
      text-3xl">Trending Movies</div>
      <div className="flex
      justify-center">
        <MoviesItem />
      </div>
    </>
  );
};

export default Movies;
