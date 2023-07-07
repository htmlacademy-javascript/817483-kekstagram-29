import { popUpLoad } from './gallery-popup.js';
import './components.js';
import { createPictureArray } from './util.js';
import { renderPictures } from './mini.js';
renderPictures(createPictureArray());
console.log(popUpLoad)