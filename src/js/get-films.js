console.log('get-films');
import getFetchMovies from './api-films.js';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local.js';
const card = document.querySelector('.card');
function createMovieCard(data) {
  const mov = data
    .map(({ poster_path, name, title, genre_ids, overview }) => {
      return `<li class="card__item list">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" class="card__img" />
            <h2 class="card__title">${name ?? title}</h2>
            <p class="card__desc"></p>
            </li>`;
    })
    .join('');
  return mov;
}

getFetchMovies().then(res => {
  localStorage.setItem(CURRENT_MOVIES, JSON.stringify(res.results));
  card.insertAdjacentHTML(
    'beforeend',
    createMovieCard(JSON.parse(localStorage.getItem(CURRENT_MOVIES)))
  );
});

// card.addEventListener('click', e => {
//   console.dir(e.target.textContent);
//   let saveData = JSON.parse(localStorage.getItem(CURRENT_MOVIES));
//   console.log(saveData);
//   saveData.forEach(el =>
//     el.title === e.target.textContent ? watche.push(el) : console.log('no')
//   );
//   console.log(watche);
//   localStorage.setItem(WATCHE, JSON.stringify(watche));
// //   const r = saveData.filter((el) => {
// //     el.title ?? el.name === e.target.textContent;
// //     console.log(el);
// //   });
// //   console.log(r);
// //   watche.push(r);
// //   console.log(watche);
// //   localStorage.setItem(WATCHE, watche.push(JSON.stringify(r)));
// });