import { createThumbnail } from './mini.js';
import './upload.js';
import { request } from './util.js';
import { renderStatus } from './status.js';

try {
  /**
 * @type { Array <createThumbnail>}
 */
const data = await request('https://29.javascript.pages.academy/kekstagram/data');
console.log(data);

createThumbnail(data);

} catch(error) {
  const title = `Ошибка: ${error.message}`;
  const button = 'Закрыть';

  renderStatus('error', {title, button});
}
