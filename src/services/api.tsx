// import axios from 'axios';
// import dotenv from 'dotenv';
import { ApiAdapter } from './ApiAdapter';

// só testando, mas isso não vai ficar aqui!
import { MovieNowPlayingService } from './Movie/MovieNowPlayingService';

const api = new ApiAdapter().getInstance();

// const teste = new MovieService();

// teste.getByName();

export default api;
