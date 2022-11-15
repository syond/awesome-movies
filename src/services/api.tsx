// import axios from 'axios';
// import dotenv from 'dotenv';
import { ApiAdapter } from './ApiAdapter';

// dotenv.config();

// const api = new ApiAdapter();
const api = new ApiAdapter();

// const api = axios.create({
// 	baseURL: `${process.env.REACT_APP_API_URL}`,
// 	timeout: 1000,
// });

export default api.instance;
