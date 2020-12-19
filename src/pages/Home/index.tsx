import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { IMovie } from "../../interfaces";
import { apiGetRequest } from "../../services/movies.service";

import { Spinner } from "react-bootstrap";
import notFoundImg from "../../assets/images/error-404.jpg";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Input from "../../components/Input";
import List from "../../components/List";
import Button from "../../components/Button";

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovie[]>([]);
  const [nextPageNumber, setnextPageNumber] = useState<number>(1);
  const [
    loadingNowPlayingMovies,
    setLoadingNowPlayingMovies,
  ] = useState<Boolean>(false);
  const [searchedMovie, setSearchedMovie] = useState<IMovie[]>([]);
  const [otherInfos, setotherInfos] = useState<IMovie>();
  const [
    isLoadingSearchedMovie,
    setisLoadingSearchedMovie,
  ] = useState<Boolean>();

  async function handleSearch(value: string) {
    setisLoadingSearchedMovie(true);

    const dataToRequest = {
      action: "movie",
      search: true,
      query: value,
    };

    try {
      const movie = await apiGetRequest(dataToRequest);

      const movieData = movie.data;
      const movieResults = movie.data.results;

      setSearchedMovie(movieResults);
      setotherInfos(movieData);

      setisLoadingSearchedMovie(false);
    } catch (error) {
      console.log(error);
    }
  }

  const getNowPlayingMovies = useRef(() => {});

  getNowPlayingMovies.current = async () => {
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
  };

  useEffect(() => {
    getNowPlayingMovies.current();
  }, []);

  return (
    <Layout>
      <Header>
        <Input
          name="search"
          placeholder="Search for any movie"
          onChange={(e) => {
            if (e.target.value !== "") {
              handleSearch(e.target.value);
            } else {
              setSearchedMovie([]);
              setotherInfos({});
            }
          }}
        />
      </Header>

      <Main>
        {isLoadingSearchedMovie ? (
          <Spinner animation="border" role="status" />
        ) : (
          <>
            <List title="Now playing in theaters">
              {searchedMovie.length !== 0 ? (
                searchedMovie.map((result) => (
                  <Link to={`/movie/${result.id}`}>
                    <li key={result.id}>
                      <img
                        alt="poster"
                        src={`
                          ${
                            result.poster_path
                              ? "https://image.tmdb.org/t/p/w200" +
                                result.poster_path
                              : notFoundImg
                          }
                          `}
                      />
                    </li>
                  </Link>
                ))
              ) : loadingNowPlayingMovies ? (
                <Spinner animation="border" role="status" />
              ) : (
                nowPlayingMovies.map((movie) => (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
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
            </List>
            <Button
              type="button"
              name="+"
              className="load-more"
              onClick={getNowPlayingMovies.current}
            />
            Total pages: {otherInfos?.total_pages}
            Total results: {otherInfos?.total_results}
          </>
        )}
      </Main>
    </Layout>
  );
};

export default Home;
