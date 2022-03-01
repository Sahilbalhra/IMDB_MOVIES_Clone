import React, { useState } from "react";
import Pagination from "./Pagination";

const Favourites = () => {
  const [curGenre, setCurGenre] = useState("All Genres");
  //table content
  return (
    <>
      <div className="mt-4 px-2 flex justify-center flex-wrap space-x-2 ">
        <button
          className={
            curGenre === "All Genres"
              ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold "
              : "m-2 hover:bg-blue-400 text-lg p-1 px-2 bg-white text-black rounded-xl font-bold "
          }
        >
          All Genres
        </button>
        <button
          className={
            curGenre === "Action"
              ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold "
              : "m-2 hover:bg-blue-400 text-lg p-1 px-2 bg-white text-black rounded-xl font-bold "
          }
        >
          Action
        </button>
      </div>
      {/* input section */}
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
      {/* table */}
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex">
                          <img
                            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                            className="mr-2 cursor-pointer"
                            alt=""
                            // onClick={() => {
                            //   setPopularity(0);
                            //   setRating(-1);
                            // }}
                          />
                          Rating
                          <img
                            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                            // onClick={() => {
                            //   setPopularity(0);
                            //   setRating(1);
                            // }}
                            alt=""
                            className="ml-2 mr-2 cursor-pointer"
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex">
                        <img
                            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                            className="mr-2 cursor-pointer"
                            alt=""
                            // onClick={() => {
                            //   setPopularity(0);
                            //   setRating(-1);
                            // }}
                          />          
                          Popularity
                          <img
                            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                            // onClick={() => {
                            //   setPopularity(0);
                            //   setRating(1);
                            // }}
                            alt=""
                            className="ml-2 mr-2 cursor-pointer"
                          />
                          
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Genre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Favourites;
