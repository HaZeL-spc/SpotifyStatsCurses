import "./App.css";
import { useState, useEffect } from "react";
import { getArtists } from "./api/getArtists";
import MainPage from "./pages/MainPage";
import TopStats from "./pages/TopStats";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getArtists(token, setData);
    axios.get("http://127.0.0.1:8000/api/lyrics").then((res) => {
      console.log(res);
    });
  }, [token]);

  console.log(data);

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
