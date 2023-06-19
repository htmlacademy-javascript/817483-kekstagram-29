// В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
const description = [
    'Описание 1',
    'Описание 2',
    'Описание 3',
    'Описание 4'
];

const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let id = 0;
const LENGTH = 25;

const generateId = () => ++id;

const GENERATE_NAME = [
  'Mask',
  'Alyona',
  'Dima',
  'Zhenya',
  'Rodya'
];

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
console.log(createPictureArray(LENGTH));

/**
 * @param {number} id
 * @returns {Picture}
 */
function createPicture() {
  const NAMES = getAuthorsName(GENERATE_NAME);
  const avatar = `img/avatar-${id}.svg`; // генерацию идентификатора в аватар чуточку позже допишу, там нужно от 1 до 6 сформировать
  id = generateId();
  const url = `photos/${id}.jpg`;
  const descriptionArray = pickItems(description);
  const likes = generateLikesInteger(15, 200);
  const comments = createPictureComment();

  return {NAMES, avatar, id, url, descriptionArray, likes, comments};
}
createPicture();
console.log(createPicture());
/**
 * @param {Array} items
 * @returns {string}
 */
function pickItems(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}
pickItems(description);

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateLikesInteger (min, max) {
  const value = min + Math.random() * (max - min);
  return Math.round(value);
}
generateLikesInteger();

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

/**
 * @param {Array}
 * @returns {string}
 */
function createPictureComment() {
  const randomIndex = Math.floor(Math.random() * message.length);
  const result = message[randomIndex];

  return result;
}
createPictureComment(message);
