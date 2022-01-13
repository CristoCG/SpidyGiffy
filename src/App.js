import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Icon from "./components/Icono";
import StaticContext from "./context/StaticContext";
import {GifsContextProvider}  from "./context/GifsContext";


export default function App() {
  return (
    <StaticContext.Provider value={{    
    name: 'Spiky',
    suscribeteAlCanal: true}}>

    <div className="App">
      <section className="App-content">
        <Icon></Icon>
        <GifsContextProvider>
          <Route 
          component={Detail} 
          path="/gif/:id" />
          <Route 
          component={ListOfGifs} 
          path="/gif/:keyword" /> 
          <Route 
          component={Home} 
          path="/" />
          <Route 
          component={SearchResults} 
          path="/search/:keyword" />
      </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}
