import { render } from './render.js';
import { fetchMovies } from './fetchMovie';
import { fetchTrends } from './fetchTrends.js';
import { pagination } from './paginFunction.js';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
export const paginationBoxElem = document.querySelector('.js-pagination');
const form = document.querySelector('.form-js');
const inputEl = document.querySelector('.form-input');
const notif = document.querySelector('.form__notification');
let globalRequest;
let currPageGlobe = 1;
let page = 1;

async function inputRequest(e) {
  e.preventDefault();
  let request = inputEl.value.trim();
  if (!request) {
    return;
  }
  try {
    const data = await fetchMovies(page, request);
    if (data.results.length === 0) {
      notif.style.visibility = 'visible';
      setTimeout(() => {
        notif.style.visibility = 'hidden';
      }, 5000);
      return;
    }
    currPageGlobe = data.page;
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

async function getMovies(page = 1) {
  let resp;
  if (globalRequest) {
    loaderOn();
    resp = await fetchMovies(page, globalRequest);
    currPageGlobe = resp.page;
    window.onload = loaderOff();
    return resp;
  } else {
    loaderOn();
    resp = await fetchTrends(page);
    window.onload = loaderOff();
    currPageGlobe = resp.page;
    return resp;
  }
}

getMovies().then(data => {
  loaderOn();
  render(data);
  currPageGlobe = data.page;
  window.onload = loaderOff();
  pagination(data.page, data.total_pages);
});

paginationBoxElem.addEventListener('click', paginationHandler);

function paginationHandler(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }

  if (evt.target.textContent === '...') {
    return;
  }

  if (evt.target.textContent === '🡸') {
    // currPageGlobe = JSON.parse(localStorage.getItem('current_movies')).page;
    console.log('Arrov<-', currPageGlobe);
    getMovies((currPageGlobe -= 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  } else if (evt.target.textContent === '🡺') {
    // currPageGlobe = JSON.parse(localStorage.getItem("current_movies")).page;
    console.log('Arrov>-', currPageGlobe);
    getMovies((currPageGlobe += 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  } else {
    const actualPage = evt.target.textContent;
    // currPageGlobe = actualPage;
    console.log('in current - ', currPageGlobe);
    getMovies(actualPage).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  }
}
