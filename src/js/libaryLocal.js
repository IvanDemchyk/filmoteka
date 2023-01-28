import { watche, queue } from './local.js';
import { createMovieCard } from './createMovieCard';
import { card } from './local';

// const dataWatcheMovie = JSON.parse(localStorage.getItem(WATCHE));

export function checkDataRenderPage(data) {
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

card.insertAdjacentHTML('beforeend', checkDataRenderPage(watche));
