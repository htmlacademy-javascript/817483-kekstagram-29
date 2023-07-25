import { initiateGallery } from './gallery.js';
import './upload.js';
import { request } from './util.js';
import { renderStatus } from './status.js';

try {
  /**
 * @type { Array }
 */
  const data = await request('https://29.javascript.pages.academy/kekstagram/data');

  initiateGallery(data);

} catch(error) {
  const title = `Ошибка: ${error.message}`;
  const button = 'Закрыть';

  renderStatus('error', {title, button});
}
