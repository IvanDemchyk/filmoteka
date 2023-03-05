import refs from './refs';

export default function eventListeners(closeModal, addFilm) {
  const modalCloseBtn = document.querySelector('.modal-window__close-btn');
  const modalBtns = {
    addToWatched: document.querySelector('.js-movie__add-btn--watched'),
    addToQueue: document.querySelector('.js-movie__add-btn--queue'),
  };

  modalBtns.addToWatched.addEventListener('click', addFilm.toWatched);
  modalBtns.addToQueue.addEventListener('click', addFilm.toQueue);
  modalCloseBtn.addEventListener('click', closeModal.onCloseBtn);
  refs.backdrop.addEventListener('click', closeModal.onBackdropClick);
  document.addEventListener('keydown', closeModal.onEsc);
}
