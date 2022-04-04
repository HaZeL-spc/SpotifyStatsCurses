import { SONGS_ENDPOINT } from "../Information";
import axios from "axios";
import { getLyricsGenius } from "./getLyricsGenius";

const getSongs = (album, token, artistName) => {
  // get information about songs on album
  var songs = [];
  axios
    .get(SONGS_ENDPOINT(album["id"]), {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      const data = response.data.items;
      //loop on every song in album
      for (let k = 0; k < data.length; k++) {
        var song = {};
        song["name"] = data[k].name;
        song["id"] = data[k].id;
        song["href"] = data[k].href;
        song["track_number"] = data[k].track_number;

        getLyricsGenius(artistName, album, song);
        songs.push(song);
      }
      album["songs"] = songs;
    })
    .catch((error) => console.log(error));
  return songs;
};

export { getSongs };
