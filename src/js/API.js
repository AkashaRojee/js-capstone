export default class API {

  async get() {

    let url = new URL('http://gateway.marvel.com/v1/public/characters');

    const params = {
      apikey: '86af4a1749d744f4f6c643c5c87a4f3c',
      limit: '10'
    }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url);

    const data = await response.json();

    const array = data.data.results;

    return array;

  }
}