/**
 * @param {StatusType} type
 */
function renderStatus(type) {
  /**
   * @type {HTMLTemplateElement}
   */
  const statusTemplate = document.querySelector(`#${type}`);
  const status = /** @type {Element} */ (
    statusTemplate.content.querySelector(`.${type}`).cloneNode(true)
  );

  showStatus(status);
}
// renderStatus('error');

/**
 * @param { Element } status
 */
function showStatus(status) {
  status.addEventListener('click', onStatusClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.append(status);
}
/**
 * @param {Element} status
 */
function hideStatus(status) {
  status.removeEventListener('click', onStatusClick);
  document.removeEventListener('keydown', onDocumentKeydown)
  status.remove();
}

/**
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function onStatusClick(event) {
  if (event.target.matches('section, button')) {
    hideStatus(event.currentTarget);
  }
}

/**
 * @param {KeyboardEvent & {target: Element}} event
 */
function onDocumentKeydown(event) {
  const isEscapeKey = event.key.startsWith('Esc');

  if(event.key && isEscapeKey) {
    hideStatus(document.querySelector('.error, .success'));
  }
}

export { renderStatus };
