import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiGetRequest } from "../../services/movies.service";

import "./styles.css";
import { Spinner } from "react-bootstrap";
import List from "../List";

interface IMovie {
  id?: string;
  adult: false;
  original_title?: string;
  poster_path?: string;
}

const NowPlayingMovie: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovie[]>([]);
  const [nextPageNumber, setnextPageNumber] = useState<number>(1);
  const [
    loadingNowPlayingMovies,
    setLoadingNowPlayingMovies,
  ] = useState<Boolean>(false);

  async function getNowPlayingMovies() {
    setLoadingNowPlayingMovies(true);

    const dataToRequest = {
      action: "movie",
      type: "now_playing",
      page: nextPageNumber,
    };

    try {
      const response = await apiGetRequest(dataToRequest);

      const nextDataToRequest = [...nowPlayingMovies, ...response.data.results];

      setNowPlayingMovies(nextDataToRequest);

      setnextPageNumber(response.data.page + 1);

      setLoadingNowPlayingMovies(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div id="nowplaying-container">
      <strong>Now playing in theaters</strong>

      <List>
        {loadingNowPlayingMovies ? (
          <Spinner animation="border" role="status" />
        ) : (
          nowPlayingMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <li key={movie.id}>
                <img
                  alt="poster"
                  src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
                />
              </li>
            </Link>
          ))
        )}
      </List>

      <button className="load-more" onClick={getNowPlayingMovies}>
        +
      </button>
    </div>
  );
};

export default NowPlayingMovie;
