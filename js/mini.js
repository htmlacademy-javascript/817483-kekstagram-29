import renderModal from './render-modal.js';
import { renderPopups } from './gallery-popup.js';
const pictureContainer = document.querySelector('.pictures');
/**
 * @type {HTMLTemplateElement}
 */
const pictureThumbnail = document.querySelector('#picture');

/**
 * @prop {Array} comments
 * @prop {number} likes
 * @prop {string} url
 * @prop {string} description
 * @returns {Object} thumbnail
 */
const createTemplate = (data) => {

  const thumbnail = /** @type {HTMLAnchorElement} */ (pictureThumbnail.content.querySelector('.picture').cloneNode(true));
  thumbnail.querySelector('.picture__img').setAttribute('src', data.url);
  thumbnail.querySelector('.picture__img').setAttribute('alt', data.description);
  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;

  thumbnail.addEventListener('click', (event)=> {
    event.preventDefault();
    renderPopups(data);
    renderModal(data);
  });
  return thumbnail;
};

function createThumbnail(data) {
  pictureContainer.append(...data.map(createTemplate));
}
export { createThumbnail };
