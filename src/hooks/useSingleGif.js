import { useEffect, useState } from "react"
import {useGifs} from "./useGifs"
import getSingleGif from "../services/getSingleGif"

export default function useSingleGif ({id}){
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif =>singleGif.id===id)
    const [gif,setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] =useState(false)
    useEffect(function (){
        setIsLoading(true)
        if(!gif){
            //llamar al servicio si Gif no existe
            getSingleGif({id})
            .then(gif => {
                setGif(gif)
                setIsLoading(false)
                setIsError(false)
            }).catch(err =>{
                setIsLoading(false)
                setIsError(true)
            })
        }
    },[gif,id])

    return {gif,isLoading,isError}
}