import { createElement } from './library.js';

export default class Popup {
  constructor() {
    this.characterName = '';
  }

  init(image, name, description) {
    this.build(image, name, description);
    this.setEventListener();
  }

  async setEventListener() {
    let closingButton = document.querySelector('.closing-btn');
    let popupSection = document.querySelector('.popup');
    closingButton.addEventListener('click', () => {
      document.body.removeChild(popupSection);
    });
  }

  build(image, name, description) {
    let closingBtn = createElement(
      'span',
      'closing-btn justify-end',
      {},
      '&times;'
    );

    let img = createElement('img', '', {
      src: image,
    });
    let h2 = createElement('h2', '', {}, name);

    let details1 = createElement('p', '', {}, `description : ${description}`);
    let detailsDiv = createElement('div', 'details');
    detailsDiv.append(details1);
    let commentUserName = createElement('h6', '', {}, 'user name');
    let commentContent = createElement('p', '', {}, 'comment somthing');
    let commentDiv = createElement(
      'div',
      'comments flex-col justify-between justify-center p-y-50'
    );
    commentDiv.append(commentUserName, commentContent);
    let form = createElement('form', 'flex-col');
    let formheader = createElement('h3');
    let input = createElement('input', '', {
      type: 'text',
      placeholder: 'yourname',
    });
    let textarea = createElement('textarea', '', {
      id: 'txtid',
      name: 'txtname',
      rows: '4',
      cols: '50',
      maxlength: '200',
      placeholder: 'text',
    });
    let commentBtn = createElement('button', '', {}, 'comment');
    form.append(formheader, input, textarea, commentBtn);
    let popupSection = createElement('section', 'popup flex-col');

    popupSection.append(closingBtn, img, h2, detailsDiv, commentDiv, form);
    document.body.append(popupSection);
  }
}
