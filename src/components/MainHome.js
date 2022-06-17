import React from "react";
import Banner from "./Banner/Banner";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./Favourites";
import Player from "./Player";
import TvHome from "./TvSeries/TvHome";
import DetailPage from "./DetailPage";
import Home from "./Home";

const MainHome = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Home/>
            </>
          }
        ></Route>
        <Route path="/player" element={<Player />} />
        <Route path="/tvShow" element={<TvHome/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/detail" element={<DetailPage/>} />
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainHome;
