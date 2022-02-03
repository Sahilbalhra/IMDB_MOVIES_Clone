import React from "react";
import MoviesItem from "./MoviesItem";

const Movies = () => {
  return (
    <>
      <div className="mt-8 text-bold text-2xl text-center">Trending Movies</div>
      <div className="flex">
        <MoviesItem />
      </div>
    </>
  );
};

export default Movies;
