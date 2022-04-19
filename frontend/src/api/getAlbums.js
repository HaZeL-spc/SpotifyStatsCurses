import { ALBUMS_ENDPOINT } from "../Information";
import axios from "axios";
import { getSongs } from "./getSongs";
import { getImageAlbum } from "./getImageAlbum";
import { getLyrics } from "genius-lyrics-api";
import { getLyricsGenius } from "./getLyricsGenius";
import { findCursesSong } from "./findCursesSong";
import { useLayoutEffect } from "react/cjs/react.production.min";

const getAlbums = async (newArtist, token, setAlbumData) => {
  var albums = [];
  // get information about albums
  let request = await axios.get(ALBUMS_ENDPOINT(newArtist["id"]), {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = request.data.items;
  //loop on every album of artist
  for (let j = 0; j < data.length; j++) {
    var album = {};
    if (data[j].album_group === "album") {
      if (
        localStorage.getItem(`${newArtist["name"]}_${data[j].name}`) === null
      ) {
        album["artist_name"] = newArtist["name"];
        album["artists_id"] = newArtist["id"];
        album["name"] = data[j].name;
        album["id"] = data[j].id;
        album["href"] = data[j].href;
        album["total_tracks"] = data[j].total_tracks;
        album["release_date"] = data[j].release_date;

        // get image and name of artist of album
        const imageData = await getImageAlbum(newArtist, album, token);
        const artistName = imageData.data.artists[0].name;
        album["image"] = imageData.data.images[0];

        var songs = [];
        const songsData = await getSongs(album, token, artistName);
        const songsDataConv = songsData.data.items;

        for (let k = 0; k < songsDataConv.length; k++) {
          let song = {};
          song["name"] = songsDataConv[k].name;
          song["id"] = songsDataConv[k].id;
          song["href"] = songsDataConv[k].href;
          song["track_number"] = songsDataConv[k].track_number;
          songs.push(song);
        }
        // get lyrics
        await getLyricsGenius(artistName, album, songs);
        album["songs"] = songs;

        // if not in local storage set item to local storage
        localStorage.setItem(
          `${album["artist_name"]}_${album["name"]}`,
          JSON.stringify(album)
        );
        //console.log("getImageAlbum ", album);
      } else {
        let retrievedObject = localStorage.getItem(
          `${newArtist["name"]}_${data[j].name}`
        );
        album = JSON.parse(retrievedObject);
      }
    } else break;
    albums.push(album);
  }
  newArtist["albums"] = albums;
  setAlbumData(albums);
  return albums;
};

export { getAlbums };
