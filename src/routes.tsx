import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import Movie from "./pages/MovieDetails";
import Upcoming from './pages/Upcoming';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={App} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/upcoming" component={Upcoming} />
      {/* <Route component={Error404} /> */}
    </BrowserRouter>
  );
}

export default Routes;
