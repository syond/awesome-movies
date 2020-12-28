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

        <div className="backdrop-image">
          <img
            src={"https://image.tmdb.org/t/p/original" + backdropPath}
            alt="backdrop"
          />
        </div>

        <div className="poster">
          <img
            alt="poster"
            src={"https://image.tmdb.org/t/p/w300" + posterPath}
          ></img>
        </div>

        <div className="movie-details">
          <p>
            Title: <strong>{title}</strong> <br />
            Vote Average: <strong>{voteAverage}</strong> <br />
          

            {/* Erro: Tá dando undefined */}
            {/* Genres: <strong>{genres.map((genre) => genre.name + " | ")}</strong> */}
            <br />



            Overview: <strong>{overview}</strong> <br />


            Spoken Languages:{" "}
            <strong>

              {/* Erro: Tá dando undefined */}
              {/* {spokenLanguages.map((language) => language.name + " | ")} */}
            </strong>



            <br />
            Popularity: <strong>{popularity}</strong> <br />
            Status: <strong>{status}</strong> <br />
            Release Date: <strong>{releaseDate}</strong> <br />
            Original Title: <strong>{originalTitle}</strong> <br />
            Tagline: <strong>{tagline}</strong> <br />


            Production Companies:{" "}
            <strong>
              {/* Erro: Tá dando undefined */}
              {/* {productionCompanies.map(
                (company) =>
                  company.name + " - " + company.origin_country + " | "
              )} */}
            </strong>



            <br />

            
            Production Countries:{" "}
            <strong>
              {/* Erro: Tá dando undefined */}
              {/* {productionCountries.map((countrie) => countrie.name + " | ")} */}
            </strong>{" "}



            <br />
            Homepage:{" "}
            <strong>
              {homepage ? (
                <a target="_blank" rel="noreferrer" href={homepage}>
                  {homepage}
                </a>
              ) : (
                "Not Found"
              )}
            </strong>
            <br />
          </p>
        </div>
    </div>
  );
};

export default Movie;
