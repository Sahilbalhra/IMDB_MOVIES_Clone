import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesItem from "./MoviesItem";
import { BallTriangle } from "react-loader-spinner";
import Pagination from "../Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  //fav
  const [fav, setFav] = useState([]);
   //getting all data of api to saving it in the fav tab
   let add = (movies) => {
    let newArray = [...fav, movies];
    setFav([...newArray]);
    console.log(setFav);
  };
  //page number
  const [pageNumber, setPageNumber] = useState(1);
  const previoushandler = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const nexthandler = () => {
    setPageNumber(pageNumber + 1);
  };


  useEffect(() => {
      //trending movies url
  let tUrl =
  `https://api.themoviedb.org/3/trending/movie/week?api_key=0bae37183e022e230d9a998151559acd&page=${pageNumber}`;
    //getting the data from api
    axios.get(tUrl).then((res) => {
      // console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [pageNumber]);

//   const movieID=(data)=>{
//  console.log(data);
//   }

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
      {/* spinner and movies card  condition*/}
      {!movies.length ? (
        <div className="flex justify-center ">
          <BallTriangle color="black" height={40} width={40} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center" >
          {movies.map((movie) => {
            return (
              <MoviesItem title={movie.title} Image={movie.backdrop_path} id={movie.id} add={add}/>
            );
          })}
        </div>
      )}
      <Pagination page={pageNumber} next={nexthandler} prev={previoushandler}/>
    </>
  );
};

export default Movies;
