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

import { watche, queue } from './local.js';
import { card } from './local';
import { checkDataRenderPage } from './libaryLocal';

const btnWatch = document.querySelector('.watched-btn-js');
const btnQueue = document.querySelector('.queue-btn-js');
const containerBtn = document.querySelector('.library-header__buttons');

containerBtn.addEventListener('click', onClickBtn);

function onClickBtn({ target }) {
  if (!target.classList.contains('library-header__btn')) {
    return;
  }
  if (target.classList.contains('queue-btn-js')) {
    card.innerHTML = '';
    card.insertAdjacentHTML('beforeend', checkDataRenderPage(queue));
    toggleClassBtn('active', btnWatch, target);
  }
  if (target.classList.contains('watched-btn-js')) {
    card.innerHTML = '';
    card.insertAdjacentHTML('beforeend', checkDataRenderPage(watche));
    toggleClassBtn('active', btnQueue, target);
  }
}

function toggleClassBtn(classStr, btn, current) {
  current.classList.add(classStr);
  btn.classList.remove(classStr);
}
