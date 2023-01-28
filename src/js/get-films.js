// console.log('get-films');
import { createMovieCard } from './createMovieCard.js';
import { getfetchTrends } from './fetchTrends.js';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local.js';
import { card } from './local';
import { globalRequest } from './searchRequest';


//Додаю сюди для перевірки функціоналу, поки без підключення
//Модальне вікно
card.addEventListener('click', showMovie);
