import { fetchMovies } from './fetchMovie';
import { card } from './local';
import { createMovieCard } from './createMovieCard';
import { CURRENT_MOVIES, WATCHE, QUEUE, watche, queue } from './local';
const form = document.querySelector('.form-js');
const inputEl = document.querySelector('.form-input');
const notif = document.querySelector('.form__notification');

async function inputRequest(e) {
  e.preventDefault();
  const request = await inputEl.value.trim();
  if (!request) {
    console.log('Error1');
    return;
  }
  try {
    page = 1;
    const data = await fetchMovies(page, request);
    if (data.results.length === 0) {
      notif.style.visibility = '';
      setTimeout(() => {
        notif.style.visibility = 'hidden';
      }, 3000);
      return;
    }
    localStorage.setItem(CURRENT_MOVIES, JSON.stringify(data));
    card.innerHTML = createMovieCard(
      JSON.parse(localStorage.getItem(CURRENT_MOVIES)).results
    );
  } catch (err) {
    errorMsg;
  }
}
const errorMsg = err => Notify.failure(`${err}`);
form.addEventListener('submit', inputRequest);
