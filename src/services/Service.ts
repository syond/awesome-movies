import { ApiAdapter } from './ApiAdapter';

import { IService } from './types';

class Service implements IService {
	private resource: string;
	private limit: number | undefined;
	private apiAdapter;

	constructor() {
		this.resource = '';
		this.limit = 10;
		this.apiAdapter = new ApiAdapter().getInstance();
	}

	config(resource: string, limit?: number) {
		this.resource = resource;
		this.limit = limit;
	}

	save() {}
	list() {
		const url = `${this.resource}`;
		this.apiAdapter.get(url);
	}
	show() {}
	create() {}
	edit() {}
	delete() {}
}

export { Service };
