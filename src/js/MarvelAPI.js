import API from './API.js';

export default class MarvelAPI extends API {
  
  async getCharacters() {
    super.url = new URL('https://gateway.marvel.com/v1/public/characters');

    super.params = {
      apikey: '86af4a1749d744f4f6c643c5c87a4f3c',
      limit: '10'
    };

    const data = await super.get();

    return data.data.results;
  }
}