import {addListeners} from './library.js';
import MarvelAPI from './MarvelAPI.js';
import InvolvementAPI from './InvolvementAPI.js';
import Character from './Character.js';
import Popup from './Popup.js';
import Grid from './Grid.js';

export default class Home {

  constructor() {
    this.base = new MarvelAPI();
    this.involvement = new InvolvementAPI();
    this.apiCharacters = [];
    this.apiLikes = [];
    this.characters = {};
    this.likes = {};
    this.itemId = 0;
  }

  async init() {
    await this.callAPIs();
    this.objectifyAPIData();
    this.populateGrid();
    this.setEventListeners();
  }

  async callAPIs() {
    this.apiCharacters = await this.base.getCharacters();
    this.apiLikes = await this.involvement.getLikes();
  }

  objectifyAPIData() {
    this.objectifyLikes();
    this.objectifyCharacters();
  }

  objectifyLikes() {
    this.apiLikes.forEach(apiLike => {
      this.likes[apiLike.item_id] = apiLike.likes;
    })
  }

  objectifyCharacters() {
    this.apiCharacters.forEach(apiCharacter => {
      this.characters[apiCharacter.name] =
        new Character(
          apiCharacter.id, 
          apiCharacter.name,
          this.likes[apiCharacter.id], 
          apiCharacter.description, 
          apiCharacter.thumbnail.path + '.' + apiCharacter.thumbnail.extension,
          apiCharacter.urls[0].url);
    });
  }

  populateGrid() {
    let grid = new Grid('grid');
    grid.build(this.characters).append();
  }

  setEventListeners() {

    const commentBtn = document.querySelectorAll('.Comment-btn');

    let popup = new Popup();
    console.log(popup);
    commentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popup.init();
      });
    });

    let likeButtons = document.querySelectorAll('.like');
    addListeners(likeButtons, {'click': (e) => this.likeCharacter(e)});
  }

  likeCharacter(e) {
    this.updateLocalLikes(e.target);
    this.involvement.postLike(this.itemId);
  }

  updateLocalLikes(element) {
    const name = element.previousElementSibling.innerHTML;
    const likeElement = element.parentElement.nextElementSibling;
    this.itemId = this.characters[name].id;

    this.likes[this.itemId]++;
    this.characters[name].likes++;

    likeElement.innerHTML = this.likes[this.itemId] + ' Likes';
  }

}
