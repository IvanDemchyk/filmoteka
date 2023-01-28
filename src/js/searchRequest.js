import {
  fetchMovies
} from './fetchMovie';
import {
  card
} from './local';
import {
  createMovieCard
} from './createMovieCard';
import {
  CURRENT_MOVIES,
  WATCHE,
  QUEUE,
  watche,
  queue
} from './local';
const form = document.querySelector('.form-js');
const inputEl = document.querySelector('.form-input');
const notif = document.querySelector('.form__notification');
export let globalRequest;
let page = 1;
async function inputRequest(e) {
  e.preventDefault();
  // console.log('hello');
  request = await inputEl.value.trim();
  if (!request) {
    // console.log('Error1');
    return;
  }
  try {
    const data = await fetchMovies(page, request);
    console.log('hello try');
    if (data.results.length === 0) {
      // console.dir(notif.style.visibility);
      notif.style.visibility = 'visible';
      // console.dir(notif.style.visibility);
      setTimeout(() => {
        notif.style.visibility = 'hidden';
      }, 10000);
      return;
    }
    localStorage.setItem(CURRENT_MOVIES, JSON.stringify(data));
    globalRequest = request;
    // console.log(globalRequest);
    card.innerHTML = createMovieCard(
      JSON.parse(localStorage.getItem(CURRENT_MOVIES)).results
    );
  } catch (err) {
    console.log('Error');
    errorMsg;
  }
}
const errorMsg = err => Notify.failure(`${err}`);
/* form.addEventListener('submit', inputRequest); */