import getGifs from "services/getGifs";
import {useEffect, useState, useContext} from 'react'
import GifsContext from 'context/GifsContext'


export function useGifs({keyword} ={keyword:null}) {
  const INITIAL_PAGE = 0

  const [loading, setLoading] = useState(false);
  const [loadingNextPage,setLoadingNextPage] = useState (false)

  const [page,setPage] = useState(INITIAL_PAGE)
  const {gifs,setGifs} = useContext(GifsContext)
  // Se recupera una keyword del local sotorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') 
  

  useEffect(
    function () {
      setLoading(true);

      getGifs({ keyword :keywordToUse })
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        //Guardar una keyword en el local storage
        localStorage.setItem('lastKeyword',keyword)
      });
    },
    [keyword,setGifs,keywordToUse]
  );

  useEffect(function(){
    if(page === INITIAL_PAGE ) return

    setLoadingNextPage(true)
    getGifs({keyword: keywordToUse, page})
    .then(nextGifs =>{
      setGifs(prevGifs=> prevGifs.concat(nextGifs))
      setLoadingNextPage(false)

    })
  },[page,keywordToUse,setGifs])

  return{loading,loadingNextPage, gifs,setPage}
}
