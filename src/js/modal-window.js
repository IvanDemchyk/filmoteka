const backdrop = document.querySelector('.backdrop');
const modalMovie = document.querySelector('.modal__movie');
backdrop.addEventListener('click', closeModal);

function showMovie(e) {
  const movieId = Number(e.target.parentElement.id);
  const film = JSON.parse(localStorage.getItem(CURRENT_MOVIES)).find(
    movie => movie.id === movieId
  );
  backdrop.hidden = false;
  createMovieInfo(film);
}

function createMovieInfo(movie) {
  const modalMovieMarkup = `
  <img class='movie__img' alt="movie poster" src=""https://image.tmdb.org/t/p/w500/${
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
        <button class="movie__btn movie__btn--watched">add to watched</button>
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
  if (e.target.parentElement.nodeName === 'MAIN') {
    backdrop.hidden = true;
  }
}

function addFilmToWatched(e) {
  // console.log(e.currentTarget.textContent);
  // if (e.currentTarget.textContent === 'add to watched') {
  // }
  e.currentTarget.textContent === 'add to watched'
    ? (e.currentTarget.textContent = 'remove from watched')
    : (e.currentTarget.textContent = 'add to watched');
}

function addFilmToQueue(e) {
  e.currentTarget.textContent === 'add to queue'
    ? (e.currentTarget.textContent = 'remove from queue')
    : (e.currentTarget.textContent = 'add to queue');
}
