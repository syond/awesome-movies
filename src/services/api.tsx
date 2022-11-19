// import axios from 'axios';
// import dotenv from 'dotenv';
import { ApiAdapter } from './ApiAdapter';

// só testando, mas isso não vai ficar aqui!
import { MovieService } from './MovieService';

const api = new ApiAdapter().getInstance();

const teste = new MovieService();

teste.list();

export default api;
