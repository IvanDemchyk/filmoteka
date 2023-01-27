// console.log('get-films');
import { createMovieCard } from './createMovieCard.js';
import { getfetchTrends } from './api-films.js';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local.js';
import { card } from './local';
import { globalRequest } from './searchRequest';
console.log(globalRequest);
let page = 1;
let btnActionWatch = 'add to watched';
async function render(page) {
  const data = await getfetchTrends(page);
  localStorage.setItem(CURRENT_MOVIES, JSON.stringify(data));
  card.innerHTML = createMovieCard(
    JSON.parse(localStorage.getItem(CURRENT_MOVIES)).results
  );
}
render(page);

//Додаю сюди для перевірки функціоналу, поки без підключення
//Модальне вікно
card.addEventListener('click', showMovie);

const backdrop = document.querySelector('.backdrop');
console.log(backdrop);
const modalMovie = document.querySelector('.modal__movie');
backdrop.addEventListener('click', closeModal);

function showMovie(e) {
  const movieId = Number(e.target.parentElement.id);

  const film = JSON.parse(localStorage.getItem(CURRENT_MOVIES)).results.find(
    movie => movie.id === movieId
  );
  backdrop.hidden = false;
  createMovieInfo(film, btnActionWatch);
}

function createMovieInfo(movie, btnAction = 'add to watched') {
  const modalMovieMarkup = `
  <img class='movie__img' alt="movie poster" src="https://image.tmdb.org/t/p/w500/${
    movie.poster_path
  }" width="375" height="478"/>
      <div class="movie__info">
      <h2 class="movie__title">${movie.title}</h2>
      <table class="movie__details">
      <tbody>
      <tr>
      <td class="movie__detail-name detail-text">Vote/Votes</td>
      <td class="movie__detail-value">
      <span class="movie__detail-value--accent">
      ${movie.vote_average.toFixed(1)} </span
      >/ ${movie.vote_count}
      </td>
      </tr>
      <tr>
      <td class="movie__detail-name detail-text">Popularity</td>
      <td class="movie__detail-value">${movie.popularity.toFixed(1)}</td>
      </tr>
      <tr>
      <td class="movie__detail-name detail-text">Original title</td>
      <td class="movie__detail-value detail-text detail-text--original-title">${
        movie.original_title
      }</td>
      </tr>
      <tr>
      <td class="movie__detail-name detail-text">Genres</td>
      <td class="movie__detail-value detail-text">${movie.genre_ids}</td>
      </tr>
          </tbody>
          </table>
          
          <h3 class="movie__about">About</h3>
      <p class="movie__description">${movie.overview}</p>
      <div class="modal-window__buttons">
        <button class="movie__btn movie__btn--watched">${btnAction}</button>
        <button class="movie__btn movie__btn--queue">add to queue</button>
      </div>
      </div>`;
  modalMovie.innerHTML = modalMovieMarkup;

  const modalBtns = {
    addToWatched: document.querySelector('.movie__btn--watched'),
    addToQueue: document.querySelector('.movie__btn--queue'),
  };

  modalBtns.addToWatched.addEventListener('click', addFilmToWatched);
  modalBtns.addToQueue.addEventListener('click', addFilmToQueue);
}

function closeModal(e) {
  if (e.target.parentElement.nodeName === 'BODY') {
    backdrop.hidden = true;
  }
}

function addLocalStorageWatcheOrQueue(local, key, event, btn) {
  const film = JSON.parse(localStorage.getItem(CURRENT_MOVIES));

  const titleFilm =
    event.target.parentElement.parentElement.firstElementChild.textContent;
  const getFilms = film.results.find(movie => movie.title === titleFilm);

  local.push(getFilms);
  localStorage.setItem(key, JSON.stringify(local));
  event.currentTarget.textContent = `remove from ${btn}`;
}

function removeLocalStorageWatcheOrQueue(key, event, local, btn) {
  const film = JSON.parse(localStorage.getItem(key));
  const titleFilm =
    event.currentTarget.parentElement.parentElement.firstElementChild
      .textContent;
  film.forEach((el, i) => {
    el.title === titleFilm ? local.splice(i, 1) : el;
  });
  localStorage.setItem(key, JSON.stringify(local));
  event.currentTarget.textContent = `add to ${btn}`;
}

function addFilmToWatched(e) {
  if (e.currentTarget.textContent === 'add to watched') {
    addLocalStorageWatcheOrQueue(watche, WATCHE, e, 'watched');
  } else if (e.currentTarget.textContent === 'remove from watched') {
    removeLocalStorageWatcheOrQueue(WATCHE, e, watche, 'watched');
  }
}

function addFilmToQueue(e) {
  if (e.currentTarget.textContent === 'add to queue') {
    addLocalStorageWatcheOrQueue(queue, QUEUE, e, 'queue');
  } else if (e.currentTarget.textContent === 'remove from queue') {
    removeLocalStorageWatcheOrQueue(QUEUE, e, queue, 'queue');
  }
}
