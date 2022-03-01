import React, { useState,useEffect } from "react";
import Pagination from "./Pagination";

const Favourites = () => {
  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }
  const [curGenre, setCurGenre] = useState("All Genres");
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenres] = useState([]);
//for local storage
  useEffect(
    function () {
        //getting fav movies form local storage
        let oldFav=localStorage.getItem("tmdb");
        //string to original data
        oldFav=JSON.parse(oldFav);
        //setting the movies for reloading file
        setFavourites([...oldFav]);
      
    },
    []
  );
  //for genres
  useEffect(() => {
    let temp =favourites.filter((movie)=>genreids[movie.genre_ids[0]]);

  }, [])
  
  let del =(movie)=>{
    let newArray =favourites.filter((m)=>m.id!=movie.id);
    setFavourites([...newArray]);
    localStorage.setItem("tmdb",JSON.stringify(newArray));
  }
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
     
        <div className="flex flex-col m-4">
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
                  {/* table body */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {favourites.map((movie) => (
                      <tr key={movie.id}>
                        {/* movies img */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 md:h-[100px] md:w-[180px]">
                              <img
                                className="hidden md:block md:h-[100px] md:w-[180px]"
                                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 font-bold">
                                {movie.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* movies votes */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {movie.vote_average}
                          </div>
                        </td>
                        {/* movies popularity */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {movie.popularity}
                          </div>
                        </td>
                        {/* type of movies */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {genreids[movie.genre_ids[0]]}
                          </span>
                        </td>
                        {/* delete button */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                          <button
                            href="#"
                            className="text-red-600 hover:text-red-900"
                            onClick={() => del(movie)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
      <Pagination />
    </>
  );
};

export default Favourites;
