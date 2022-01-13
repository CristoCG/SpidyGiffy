import React, {useContext} from "react";

import Gif from "../../components/Gif";
import useGlbalGifs from "../../components/hooks/useGlobalGifs";

export default function Detail ({ params }){

  const gifs = useGlbalGifs()
  
  const gif = gifs.find(singleGif=> 
      singleGif.id === params.id
      )
  
  return <>
  <h3 className="App-title"><em>Gif:</em> {gif.title}</h3>
  <Gif {...gif}/> 
  </>
  
}