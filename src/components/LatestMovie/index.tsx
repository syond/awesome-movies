/**
 * 
 * Tem que ver se vai precisar disso aqui ainda.
 * Não está sendo utizado em nenhum lugar.
 * 
 */



import React, { useState, useEffect } from "react";

import { apiGetRequest } from "../../services/movies.service";

import { Spinner } from "react-bootstrap";
import "./styles.css";

interface IMovie {
  id?: string;
  adult: false;
  original_title?: string;
  poster_path?: string;
}

const LatestMovie: React.FC = () => {
  const [latestMovie, setLatestMovie] = useState<IMovie>();
  const [loadingLatestMovie, setLoadingLatestMovie] = useState<Boolean>(false);

  async function getLatestMovie() {
    setLoadingLatestMovie(true);

    const dataToRequest = {
      action: "movie",
      type: "latest",
      page: 1,
    };

    try {
      const response = await apiGetRequest(dataToRequest);

      setLatestMovie(response.data);

      setLoadingLatestMovie(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLatestMovie();
  }, []);

  return (
    <div id="latestmovie-container">
      <strong>Latest Movie</strong>
      {loadingLatestMovie ? (
        <Spinner animation="border" role="status" />
      ) : (
        <ul className="movies-grid">
          <li key={latestMovie?.id}>
            <img
              alt="poster"
              src={
                latestMovie?.poster_path
                  ? "https://image.tmdb.org/t/p/w200" + latestMovie?.poster_path
                  : ""
              }
            />
            <div className="movie-info">
              <span>{latestMovie?.original_title}</span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LatestMovie;
