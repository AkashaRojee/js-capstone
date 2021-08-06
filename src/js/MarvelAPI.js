import API from './API.js';

export default class MarvelAPI extends API {
  constructor() {
    super();
    this.base = 'https://gateway.marvel.com/v1/public';
  }

  async getCharacters() {
    this.url = new URL(`${this.base}/characters`);

    this.params = {
      apikey: '86af4a1749d744f4f6c643c5c87a4f3c',
      limit: '20',
    };

    const data = await super.get();

    return data.data.results;
  }
}