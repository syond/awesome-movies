import { ApiAdapter } from './ApiAdapter';

import { IService } from './types';

class Service implements IService {
	private resource: string;
	private queryParams: string | {};
	private apiAdapter;

	constructor(
		resource: string,
		queryParams?: Record<string, string> | undefined
	) {
		this.resource = resource || '';
		this.queryParams = this.serializeQueryParams(queryParams) || {};
		this.apiAdapter = new ApiAdapter().getInstance();
	}

	serializeQueryParams(value: Record<string, string> | undefined) {
		return new URLSearchParams(value).toString();
	}

	save() {}
	list() {
		const url = `${this.resource}?${this.queryParams}`;
		this.apiAdapter.get(url);
	}
	show() {}
	create() {}
	edit() {}
	delete() {}
}

export { Service };
