import { showModal, hideModal, hideModalByClick} from './gallery-popup.js';
import createCommentsArray from './util.js';

const modalOpenedPicture = document.querySelector('.big-picture');
const commentTemplate = modalOpenedPicture.querySelector('.social__comment');
const cancelButton = document.querySelector('.big-picture__cancel');
let renderNextComments;

function renderModal(data) {
  modalOpenedPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);
  showModal(modalOpenedPicture);

  modalOpenedPicture.addEventListener('click', onPopupClick);
  renderNextComments = createCommentsInModal(data.comments);
}

function hideModalHandler() {
  if(document.body.classList.contains('modal-open')) {
    //hideModalByClick(item);
    hideModal(modalOpenedPicture);
  }
}
cancelButton.addEventListener('click', hideModalHandler);
/**
 * 
 * @param {PictureComment} data
 * @returns { HTMLLIElement }
 */
// function createCommentsInModal(data, step) {
//   const comment = /** @type { HTMLLIElement } */(commentTemplate.cloneNode(true));
//   console.log(comment)
//   const discussion = comment.querySelector('.social__comments');
//   const commentsLoader = modalOpenedPicture.querySelector('.comments-loader');
//   const [showCount, totalCount] = modalOpenedPicture.querySelectorAll('.comments-count');
//   const commentsTotal = data.length;

//   data = structuredClone(data);
//   discussion.textContent = '';
//   totalCount.textContent = String(commentsTotal);
//   return ()=> {
//     discussion.append(...data.splice(0, step).map(createCommentsArray));
//     commentsLoader.classList.toggle('hidden', data.length === 0);
//     showCount.textContent = String(commentsTotal - data.length);
//   };
// }

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onPopupClick(event) {
  if (event.target.closest('.comments-loader')) {
    renderNextComments();
  }
}
export default renderModal;