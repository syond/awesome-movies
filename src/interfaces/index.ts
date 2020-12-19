import { InputHTMLAttributes } from "react";

export interface IMovie {
  id?: string;
  original_title?: string;
  poster_path?: string;
  total_pages?: number;
  total_results?: number;
  adult?: false;
}

export interface IUpcomingMovie {
  id?: string;
  original_title?: string;
  poster_path?: string;
}

export interface IMovieDetails {
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
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

export interface IMovieComponentProps {
  backdropPath: string;
  posterPath: string;
  title: string;
  voteAverage: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  overview: string;
  spokenLanguages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  popularity: number;
  status: string;
  releaseDate: string;
  originalTitle: string;
  tagline: string;
  productionCompanies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  productionCountries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  homepage: string;
  children?: React.ReactNode;
}

export interface IInputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  placeholder: string;
  children?: React.ReactNode;
}

export interface IApiProps {
  action: string;
  search?: Boolean;
  type?: string;
  id?: string;
  page?: number;
  region?: string;
  query?: string;
}
