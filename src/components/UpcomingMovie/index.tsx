import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiGetRequest } from "../../services/movies.service";

import { Spinner } from "react-bootstrap";
import List from "../List";

interface IMovie {
  id?: string;
  original_title?: string;
  poster_path?: string;
}

const UpcomingMovie: React.FC = () => {
  const [upComingMovies, setUpComingMovies] = useState<IMovie[]>([]);
  const [nextPageNumber, setnextPageNumber] = useState<number>(1);
  const [
    isloadingUpcomingMovies,
    setisLoadingUpcomingMovies,
  ] = useState<Boolean>(false);

  async function getUpComingMovies() {
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
    getUpComingMovies();
  }, []);

  return (
    <div>
      <strong>Upcoming</strong>

      <List>
        {isloadingUpcomingMovies ? (
          <Spinner animation="border" role="status" />
        ) : (
          upComingMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <li key={movie.id}>
                <img
                  alt="poster"
                  src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
                />
              </li>
            </Link>
          ))
        )}
      </List>

      <button className="load-more" onClick={getUpComingMovies}>
        +
      </button>
    </div>
  );
};

export default UpcomingMovie;
