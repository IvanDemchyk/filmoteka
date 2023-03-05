import refs from './refs';
import { createMovieCard } from '../createMovieCard';

export default function reRenderLibrary(filmsFromStorage) {
  if (!filmsFromStorage || !filmsFromStorage.length) {
    refs.libraryMainContainer.classList.add('notification-bcg');
    refs.libraryHeader.classList.add('library-header-notification');
    refs.librarySlider.classList.add('slider-bcg');
    return `<p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>`;
  }

  refs.libraryHeader.classList.remove('library-header-notification');
  refs.libraryMainContainer.classList.remove('notification-bcg');
  refs.librarySlider.classList.remove('slider-bcg');
  return createMovieCard(filmsFromStorage);
}
