import React, { useContext, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { globalData } from "../App";
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

const DetailPage = () => {
  let useMyGData = useContext(globalData);
  let imageNotFound = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHAwcaJl_jPE170TrvcvzyuF27S0IWk_jJg&usqp=CAU`;
  let navigate = useNavigate();
  useEffect(() => {
    // console.log(useMyGData.cardDetail);
    if (useMyGData.cardDetail === undefined || useMyGData.cardDetail === "") {
      navigate("/");
    }
  }, [navigate, useMyGData.cardDetail]);
  // console.log(useMyGData);
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
  const genres = [
    {
      id: 28,
      name: "action",
      movies:useMyGData.action,
    },
    {
      id: 12,
      name: "adventure",
      movies:useMyGData.adventure,
    },
    {
      id: 16,
      name: "anime",
      movies:useMyGData.anime,
    },
    {
      id: 35,
      name: "comedy",
      movies:useMyGData.comedy,
    },
    {
      id: 80,
      name: "crime",
      movies:useMyGData.crime,
    },
    // {
    //   id: 99,
    //   name: "Documentary",
    // },
    {
      id: 18,
      name: "drama",
      movies:useMyGData.drama,
    },
    // {
    //   id: 10751,
    //   name: "Family",
    // },
    {
      id: 14,
      name: "fantasy",
      movies:useMyGData.fantasy,
    },
    // {
    //   id: 36,
    //   name: "History",
    // },
    {
      id: 27,
      name: "horror",
      movies:useMyGData.horror,
    },
    // {
    //   id: 10402,
    //   name: "Music",
    // },
    // {
    //   id: 9648,
    //   name: "Mystery",
    // },
    {
      id: 10749,
      name: "romance",
      movies:useMyGData.romance,
    },
    {
      id: 878,
      name: "science",
      movies:useMyGData.science,
    },
    // {
    //   id: 10770,
    //   name: "TV Movie",
    // },
    // {
    //   id: 53,
    //   name: "Thriller",
    // },
    // {
    //   id: 10752,
    //   name: "War",
    // },
    // {
    //   id: 37,
    //   name: "Western",
    // },
  ];
  let relatedMovies = [];
  for (let i = 0; i < genres.length; i++) {
    if (genres[i].id === useMyGData.cardDetail.genre_ids[0])
      relatedMovies.push(genres[i].movies);
  }
  // console.log(relatedMovies[0]);
  // console.log(useMyGData.anime);

  return (
    <>
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/original/${
          useMyGData.cardDetail.backdrop_path
            ? useMyGData.cardDetail.backdrop_path
            : imageNotFound
        })] relative mt-4 mb-4 h-[50vh] w-[100vw] bg-center bg-cover flex items-center justify-between p-5 rounded-lg `}
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <div
          className={`bg-[url(https://image.tmdb.org/t/p/w500/${
            useMyGData.cardDetail.poster_path
              ? useMyGData.cardDetail.poster_path
              : imageNotFound
          })]
        h-[100%] w-[30vw] bg-center rounded-lg`}
          style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
        ></div>
        <div className="h-[100%] w-[100%] ml-20 items-center mb-5">
          <div>
            <div className="text-2xl font-bold">
              {useMyGData.cardDetail.title
                ? useMyGData.cardDetail.title
                : useMyGData.cardDetail.name}
            </div>
            <div className="mt-1 mb-5 text-xl">
              <span className="mr-5">
                <Link
                  to="/player"
                  onClick={() => {
                    useMyGData.setPlayerVideo(
                      useMyGData.cardDetail.title
                        ? useMyGData.cardDetail.title
                        : useMyGData.cardDetail.name
                    );
                  }}
                  className="playButton"
                >
                  <button class="rounded-full bg-black pl-4 font-bold ">
                    Play Now
                    <PlayCircleOutlineIcon
                      style={{
                        fontSize: "3rem",
                        color: "white",
                      }}
                    />
                  </button>
                </Link>
              </span>
            </div>
            <div className="mb-5 text-xl">
              <span>
                <strong>Rating :</strong> {useMyGData.cardDetail.vote_average}⭐
              </span>
            </div>
            <div className="mb-5 text-xl">
              <span className="mr-5">
                <strong>Date:</strong>{" "}
                {useMyGData.cardDetail.first_air_date
                  ? useMyGData.cardDetail.first_air_date
                  : useMyGData.cardDetail.release_date}
              </span>
            </div>
            <div className="mb-5 text-xl">
              <span className="mr-5">
                <strong>Language: </strong>{" "}
                {useMyGData.cardDetail.original_language === "en"
                  ? "English"
                  : useMyGData.cardDetail.original_language}
              </span>
            </div>
            <h5 className="text-2xl font-bold">Overview</h5>
            <p className="text-xl">
              {useMyGData.cardDetail.overview.substring(0, 330)}...
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl ml-4 mt-2 font-bold	">Related Movies</h2>
        <Slider {...settings}>
          {relatedMovies[0].map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default DetailPage;
