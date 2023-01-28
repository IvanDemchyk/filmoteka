// console.log('get-films');
import { createMovieCard } from './createMovieCard.js';
import { getfetchTrends } from './api-films.js';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local.js';
import { card } from './local';
import { globalRequest } from './searchRequest';
import { showMovie } from './modal-window.js';

let page = 1;

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
