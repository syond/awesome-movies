// import axios from 'axios';
// import dotenv from 'dotenv';
import { ApiAdapter } from './ApiAdapter';

// só testando, mas isso não vai ficar aqui!
import { Service } from './Service';

const api = new ApiAdapter().getInstance();

const teste = new Service();

teste.config('movie');
teste.list();

export default api;
