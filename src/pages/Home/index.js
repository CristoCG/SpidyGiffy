import React, {useCallback} from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import "./styles.css";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();
  
  //Evita que se renderize más veces de las necesarias 
  
  const handleSubmit = useCallback(({ keyword }) => {
    // cambiar la ruta del navegador
    pushLocation(`/search/${keyword}`);
  },[pushLocation])

  return (
    <>
    <Helmet>
      <title>Home | Spidy</title>
    </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <h3 className="App-title"> Latest search</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}
