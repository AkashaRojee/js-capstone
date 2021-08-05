import Card from './Card.js';

export default class Grid {
  constructor(className) {
    this.container = '';
    this.className = className;
    this.cards = [];
  }

  set className(className) {
    this.container = document.querySelector(`.${className}`);
  }

  build(characters) {
    Object.values(characters).forEach((character) => {
      this.cards.push(new Card(character));
    });
    return this;
  }

  append() {
    this.container.append(...this.cards);
  }
}