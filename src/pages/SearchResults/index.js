import React, { useEffect,useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from '../../components/Spinner'
import {useGifs} from '../../components/hooks/useGifs'

function SearchResults({ params }) {
  const { keyword } = params;
  const {loading, gifs} = useGifs({keyword})
  return <>
    {loading
      ? <Spinner/>
      :<ListOfGifs gifs={gifs}/>
       }
  </>
}

export default React.memo(SearchResults)