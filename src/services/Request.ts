import { IRequest } from './types';
import { ApiAdapter } from './ApiAdapter';

class Request implements IRequest {
	private apiAdapter;

	constructor() {
		this.apiAdapter = new ApiAdapter().getInstance();
	}

	get(url: string) {
		return this.apiAdapter.get(url);
	}
	post(url: string) {
		return this.apiAdapter.post(url);
	}
	update(url: string) {
		return this.apiAdapter.put(url);
	}
	delete(url: string) {
		return this.apiAdapter.delete(url);
	}
}

export { Request };
