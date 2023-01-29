import { CURRENT_MOVIES, watche, queue, WATCHE, QUEUE } from './local.js';
import { GENRES_MOVIES } from './get-genres';
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal-window');

// відкриття модального вікна з інфо про фільм
function showMovie(e) {
  const film = getFilm(e, '.card__item', CURRENT_MOVIES);

  const checkWatched = checkLibrary(watche, film);
  const checkQueue = checkLibrary(queue, film);

  createMovieInfo(film, GENRES_MOVIES, checkWatched, checkQueue);
  eventListeners(closeModal, addFilm);
  backdrop.hidden = false;
}

function getFilm(e, element, fromStoarage) {
  const movieId = Number(e.target.closest(element).id);
  return JSON.parse(localStorage.getItem(fromStoarage)).results.find(
    movie => movie.id === movieId
  );
}

// розмітка з інфо про фільм у модальному вікні
function createMovieInfo(movie, genresList, checkWatched, checkQueue) {
  const modalMovieMarkup = `<button class="modal-window__close-btn">close</button>

    <div class="modal__movie" id='${
      movie.id
    }'><img class='movie__img' alt="movie poster" src="https://image.tmdb.org/t/p/w500/${
    movie.poster_path
  }"/>
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
      <td class="movie__detail modal-text modal-text--uppercase">${
        movie.original_title
      }</td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Genres</td>
      <td class="movie__detail modal-text">${genresConvertor(
        movie.genre_ids,
        genresList
      )}</td>
      </tr>
          </tbody>
          </table>
          
          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>
      <p class="movie__description modal-text">${movie.overview}</p>
      <div class="movie__add-buttons">
        <button class="movie__add-btn modal-text modal-text--uppercase js-movie__add-btn--watched">${
          checkWatched ? 'remove from ' : 'add to '
        }watched</button>
        <button class="movie__add-btn modal-text modal-text--uppercase js-movie__add-btn--queue">${
          checkQueue ? 'remove from ' : 'add to '
        }queue</button>
      </div><button data-movie-id='${movie.id}'>Trailer</button>
      </div></div>
  `;
  modalWindow.innerHTML = modalMovieMarkup;
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
  const film = getFilm(e, element, fromStoarage);
  local.push(film);
  localStorage.setItem(key, JSON.stringify(local));
  e.currentTarget.textContent = `remove from ${btn}`;
}

function removeFromWatchedOrQueue(e, element, local, key, btn) {
  const films = JSON.parse(localStorage.getItem(key));
  const movieId = Number(e.target.closest(element).id);
  films.forEach((film, i) => {
    film.id === movieId ? local.splice(i, 1) : film;
  });
  localStorage.setItem(key, JSON.stringify(local));
  e.currentTarget.textContent = `add to ${btn}`;
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

export { showMovie };

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
