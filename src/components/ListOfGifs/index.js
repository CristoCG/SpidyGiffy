import React from "react";
import Gif from "../Gif";
import "./styles.css";

 function ListOfGifs({ gifs }) {
  console.log(gifs);
  return (
    <div className="ListOfGifs">
      {gifs?.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}

export default React.memo(ListOfGifs)
