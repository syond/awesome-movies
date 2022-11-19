// export interface IApi {
// 	invoke();
// }

export interface IAdapter {
	getInstance();
}

export interface IRequest {
	get();
	post();
	update();
	delete();
}

export interface IService {
	save();
	list();
	show();
	create();
	edit();
	delete();
}
