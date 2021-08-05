import API from './API.js';

export default class InvolvementAPI extends API {
  async postLike(itemId) {
    super.url = new URL('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6/likes');

    super.body = {
      item_id: itemId,
    };

    await super.post();
  }

  async getLikes() {
    super.url = new URL('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6/likes');

    const data = await super.get();

    return data;
  }
}
