import { ALBUMS_ENDPOINT } from "../Information";
import axios from "axios";
import { getSongs } from "./getSongs";

const getAlbums = async (newArtist, token, setAlbumData) => {
  var albums = [];
  // get information about albums
  axios
    .get(ALBUMS_ENDPOINT(newArtist["id"]), {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      const data = response.data.items;
      //loop on every album of artist
      for (let j = 0; j < data.length; j++) {
        var album = {};
        if (data[j].album_group === "album") {
          album["name"] = data[j].name;
          album["id"] = data[j].id;
          album["href"] = data[j].href;
          album["total_tracks"] = data[j].total_tracks;
          album["release_date"] = data[j].release_date;
          //get songs from album
          getSongs(album, token, newArtist["name"]);
        } else break;
        albums.push(album);
      }
      //newArtist["albums"] = albums;
      setAlbumData(albums);
    })
    .catch((error) => console.log(error));
  return albums;
};

export { getAlbums };
