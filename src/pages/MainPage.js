import React, { useState, useEffect } from "react";
import "../App.css";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { BiAlbum } from "react-icons/bi";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../Information";
import { getArtists } from "../api/getArtists";

import OfferItem from "../components/OfferItem";

const offerDescription = {
  CHARTS:
    "View how much artists you listen to swears in their songs. See it cool charts and graphs",
  ARTISTS:
    "You can search for a specific artist and find out how much he swears in his songs. It will be shown in graphs",
  ALBUMS:
    "You can search for a specific album and find out how many curses there are. It will be shown in graphs",
};

const MainPage = () => {
  const [token, setToken] = useState("");

  const changeToken = () => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    //get token
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    //window.localStorage.removeItem("token");

    console.log(token);
    setToken(token);
  };

  //use it on logout
  const deleteToken = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    //deleteToken();
    let newArtists = getArtists(token);
    console.log(newArtists);
    changeToken();
  }, [token]);

  return (
    <div className="main-page-container">
      <div className="opening-img-container">
        <div className="opening-img">GET TO KNOW YOUR MUSIC BETTER</div>
      </div>
      <div className="offer-container">
        <h1 className="offer-header">WE OFFER YOU</h1>
        <div className="offers-wrapper">
          <OfferItem
            Icon={AiOutlineAreaChart}
            classOffer="first-offer"
            text="CHARTS"
            textDescription={offerDescription["CHARTS"]}
          />
          <OfferItem
            Icon={BsFillFilePersonFill}
            classOffer="second-offer"
            text="ARTISTS"
            textDescription={offerDescription["ARTISTS"]}
          />
          <OfferItem
            Icon={BiAlbum}
            classOffer="third-offer"
            text="ALBUMS"
            textDescription={offerDescription["ALBUMS"]}
          />
        </div>
        <div className="login-button-container">
          <a
            className="login-button"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
          >
            Login to Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
