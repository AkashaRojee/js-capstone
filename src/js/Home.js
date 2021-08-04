import {createElement, addListeners } from './library.js';
import MarvelAPI from './MarvelAPI.js';
import InvolvementAPI from './InvolvementAPI.js';
import Character from './Character.js';
import Card from './Card.js';
import Grid from './Grid.js';

export default class Home {

  constructor() {
    this.base = new MarvelAPI();
    this.involvement = new InvolvementAPI();
    this.apiCharacters = [];
    this.apiLikes = [];
    this.characters = {};
    this.likes = {};
    this.itemCards = [];
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
    likeButtons.forEach(likeButton => {
      likeButton.addEventListener('click', () => this.likeCharacter(likeButton.previousElementSibling.innerHTML, likeButton.parentElement.nextElementSibling));
    })
  }

  async likeCharacter(name, likeElement) {
    let itemId = this.characters[name].id;
    await this.involvement.postLike(itemId);
    this.likes[itemId]++;
    this.characters[name].likes++;
    likeElement.innerHTML = this.likes[itemId] + ' Likes';
  }

}