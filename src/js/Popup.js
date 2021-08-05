import { createElement } from './library.js';

export default class Popup {
  constructor(character) {
    this.character = character;
  }

  init() {
    this.build();
    this.setEventListener();
  }

  async setEventListener() {
    let closeButton = document.querySelector('.close');
    let popupSection = document.querySelector('.popup');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(popupSection);
    });
  }

  build() {

    let modal = createElement('div', 'popup flex-row');

    let closeIcon = createElement('span', 'close material-icons pointer m-t-10 m-r-10', {}, 'close');

    let imageContainer = createElement('div', 'flex-col')
    let image = createElement('img', '', {src: this.character.image});
    imageContainer.append(image);

    let nonImageContainer = createElement('div', 'flex-col justify-evenly p-10');  

    //DETAILS SECTION

    let detailsSection = createElement('section', 'flex-col');

    let name = createElement('h2', 'self-center', {}, this.character.name);
    let description = createElement('p', '', {}, `${this.character.description}` || `No description available from API`);
    
    let divUrl = createElement('div');
    let url = createElement('a', 'minimal', {href: this.character.url, target: '_blank'}, 'Read more');
    divUrl.append(url);

    detailsSection.append(name, description, divUrl);
    
    //COMMENTS SECTION

    let commentsSection = createElement('section', 'flex-col');
      
    let commentsHeader = createElement('h3', 'self-center', {}, 'Comments (n)');

    let commentsContainer = createElement('div');
    for (let i = 0; i < 3; i++) {
      let commentRow = createElement('div', 'flex-row');
      let date = createElement('span', '', {}, '05/11/2021');
      let user = createElement('span', '', {}, 'Name:');
      let comment = createElement('span', '', {}, 'Comment ' + i);
      commentRow.append(date, user, comment);
      commentsContainer.append(commentRow);
    }

    commentsSection.append(commentsHeader, commentsContainer);

    //FORM SECTION
    
    let formSection = createElement('section', 'flex-col');

    let formHeader = createElement('h3', 'self-center', {}, 'Add a comment');

    let form = createElement('form', 'flex-col');
    let input = createElement('input', 'p-y-5 p-x-10', {type: 'text', placeholder: 'Your name'});
    let textarea = createElement('textarea', 'p-y-5 p-x-10', {
      id: 'txtid',
      name: 'txtname',
      rows: '2',
      cols: '50',
      placeholder: 'Your insights',
    });

    let divButton = createElement('div', 'self-center');
    let button = createElement('button', 'minimal pointer p-y-5 p-x-10', {}, 'Comment');
    divButton.append(button);

    form.append(input, textarea, divButton);
    formSection.append(formHeader, form);

    //PARENTS

    nonImageContainer.append(detailsSection, commentsSection, formSection);

    modal.append(closeIcon, imageContainer, nonImageContainer);

    document.body.append(modal);
  }
}
