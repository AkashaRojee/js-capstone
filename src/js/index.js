import '../scss/style.scss';
import Home from './Home.js';

function init() {
  let home = new Home();
  home.init();
}

window.addEventListener('load', init);
