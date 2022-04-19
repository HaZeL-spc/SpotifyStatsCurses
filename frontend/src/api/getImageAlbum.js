import axios from "axios";

const getImageAlbum = async (newArtist, album, token) => {
  return axios.get("https://api.spotify.com/v1/albums/" + album["id"], {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export { getImageAlbum };
