import InvolvementAPI from './InvolvementAPI.js';
import { createElement } from './library.js';

export default class Popup {

  constructor(character) {
    this.character = character;
    this.involvement = new InvolvementAPI();
    this.apiComments = [];
    this.commentsCount = 0;
    this.commentFields = [];
  }

  async init() {
    await this.getComments();
    this.setCounter();
    this.build();
    this.setEventListeners();
  }

  async getComments() {
    this.apiComments = await this.involvement.getComments(this.character.id);
  }

  setCounter() {
    this.commentsCount = this.apiComments.length;
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
    let description = createElement('p', '', {}, `${this.character.description}` || `No description available.`);
    
    let divUrl = createElement('div');
    let url = createElement('a', 'minimal', {href: this.character.url, target: '_blank'}, 'Read more');
    divUrl.append(url);

    detailsSection.append(name, description, divUrl);
    
    //COMMENTS SECTION

    let commentsSection = createElement('section', 'flex-col');
      
    let commentsHeader = createElement('h3', 'comments-header self-center', {}, `Comments (${this.commentsCount})`);

    let commentsContainer = createElement('div', 'comments-container flex-col scroll-y');

    this.apiComments.forEach((apiComment) => {
      let commentRow = createElement('div', 'comment-row flex-row');
      let date = createElement('span', '', {}, apiComment.creation_date);
      let user = createElement('span', '', {}, apiComment.username);
      let comment = createElement('span', '', {}, apiComment.comment);
      commentRow.append(date, user, comment);
      commentsContainer.append(commentRow);
    });

    commentsSection.append(commentsHeader, commentsContainer);

    //FORM SECTION
    
    let formSection = createElement('section', 'flex-col');

    let formHeader = createElement('h3', 'self-center', {}, 'Add a comment');

    // let form = createElement('form', 'flex-col');
    let input = createElement('input', 'comment-field p-y-5 p-x-10', {type: 'text', placeholder: 'Your name', maxlength: '10'});
    let textarea = createElement('textarea', 'comment-field p-y-5 p-x-10', {
      id: 'txtid',
      name: 'txtname',
      rows: '1',
      cols: '50',
      maxlength: '50',
      placeholder: 'Your insights',
    });

    let divButton = createElement('div', 'self-center');
    let button = createElement('button', 'minimal pointer p-y-5 p-x-10', {}, 'Comment');
    divButton.append(button);

    // form.append(input, textarea, divButton);
    formSection.append(formHeader, input, textarea, divButton);

    //PARENTS

    nonImageContainer.append(detailsSection, commentsSection, formSection);

    modal.append(closeIcon, imageContainer, nonImageContainer);

    document.body.append(modal);
  }

  setEventListeners() {

    let closeButton = document.querySelector('.close');
    let modal = document.querySelector('.popup');
    closeButton.addEventListener('click', () => document.body.removeChild(modal));

    let commentButton = document.querySelector('.popup button');
    commentButton.addEventListener('click', () => this.handleComment());

  }

  handleComment() {
    this.getCommentFields();
    this.postComment();
    this.updateLocalComments();
    this.resetCommentFields();
  }

  getCommentFields() {
    this.commentFields = document.querySelectorAll('.comment-field');
  }

  postComment() {
    this.involvement.postComment(
      this.character.id,
      this.commentFields[0].value,
      this.commentFields[1].value
    );
  }

  resetCommentFields() {
    Array.from(this.commentFields).forEach((commentField) => { commentField.value = ''; });
    this.commentFields[0].focus();
  }

  updateLocalComments() {
    this.commentsCount += 1;

    let commentsContainer = document.querySelector('.comments-container')

    let commentsHeader = document.querySelector('.comments-header');
    commentsHeader.innerHTML = `Comments (${this.commentsCount})`;

    let commentRow = createElement('div', 'comment-row flex-row');
    let date = createElement('span', '', {}, new Date().toISOString().slice(0,10));
    let user = createElement('span', '', {}, this.commentFields[0].value);
    let comment = createElement('span', '', {}, this.commentFields[1].value);
    commentRow.append(date, user, comment);

    commentsContainer.prepend(commentRow);
  }
}
