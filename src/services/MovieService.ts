import { Service } from './Service';

class MovieService extends Service {
	constructor() {
		super('movie/now_playing', {
			api_key: 'b38408e34db8e90af9dc695ebae84f37',
			language: 'pt-BR',
			page: '1',
		});
	}
}

export { MovieService };
