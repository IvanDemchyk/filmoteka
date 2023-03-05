import genresConvertor from './genresConvertor';
import eventListeners from './eventListeners';
import closeModal from './closeModal';
import addFilm from './addFilm';
import refs from './refs';

export function createMovieInfo(
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
  refs.modalMovie.id = movie.id;
  refs.modalMovie.innerHTML = modalMovieMarkup;
  eventListeners(closeModal, addFilm);
}
