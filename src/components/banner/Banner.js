import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from'react-router-dom';
import "./Banner.scss";
import {GrPlayFill} from "react-icons/gr";
import {BiHelpCircle} from "react-icons/bi";
import requests from "../../config/Requests";
import axios from "axios";
import QuickView from '../../components/quickview/QuickView';



function Banner() {

  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handleClickPopup() {
    popup ? setPopup(false) : setPopup(true);
    
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : "Pas de description";
  };

  const bannerStyle = {
    backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }
  console.log(popup);
  

  return (
    <header className='banner' style={bannerStyle}>
        <div className='banner__content'>
            <h1 className='banner__title'>{movie?.title || movie?.original_title || movie?.name }</h1>
            <p className='banner__description'>
                {truncateText(movie?.overview, 100)}

            </p>
            <div className='banner__buttons'>
              <Link to={`/video/${movie?.id}`}>
                <button className='banner__button banner__button--play'> <GrPlayFill/> Lecture</button>
              </Link>
                <button className='banner__button' onClick={handleClickPopup}> <BiHelpCircle/> Plus d'infos</button>
            </div>
        </div>
        <QuickView 
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatut={popup}

        />
    </header>

  )
}

export default Banner;