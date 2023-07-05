const pictureContainer = document.querySelector('.pictures');
/**
 * @type {HTMLTemplateElement}
 */
const pictureThumbnail = document.querySelector('#picture');


const createTemplate = ({comments, likes, url, description}) => {

  const thumbnail = pictureThumbnail.content.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach(item=> {
    const thumbnail = createTemplate(item);
    fragment.append(thumbnail);
  });
  pictureContainer.append(fragment);
};

export { renderPictures };