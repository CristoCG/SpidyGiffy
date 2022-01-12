import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../components/hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import "./styles.css";

const POPULAR_GIFTS = ["Matrix", "Colombia", "Chile"];

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
        <button type="submit">Search</button>
      </form>
      <h3 className="App-title"> Última busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFTS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
