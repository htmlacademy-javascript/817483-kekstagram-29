/**
 * @param {Element} target
 * @param {ScaleControlOptions} options
 * @returns {ScaleControl}
 */
function initScaleControl(target, options = {}) {

  const input = target.querySelector('input');
  const [stepDownButton, stepUpButton] = target.querySelectorAll('button');
  const {min = 25, max = 100, step = 25} = options;

  stepDownButton.addEventListener('click', onStepDownButtonClick);
  stepUpButton.addEventListener('click', onStepUpButtonClick);

  function onStepDownButtonClick() {
    setValue(getValue() - step);
  }

  function onStepUpButtonClick() {
    setValue(getValue() + step);
  }

  /**
   * @returns {number}
   */
  // принимает значение value нашего инпута, трасформирует в число
  function getValue() {
    return Number.parseFloat(input.getAttribute('value'));
  }

  /**
   * @param {number} percent
   */
  function setValue(percent) {
    /**
     * можно записать следующим образом еще: percent = (percent < min ? min) : (percent > max ? max) : percent;
     */
    percent = Math.max(percent, min);
    percent = Math.min(percent, max);

    input.setAttribute('value', `${percent}%`); // назначаем значение переменной в значение атрибута value
    input.dispatchEvent(new Event('update')); // инициируется новый ивент update при изменений положении слайдера. В модуле upload-popup передаем сюда в функцию on событие и обработчик
  }

  /**
   * @param {string} type
   * @param {EventListener} listener
   */
  function on(type, listener) {
    // В данной функции инициируем события: передаем 1 аргументом тип события, саму функцию - обработчик.
    // Обработчик навешивается на target-элемент, который попадает нам в функцию init..., в рамках тагета ищем инпут, на него навешиваем обработчик
    input.addEventListener(type, listener);
  }

  return {getValue, setValue, on};
}

export default initScaleControl;
