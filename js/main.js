// import './components.js';
// import { createPictureArray } from './util.js';
import { createThumbnail } from './mini.js';
import './upload.js';
import { request } from './util.js';

/**
 * @type { Array <createThumbnail>}
 */
const data = await request('https://29.javascript.pages.academy/kekstagram/data');
console.log(data);

createThumbnail(data);
