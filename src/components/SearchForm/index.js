import React, {useState} from "react";

function SearchForm({onSubmit}){

  const [keyword, setKeyword] = useState("");
  const handleSubmit = (evt) => {
    //evitar que refresque la pagina
    evt.preventDefault();
    // cambiar la ruta del navegador
    onSubmit({keyword})
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  
    return (
        <form onSubmit={handleSubmit}>

        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />

        <button id="search" type="submit">Search</button>
      </form>
    )
}

export default React.memo(SearchForm)