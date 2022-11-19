import { ApiAdapter } from './ApiAdapter';

import { IService } from './types';

class Service implements IService {
	private resource: string;
	private limit: number | undefined;
	private apiAdapter;

	constructor(resource: string, limit?: number) {
		this.resource = resource || '';
		this.limit = limit || 10;
		this.apiAdapter = new ApiAdapter().getInstance();
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
