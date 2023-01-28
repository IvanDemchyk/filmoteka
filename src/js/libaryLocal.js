import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local.js';
import { createMovieCard } from './createMovieCard';
const cardLibary = document.querySelector('.card');

const dataWatcheMovie = JSON.parse(localStorage.getItem(WATCHE));

function checkDataRenderPage(data) {
  if (!data || !data.length) {
    return `<li class="notification">
            <p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>
            <svg class="notification-svg">
            <use href=""></use>
            </svg>
           </li>`;
  }
  return createMovieCard(data);
}

cardLibary.insertAdjacentHTML(
  'beforeend',
  checkDataRenderPage(dataWatcheMovie)
);
