/**
 * @param {StatusType} type
 * @param {StatusOptions} options
 */
function renderStatus(type, options = {}) {
  /**
   * @type {HTMLTemplateElement}
   */
  const statusTemplate = document.querySelector(`#${type}`);
  const status = /** @type {Element} */ (
    statusTemplate.content.querySelector(`.${type}`).cloneNode(true)
  );

  Object.keys(options).forEach((key) => {
    status.querySelector(`.${type}__${key}`).textContent = options[key];
  });

  showStatus(status);
}

/**
 * @param { Element } status
 */
function showStatus(status) {
  status.addEventListener('click', onStatusClick);
  document.addEventListener('keydown', onDocumentKeydown, true);
  document.body.append(status);
}
/**
 * @param {Element} status
 */
function hideStatus(status) {
  status.removeEventListener('click', onStatusClick);
  document.removeEventListener('keydown', onDocumentKeydown, true);
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

  if(isEscapeKey) {
    hideStatus(document.querySelector('.error, .success'));
    event.stopPropagation();
  }
}

export { renderStatus };
