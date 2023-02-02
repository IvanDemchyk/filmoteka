import { watche, queue } from './local.js';
import { createMovieCard } from './createMovieCard';
import { card } from './local';
import { watchedLocal } from './watched';
import { showMovieLibrary } from './modal-window.js';

const divContainer = document.querySelector('#main');
const header = document.querySelector('.library-header');
const containerSlider = document.querySelector('#slider');

export function checkDataRenderPage(data) {
  if (!data || !data.length) {
    divContainer.classList.add('notification-bcg');
    header.classList.add('library-header-notification');
    containerSlider.classList.add('slider-bcg');
    return `<p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>`;
  }
  header.classList.remove('library-header-notification');
  divContainer.classList.remove('notification-bcg');
  containerSlider.classList.remove('slider-bcg');
  return createMovieCard(data);
}

watchedLocal.paginationRender();
card.addEventListener('click', showMovieLibrary);
/* card.insertAdjacentHTML('beforeend', checkDataRenderPage(watche)); */
