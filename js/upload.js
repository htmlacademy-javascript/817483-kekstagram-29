import renderPopup from './upload-popup.js';
import './pristine-validators.js';
import { request } from './util.js';
import { renderStatus } from './status.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide, true);
form.addEventListener('reset', onFormReset);
form.addEventListener('submit', onFormSubmit);

/**
 * @param {Event && {target: HTMLInputElement}} event
 */
function onFormChange(event) {
  if(event.target.matches('#upload-file')) {
    // console.log(event.target.files);
    const [data] = event.target.files;
    renderPopup(data);
  }
}
// renderPopup();

function onFormHide() {
  form.reset();
}

function onFormReset() {
  pristine.reset();
}

/**
 * @param { SubmitEvent } event
 */
async function onFormSubmit(event) {
  event.preventDefault();
  if(!pristine.validate()) {
    return;
  }
  try {
    setSubmitBlock(true);
    await sendFormData();
    resetFormOnHideModal();
    renderStatus('success');
  } catch {
    renderStatus('error');
  } finally {
    setSubmitBlock(false);
  }
}


async function sendFormData() {
  const url = form.getAttribute('action');
  const method = form.getAttribute('method');
  const body = new FormData(form);

  await request(url, {method, body});
}

/**
 * @param { Boolean } flag
 */
function setSubmitBlock(flag) {
  form['upload-submit'].toggleAttribute('disabled', flag);
}

function resetFormOnHideModal() {
  form['upload-cancel'].click();
}

// Доработать функцию закрытия модального окна после добавления картинки, т.к. работает только Esc, у меня функция не была настроена на нужный класс. Получается, я обработчик навесил только на другую модалку