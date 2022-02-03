import React from "react";
import Banner from "./Banner/Banner";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div >
      <NavBar />
      <Banner />
      <Movies />
    </div>
  );
};

export default Home;
