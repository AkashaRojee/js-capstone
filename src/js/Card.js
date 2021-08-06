import { createElement } from './library.js';

export default class Card {
  constructor(character) {
    this.container = '';
    this.character = character;
    return this.container;
  }

  set character(character) {
    this.container = createElement('div', 'flex-col card');

    const cardImage = createElement('img', '', { src: character.image });

    const cardBody = createElement('div', 'flex-col p-10');

    const cardHeader = createElement('div', 'card-header flex-row justify-between');
    const spanName = createElement('span', '', {}, character.name);
    const spanIcon = createElement('span', 'like material-icons pointer', {}, 'favorite_border');
    cardHeader.append(spanName, spanIcon);

    const spanLikes = createElement('span', 'flex-row justify-end', {}, `${character.likes} Likes`);

    const buttonDiv = createElement('div', 'flex-row justify-center');
    const buttonComments = createElement('button', 'Comment-btn minimal pointer p-y-5 p-x-10 m-t-25', { type: 'button' }, 'Comments');
    buttonDiv.append(buttonComments);

    cardBody.append(cardHeader, spanLikes, buttonDiv);

    this.container.append(cardImage, cardBody);
  }
}