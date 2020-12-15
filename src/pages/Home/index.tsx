import React, { useState } from 'react';
import { apiGetRequest } from '../../services/movies.service';

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Input from '../../components/Input';
import Button from '../../components/Button';
import Main from "../../components/Main";
import NowPlayingMovie from "../../components/NowPlayingMovie";
import LatestMovie from "../../components/LatestMovie";


interface IMovie {
  id?: string;
  original_title?: string;
  poster_path?: string;
}

const Home: React.FC = () => {
  const [searchedMovie, setSearchedMovie] = useState<IMovie[]>([]);

  async function handleSearch(value: string){

    const dataToRequest = {
      action: "movie",
      search: true,
      query: value,
    };

    const movie = await apiGetRequest(dataToRequest);

    setSearchedMovie(movie.data.results);
  }

  return (
    <Layout>
        <Header />
        <Navbar />
        <Input 
          name="search" 
          placeholder="Search for any movie" 
          onChange={(e) => {handleSearch(e.target.value)}} 
        >
          {/* <Button name="Search" onClick={handleSearch} /> */}
        </Input>
      
        <div>
          { searchedMovie.map((result) => (
            <ul>
              <li key={result.id}>
                <img
                  alt="poster"
                  src={"https://image.tmdb.org/t/p/w200" + result.poster_path}
                />
              </li>
            </ul>
          )) }
        </div>

        <Main>
          <NowPlayingMovie />
          <LatestMovie />
        </Main>
    </Layout>
  );
}

export default Home;