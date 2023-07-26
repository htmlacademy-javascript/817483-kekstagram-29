const body = document.querySelector('body');

const modalPicture = document.querySelector('.big-picture');
const commentTemplate = modalPicture.querySelector('.social__comment');
const cancelGalleryMenu = document.querySelector('.img-upload__cancel');
const cancelBigPicture = document.querySelector('.big-picture__cancel');

let renderNextComments;
/**
 * @param {Element} modalWindow
 */
function hideModal(modalWindow) {
  modalWindow.classList.add('hidden');
  modalWindow.dispatchEvent(new Event('hide'));
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  cancelGalleryMenu.removeEventListener('click', onCancelGalleryMenuClick);
  cancelBigPicture.removeEventListener('click', onCancelBigPictureClick);
}

function onCancelBigPictureClick() {
  if(document.body.classList.contains('modal-open')) {
    hideModal(modalPicture);
  }
}

/**
 * @param {Element} modalWindow
 */
function showModal(modalWindow) {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  cancelGalleryMenu.addEventListener('click', onCancelGalleryMenuClick);
  cancelBigPicture.addEventListener('click', onCancelBigPictureClick);
}

/**
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function onCancelGalleryMenuClick(event) {
  if(event.target === cancelGalleryMenu) {
    hideModal(document.querySelector('.overlay:not(.hidden)'));
  }
}

/**
 * @param {KeyboardEvent & {target: Element}} event
 */
function onDocumentKeydown(event) {
  const isEscapeKey = event.key.startsWith('Esc');
  const isTextField = event.target.matches('input[type="text"], textarea');

  if(isEscapeKey && !isTextField) {
    hideModal(document.querySelector('.overlay:not(.hidden)'));
  }
}

/**
 * @param { CreatePicture } data
 */
function renderPopup(data) {
  modalPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);
  // @ts-ignore
  modalPicture.querySelector('.social__caption').textContent = String(data.description);
  modalPicture.querySelector('.likes-count').textContent = String(data.likes);

  renderNextComments = createCommentsRenderer(data.comments);
  modalPicture.addEventListener('click', onPopupClick);
  showModal(modalPicture);
  renderNextComments();
}

/**
 * @param { Array <CreatePictureComment> } data
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
 * @param { CreatePictureComment } data
 */
function createComment(data) {

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

export { showModal, hideModal, renderPopup };
