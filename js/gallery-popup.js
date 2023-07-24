// import { createPicture } from "./util.js";
const cancelUploadModal = document.querySelector('.cancel');
console.log(cancelUploadModal);
const body = document.querySelector('body');
// const cancelButton = document.querySelector('.big-picture__cancel');
const modalPicture = document.querySelector('.big-picture');
const commentTemplate = modalPicture.querySelector('.social__comment');

let renderNextComments;
/**
 * @param {Element} modalWindow
 */
function hideModal(modalWindow) {
  modalWindow.classList.add('hidden');
  modalWindow.dispatchEvent(new Event('hide'));
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
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function hideModalByClick(event) {
  // if(cancelButton) {
  //   hideModal(event.currentTarget);
  // }
}

/**
 * @param {KeyboardEvent & {target: Element}} event
 */
function onDocumentKeydown(event) {
  const isEscapeKey = event.key.startsWith('Esc');
  const isTextField = event.target.matches('input[type="text"], textarea');

  if(event.key && isEscapeKey && !isTextField) {
    hideModal(document.querySelector('.overlay:not(.hidden)'));
  }
}

export { showModal, hideModal, hideModalByClick, renderPopups };

/**
 * @param { createPicture } data
 */
function renderPopups(data) {
  console.log(data)
  modalPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);

  modalPicture.querySelector('.social__caption').textContent = String(data.description);
  modalPicture.querySelector('.likes-count').textContent = String(data.likes);

  renderNextComments = createCommentsRenderer(data.comments);
  modalPicture.addEventListener('click', onPopupClick);
  showModal(modalPicture);
  renderNextComments();
}

/**
 * @param { Array <createPictureComment> } data
 * @param { number } step
 */
function createCommentsRenderer(data, step = 5) {

  const discussion = modalPicture.querySelector('.social__comments');
  const moreButton = modalPicture.querySelector('.comments-loader');

  const [shownCount, totalCount] = modalPicture.querySelectorAll('.comments-count');

  const commentsTotal = data.length;
  data = structuredClone(data);
  discussion.textContent = '';
  totalCount.textContent = String(commentsTotal);

  return ()=> {
    discussion.append(...data.splice(0, step).map(createComment));
    moreButton.classList.toggle('hidden', data.length === 0);
    shownCount.textContent = String(commentsTotal - data.length);
  };
}

/**
 * @param { createPictureComment } data
 */
function createComment(data) {
  // console.log(data)
  const comment = /** @type {HTMLLIElement} */ (commentTemplate.cloneNode(true));
  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = String(data.message);

  return comment;
}

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onPopupClick(event) {
  if (event.target.closest('.comments-loader')) {
    renderNextComments();
  }
}

// function onUploadModalClick() {
//   if(document.body.classList.contains('modal-open')) {
//     document.body.classList.remove('modal-open');
//   }
// } НЕ РАБОТАЕТ
// cancelUploadModal.addEventListener('click', onUploadModalClick);