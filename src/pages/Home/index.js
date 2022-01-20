import React from "react";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import "./styles.css";
import SearchForm from "components/SearchForm";
import { Helmet ,HelmetProvider} from "react-helmet-async";


export default function Home() {

  const { loading, gifs } = useGifs();
  
  return (
    <>
    <HelmetProvider>
    <Helmet>
      <title>Home | Spidy</title>
    </Helmet>
    </HelmetProvider>
      <SearchForm />
      <h3 className="App-title"> Latest search</h3>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}
