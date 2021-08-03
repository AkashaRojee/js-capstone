import createElement from './library.js';

export default class Home {

  init() {
    this.populate();
    this.setEventListeners();
  }

  populate() {
    let itemCards = [];
    let parentContainer = document.querySelector('.grid');
    for (let i = 0; i < 100; i++) {
      itemCards.push(this.buildItemCard());
    }
    parentContainer.append(...itemCards);
  }

  buildItemCard() {
    let itemCard = createElement('div', 'flex-col');
  
    let img = createElement(
      'img',
      '',
      {
        src: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
        width: '150px'
      });
  
    let spanDiv = createElement('div', 'flex-row justify-between');
    let spanName = createElement('span', '', {}, 'Name');
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