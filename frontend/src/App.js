import "./App.css";
import { useState, useEffect } from "react";
import { getArtists } from "./api/getArtists";
import MainPage from "./pages/MainPage";
import TopStats from "./pages/TopStats";

function App() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    //deleteToken();
    getArtists(token, setData);
    //console.log(newArtists);
    //changeToken();
  }, [token]);

  console.log(token);

  return (
    <div className="App">
      {token ? (
        <TopStats token={token} setToken={setToken} data={data} />
      ) : (
        <MainPage token={token} setToken={setToken} />
      )}
    </div>
  );
}

export default App;
