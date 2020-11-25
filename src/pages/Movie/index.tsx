import React, { useState, useEffect } from "react";

import { apiGetRequest } from "../../services/movies.service";
// import { Link } from "react-router-dom";

interface IMovie {
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export default function Movie() {
  const [movie, setMovie] = useState<IMovie>();

  async function getMovieDetails() {
    const dataToRequest = {
      action: "movie",
      type: 622855, // Teste. Isso aqui tem que vir do filme que o usuário clicar.
      page: 1,
    };

    const response = await apiGetRequest(dataToRequest);

    setMovie(response.data);
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <div>
        <img
          alt="poster"
          src={"https://image.tmdb.org/t/p/w300" + movie?.poster_path}
        ></img>
      </div>

      <p>
        Title: <strong>{movie?.title}</strong> <br />
        Vote Average: <strong>{movie?.vote_average}</strong> <br />
        Genres:{" "}
        <strong>{movie?.genres.map((genre) => genre.name + " | ")}</strong>
        <br />
        Overview: <strong>{movie?.overview}</strong> <br />
        Spoken Languages:{" "}
        <strong>
          {movie?.spoken_languages.map((language) => language.name + " | ")}
        </strong>
        <br />
        Popularity: <strong>{movie?.popularity}</strong> <br />
        Status: <strong>{movie?.status}</strong> <br />
        Release Date: <strong>{movie?.release_date}</strong> <br />
        Original Title: <strong>{movie?.original_title}</strong> <br />
        Tagline: <strong>{movie?.tagline}</strong> <br />
        Production Companies:{" "}
        <strong>
          {movie?.production_companies.map(
            (company) => company.name + " - " + company.origin_country + " | "
          )}
        </strong>
        <br />
        Production Countries:{" "}
        <strong>
          {movie?.production_countries.map((countrie) => countrie.name + " | ")}
        </strong>{" "}
        <br />
        Homepage:{" "}
        <strong>
          {movie?.homepage ? (
            <a target="_blank" rel="noreferrer" href={movie?.homepage}>
              {movie?.homepage}
            </a>
          ) : (
            "Not Found"
          )}
        </strong>
        <br />
      </p>
    </div>
  );
}
