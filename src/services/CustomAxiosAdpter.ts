import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';
import { IAdapter } from './types';

/**
 * Adapter customizado criado para o Axios que será utilizado
 * pelo Api Adapter.
 */
class CustomAxiosAdpter implements IAdapter {
	api: AxiosInstance;

	constructor() {
		dotenv.config();
		//this.api = axios;

		this.api = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}`,
			timeout: 1000,
		});

		//this.invoke();
	}

	invoke() {
		// this.api.create({
		// 	baseURL: `${process.env.REACT_APP_API_URL}`,
		// 	timeout: 1000,
		// });
	}
}

export { CustomAxiosAdpter };
