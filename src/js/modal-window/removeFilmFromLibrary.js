import { card } from '../local';
import refs from './refs';
import reRenderLibrary from './reRenderLibrary';
import watchedOrQueue from './watchedOrQueue';

export default function removeFromWatchedOrQueue(e, element, local, key, btn) {
  const films = JSON.parse(localStorage.getItem(key));
  const movieId = Number(e.target.closest(element).id);
  films.forEach((film, i) => {
    film.id === movieId ? local.splice(i, 1) : film;
  });
  localStorage.setItem(key, JSON.stringify(local));
  e.currentTarget.textContent = `add to ${btn}`;
  if (refs.libraryHeaderLink.classList.contains('current')) {
    card.innerHTML = reRenderLibrary(
      JSON.parse(localStorage.getItem(watchedOrQueue()))
    );
  }
}
