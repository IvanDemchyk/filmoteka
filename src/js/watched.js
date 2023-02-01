// const watchedBtn = document.querySelector('.watched-btn-js');
// const queueBtn = document.querySelector('.queue-btn-js');
// watchedBtn.addEventListener('click', onClickWatchedBtn);
// function onClickWatchedBtn() {
//   onActiveWatchedBtn();
// }
// function onActiveWatchedBtn() {
//   watchedBtn.classList.add('active');
//   queueBtn.classList.remove('active');
// }
import { LocalPagination, paginationLibBox } from './localPagination.js'
import { watche, queue } from './local.js';
import { card } from './local';

const btnWatch = document.querySelector('.watched-btn-js');
const btnQueue = document.querySelector('.queue-btn-js');
const containerBtn = document.querySelector('.library-header__buttons');

export const watchedLocal = new LocalPagination(watche);
const queueLocal = new LocalPagination(queue);

containerBtn.addEventListener('click', onClickBtn);
paginationLibBox.addEventListener("click", localPagWatchedLib);

function onClickBtn({ target }) {
  if (!target.classList.contains('library-header__btn')) {
    return;
  }
  if (target.classList.contains('queue-btn-js')) {
    card.innerHTML = '';
    queueLocal.paginationRender();
    toggleClassBtn('active', btnWatch, target);
  }
  if (target.classList.contains('watched-btn-js')) {
    card.innerHTML = '';
    watchedLocal.paginationRender();
    toggleClassBtn('active', btnQueue, target);
  }
}

function toggleClassBtn(classStr, btn, current) {
  current.classList.add(classStr);
  btn.classList.remove(classStr);
}

function localPagWatchedLib(evt) {
   const isWatchedActive = Boolean(document.querySelector('.watched-btn-js.active'));
   const target = evt.target.textContent;

  if (evt.target.nodeName !== 'LI' || target === "...") {
    return;
  }

  if (target === "🡸") {
    isWatchedActive ? watchedLocal.pagLeft() : queueLocal.pagLeft();

  } else if (target === "🡺") {
    isWatchedActive ? watchedLocal.pagRight() : queueLocal.pagRight();

  } else {
    isWatchedActive ? watchedLocal.peakedPage(target) : queueLocal.peakedPage(target);
  }  
}
