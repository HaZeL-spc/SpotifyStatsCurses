import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { getArtists } from "./api/getArtists";
import MainPage from "./pages/MainPage";

function App() {
  const [token, setToken] = useState("");
  const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   //get token
  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }
  //   //get artists and all the data
  //   //let newArtists = getArtists(token);
  //   //setArtists(newArtists);

  //   setToken(token);
  // }, [token]);

  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
            // onClick={login}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </header> */}
      <MainPage />
    </div>
  );
}

export default App;
