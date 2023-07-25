import { showModal, hideModal } from './gallery-popup.js';


const modalOpenedPicture = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');
// let renderNextComments;

function renderModal(data) {
  modalOpenedPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);
  showModal(modalOpenedPicture);

  // modalOpenedPicture.addEventListener('click', onPopupClick);
}


function onHideModal() {
  if(document.body.classList.contains('modal-open')) {
    hideModal(modalOpenedPicture);
  }
}
cancelButton.addEventListener('click', onHideModal);
// /**
//  * @param {MouseEvent & {target: Element}} event
//  */
// function onPopupClick(event) {
//   if (event.target.closest('.comments-loader')) {
//     renderNextComments();
//   }
// }
export default renderModal;
