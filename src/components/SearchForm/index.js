import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import "../../pages/Home/styles.css";

const RATINGS = ["g", "pg", "pg-13", "r"];
const LANGS = [
  "en",
  "es",
  "pt",
  "id",
  "fr",
  "ar",
  "tr",
  "th",
  "vi",
  "de",
  "it",
  "ja",
  "zh-CN",
  "zh-TW",
  "ru",
  "ko",
  "pl",
  "nl",
  "ro",
  "hu",
  "sv",
  "cs",
  "hi",
  "bn",
  "da",
  "fa",
  "tl",
  "fi",
  "he",
  "ms",
  "no",
  "uk",
];

function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0],
  initialLang = LANGS[0],
}) {
  const [path, pushLocation] = useLocation();
  const { keyword, rating, lang, updateKeyword, updateRating, updateLang } =
    useForm({
      initialKeyword,
      initialRating,
      initialLang,
    });

  const handleSubmit = (evt) => {
    //evitar que refresque la pagina
    evt.preventDefault();
    // cambiar la ruta del navegador
    pushLocation(`/search/${keyword}/${rating}/${lang}`);
  };

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  const handleChangeLang = (evt) => {
    updateLang(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        required
        value={keyword}
      />
      <div id="btns">
        <button id="search" type="submit">
          Search
        </button>
        <select value={rating} onChange={handleChangeRating}>
          <option disabled>Rating type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <select value={lang} onChange={handleChangeLang}>
          <option disabled>Select Language</option>
          {LANGS.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);
