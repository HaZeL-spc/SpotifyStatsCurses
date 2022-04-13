import React from "react";
import ArtistsCard from "../components/ArtistsCard";
import "../TopStats.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import InfoArtist from "./InfoArtist";

const YourTop = ({ data, token }) => {
  const [choosed, setChoosed] = useState("");

  return (
    <div className="your-top-container">
      {choosed === ""
        ? data.map((element) => (
            <ThemeProvider key={element.url} theme={element}>
              <ArtistsCard
                key={element.url}
                element={element}
                setChoosed={setChoosed}
              />
            </ThemeProvider>
          ))
        : data.map((element) => {
            if (element.name === choosed) {
              return (
                <InfoArtist key={element.url} element={element} token={token} />
              );
            }
          })}
    </div>
  );
};

export default YourTop;
