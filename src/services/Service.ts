import { Request } from './Request';

import { IRequest, IService, queryParamsType } from './types';

class Service implements IService {
	private resource: string;
	private baseQueryParams: string | {};
	private request: IRequest;
	private baseUrlRequest: string;

	constructor(resource: string, queryParams?: queryParamsType) {
		this.resource = resource;
		this.baseQueryParams = this.serializeQueryParams({
			// Needs refactor to make this work with Axios Headers. Read the API doc.
			api_key: 'b38408e34db8e90af9dc695ebae84f37',
			page: '1',
			...queryParams,
		});

		this.baseUrlRequest = `${this.resource}?${this.baseQueryParams}`;

		this.request = new Request();
	}

	list(queryParams?: queryParamsType) {
		let url = this.baseUrlRequest;

		if (queryParams) {
			url = `${this.baseUrlRequest}&${this.serializeQueryParams(queryParams)}`;
		}

		this.request.get(url);
	}

	show(queryParams?: queryParamsType) {
		let url = this.baseUrlRequest;

		if (queryParams) {
			url = `${this.baseUrlRequest}&${this.serializeQueryParams(queryParams)}`;
		}

		this.request.get(url);
	}

	/**
	 * @todo
	 * It needs to check on API docs how the structure to make this type of request.
	 */
	save(data: Record<string, string> | undefined) {
		if (data?.id) {
			// this.request.update(this.baseUrlRequest, data);
		}

		// this.request.post(this.baseUrlRequest, data);
	}

	/**
	 * @todo
	 * It needs to check on API docs how the structure to make this type of request.
	 */
	delete() {}

	private serializeQueryParams(value: Record<string, string> | undefined) {
		return new URLSearchParams(value).toString();
	}
}

export { Service };
