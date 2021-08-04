import {addListeners } from './library.js';
import MarvelAPI from './MarvelAPI.js';
import InvolvementAPI from './InvolvementAPI.js';
import Character from './Character.js';
import Grid from './Grid.js';

export default class Home {

  constructor() {
    this.base = new MarvelAPI();
    this.involvement = new InvolvementAPI();
    this.apiCharacters = [];
    this.apiLikes = [];
    this.characters = {};
    this.likes = {};
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
    let likeButtons = document.querySelectorAll('.like');
    addListeners(likeButtons, {'click': (e) => this.likeCharacter(e)});
  }

  async likeCharacter(e) {

    const name = e.target.previousElementSibling.innerHTML;
    const likeElement = e.target.parentElement.nextElementSibling;
    const itemId = this.characters[name].id;

    this.likes[itemId]++;
    this.characters[name].likes++;
    likeElement.innerHTML = this.likes[itemId] + ' Likes';

    await this.involvement.postLike(itemId);

  }

}