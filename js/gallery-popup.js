const popUpLoad = document.querySelector('.big-picture');

export { popUpLoad };

const openModal = () => {
  popUpLoad.classList.remove('hidden');
}