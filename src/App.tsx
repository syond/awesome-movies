import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles/global.css";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/movie" component={Movie} />
      <Route path="/search" component={Search} />
    </BrowserRouter>

    // rota index
    // rota movies
    // rota search
    // rota auth
  );
}

export default App;
