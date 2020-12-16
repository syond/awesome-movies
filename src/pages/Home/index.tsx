import React, { useState } from "react";
import { Link } from "react-router-dom";

import { apiGetRequest } from "../../services/movies.service";

import { Spinner } from "react-bootstrap";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import List from "../../components/List";
import Main from "../../components/Main";
import NowPlayingMovie from "../../components/NowPlayingMovie";
import LatestMovie from "../../components/LatestMovie";

interface IMovie {
  id?: string;
  original_title?: string;
  poster_path?: string;
  total_pages?: number;
  total_results?: number;
}

const Home: React.FC = () => {
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

  return (
    <Layout>
      <Header />
      <Navbar />
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

      <Main>
        {isLoadingSearchedMovie ? (
          <Spinner animation="border" role="status" />
        ) : (
          <>
            <List>
              {searchedMovie.length !== 0 ? (
                searchedMovie.map((result) => (
                  <Link to={`/movie/${result.id}`}>
                    <li key={result.id}>
                      <img
                        alt="poster"
                        src={
                          "https://image.tmdb.org/t/p/w200" + result.poster_path
                        }
                      />
                    </li>
                  </Link>
                ))
              ) : (
                <>
                  <NowPlayingMovie />
                  <LatestMovie />
                </>
              )}
            </List>
            Total pages: {otherInfos?.total_pages}
            Total results: {otherInfos?.total_results}
          </>
        )}
      </Main>
    </Layout>
  );
};

export default Home;
