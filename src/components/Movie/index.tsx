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
        {backdropPath ? (
          <img
          src={"https://image.tmdb.org/t/p/original" + backdropPath}
          alt="backdrop"
        />
        ) : ("")}        
      </div>

      <div className="info-container">
        <div className="poster">
          <img
            alt="poster"
            src={"https://image.tmdb.org/t/p/w300" + posterPath}
          />
        </div>

        <div className="movie-details">    

          <div className="movie-title">
            <h1>{title}</h1>
            {tagline ? (<span>{tagline}</span>) : ("")}            
          </div>
          

          <div className="movie-info">            
            <span>{releaseDate}</span>
            <span className="maturity-number">13 anos</span>
            <span>2h 18min</span>
            <span>Ficção científica; Ação</span>
          </div>

          <div className="movie-synopsis">
            <span>{overview}</span>
          </div>
        

          <strong>Vote Average:</strong>
          <span>{voteAverage}</span>
          <strong>Genres:</strong>
          {/* Erro: Tá dando undefined */}
          {/* <span> {genres.map((genre) => genre.name)}</span> */}
          <strong>Spoken Languages:{" "}</strong>
          {/* Erro: Tá dando undefined */}
          <span>{/* {spokenLanguages.map((language) => language.name + " | ")} */}</span><br />
          <strong>Popularity:</strong>
          <span>{popularity}</span>
          <strong>Status:</strong>
          <span>{status}</span>
          <strong>Original Title:</strong>
          <span>{originalTitle}</span>          
          <strong>Production Companies:</strong>
          {/* Erro: Tá dando undefined */}
          <span>
            {/* {productionCompanies.map(
                (company) =>
                  company.name + " - " + company.origin_country + " | "
              )} */}
          </span>
          <strong>Production Countries:</strong>
          {/* Erro: Tá dando undefined */}
          <span>{/* {productionCountries.map((countrie) => countrie.name + " | ")} */}</span>
          <strong>Homepage:</strong>
          <span>
            {homepage ? (
              <a target="_blank" rel="noreferrer" href={homepage}>
                {homepage}
              </a>
            ) : (
                "Not Found"
              )}
          </span>


        </div>
      </div>    
    </div>
  );
};

export default Movie;
