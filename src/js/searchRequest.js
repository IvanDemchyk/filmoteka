import { fetchMovies } from './fetchMovie';
import { render } from './render';
import { pagination } from './paginFunction';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
const form = document.querySelector('.form-js');
const inputEl = document.querySelector('.form-input');
const notif = document.querySelector('.form__notification');
export let globalRequest;
let page = 1;
async function inputRequest(e) {
  e.preventDefault();
<<<<<<< Updated upstream
  request = inputEl.value.trim();
=======
   let request = inputEl.value.trim();
>>>>>>> Stashed changes
  if (!request) {
    return;
  }
  try {
    const data = await fetchMovies(page, request);
    console.log('hello try');
    if (data.results.length === 0) {
      notif.style.visibility = 'visible';
      setTimeout(() => {
        notif.style.visibility = 'hidden';
      }, 5000);
      return;
    }
    loaderOn();
    render(data);
    window.onload = loaderOff();
    globalRequest = request;
    pagination(data.page, data.total_pages);
  } catch (err) {
    console.log('Error');
    errorMsg;
  }
}
const errorMsg = err => Notify.failure(`${err}`);
form.addEventListener('submit', inputRequest);
