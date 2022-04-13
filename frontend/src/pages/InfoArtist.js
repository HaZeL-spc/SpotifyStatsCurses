import React, { useEffect, useState } from "react";
import { getAlbums } from "../api/getAlbums";

const InfoArtist = ({ element, token }) => {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    getAlbums(element, token, setAlbumData);
  }, []);

  //scrape songs
  const getSongs = () => {
    let songs = [];
    console.log(albumData);
    if (albumData) {
      for (let i = 0; i < albumData.length; i++) {
        for (let j = 0; j < albumData[i].total_tracks; j++) {
          if (albumData[i]["songs"] != undefined)
            songs.push(albumData[i]["songs"][j]["name"]);
        }
      }
    }
    console.log(songs);
  };

  getSongs();

  return <div>{element.name}</div>;
};

export default InfoArtist;
