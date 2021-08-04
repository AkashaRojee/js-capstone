import API from './API.js';

export default class InvolvementAPI extends API {

  postLike(itemId) {

    super.url = new URL('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1FjVzZbfRqWdvrnYEwh6/likes');

    super.body = {
        item_id: itemId
    };

    super.post();

  }

}