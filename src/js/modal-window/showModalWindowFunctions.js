import { GENRES_MOVIES } from '../get-genres';
import { trailerInst } from '../trailer';
import checkLibrary from './checkLibraryFunction';
import { getFilmLibrary, getFilmMain } from './getFilmFunctions';
import { CURRENT_MOVIES, watche, queue, WATCHE, QUEUE } from '../local.js';
import watchedOrQueue from './watchedOrQueue';
// import { createMovieCard } from '../createMovieCard';

import { createMovieInfo } from './createMovieInfo';
import refs from './refs';

export async function showMovieMain(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }
  const film = getFilmMain(e, '.card__item', CURRENT_MOVIES);
  const checkWatched = checkLibrary(watche, film);
  const checkQueue = checkLibrary(queue, film);
  const trailerLink = await trailerInst(film.id);

  createMovieInfo(film, GENRES_MOVIES, checkWatched, checkQueue, trailerLink);

  refs.backdrop.hidden = false;
}

export async function showMovieLibrary(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }
  const film = getFilmLibrary(e, '.card__item', watchedOrQueue());
  const checkWatched = checkLibrary(watche, film);
  const checkQueue = checkLibrary(queue, film);
  const trailerLink = await trailerInst(film.id);

  createMovieInfo(film, GENRES_MOVIES, checkWatched, checkQueue, trailerLink);

  refs.backdrop.hidden = false;
}

export async function showSliderMovie(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }
  e.preventDefault();

  const film = getFilmMain(e, '.slider__item', CURRENT_MOVIES);

  const checkWatched = checkLibrary(watche, film);
  const checkQueue = checkLibrary(queue, film);
  const trailerLink = await trailerInst(film.id);

  createMovieInfo(film, GENRES_MOVIES, checkWatched, checkQueue, trailerLink);

  refs.backdrop.hidden = false;
}
