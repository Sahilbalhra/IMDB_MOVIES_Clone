import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainHome from "./components/MainHome";
import axios from "axios";
import { useState, createContext, useEffect } from "react";
export let globalData = createContext();

function App() {
  let [playerVideo, setPlayerVideo] = useState("");
  let [cardDetail, setCardDetail] = useState("");
  const [action, setAction] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [anime, setAnime] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [crime, setCrime] = useState([]);
  const [horror, setHorror] = useState([]);
  const [drama, setDrama] = useState([]);
  const [romance, setRomance] = useState([]);
  const [fantasy, setFantasy] = useState([]);
  const [science, setScience] = useState([]);
  // console.log(action);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=16"
      )
      .then((res) => {
        setAnime(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=28"
      )
      .then((res) => {
        setAction(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=12"
      )
      .then((res) => {
        setAdventure(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=35"
      )
      .then((res) => {
        setComedy(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=80"
      )
      .then((res) => {
        setCrime(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=18"
      )
      .then((res) => {
        setDrama(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=27"
      )
      .then((res) => {
        setHorror(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=10749"
      )
      .then((res) => {
        setRomance(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=878"
      )
      .then((res) => {
        setScience(res.data.results);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0bae37183e022e230d9a998151559acd&&with_genres=14"
      )
      .then((res) => {
        setFantasy(res.data.results);
      });
  }, []);
  return (
    <globalData.Provider
      value={{
        playerVideo,
        setPlayerVideo,
        cardDetail,
        setCardDetail,
        action,
        adventure,
        romance,
        anime,
        drama,
        crime,
        fantasy,
        comedy,
        horror,
        science,
      }}
    >
      <MainHome />
    </globalData.Provider>
  );
}

export default App;
