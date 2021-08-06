import API from './API.js';

export default class InvolvementAPI extends API {

  async getLikes() {

    const data = await Promise.resolve(
      [{"likes":47,"item_id":1011334},{"likes":51,"item_id":1017100},{"likes":25,"item_id":1009144},{"likes":7,"item_id":1010699},{"likes":4,"item_id":1011266},{"likes":6,"item_id":1010903},{"likes":4,"item_id":1009149},{"item_id":1009148,"likes":2},{"likes":2,"item_id":1016823},{"likes":6,"item_id":1009146},{"likes":1,"item_id":1010846},{"item_id":1011297,"likes":1},{"likes":2,"item_id":1010354},{"item_id":1009240,"likes":2},{"item_id":1011198,"likes":2},{"likes":1,"item_id":1011120},{"item_id":1011031,"likes":2},{"item_id":1009150,"likes":2},{"likes":2,"item_id":1011170},{"item_id":1011194,"likes":1},{"likes":1,"item_id":1010870},{"item_id":1011175,"likes":1},{"likes":4,"item_id":1011176},{"likes":2,"item_id":1011136},{"item_id":1011227,"likes":2},{"item_id":1011164,"likes":2},{"item_id":1010836,"likes":1},{"item_id":1010672,"likes":1},{"item_id":1014990,"likes":3},{"item_id":1010784,"likes":1},{"item_id":1009435,"likes":1}]
    );

    return data;
  }

  async getComments(itemId) {

    const data = await Promise.resolve(
      [{"creation_date":"2021-08-05","username":"Akasha","comment":"BOMB"},{"creation_date":"2021-08-05","comment":"Bomb!","username":"Akasha"},{"username":"Akasha","creation_date":"2021-08-05","comment":"Rick Jones is A-Bomb!"},{"comment":"Rick Jones is a bomb!","creation_date":"2021-08-05","username":"Akasha"}]
    );
    
    return data.reverse();
  }

  // async postLike(itemId) {
  //   this.url = new URL(`${this.base}/likes`);

  //   super.body = {
  //     item_id: itemId,
  //   };

  //   await super.post();
  // }

  // async postComment(itemId, userName, commentContent) {
  //   this.url = new URL(`${this.base}/comments`);

  //   this.body = {
  //     item_id: itemId,
  //     username: userName,
  //     comment: commentContent,
  //   };

  //   await super.post();
  // }
}
