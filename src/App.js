import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import search from "./search.svg";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageRelodad, setPageRelodad] = useState(true);

  window.addEventListener("beforeunload", function (e) {
    setPageRelodad(true);
  });

  const searchMovie = async (title) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c6a8c372&s=${title}`)
      .then((res) => {
        if (!res.ok) throw new Error("no Movies found");
        return res.json();
      })
      .then((movies) => {
        setMovies(movies.Search);
        setPageRelodad(false);
      })
      .catch((err) => {
        console.error("There was a problem with the fetch operation:", err);
      });
  };

  return (
    <div className="app">
      <h1>MovieBuzz</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search For Movies"
        />
        <img src={search} onClick={() => searchMovie(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div>{pageRelodad ? <></> : <h2>No Movies Found</h2>}</div>
      )}
    </div>
  );
};

export default App;
