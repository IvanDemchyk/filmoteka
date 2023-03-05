import { card } from '../local';
import { getFilmMain } from './getFilmFunctions';
import refs from './refs';
import reRenderLibrary from './reRenderLibrary';
import watchedOrQueue from './watchedOrQueue';

export default function addToWatchedOrQueue(
  e,
  element,
  fromStoarage,
  local,
  key,
  btn
) {
  const film = getFilmMain(e, element, fromStoarage);
  local.push(film);
  localStorage.setItem(key, JSON.stringify(local));
  e.currentTarget.textContent = `remove from ${btn}`;
  if (refs.libraryHeaderLink.classList.contains('current')) {
    card.innerHTML = reRenderLibrary(
      JSON.parse(localStorage.getItem(watchedOrQueue()))
    );
  }
}
