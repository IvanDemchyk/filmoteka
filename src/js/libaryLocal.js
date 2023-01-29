import { watche, queue } from './local.js';
import { createMovieCard } from './createMovieCard';
import { card } from './local';

const divContainer = document.querySelector('#main');
const header = document.querySelector('.library-header');

export function checkDataRenderPage(data) {
  if (!data || !data.length) {
    divContainer.classList.add('notification-bcg');
    header.classList.add('library-header-notification');
    return `<p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>`;
  }
  header.classList.remove('library-header-notification');
  divContainer.classList.remove('notification-bcg');
  return createMovieCard(data);
}

card.insertAdjacentHTML('beforeend', checkDataRenderPage(watche));
