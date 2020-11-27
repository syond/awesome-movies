import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiGetRequest } from "../../services/movies.service";
import { Spinner } from "react-bootstrap";

import "./styles.css";

interface IMovie {
  id?: string;
  // adult?: false;
  // original_language?: string;
  original_title?: string;
  // title?: string;
  poster_path?: string;
  // //genres: [],
  // overview?: string;
  // popularity?: string;
  // //   production_companies: [],
  // //   production_countries: [],
  // release_date?: Date;
  // vote_average?: number;
  // vote_count?: number;
  // revenue?: number;
}

export const Home: React.FC = () => {
  const [upComingMovies, setUpComingMovies] = useState<IMovie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovie[]>([]);
  const [latestMovie, setLatestMovie] = useState<IMovie>();
  const [nextPageNumber, setnextPageNumber] = useState<number>(1);
  const [
    isloadingUpcomingMovies,
    setisLoadingUpcomingMovies,
  ] = useState<Boolean>(false);
  const [
    loadingNowPlayingMovies,
    setLoadingNowPlayingMovies,
  ] = useState<Boolean>(false);
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

  async function getUpComingMovies() {
    setisLoadingUpcomingMovies(true);

    const dataToRequest = {
      action: "movie",
      type: "upcoming",
      page: 1,
    };

    try {
      const response = await apiGetRequest(dataToRequest);

      const fourMovies = response.data.results.slice(0, 4);

      setUpComingMovies(fourMovies);

      setisLoadingUpcomingMovies(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNowPlayingMovies();
    getUpComingMovies();
    getLatestMovie();
  }, []);

  return (
    <div id="home-container">
      <header>
        <span>Welcome to Awesome Movies</span>
      </header>

      <div id="content">
        <main>
          <strong>Now playing in theaters</strong>
          <ul className="movies-grid">
            {loadingNowPlayingMovies ? (
              <Spinner animation="border" role="status" />
            ) : (
              nowPlayingMovies.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                >
                  <li key={movie.id}>
                    <img
                      alt="poster"
                      src={
                        "https://image.tmdb.org/t/p/w200" + movie.poster_path
                      }
                    />
                  </li>
                </Link>
              ))
            )}
          </ul>

          <button className="load-more" onClick={getNowPlayingMovies}>
            +
          </button>

          <strong>Upcoming</strong>
          <ul className="movies-grid">
            {isloadingUpcomingMovies ? (
              <Spinner animation="border" role="status" />
            ) : (
              upComingMovies.map((movie) => (
                <li key={movie.id}>
                  <img
                    alt="poster"
                    src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
                  />
                </li>
              ))
            )}
          </ul>

          <button className="load-more">+</button>

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
                      ? "https://image.tmdb.org/t/p/w200" +
                        latestMovie?.poster_path
                      : ""
                  }
                />
                <div className="movie-info">
                  <span>{latestMovie?.original_title}</span>
                </div>
              </li>
            </ul>
          )}
        </main>
      </div>
    </div>
  );
};
