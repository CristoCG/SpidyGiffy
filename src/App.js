import React ,{Suspense} from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Icon from "./components/Icono";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import Error_404 from "pages/404";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "Spiky",
        suscribeteAlCanal: true,
      }}
    >
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Icon></Icon>
            <GifsContextProvider>
              <Route component={Detail} path="/gif/:id" />
              <Route component={ListOfGifs} path="/gif/:keyword" />
              <Route component={HomePage} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Error_404} path="/404" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}
