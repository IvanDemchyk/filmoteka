import addToWatchedOrQueue from './addFilmToLibrary';
import removeFromWatchedOrQueue from './removeFilmFromLibrary';
import { CURRENT_MOVIES, watche, queue, WATCHE, QUEUE } from '../local.js';

const addFilm = {
  toWatched(e) {
    if (e.currentTarget.textContent === 'add to watched') {
      addToWatchedOrQueue(
        e,
        '.modal__movie',
        CURRENT_MOVIES,
        watche,
        WATCHE,
        'watched'
      );
    } else {
      removeFromWatchedOrQueue(e, '.modal__movie', watche, WATCHE, 'watched');
    }
  },

  toQueue(e) {
    if (e.currentTarget.textContent === 'add to queue') {
      addToWatchedOrQueue(
        e,
        '.modal__movie',
        CURRENT_MOVIES,
        queue,
        QUEUE,
        'queue'
      );
    } else {
      removeFromWatchedOrQueue(e, '.modal__movie', queue, QUEUE, 'queue');
    }
  },
};

export default addFilm;
