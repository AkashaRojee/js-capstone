import createElement from './library.js';
import API from './API.js';
import Character from './Character.js';

export default class Home {

  constructor() {
    this.characters = {};
    this.itemCards = [];
  }

  async init() {
    let apiCharacters = await this.callAPI();
    this.createCharacterMap(apiCharacters);
    this.populate();
    // this.setEventListeners();
  }

  callAPI() {
    let api = new API();
    return api.get();
  }

  createCharacterMap(apiCharacters) {
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
    let spanIcon = createElement('span', 'material-icons', {}, 'favorite_border');
    spanDiv.append(spanName, spanIcon);
  
    let spanLikes = createElement('span', 'flex-row justify-end', {}, '0 Likes');
  
    let buttonDiv = createElement('div', 'flex-row justify-center');
    let buttonComments = createElement('button', '', {type:'button'}, 'Comments');
    buttonDiv.append(buttonComments);
  
    itemCard.append(img, spanDiv, spanLikes, buttonDiv)
  
    return itemCard;
  }

}