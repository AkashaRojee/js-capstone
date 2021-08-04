import {createElement, addListeners } from './library.js';
import MarvelAPI from './MarvelAPI.js';
import InvolvementAPI from './InvolvementAPI.js';
import Character from './Character.js';

export default class Home {

  constructor() {
    this.characters = {};
    this.itemCards = [];
  }

  async init() {
    const apiCharacters = await this.callAPI();
    this.createCharacters(apiCharacters);
    this.populate();
    this.setEventListeners();
  }

  setEventListeners() {
    let likeButtons = document.querySelectorAll('.like');
    likeButtons.forEach(likeButton => {
      likeButton.addEventListener('click', () => this.likeCharacter(likeButton.previousElementSibling.innerHTML));
    })
  }

  likeCharacter(name) {
    let itemId = this.characters[name].id;
    let api = new InvolvementAPI();
    api.postLike(itemId);
  }

  callAPI() {
    let api = new MarvelAPI();
    return api.getCharacters();
  }

  createCharacters(apiCharacters) {
    apiCharacters.forEach(apiCharacter => {
      this.characters[apiCharacter.name] =
        new Character(
          apiCharacter.id, 
          apiCharacter.name, 
          apiCharacter.description, 
          apiCharacter.thumbnail.path + '.' + apiCharacter.thumbnail.extension,
          apiCharacter.urls[0].url);
    });
  }

  populate() {
    this.createItems();
    this.appendItems();
  }

  createItems() {
    Object.values(this.characters).forEach(character => {
      this.itemCards.push(this.buildItemCard(character.name, character.image));
    });
  }

  appendItems() {
    let parentContainer = document.querySelector('.grid');
    parentContainer.append(...this.itemCards);
  }

  buildItemCard(name, image) {
    let itemCard = createElement('div', 'flex-col');
  
    let img = createElement(
      'img',
      '',
      {
        src: image,
      });
  
    let spanDiv = createElement('div', 'flex-row justify-between');
    let spanName = createElement('span', '', {}, name);
    let spanIcon = createElement('span', 'material-icons like', {}, 'favorite_border');
    spanDiv.append(spanName, spanIcon);
  
    let spanLikes = createElement('span', 'flex-row justify-end', {}, '0 Likes');
  
    let buttonDiv = createElement('div', 'flex-row justify-center');
    let buttonComments = createElement('button', '', {type:'button'}, 'Comments');
    buttonDiv.append(buttonComments);
  
    itemCard.append(img, spanDiv, spanLikes, buttonDiv)
  
    return itemCard;
  }

}