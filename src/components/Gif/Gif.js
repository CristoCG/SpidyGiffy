import React from "react"
import './Gif.css'
import { Link } from "wouter"

export default function Gif ({title, url, id}){
    return (
      <div className="Gif">
        <Link href={`#${id}`} className="Gif-Link">
          <h4>{title}</h4>
          <img alt={title} src={url} />
        </Link>
      </div>
    )
}