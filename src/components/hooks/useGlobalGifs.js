import {useContext} from "react";
import GifsContext from "../../context/GifsContext";
 
export default function useGlbalGifs(){
    const {gifs} =useContext(GifsContext)
    return gifs
}