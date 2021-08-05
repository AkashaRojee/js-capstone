import { addListeners, toggle } from './library.js';
import MarvelAPI from './MarvelAPI.js';
import InvolvementAPI from './InvolvementAPI.js';
import Character from './Character.js';
import Grid from './Grid.js';
import Popup from './Popup.js';

export default class Home {
  constructor() {
    this.base = new MarvelAPI();
    this.involvement = new InvolvementAPI();
    this.apiCharacters = [];
    this.apiLikes = [];
    this.characters = {};
    this.likes = {};
    this.itemId = 0;
    this.charactersCount = 0;
  }

  async init() {
    await this.getAPIData();
    this.objectifyAPIData();
    this.handleCounter();
    this.populateGrid();
    this.setEventListeners();
  }

  async getAPIData() {
    this.apiCharacters = await this.base.getCharacters();
    this.apiLikes = await this.involvement.getLikes();
  }

  objectifyAPIData() {
    this.objectifyLikes();
    this.objectifyCharacters();
  }

  objectifyLikes() {
    this.apiLikes.forEach((apiLike) => {
      this.likes[apiLike.item_id] = apiLike.likes;
    });
  }

  objectifyCharacters() {
    this.apiCharacters.forEach((apiCharacter) => {
      this.characters[apiCharacter.name] = new Character(
        apiCharacter.id,
        apiCharacter.name,
        this.likes[apiCharacter.id],
        apiCharacter.description,
        `${apiCharacter.thumbnail.path}.${apiCharacter.thumbnail.extension}`,
        apiCharacter.urls[0].url,
      );
    });
  }

  handleCounter() {
    this.setCounter();
    this.displayCounter();
  }

  setCounter() {
    this.charactersCount = this.apiCharacters.length;
  }

  displayCounter() {
    const charactersMenu = document.querySelector('nav a');
    charactersMenu.innerHTML = `Characters (${this.charactersCount})`;
  }

  populateGrid() {
    const grid = new Grid('grid');
    grid.build(this.characters).append();
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

    const likeButtons = document.querySelectorAll('.like');
    addListeners(
      likeButtons,
      {
        click: (e) => this.likeCharacter(e),
        mouseenter: (e) => toggle(e.target, 'innerHTML', ['favorite', 'favorite_border']),
        mouseleave: (e) => toggle(e.target, 'innerHTML', ['favorite', 'favorite_border']),
      },
    );
  }

  likeCharacter(e) {
    this.updateLocalLikes(e.target);
    this.involvement.postLike(this.itemId);
  }

  updateLocalLikes(element) {
    const name = element.previousElementSibling.innerHTML;
    const likeElement = element.parentElement.nextElementSibling;
    this.itemId = this.characters[name].id;

    this.likes[this.itemId] += 1;
    this.characters[name].likes += 1;

    likeElement.innerHTML = `${this.likes[this.itemId]} Likes`;
  }
}
