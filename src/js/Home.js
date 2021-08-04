import {createElement, addListeners } from './library.js';
import MarvelAPI from './MarvelAPI.js';
import InvolvementAPI from './InvolvementAPI.js';
import Character from './Character.js';

export default class Home {

  constructor() {
    this.characters = {};
    this.likes = {};
    this.itemCards = [];
    this.base = new MarvelAPI();
    this.involvement = new InvolvementAPI();
  }

  async init() {
    const apiCharacters = await this.base.getCharacters();
    const apiLikes = await this.involvement.getLikes();
    this.createLikes(apiLikes);
    this.createCharacters(apiCharacters, apiLikes);
    this.populate();
    this.setEventListeners();
  }

  createLikes(apiLikes) {
    apiLikes.forEach(apiLike => {
      this.likes[apiLike.item_id] = apiLike.likes;
    })
  }

  createCharacters(apiCharacters, apiLikes) {
    apiCharacters.forEach(apiCharacter => {
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

  populate() {
    this.createItems();
    this.appendItems();
  }

  createItems() {
    Object.values(this.characters).forEach(character => {
      this.itemCards.push(this.buildItemCard(character));
    });
  }

  appendItems() {
    let parentContainer = document.querySelector('.grid');
    parentContainer.append(...this.itemCards);
  }

  buildItemCard(character) {
    let itemCard = createElement('div', 'flex-col');
  
    let img = createElement(
      'img',
      '',
      {
        src: character.image,
      });
  
    let spanDiv = createElement('div', 'flex-row justify-between');
    let spanName = createElement('span', '', {}, character.name);
    let spanIcon = createElement('span', 'material-icons like', {}, 'favorite_border');
    spanDiv.append(spanName, spanIcon);
  
    let spanLikes = createElement('span', 'flex-row justify-end', {}, character.likes + ' Likes');
  
    let buttonDiv = createElement('div', 'flex-row justify-center');
    let buttonComments = createElement(
      'button',
      'Comment-btn',
      { type: 'button' },
      'Comments'
    );
    buttonDiv.append(buttonComments);

    itemCard.append(img, spanDiv, spanLikes, buttonDiv);

    return itemCard;
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
