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
    const modal = createElement('div', 'popup flex-row');

    const closeIcon = createElement('span', 'close material-icons pointer m-t-10 m-r-10', {}, 'close');

    const imageContainer = createElement('div', 'flex-col');
    const image = createElement('img', '', { src: this.character.image });
    imageContainer.append(image);

    const nonImageContainer = createElement('div', 'flex-col justify-evenly p-10');

    // DETAILS SECTION

    const detailsSection = createElement('section', 'flex-col');

    const name = createElement('h2', 'self-center', {}, this.character.name);
    const description = createElement('p', '', {}, `${this.character.description}` || 'No description available.');

    const divUrl = createElement('div');
    const url = createElement('a', 'minimal', { href: this.character.url, target: '_blank' }, 'Read more');
    divUrl.append(url);

    detailsSection.append(name, description, divUrl);

    // COMMENTS SECTION

    const commentsSection = createElement('section', 'flex-col');

    const commentsHeader = createElement('h3', 'comments-header self-center', {}, `Comments (${this.commentsCount})`);

    const commentsContainer = createElement('div', 'comments-container flex-col scroll-y');

    this.apiComments.forEach((apiComment) => {
      const commentRow = createElement('div', 'comment-row flex-row');
      const date = createElement('span', '', {}, apiComment.creation_date);
      const user = createElement('span', '', {}, apiComment.username);
      const comment = createElement('span', '', {}, apiComment.comment);
      commentRow.append(date, user, comment);
      commentsContainer.append(commentRow);
    });

    commentsSection.append(commentsHeader, commentsContainer);

    // FORM SECTION

    const formSection = createElement('section', 'flex-col');

    const formHeader = createElement('h3', 'self-center', {}, 'Add a comment');

    // let form = createElement('form', 'flex-col');
    const input = createElement('input', 'comment-field p-y-5 p-x-10', { type: 'text', placeholder: 'Your name', maxlength: '10' });
    const textarea = createElement('textarea', 'comment-field p-y-5 p-x-10', {
      id: 'txtid',
      name: 'txtname',
      rows: '1',
      cols: '50',
      maxlength: '50',
      placeholder: 'Your insights',
    });

    const divButton = createElement('div', 'self-center');
    const button = createElement('button', 'minimal pointer p-y-5 p-x-10', {}, 'Comment');
    divButton.append(button);

    // form.append(input, textarea, divButton);
    formSection.append(formHeader, input, textarea, divButton);

    // PARENTS

    nonImageContainer.append(detailsSection, commentsSection, formSection);

    modal.append(closeIcon, imageContainer, nonImageContainer);

    document.body.append(modal);
  }

  setEventListeners() {
    const closeButton = document.querySelector('.close');
    const modal = document.querySelector('.popup');
    closeButton.addEventListener('click', () => document.body.removeChild(modal));

    const commentButton = document.querySelector('.popup button');
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
      this.commentFields[1].value,
    );
  }

  resetCommentFields() {
    Array.from(this.commentFields).forEach((commentField) => { commentField.value = ''; });
    this.commentFields[0].focus();
  }

  updateLocalComments() {
    this.commentsCount += 1;

    const commentsContainer = document.querySelector('.comments-container');

    const commentsHeader = document.querySelector('.comments-header');
    commentsHeader.innerHTML = `Comments (${this.commentsCount})`;

    const commentRow = createElement('div', 'comment-row flex-row');
    const date = createElement('span', '', {}, new Date().toISOString().slice(0, 10));
    const user = createElement('span', '', {}, this.commentFields[0].value);
    const comment = createElement('span', '', {}, this.commentFields[1].value);
    commentRow.append(date, user, comment);

    commentsContainer.prepend(commentRow);
  }
}
