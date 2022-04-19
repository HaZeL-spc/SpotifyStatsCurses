import React, { useEffect, useState, useRef } from "react";
import { getAlbums } from "../api/getAlbums";
// import "../TopStats.css";

const InfoArtist = ({ element, token }) => {
  const [albumData, setAlbumData] = useState([]);
  const [howManyCursesTotal, setHowManyCursesTotal] = useState(0);
  const [theMostCursesData, setTheMostCursesData] = useState({});

  const refInfoArtistImage = useRef();

  useEffect(() => {
    getAlbums(element, token, setAlbumData);
    if (refInfoArtistImage) {
      refInfoArtistImage.current.style.backgroundImage = `url(${element["images"][0]["url"]})`;
    }
  }, []);

  useEffect(() => {
    if (albumData.length > 0) {
      console.log("dwmakd");
      const result = getHowManyCurses();
      setHowManyCursesTotal(result[0]);
      setTheMostCursesData({ number: result[1], song_name: result[2] });
    }
  }, [albumData]);

  const getHowManyCurses = () => {
    let howManyCurses = 0;
    let mostCurses = albumData[0]["songs"][0]["count_curse_words"];
    let mostCursesSongName = albumData[0]["songs"][0]["name"];
    for (let i = 0; i < albumData.length; i++) {
      for (let j = 0; j < albumData[i]["songs"].length; j++) {
        if (albumData[i]["songs"][j]["count_curse_words"] !== undefined) {
          let newCurses = albumData[i]["songs"][j]["count_curse_words"];
          howManyCurses = newCurses + howManyCurses;

          if (newCurses > mostCurses) {
            mostCurses = newCurses;
            mostCursesSongName = albumData[i]["songs"][j]["name"];
          }
        }
      }
    }
    return [howManyCurses, mostCurses, mostCursesSongName];
  };

  // console.log(albumData);

  return (
    <div className="info-artist-container">
      <div className="info-artist-name-header">
        <h1>{element.name}</h1>
      </div>
      <div className="info-artist-stats">
        <div className="info-artist-albums">
          {albumData.length > 0 &&
            albumData.map((album) => {
              // console.log(album["image"], album.id, album);
              return (
                <div className="info-artists-album-show">
                  {album["image"] && (
                    <div
                      className="info-artists-album-image"
                      style={{
                        backgroundImage: `url(${album["image"]["url"]})`,
                      }}
                    ></div>
                  )}

                  <h1 className="info-artist-album-name">{album["name"]}</h1>
                </div>
              );
            })}
        </div>
        <div className="info-artist-space-between"></div>
        <div className="info-artist-image" ref={refInfoArtistImage}></div>
      </div>
      {albumData.length > 0 && (
        <div className="info-artist-stats-how-many">
          <h2>in {element.name} songs there are</h2>
          <h1>{howManyCursesTotal}</h1>
          <h2>curses</h2>
          <h2>{theMostCursesData["song_name"]}</h2>
          <h2>{theMostCursesData["number"]}</h2>
        </div>
      )}
    </div>
  );
};

export default InfoArtist;
