import React from "react";
import Navbar from "../components/Navbar";
import "../TopStats.css";

const TopStats = ({ token, setToken }) => {
  const logout = () => {
    // setToken("");
    window.localStorage.removeItem("token");
    console.log(window.localStorage.getItem("token"));
    setToken("");
  };

  return (
    <div className="top-stats-container">
      <Navbar />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default TopStats;
