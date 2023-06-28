import {description, message, GENERATE_NAME} from './components';
import { pickItems } from './util';
import {generateLikesInteger} from './util';
import { createPictureComment } from './util';
// В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

let id = 0;
const LENGTH = 20;

const generateId = () => ++id;

const getAuthorsName = (items, index) => {
  index = 0;
  for(let i = 0; i <= index; i++) {
    index += i;
  }
  return items[index];
};
/**
 * @param {Number} length
 * @returns {Array}
 */
function createPictureArray(length) {
  const array = new Array(length).fill().map((item) => createPicture(item));
  return array;
}
createPictureArray(LENGTH);

/**
 * @param {number} id
 * @returns {Picture}
 */
function createPicture() {
  const NAMES = getAuthorsName(GENERATE_NAME);
  const avatar = `img/avatar-${id}.svg`;
  id = generateId();
  const url = `photos/${id}.jpg`;
  const descriptionArray = pickItems(description);
  const likes = generateLikesInteger(15, 200);
  const comments = createPictureComment();

  return {NAMES, avatar, id, url, descriptionArray, likes, comments};
}
createPicture();

/**
 * @param {Array}
 * @returns {Array<Comment>}
 */
function createPictureCommentsArray() {
  const length = Math.floor(Math.random() * 10) + 1;
  const array = new Array(length).fill().map((item) => createPictureComment(item));

  return array;
}
createPictureCommentsArray(message);
