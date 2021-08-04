import {createElement} from './library.js';

export default class Card {

  constructor(character) {
    this.container = '';
    this.character = character;
    return this.container;
  }

  set character(character) {

    this.container = createElement('div', 'flex-col');
  
    let img = createElement('img', '', {src: character.image});
  
    let spanDiv = createElement('div', 'flex-row justify-between');
    let spanName = createElement('span', '', {}, character.name);
    let spanIcon = createElement('span', 'material-icons like', {}, 'favorite_border');
    spanDiv.append(spanName, spanIcon);
  
    let spanLikes = createElement('span', 'flex-row justify-end', {}, character.likes + ' Likes');
  
    let buttonDiv = createElement('div', 'flex-row justify-center');
    let buttonComments = createElement('button', '', {type:'button'}, 'Comments');
    buttonDiv.append(buttonComments);
  
    this.container.append(img, spanDiv, spanLikes, buttonDiv);
    
  }
}