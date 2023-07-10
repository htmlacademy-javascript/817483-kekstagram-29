const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
/**
 * @param {Element} modalWindow
 */
function hideModal(modalWindow) {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

/**
 * @param {Element} modalWindow
 */
function showModal(modalWindow) {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

/**
 * 
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function hideModalByClick(event) {
  // if(cancelButton) {
  //   hideModal(event.currentTarget);
  // }
}

/**
 * @param {KeyboardEvent} event
 */
function onDocumentKeydown(event) {
  if(event.key && event.key.startsWith('Esc')) {
    hideModal(document.querySelector('.overlay:not(.hidden)'));
  }
}

export { showModal, hideModal, hideModalByClick };

// export { hideModal, showModal, hideModalByClick }

// import { pictureCards } from './main.js';
// const popUpLoad = document.querySelector('.big-picture');



// const openModal = () => {
//   pictureCards.forEach(elem => {
//     elem.addEventListener('click', ()=> {
//       popUpLoad.classList.remove('hidden');
//     });
//   });
// };


// const makeListOfComments = ({avatar, NAMES}) => {
//   const commentsBlock = popUpLoad.querySelector('.social__comments');
//   const commentsItem = commentsBlock.querySelector('.social__comment');
//   popUpLoad.querySelector('.social__comments').replaceChildren();

//   const comment = /** @type {HTMLUListElement} */(commentsItem.cloneNode(true));
//   comment.querySelector('.social__picture').src = avatar;
//   comment.querySelector('.social__picture').alt = NAMES;

//   console.log(avatar, NAMES);
//   commentsBlock.append(comment);
// }

// export { popUpLoad, pictureCards, createModalInfo, openModal, makeListOfComments };