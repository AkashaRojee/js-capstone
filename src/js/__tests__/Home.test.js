import Home from '../Home.js';

jest.mock('../API.js');
jest.mock('../MarvelAPI.js');
jest.mock('../InvolvementAPI.js');

test('Characters counter from Marvel API', async () => {
  const expected = 20;
  document.body.innerHTML = '<header class="dark-grey-bg p-y-10 p-x-100"> <nav class="flex-row justify-center align-center"> <img class="m-r-auto" alt="Marvel logo" src="./assets/logo.png"/> <a href="#" class="minimal">Characters</a> <a href="#" class="minimal">Comics</a> <a href="#" class="minimal">Events</a> <img class="m-l-auto hidden" alt="Marvel logo" src="./assets/logo.png"/> </nav> </header> <main class="p-y-50"> <div class="grid justify-center p-x-100 scroll-y"> </div></main> <footer class="flex-row justify-center dark-grey-bg p-y-10"> <p>Created by Akasha and Yahya</p></footer>';
  const home = new Home();

  await home.init();
  const result = home.charactersCount;

  expect(result).toBe(expected);
});