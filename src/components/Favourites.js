import React, { useState } from "react";
import Pagination from "./Pagination";

const Favourites = () => {
  const [curGenre, setCurGenre] = useState("All Genres");
  return (
    <>
      <div className="mt-4 px-2 flex justify-center flex-wrap space-x-2 ">
        <button
          className={
            curGenre == "All Genres"
              ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold "
              : "m-2 hover:bg-blue-400 text-lg p-1 px-2 bg-white text-black rounded-xl font-bold "
          }
        >
          All Genres
        </button>
        <button
          className={
            curGenre == "Action"
              ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold "
              : "m-2 hover:bg-blue-400 text-lg p-1 px-2 bg-white text-black rounded-xl font-bold "
          }
        >
          Action
        </button>
      </div>
      <div className="text-center">
        <input
          type="text"
          className="border border-3 text-center p-1 m-2 text-black rounded-xl"
          placeholder="Search"
        />
        <input
          type="number"
          className="border border-3 text-center p-1 m-2 text-black rounded-xl"
          placeholder="Rows"
        />
      </div>
      <Pagination />
    </>
  );
};

export default Favourites;
