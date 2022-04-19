import { getLyrics } from "genius-lyrics-api";
import { APIGENIUSKEY } from "../Information";
import { findCursesSong } from "./findCursesSong";

const getLyricsGenius = async (artistName, album, songs) => {
  //const artistname2 = artistName;
  //const songname2 = song["name"];
  // console.log("getLyricsGenius");
  var lyricsRequestArray = [];

  for (let i = 0; i < songs.length; i++) {
    const options = {
      apiKey: APIGENIUSKEY,
      title: songs[i]["name"],
      artist: artistName,
      optimizeQuery: true,
    };
    lyricsRequestArray.push(getLyrics(options));
  }
  // return lyricsRequestArray;

  await Promise.all(lyricsRequestArray);

  for (let i = 0; i < songs.length; i++) {
    lyricsRequestArray[i].then((lyrics) => {
      songs[i]["lyrics"] = lyrics;
      const [howManyCurseWords, howManyWords] = findCursesSong(lyrics);
      songs[i]["count_words"] = howManyWords;
      songs[i]["count_curse_words"] = howManyCurseWords;
    });
  }

  // const options = {
  //   apiKey: APIGENIUSKEY,
  //   title: song["name"],
  //   artist: artistName,
  //   optimizeQuery: true,
  // };
  // // return getLyrics(options);

  // getLyrics(options).then((lyrics) => lyricsRequestArray.push(lyrics));

  // return Promise.all(lyricsRequestArray).then((results) => results);

  // // find how many curses
  // const [howManyCurseWords, howManyWords] = findCursesSong(song);
  // song["count_words"] = howManyWords;
  // song["count_curse_words"] = howManyCurseWords;

  // // if not in local storage set item to local storage
  // localStorage.setItem(
  //   `${album["artist_name"]}_${album["name"]}`,
  //   JSON.stringify(album)
  // );
};

export { getLyricsGenius };
