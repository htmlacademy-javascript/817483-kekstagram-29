import { showModal, hideModal } from './gallery-popup.js';


const modalOpenedPicture = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');

function renderModal(data) {
  modalOpenedPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);
  showModal(modalOpenedPicture);
}


function onHideModal() {
  if(document.body.classList.contains('modal-open')) {
    hideModal(modalOpenedPicture);
  }
}
cancelButton.addEventListener('click', onHideModal);

export default renderModal;
