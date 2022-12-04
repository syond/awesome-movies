// export interface IApi {
// 	invoke();
// }

export interface IAdapter {
	getInstance();
}

export interface IRequest {
	get(url: string);
	post(url: string);
	update(url: string);
	delete(url: string);
}

export interface IService {
	save(data: Record<string, string> | undefined);
	list(queryParams: queryParamsType);
	show(queryParams: queryParamsType);
	delete();
}

export type queryParamsType =
	| Record<string, string | number, number>
	| undefined;
