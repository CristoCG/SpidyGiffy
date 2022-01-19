import React, { useRef, useCallback, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import "./search.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
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
        <Helmet>
          <title>{title} | Spidy</title>
          <meta name = "description" content = {title}/>
          </Helmet>
          <h3 className="App-title">
            <em>Buscaste: {decodeURI(keyword).toLocaleUpperCase()}</em>
          </h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
