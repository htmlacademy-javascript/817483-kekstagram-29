import { showModal } from "./gallery-popup.js";

const popup = document.querySelector('.img-upload__overlay');


/**
 * @param {File} data
 */
function renderPopup(data) {
  // TODO: подстановка изображения
  void data;

  showModal(popup);
}

export default renderPopup;