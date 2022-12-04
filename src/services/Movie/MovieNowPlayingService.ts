import { Service } from '../Service';

class MovieNowPlayingService extends Service {
	constructor() {
		super('movie/now_playing', {
			language: 'pt-BR',
		});
	}

	getByName() {
		this.show({ name: 'duna' });
	}
}

export { MovieNowPlayingService };
