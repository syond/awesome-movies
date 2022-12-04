import { Service } from '../Service';

class MovieSearchService extends Service {
	constructor() {
		super('search/movie', {
			language: 'pt-BR',
		});
	}
}

export { MovieSearchService };
