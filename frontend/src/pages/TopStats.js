import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../TopStats.css";
import Albums from "./Albums";
import Artists from "./Artists";
import YourTop from "./YourTop";

const TopStats = ({ token, setToken, data }) => {
  const [currentPage, setCurrentPage] = useState("your-top");

  const logout = () => {
    // setToken("");
    window.localStorage.removeItem("token");
    console.log(window.localStorage.getItem("token"));
    setToken("");
  };

  // console.log(currentPage);
  return (
    <div className="top-stats-container">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "your-top" ? (
        <YourTop data={data} />
      ) : currentPage === "artists" ? (
        <Artists />
      ) : (
        <Albums />
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default TopStats;
