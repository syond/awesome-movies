import React from "react";

import "./styles.css";

import NowPlayingMovie from "../NowPlayingMovie";
import LatestMovie from "../LatestMovie";

const Main: React.FC = () => {
  return (
    <div id="content">
      <NowPlayingMovie />
      <LatestMovie />
    </div>
  );
};

export default Main;
