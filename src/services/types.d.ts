// export interface IApi {
// 	invoke();
// }

export interface IAdapter {
	api: const;
	invoke();
}

export interface IRequest {
	get();
	post();
	update();
	delete();
}

export interface IService {
	resource: const;
	limit: const;
	save();
	list();
	show();
	create();
	edit();
	delete();
}
