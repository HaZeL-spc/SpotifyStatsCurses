import { ARTISTS_ENDPOINT, HOWMANYARTISTS } from "../Information";
import axios from "axios";
import { getAlbums } from "./getAlbums";

const getArtists = async (token, setData) => {
  console.log(token);
  if (token) {
    //get information about artists
    var newArtists = [];
    console.log(token);

    await axios
      .get(ARTISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        for (let i = 0; i < HOWMANYARTISTS; i++) {
          var newArtist = {};
          newArtist["name"] = response.data.items[i].name;
          newArtist["url"] = response.data.items[i].external_urls.spotify;
          newArtist["genres"] = response.data.items[i].genres;
          newArtist["images"] = response.data.items[i].images;
          newArtist["id"] = newArtist["url"].split("/")[4];

          //getAlbums(newArtist, token);
          newArtists.push(newArtist);
        }
        setData(newArtists);
        // setArtists(newArtists, token);
      })
      .catch((error) => {
        console.log(error);
      });
    return newArtists;
  }
};

export { getArtists };
