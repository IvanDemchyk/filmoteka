import { CURRENT_MOVIES, watche, queue, WATCHE, QUEUE } from './local.js';
import { GENRES_MOVIES } from './get-genres';
import { createMovieCard } from './createMovieCard';
import { card } from './local';
import { trailerInst } from './trailer';

const backdrop = document.querySelector('.backdrop');
const modalMovie = document.querySelector('.modal__movie');
const watchedBtn = document.querySelector('.watched-btn-js');
const libraryHeaderLink = document.querySelector('.js-library');
const libraryMainContainer = document.querySelector('#main');
const libraryHeader = document.querySelector('.library-header');
const librarySlider = document.querySelector('#slider');

async function showMovieMain(e) {
  const film = getFilmMain(e, '.card__item', CURRENT_MOVIES);

  const checkWatched = checkLibrary(watche, film);
  const checkQueue = checkLibrary(queue, film);

  const trailerLink = await trailerInst(film.id);

  createMovieInfo(film, GENRES_MOVIES, checkWatched, checkQueue, trailerLink);

  backdrop.hidden = false;
}

async function showMovieLibrary(e) {
  const film = getFilmLibrary(e, '.card__item', watchedOrQueue());
  const checkWatched = checkLibrary(watche, film);
  const checkQueue = checkLibrary(queue, film);
  const trailerLink = await trailerInst(film.id);

  createMovieInfo(film, GENRES_MOVIES, checkWatched, checkQueue, trailerLink);

  backdrop.hidden = false;
}

function getFilmMain(e, element, fromStoarage) {
  const movieId = Number(e.target.closest(element).id);
  return JSON.parse(localStorage.getItem(fromStoarage)).results.find(
    movie => movie.id === movieId
  );
}

function getFilmLibrary(e, element, fromStoarage) {
  const movieId = Number(e.target.closest(element).id);
  return JSON.parse(localStorage.getItem(fromStoarage)).find(
    movie => movie.id === movieId
  );
}

// розмітка з інфо про фільм у модальному вікні
function createMovieInfo(
  movie,
  genresList,
  checkWatched,
  checkQueue,
  trailer = ''
) {
  const modalMovieMarkup = `<div class="movie__img-container">
  <img class='movie__img'
    alt="movie poster"
    src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
  />
</div>
      <div class="movie__info">
      <h2 class="movie__title">${movie.title}</h2>
      <table class="movie__details">
      <tbody>
      <tr>
      <td class='movie__detail modal-text--left-column modal-text'>Vote/Votes</td>
      <td class="movie__detail modal-text modal-text--line-high">
      <span class="movie__detail--accent">
      ${movie.vote_average.toFixed(1)} </span
      >/ ${movie.vote_count}
      </td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Popularity</td>
      <td class="movie__detail modal-text modal-text--line-high">${movie.popularity.toFixed(
        1
      )}</td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Original title</td>
      <td class="movie__detail modal-text modal-text--uppercase movie__detail-right-column">${
        movie.original_title
      }</td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Genres</td>
      <td class="movie__detail modal-text movie__detail-right-column">${genresConvertor(
        movie.genre_ids,
        genresList
      )}</td>
      </tr>
          </tbody>
          </table>
          
          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>
      <p class="movie__description modal-text">${movie.overview}</p>
      
      <div class="movie__add-buttons">
      ${trailer}
        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--watched">${
          checkWatched ? 'remove from ' : 'add to '
        }watched</button>
        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--queue">${
          checkQueue ? 'remove from ' : 'add to '
        }queue</button>
      </div>
      </div>
  `;
  modalMovie.id = movie.id;
  modalMovie.innerHTML = modalMovieMarkup;
  eventListeners(closeModal, addFilm);
}

// функції для закриття модального вікна
const closeModal = {
  onBackdropClick(e) {
    if (e.target.parentElement.nodeName === 'BODY') {
      backdrop.hidden = true;
      backdrop.removeEventListener('click', this.onBackdropClick);
    }
  },

  onEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    backdrop.hidden = true;
    document.removeEventListener('keydown', this.onEsc);
  },

  onCloseBtn() {
    backdrop.hidden = true;
  },
};

// функції додавання фільмів у список переглянутих та у чергу
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

function addToWatchedOrQueue(e, element, fromStoarage, local, key, btn) {
  const film = getFilmMain(e, element, fromStoarage);
  local.push(film);
  localStorage.setItem(key, JSON.stringify(local));
  e.currentTarget.textContent = `remove from ${btn}`;
  if (libraryHeaderLink.classList.contains('current')) {
    card.innerHTML = reRenderLibrary(
      JSON.parse(localStorage.getItem(watchedOrQueue()))
    );
  }
}

function removeFromWatchedOrQueue(e, element, local, key, btn) {
  const films = JSON.parse(localStorage.getItem(key));
  const movieId = Number(e.target.closest(element).id);
  films.forEach((film, i) => {
    film.id === movieId ? local.splice(i, 1) : film;
  });
  localStorage.setItem(key, JSON.stringify(local));
  e.currentTarget.textContent = `add to ${btn}`;
  if (libraryHeaderLink.classList.contains('current')) {
    card.innerHTML = reRenderLibrary(
      JSON.parse(localStorage.getItem(watchedOrQueue()))
    );
  }
}

// додає та видаляє слухачі подій
function eventListeners(closeModal, addFilm) {
  const modalCloseBtn = document.querySelector('.modal-window__close-btn');
  const modalBtns = {
    addToWatched: document.querySelector('.js-movie__add-btn--watched'),
    addToQueue: document.querySelector('.js-movie__add-btn--queue'),
  };

  modalBtns.addToWatched.addEventListener('click', addFilm.toWatched);
  modalBtns.addToQueue.addEventListener('click', addFilm.toQueue);
  modalCloseBtn.addEventListener('click', closeModal.onCloseBtn);
  backdrop.addEventListener('click', closeModal.onBackdropClick);
  document.addEventListener('keydown', closeModal.onEsc);
}

function genresConvertor(movieGenres, genresList) {
  return movieGenres
    .map(genre => {
      const allGenres = JSON.parse(localStorage.getItem(genresList));
      return allGenres[genre];
    })
    .join(', ');
}

function checkLibrary(local, film) {
  if (local.length === 0) {
    return;
  }

  return local.find(movie => movie.id === film.id);
}

function watchedOrQueue() {
  if (watchedBtn.classList.contains('active')) {
    return WATCHE;
  } else {
    return QUEUE;
  }
}

function reRenderLibrary(filmsFromStorage) {
  if (!filmsFromStorage || !filmsFromStorage.length) {
    libraryMainContainer.classList.add('notification-bcg');
    libraryHeader.classList.add('library-header-notification');
    librarySlider.classList.add('slider-bcg');
    return `<p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>`;
  }

  libraryHeader.classList.remove('library-header-notification');
  libraryMainContainer.classList.remove('notification-bcg');
  librarySlider.classList.remove('slider-bcg');
  return createMovieCard(filmsFromStorage);
}

export { showMovieMain, showMovieLibrary };
