import { CustomAxiosAdpter } from './CustomAxiosAdpter';
import { IAdapter } from './types';

/**
 * Classe Adpter genérica que irá utilizar o Adpter customizado
 * para cada lib de requisição, como o axios por exemplo.
 * Essa classe será utilizada pela classe Request
 */
class ApiAdapter implements IAdapter {
	private adpter: CustomAxiosAdpter;
	private instance;

	constructor() {
		this.adpter = new CustomAxiosAdpter();
		this.instance = this.adpter.getInstance();
	}

	getInstance() {
		return this.instance;
	}
}

export { ApiAdapter };
