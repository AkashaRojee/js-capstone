import API from './API.js';

export default class InvolvementAPI extends API {
  constructor() {
    super();
    this.base = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6';
  }

  async getLikes() {
    this.url = new URL(`${this.base}/likes`);

    const data = await super.get();
    
    return data;
  }

  async getComments(itemId) {
    this.url = new URL(`${this.base}/comments`);

    this.params = {
      item_id: itemId,
    };

    const data = await super.get();

    if (data.error) return [];

    return data.reverse();
  }

  async postLike(itemId) {
    this.url = new URL(`${this.base}/likes`);

    super.body = {
      item_id: itemId,
    };

    await super.post();
  }

  async postComment(itemId, userName, commentContent) {
    this.url = new URL(`${this.base}/comments`);

    this.body = {
      item_id: itemId,
      username: userName,
      comment: commentContent,
    };

    await super.post();
  }
}
