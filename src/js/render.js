import { card } from './local';
import { createMovieCard } from './createMovieCard';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local';

export function render(data) {
  localStorage.setItem(CURRENT_MOVIES, JSON.stringify(data));
  card.innerHTML = createMovieCard(
    JSON.parse(localStorage.getItem(CURRENT_MOVIES)).results
  );
}
