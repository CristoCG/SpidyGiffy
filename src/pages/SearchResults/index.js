import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from 'components/Spinner'
import {useGifs} from 'components/hooks/useGifs'
import './search.css'


export default function SearchResults({ params }) {
  const { keyword } = params;
  const {loading, gifs, setPage} = useGifs({keyword})

  const handleNextPage = () => setPage(prevPage=> prevPage + 1)

  const handlePreviousPage = () => setPage(prevPage=> prevPage - 1)

  return <>
    {loading
      ? <Spinner/>
      :<>
        <h3 className="App-title"><em>Buscaste: {decodeURI(keyword).toLocaleUpperCase()}</em></h3>
        <ListOfGifs gifs={gifs}/>
      </>
    }
    <i>
      <button id='previous-page' onClick={handlePreviousPage}>Previous page</button> 
      <button id='next-page' onClick={handleNextPage}>Next page</button>
    </i>
  </>
}

