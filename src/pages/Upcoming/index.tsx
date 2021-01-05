import React, { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

import { IUpcomingMovie } from "../../interfaces";

import { apiGetRequest } from "../../services/movies.service";

import { Spinner } from "react-bootstrap";
import notFoundImg from "../../assets/images/error-404.jpg";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Input from "../../components/Input";
import List from "../../components/List";
import Button from "../../components/Button";

const Upcoming = () => {
  const [upComingMovies, setUpComingMovies] = useState<IUpcomingMovie[]>([]);
  const [nextPageNumber, setnextPageNumber] = useState<number>(1);
  const [
    isloadingUpcomingMovies,
    setisLoadingUpcomingMovies,
  ] = useState<Boolean>(false);

  const getUpComingMovies = useRef(() => {});

  getUpComingMovies.current = async () => {
    setisLoadingUpcomingMovies(true);

    const dataToRequest = {
      action: "movie",
      type: "upcoming",
      page: nextPageNumber,
    };

    try {
      const response = await apiGetRequest(dataToRequest);

      const nextDataToRequest = [...upComingMovies, ...response.data.results];

      setUpComingMovies(nextDataToRequest);

      setnextPageNumber(response.data.page + 1);

      setisLoadingUpcomingMovies(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUpComingMovies.current();
  }, []);

  return (
    <Layout>
      <Header title="Welcome to Awesome Movies">
        <Input name="search" placeholder="Search for any movie" />
      </Header>

      <Main>
        <List title="Upcoming">
          {isloadingUpcomingMovies ? (
            <Spinner animation="border" role="status" />
          ) : (
            upComingMovies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <li key={movie.id}>
                  <img
                    alt="poster"
                    src={`
                    ${
                      movie.poster_path
                        ? "https://image.tmdb.org/t/p/w200" + movie.poster_path
                        : notFoundImg
                    }
                    `}
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
          onClick={getUpComingMovies.current}
        />
      </Main>
    </Layout>
  );
};

export default Upcoming;
