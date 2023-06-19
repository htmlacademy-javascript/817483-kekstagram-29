import { message, description } from './components';
/**
 * @param {Array} items
 * @returns {string}
 */
export function pickItems(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}
pickItems(description);


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
