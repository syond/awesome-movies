import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles/global.css";

import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/movie/:id" component={Movie} />
      {/* <Route component={Error404} /> */}
    </BrowserRouter>
  );
}

export default App;
