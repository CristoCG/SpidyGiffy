import React, { useRef, useCallback, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import "./search.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet ,HelmetProvider} from "react-helmet-async";
import SearchForm from "components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating = 'g', lang = 'en' } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating, lang });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs 
  ? `${gifs.length} results of: ${decodeURI(keyword)}` :''

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000)
    ,[setPage]);

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]

    
  );
  

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
        <HelmetProvider>
        <Helmet>
          <title>{title} | Spidy</title>
          <meta name = "description" content = {title}/>
          </Helmet>
        </HelmetProvider>
        <SearchForm initialKeyword={keyword} initialRating={rating}  initialLang={lang}/>
          <h3 className="App-title">
            <em>Search: {decodeURI(keyword).toLocaleUpperCase()}</em>
          </h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
