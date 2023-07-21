import { showModal } from "./gallery-popup.js";
import initScaleControl from "./scale-control.js";
import initEffectSlider from './effect-slider.js';
const popup = document.querySelector('.img-upload__overlay');
const scaleControl = initScaleControl(popup.querySelector('.scale'));
console.log(scaleControl)
const effectSlider = initEffectSlider(popup.querySelector('.effect-level'));
console.log(effectSlider);
const effectPicker = popup.querySelector('.effects');
const preview = popup.querySelector('img');


/**
 * @param {File} data
 */
function renderPopup(data) {
  // TODO: подстановка изображения
  void data;

  scaleControl.on('update', onScaleControlUpdate);
  scaleControl.setValue(100);

  effectSlider.on('update', onEffectSliderUpdate);
  effectSlider.setEffect('none');

  effectPicker.addEventListener('change', onEffectPickerChange);
  showModal(popup);
}


function onScaleControlUpdate() {
  const percent = scaleControl.getValue();
  // создается переменная, т.к. scale принимает значение от 0 до 1, где 1 - натуральный размер изображения, поэтому 100% делим на 100.
  const ratio = percent / 100;

  preview.style.setProperty('transform', `scale(${ratio})`);
}

function onEffectSliderUpdate() {
  preview.style.setProperty('filter', effectSlider.getCssValue());
}

function onEffectPickerChange(event) {
  effectSlider.setEffect(event.target.getAttribute('value'));
}

export default renderPopup;
