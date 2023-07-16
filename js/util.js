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
  id = generateId();
  const url = `photos/${id}.jpg`;
  const descriptionArray = pickItems(description);
  const likes = generateLikesInteger(15, 200);
  const comments = createPictureCommentsArray(generateLikesInteger(10, 100));

  return {id, url, descriptionArray, likes, comments};
};


const createPictureArray = function(length = 25) {
  const array = new Array(length).fill().map((item) => createPicture(item));
  return array;
};
createPictureArray(LENGTH);


/**
 * @param {Array}
 * @returns {Array<createPictureComment>}
 */
function createPictureCommentsArray(length) {
  const array = new Array(length).fill(1);

  return array.map((item) => createPictureComment(item));
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function generateLikesInteger (min, max) {
  const value = min + Math.random() * (max - min);
  return Math.round(value);
}


/**
 * @param {number} id
 * @returns {string}
 */
export function createPictureComment(id) {
  const avatar = `img/avatar-${generateLikesInteger(1, 6)}.svg`;
  const comments = pickItems(message);
  const NAMES = getAuthorsName(GENERATE_NAME);

  return {id, avatar, comments, NAMES};
}

export { createPicture, createPictureCommentsArray, createPictureArray };