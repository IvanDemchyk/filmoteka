import { fetchMovies } from './fetchMovie';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local';
const form = document.querySelector('.form-js');

//search//

async function inputRequest(e) {
  e.preventDefault();
  const request = await inputEl.value.trim();
  if (!request) {
    // console.log('Error1');
    return;
  }
  try {
    page = 1;
    const t = 'search';
    const data = await fetchMovies(page, request, t);
    if (data.results.length === 0) {
      //   console.log('Error2');
      return;
    }
    {
      localStorage.setItem(CURRENT_MOVIES, JSON.stringify(data));
      localStorage.setItem(CURRENT_MOVIES, JSON.stringify(data));
      card.insertAdjacentHTML(
        'beforeend',
        createMovieCard(JSON.parse(localStorage.getItem(CURRENT_MOVIES)))
      );
    }
  } catch (err) {
    errorMsg;
  }
}

const errorMsg = err => Notify.failure(`${err}`);
form.addEventListener('submit', inputRequest);
//markup//
// const card = document.querySelector('.card');
// function createMovieCard(data) {
//   const mov = data
//     .map(({ poster_path, name, title, genre_ids, overview, release_date }) => {
//       return `<li class="card__item list">
//             <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" class="card__img" />
//             <h2 class="card__title">${name ?? title}</h2>
//             <p class="card__desc">Genres: ${genre_ids} | ${release_date.substr(
//         0,
//         4
//       )}</p>
//             </li>`;
//     })
//     .join('');
//   return mov;
// }
