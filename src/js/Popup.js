import createElement from './library.js';

export default class Popup {
  init() {
    this.build();
    this.setEventListener();
  }

  setEventListener() {
    let closingButton = document.querySelector('.closing-btn');
    let popupSection = document.querySelector('.popup');
    closingButton.addEventListener('click', () => {
      console.log('hello from the closing button');
      console.log(popupSection);
      document.body.removeChild(popupSection);
    });
    console.log(closingButton);
  }

  build() {
    let closingBtn = createElement(
      'span',
      'closing-btn justify-end',
      {},
      '&times;'
    );

    let img = createElement('img', '', {
      src: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
    });
    let h2 = createElement('h2', '', {}, 'popup title');
    let spanicon = createElement(
      'span',
      'material-icons flex-col justify-end',
      {},
      'favorite_border'
    );
    let spanLikes = createElement('span', '', {}, '0 Likes');

    let details1 = createElement('p', '', {}, 'super power:magic');
    let details2 = createElement('p', '', {}, 'age:30');
    let detailsDiv = createElement('div', 'details');
    detailsDiv.append(details1, details2);
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

    popupSection.append(
      closingBtn,
      img,
      h2,
      spanicon,
      spanLikes,
      detailsDiv,
      commentDiv,
      form
    );
    document.body.append(popupSection);
  }
}
