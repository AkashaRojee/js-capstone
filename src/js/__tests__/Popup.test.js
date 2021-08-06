import Popup from '../Popup.js';

jest.mock('../API.js');
jest.mock('../InvolvementAPI.js');

test('Comments counter from Involvement API', async () => {

  const expected = 4;
  let popup = new Popup({
    "id": 1017100,
    "name": "A-Bomb (HAS)",
    "likes": 51,
    "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    "url": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=86af4a1749d744f4f6c643c5c87a4f3c"
  });

  await popup.init();
  const result = popup.commentsCount;

  expect(result).toBe(expected);
});