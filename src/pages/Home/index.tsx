import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { IMovie } from '../../interfaces';
import { apiGetRequest } from '../../services/movies.service';

import { Spinner } from 'react-bootstrap';
import notFoundImg from '../../assets/images/error-404.jpg';
import './styles.css';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Main from '../../components/Main';
import SearchInput from '../../components/SearchInput';
import List from '../../components/List';
import Button from '../../components/Button';

const Home = () => {
	const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovie[]>([]);
	const [nextPageNumber, setnextPageNumber] = useState<number>(1);
	const [loadingNowPlayingMovies, setLoadingNowPlayingMovies] =
		useState<Boolean>(false);
	const [searchedMovie, setSearchedMovie] = useState<IMovie[]>([]);
	const [otherInfos, setotherInfos] = useState<IMovie>();
	const [isLoadingSearchedMovie, setisLoadingSearchedMovie] =
		useState<Boolean>();

	async function handleSearch(value: string) {
		setisLoadingSearchedMovie(true);

		const dataToRequest = {
			action: 'movie',
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
		} catch (error: any) {
			throw new Error(error);
		}
	}

	const getNowPlayingMovies = useRef(() => {});

	getNowPlayingMovies.current = async () => {
		setLoadingNowPlayingMovies(true);

		const dataToRequest = {
			action: 'movie',
			type: 'now_playing',
			page: nextPageNumber,
		};

		try {
			const response = await apiGetRequest(dataToRequest);

			const nextDataToRequest = [...nowPlayingMovies, ...response.data.results];

			setotherInfos(response.data);

			setNowPlayingMovies(nextDataToRequest);

			setnextPageNumber(response.data.page + 1);

			setLoadingNowPlayingMovies(false);
		} catch (error: any) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		getNowPlayingMovies.current();
	}, []);

	return (
		<Layout>
			<Header title="Welcome to Awesome Movies">
				<SearchInput
					onChange={(e) => {
						if (e.target.value !== '') {
							handleSearch(e.target.value);
						} else {
							setSearchedMovie([]);
							setotherInfos({});
						}
					}}
				/>
			</Header>

			<Main>
				<div id="results-info">
					<span className="total-pages">
						<strong>Total pages:</strong>
						<span>{otherInfos?.total_pages}</span>
					</span>
					<span className="total-results">
						<strong>Total results:</strong>
						<span>{otherInfos?.total_results}</span>
					</span>
				</div>
				{isLoadingSearchedMovie ? (
					<Spinner animation="border" role="status" />
				) : (
					<>
						<List title="Now playing in theaters">
							{searchedMovie.length !== 0 ? (
								searchedMovie.map((result) => (
									<Link to={`/movie/${result.id}`} key={result.id}>
										<li>
											<img
												alt="poster"
												src={`
                          ${
														result.poster_path
															? 'https://image.tmdb.org/t/p/w200' +
															  result.poster_path
															: notFoundImg
													}
                          `}
											/>
										</li>
									</Link>
								))
							) : loadingNowPlayingMovies ? (
								<Spinner animation="border" role="status" />
							) : (
								nowPlayingMovies.map((movie) => (
									<Link key={movie.id} to={`/movie/${movie.id}`}>
										<li key={movie.id}>
											<img
												alt="poster"
												src={
													'https://image.tmdb.org/t/p/w200' + movie.poster_path
												}
											/>
										</li>
									</Link>
								))
							)}
						</List>
						<Button
							name="+"
							className="load-more"
							onClick={getNowPlayingMovies.current}
						/>
					</>
				)}
			</Main>
		</Layout>
	);
};

export default Home;
