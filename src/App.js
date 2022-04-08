import "./App.css";
import { useState, useEffect } from "react";
import { getArtists } from "./api/getArtists";
import MainPage from "./pages/MainPage";
import TopStats from "./pages/TopStats";

function App() {
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

  const [token, setToken] = useState("");

  console.log(window.localStorage.getItem("token"));
  return (
    <div className="App">
      {window.localStorage.getItem("token") ? (
        <TopStats token={token} setToken={setToken} />
      ) : (
        <MainPage token={token} setToken={setToken} />
      )}
    </div>
  );
}

export default App;
