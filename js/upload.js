import renderModal from "./render-modal.js";

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');
console.log(form);

form.addEventListener('change', onFormChange);
/**
 * 
 * @param {Event && {target: HTMLInputElement}} event
 */
function onFormChange(event) {
  if(event.target.matches('#upload-file')) {
    console.log(event.target.files);
    const [data] = event.target.files;
    renderModal(data);
  };
}