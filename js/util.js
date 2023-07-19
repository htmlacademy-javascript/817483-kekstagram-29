import { GENERATE_NAME, description, message } from './components.js';
/**
 * @param {Array} items
 * @returns {string}
 */

let id = 0;
const LENGTH = 25;

const generateId = () => {
  if (id >= 25) {
    id = 1;
  }
  return ++id;
};


const getAuthorsName = (items, index) => {
  index = 0;
  for(let i = 0; i <= index; i++) {
    index += i;
  }
  return items[index];
};



export function pickItems(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}
pickItems(description);



const createPicture = function() {
  const NAMES = getAuthorsName(GENERATE_NAME);
  const avatar = `img/avatar-${id}.svg`;
  id = generateId();
  const url = `photos/${id}.jpg`;
  const descriptionArray = pickItems(description);
  const likes = generateLikesInteger(15, 200);
  const comments = createPictureCommentsArray();

  return {NAMES, avatar, id, url, descriptionArray, likes, comments};
};



const createPictureArray = function(length = 25) {
  const array = new Array(length).fill().map((item) => createPicture(item));
  return array;
};
createPictureArray(LENGTH);



/**
 * @param {Array}
 * @returns {Array<Comment>}
 */
function createPictureCommentsArray() {
  const length = Math.floor(Math.random() * 10) + 1;

  const array = new Array(length).fill().map((item = 25) => createPictureComment(item));

  return array;
}
createPictureCommentsArray(message);

export default createPictureCommentsArray;




/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function generateLikesInteger (min, max) {
  const value = min + Math.random() * (max - min);
  return Math.round(value);
}
generateLikesInteger();




/**
 * @param {Array}
 * @returns {string}
 */
export function createPictureComment() {
  const randomIndex = Math.floor(Math.random() * message.length);
  const result = message[randomIndex];

  return result;
}
createPictureComment(message);
//console.log(createPictureComment(), createPicture(), createPictureCommentsArray());
export { createPicture, createPictureCommentsArray, createPictureArray };