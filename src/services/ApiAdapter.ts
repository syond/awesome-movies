import { CustomAxiosAdpter } from './CustomAxiosAdpter';

/**
 * Classe Adpter genérica que irá utilizar o Adpter customizado
 * para cada lib de requisição, como o axios por exemplo.
 * Essa classe será utilizada pela classe Request
 */
class ApiAdapter {
	private adpter: CustomAxiosAdpter;
	instance;

	constructor() {
		this.adpter = new CustomAxiosAdpter();
		this.instance = this.adpter.api;
	}
}

export { ApiAdapter };
