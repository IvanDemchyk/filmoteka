import refs from './refs';

const closeModal = {
  onBackdropClick(e) {
    if (e.target.parentElement.nodeName === 'BODY') {
      refs.backdrop.hidden = true;
      refs.backdrop.removeEventListener('click', this.onBackdropClick);
    }
  },

  onEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    refs.backdrop.hidden = true;
    document.removeEventListener('keydown', this.onEsc);
  },

  onCloseBtn() {
    refs.backdrop.hidden = true;
  },
};

export default closeModal;
