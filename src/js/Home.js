import createElement from './library.js';
import API from './API.js';

export default class Home {

  constructor() {
    this.characters = [];
    this.itemCards = [];
  }

  async init() {
    await this.callAPI();
    this.populate();
    // this.setEventListeners();
  }

  async callAPI() {
    let api = new API();
    this.characters = await api.get();
  }

  populate() {
    this.createItems();
    this.appendItems();
  }

  createItems() {
    this.characters.forEach(character => {
      this.itemCards.push(this.buildItemCard(character.name, character.thumbnail));
    })
  }

  appendItems() {
    let parentContainer = document.querySelector('.grid');
    parentContainer.append(...this.itemCards);
  }

  buildItemCard(name, imageData) {
    let itemCard = createElement('div', 'flex-col');
  
    let img = createElement(
      'img',
      '',
      {
        src: `${imageData.path}.${imageData.extension}`,
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