import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>{Year}</div>
      <div>
        <img src={Poster} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
