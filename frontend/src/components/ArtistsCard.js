import React from "react";
import "../TopStats.css";
import styled from "styled-components";

const Card = styled.div`
  flex: 25%;
  background-image: url("${(props) => {
    return props.theme.images[0].url;
  }}");
  background-position: center;
  background-size: cover;
`;

const ArtistsCard = ({ element, setChoosed }) => {
  return (
    <div
      className="top-artist-container"
      onClick={() => setChoosed(element.name)}
    >
      <Card></Card>
      <div className="card-artist-info">
        <h3>{element.name}</h3>
        <h5>genre: {element.genres[0]}</h5>
      </div>
    </div>
  );
};

export default ArtistsCard;
