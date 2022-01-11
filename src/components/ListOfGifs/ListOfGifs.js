import React, { useState, useEffect } from "react"
import Gif from "../Gif/Gif"
import getGifs from "../../services/getGifs"

export default function ListOfGifs({ params }) {
  const {keyword} = params

  const [gifs, setGifs] = useState([])

  useEffect(function () {
      getGifs({ keyword }).then(gifs => setGifs(gifs));
  }, [keyword])

  return <div>
    {    
      gifs.map(({id, title, url}) => 
        <Gif
          id={id}
          key={id} 
          title={title} 
          url={url} 
        />
      )
    }
  </div> 
}
