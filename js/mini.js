import renderModal from './render-modal.js';
const pictureContainer = document.querySelector('.pictures');
/**
 * @type {HTMLTemplateElement}
 */
const pictureThumbnail = document.querySelector('#picture');

// Пытаюсь разобраться в JSDoc, пока не совсем верно проставляю, думаю
/**
 * 
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
    renderModal(data);
  });
  return thumbnail;
};

function createThumbnail(data) {
  pictureContainer.append(...data.map(createTemplate));
}
export { createThumbnail };
// const renderPictures = (pictures) => {
//   const fragment = document.createDocumentFragment();

//   pictures.forEach(item=> {
//     const thumbnail = createTemplate(item);
//     fragment.append(thumbnail);
//   });
//   pictureContainer.append(fragment);
// };

// export { renderPictures, createTemplate };