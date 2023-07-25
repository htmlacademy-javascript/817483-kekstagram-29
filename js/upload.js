import renderPopup from './upload-popup.js';
import './pristine-validators.js';
import { request } from './util.js';
import { renderStatus } from './status.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');
// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide, true);
form.addEventListener('reset', onFormReset);
form.addEventListener('submit', onFormSubmit);

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
function onFormChange(event) {
  if(event.target.matches('#upload-file')) {
    const [data] = event.target.files;
    const types = event.target.getAttribute('accept').split(', ');

    if(types.some((it) => data.name.endsWith(it))) {
      renderPopup(data);
    } else {
      const title = 'Неподдерживаемый формат';
      const button = 'Другой формат нужен';

      renderStatus('error', {title, button});

      onFormHide();
    }

  }
}

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
