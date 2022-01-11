import React from "react";
import "./App.css";
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Icon from "./components/Icono";

export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Icon></Icon>

      <Route
        component={ListOfGifs}
        path='/gif/:keyword'/>
        <Route  
          component={Home}
          path="/"/>
        <Route 
          component={SearchResults} 
          path="/search/:keyword"/>
           <Route  
          component={Detail}
          path="/gif/:id" />
      </section>
      
    </div>
  );
}
