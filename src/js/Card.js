import {createElement} from './library.js';

export default class Card {

  constructor(character) {
    this.container = '';
    this.character = character;
    return this.container;
  }

  set character(character) {

    this.container = createElement('div', 'flex-col card');
  
    let cardImage = createElement('img', '', {src: character.image});

    let cardBody = createElement('div', 'flex-col p-10');
  
    let cardHeader = createElement('div', 'card-header flex-row justify-between');
    let spanName = createElement('span', '', {}, character.name);
    let spanIcon = createElement('span', 'like material-icons pointer', {}, 'favorite_border');
    cardHeader.append(spanName, spanIcon);

    let spanLikes = createElement('span', 'flex-row justify-end', {}, character.likes + ' Likes');

    let buttonDiv = createElement('div', 'flex-row justify-center');
    let buttonComments = createElement('button', 'minimal pointer p-y-5 p-x-10 m-t-25', {type:'button'}, 'Comments');
    buttonDiv.append(buttonComments);
    
    cardBody.append(cardHeader, spanLikes, buttonDiv);
  
    this.container.append(cardImage, cardBody);
    
  }
}