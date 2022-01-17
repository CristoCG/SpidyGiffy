import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import "./styles.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, puhsLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    //evitar que refresque la pagina
    evt.preventDefault();
    // cambiar la ruta del navegador
    puhsLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button id="search" type="submit">Search</button>
      </form>
      <h3 className="App-title"> Latest search</h3>
      <ListOfGifs gifs={gifs} />
          <TrendingSearches/>

    </>
  );
}
