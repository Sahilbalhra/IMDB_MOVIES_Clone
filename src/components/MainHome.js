import React, { useContext } from "react";
import Movies from "./Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./Favourites";
import Player from "./Player";
import TvHome from "./TvSeries/TvHome";
import DetailPage from "./DetailPage";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { globalData } from "../App";
import ForgotPage from "./ForgotPage";

const MainHome = () => {
  let useMyGData = useContext(globalData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {useMyGData.user ? (
                <>
                  <Home />
                </>
              ) : (
                <Login />
              )}
            </>
          }
        ></Route>
        <Route path="/player" element={<Player />} />
        <Route path="/tvShow" element={<TvHome />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgotPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainHome;
