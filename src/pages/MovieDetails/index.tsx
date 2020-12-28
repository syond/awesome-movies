import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { IMovieDetails } from "../../interfaces";

import { apiGetRequest } from "../../services/movies.service";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Button from "../../components/Button";
import Movie from "../../components/Movie";

interface IRouteParams {
  id: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovieDetails>();

  const { id } = useParams<IRouteParams>();

  const history = useHistory();

  function handleBackButton() {
    history.goBack();
  }

  async function getMovieDetails() {
    const dataToRequest = {
      action: "movie",
      id: id,
    };

    const response = await apiGetRequest(dataToRequest);

    setMovie(response.data);
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <Layout>
      <Header title="Movie details" />
      <Main>
        <Button type="button" name="Back" onClick={handleBackButton} />
        <Movie
          backdropPath={movie?.backdrop_path!}
          posterPath={movie?.poster_path!}
          title={movie?.title!}
          voteAverage={movie?.vote_average!}
          genres={movie?.genres!}
          overview={movie?.overview!}
          spokenLanguages={movie?.spoken_languages!}
          popularity={movie?.popularity!}
          status={movie?.status!}
          releaseDate={movie?.release_date!}
          originalTitle={movie?.original_title!}
          tagline={movie?.tagline!}
          productionCompanies={movie?.production_companies!}
          productionCountries={movie?.production_countries!}
          homepage={movie?.homepage!}
        />
      </Main>
    </Layout>
  );
};

export default MovieDetails;
