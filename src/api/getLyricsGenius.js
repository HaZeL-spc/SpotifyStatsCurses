import { getLyrics } from "genius-lyrics-api";
import { APIGENIUSKEY } from "../Information";

const getLyricsGenius = (artistName, album, song) => {
  //const artistname2 = artistName;
  //const songname2 = song["name"];

  const options = {
    apiKey: APIGENIUSKEY,
    title: song["name"],
    artist: artistName,
    optimizeQuery: true,
  };

  if (artistName === "Miętha" && album["name"] === "36,6")
    getLyrics(options).then((lyrics) => {
      song["lyrics"] = lyrics;
    });
};

export { getLyricsGenius };
