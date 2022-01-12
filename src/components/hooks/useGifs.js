import getGifs from "../../services/getGifs";
import {useEffect, useState, useContext} from 'react'
import GifsContext from '../../context/GifsContext'


export function useGifs({keyword} ={keyword:null}) {

  const [loading, setLoading] = useState(false);
  const {gifs,setGifs} = useContext(GifsContext)
  

  useEffect(
    function () {
      setLoading(true);
      // Se recupera una keyword del local sotorage
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') 

      getGifs({ keyword :keywordToUse })
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        //Guardar una keyword en el local storage
        localStorage.setItem('lastKeyword',keyword)
      });
    },
    [keyword,setGifs]
  );
  return{loading,gifs}
}
