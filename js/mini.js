import renderModal from './render-modal.js';
import { renderPopups } from './gallery-popup.js';
const pictureContainer = document.querySelector('.pictures');
/**
 * @type {HTMLTemplateElement}
 */
const pictureThumbnail = document.querySelector('#picture');

const menuGallery = document.querySelector('.img-filters');

function initiateGallery(data) {
  const filter = createFilter(data);

  menuGallery.classList.remove('img-filters--inactive');
  menuGallery.addEventListener('click', onMenuClick);

  menuGallery.addEventListener('toggle', (event) => {
    const selectedButton = /** @type {HTMLButtonElement} */ (event.target);
    const selectedValue = /** @type {FilterType} */ (selectedButton.getAttribute('value'));

    createThumbnail(filter(selectedValue));
  }, true);

  createThumbnail(data);
}


/**
 * @param {{randomLimit?: number}} options
 * @param {Array <createPicture>} data
 * @returns {(type: FilterType) => Array <createPicture>}
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
function onMenuClick(event) {
  const selectedButton = event.target.closest('button');

  if(selectedButton) {
    menuGallery.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('img-filters__button--active', button === selectedButton);
      // Без переменной eslint ругается let result = button === selectedButton ? button.classList.add('img-filters__button--active') : button.classList.remove('img-filters__button--active');
      // if(button === selectedButton) {
      //   button.classList.toggle('img-filters__button--active');
      // } else {
      //   button.classList.remove('img-filters__button--active'); 
      // }
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
    renderPopups(data);
    renderModal(data);
  });
  return thumbnail;
};

function createThumbnail(data) {
  pictureContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  pictureContainer.append(...data.map(createTemplate));
}
export { initiateGallery };
