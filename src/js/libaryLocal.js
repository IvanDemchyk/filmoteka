import { watche, queue } from './local.js';
import { createMovieCard } from './createMovieCard';
import { card } from './local';

const divContainer = document.querySelector('#main');

export function checkDataRenderPage(data) {
  if (!data || !data.length) {
    divContainer.classList.add('notification-bcg');
    return `<p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>`;
  }
  return createMovieCard(data);
}

card.insertAdjacentHTML('beforeend', checkDataRenderPage(watche));
