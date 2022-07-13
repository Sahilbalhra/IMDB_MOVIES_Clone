import React, { useContext } from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Card from "./Card";
import { globalData } from "../App";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white" }} />
    </div>
  );
}

const Home = () => {
  let useMyGData = useContext(globalData);
  var settings = {
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    // initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerPadding: "170px",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <NavBar />
      <Banner />
      <h2 className="text-2xl ml-4 mt-4">Action </h2>
      <Slider {...settings}>
        {useMyGData.action.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Adventure</h2>
      <Slider {...settings}>
        {useMyGData.adventure.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Anime</h2>
      <Slider {...settings}>
        {useMyGData.anime.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Comedy</h2>
      <Slider {...settings}>
        {useMyGData.comedy.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Crime</h2>
      <Slider {...settings}>
        {useMyGData.crime.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Horror</h2>
      <Slider {...settings}>
        {useMyGData.horror.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Drama</h2>
      <Slider {...settings}>
        {useMyGData.drama.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Romance</h2>
      <Slider {...settings}>
        {useMyGData.romance.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Fantasy</h2>
      <Slider {...settings}>
        {useMyGData.fantasy.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
      <h2 className="text-2xl ml-4 mt-4">Science</h2>
      <Slider {...settings}>
        {useMyGData.science.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Slider>
    </>
  );
};

export default Home;
