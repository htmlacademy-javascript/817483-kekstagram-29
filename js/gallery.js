import { renderPopup } from './gallery-popup.js';
import { throttle } from './util.js';
const pictureContainer = document.querySelector('.pictures');
/**
 * @type {HTMLTemplateElement}
 */
const pictureThumbnail = document.querySelector('#picture');

const galleryMenu = document.querySelector('.img-filters');

function initiateGallery(data) {
  const filter = createFilter(data);

  galleryMenu.classList.remove('img-filters--inactive');
  galleryMenu.addEventListener('click', onGalleryMenuClick);

  galleryMenu.addEventListener('toggle', throttle((event) => {
    const selectedButton = /** @type {HTMLButtonElement} */ (event.target);
    const selectedValue = /** @type {FilterType} */ (selectedButton.getAttribute('value'));

    renderThumbnails(filter(selectedValue));
  }), true);

  renderThumbnails(data);
}

/**
 * @param {{randomLimit?: number}} options
 * @param {Array <CreatePicture>} data
 * @returns {(type: FilterType) => Array <CreatePicture>}
 */
function createFilter(data, options = {}) {

  const {randomLimit = 10} = options;

  return (type) => {
    const items = structuredClone(data);

    if (type === 'random') {
      return items.sort(() => Math.random() - 0.5).slice(0, randomLimit);
    }

    if (type === 'discussed') {
      return items.sort((a, b) => (b.comments.length - a.comments.length));
    }

    return items;
  };
}

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onGalleryMenuClick(event) {
  const selectedButton = event.target.closest('button');

  if(selectedButton) {
    galleryMenu.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('img-filters__button--active', button === selectedButton);
    });
    selectedButton.dispatchEvent(new Event('toggle'));
  }
}
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
    renderPopup(data);
  });
  return thumbnail;
};

function renderThumbnails(data) {
  pictureContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  pictureContainer.append(...data.map(createTemplate));
}
export { initiateGallery };
