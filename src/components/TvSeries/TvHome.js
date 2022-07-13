import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "../Pagination";
import Card from "../Card";
import NavBar from "../NavBar/NavBar";

const TvHome = () => {
  const [tvShow, setTvShow] = useState([]);
  const [page, setPage] = useState(1);

  // const [favourites, setFavourites] = useState([]);

  function goAhead() {
    setPage(page + 1);
  }
  function goBack() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  useEffect(
    function () {
      //getting fav movies form local storage
      // let oldFav = localStorage.getItem("tmdb");
      //string to original data
      // oldFav = JSON.parse(oldFav) || [];
      //setting the movies for reloading file
      // setFavourites([...oldFav]);
      //https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=0bae37183e022e230d9a998151559acd&language=en-US&page=${page}`
        )
        .then((res) => {
          console.table(res.data.results);
          setTvShow(res.data.results);
        });
    },
    [page]
  );
  return (
    <>
      <NavBar />
      <div className="mb-8 text-center">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">
          Trending Shows
        </div>
        {tvShow.length === 0 ? (
          <div className="flex justify-center">
            <Oval
              heigth="100"
              width="100"
              color="grey"
              secondaryColor="grey"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {tvShow.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} prev={goBack} next={goAhead} />
    </>
  );
};

export default TvHome;
