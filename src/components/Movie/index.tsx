import React from "react";

import { IMovieComponentProps } from '../../interfaces';

import "./styles.css";

const Movie: React.FC<IMovieComponentProps> = ({
  backdropPath,
  posterPath,
  title,
  voteAverage,
  genres,
  overview,
  spokenLanguages,
  popularity,
  status,
  releaseDate,
  originalTitle,
  tagline,
  productionCompanies,
  productionCountries,
  homepage,
  children,
}) => {
  return (
    <div id="movie-container">
      {children}


      {backdropPath ? (
        <div className="backdrop-image">
          <img
            src={"https://image.tmdb.org/t/p/original" + backdropPath}
            alt="backdrop"
          />
        </div>
      ) : ("")}


      <div className="info-container">
        {posterPath ? (
          <div className="poster">
            <img
              alt="poster"
              src={"https://image.tmdb.org/t/p/w300" + posterPath}
            />
          </div>
        ) : ("")}

        <div className="movie-details">
          <div className="movie-title">
            {title ? (<h1>{title}</h1>) : ("")}
            {tagline ? (<span>{tagline}</span>) : ("")}
          </div>

          <div className="movie-info">
            {releaseDate ? (<span>{releaseDate}</span>) : ("")}
            <span className="maturity-number">13 anos</span>
            <span>2h 18min</span>
            {genres ? (<span>{genres.map((genre) => genre.name + "; ")}</span>) : ("")}
          </div>

          {overview ? (
            <div className="movie-synopsis">
              <span>{overview}</span>
            </div>
          ) : ("")}

          <div className="movie-more-details">
            <h4>More details</h4>

            {voteAverage ? (
              <>
                <strong>Vote Average:</strong>
                <span>{voteAverage}</span>
              </>

            ) : ("")}
            
            {spokenLanguages ? (
              <>
                <strong>Spoken Languages:{" "}</strong>
                <span>{spokenLanguages.map((language) => language.name + " | ")}</span>
              </>
            ) : ("")}

            {popularity ? (
              <>
                <strong>Popularity:</strong>
                <span>{popularity}</span>
              </>

            ) : ("")}

            {status ? (
              <>
                <strong>Status:</strong>
                <span>{status}</span>
              </>

            ) : ("")}

            {originalTitle ? (
              <>
                <strong>Original Title:</strong>
                <span>{originalTitle}</span>
              </>
            ) : ("")}

            {productionCompanies ? (
              <>
                <strong>Production Companies:</strong>
                <span>
                  {productionCompanies.map(
                    (company) =>
                      company.name + " - " + company.origin_country + " | "
                  )}
                </span>
              </>
            ) : ("")}

            {productionCountries ? (
              <>
                <strong>Production Countries:</strong>
                <span>{productionCountries.map((countrie) => countrie.name + " | ")}</span>
              </>
            ) : ("")}

            {homepage ? (
              <>
                <strong>Homepage:</strong>
                <span>
                  <a target="_blank" rel="noreferrer" href={homepage}>
                    {homepage}
                  </a>
                </span>
              </>
            ) : (
                ""
              )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
