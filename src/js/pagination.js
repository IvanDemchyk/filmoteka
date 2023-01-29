// const API_KEY = '0b11624b950ea9c4284f61844023b09c';
// const BASE_URL = 'https://api.themoviedb.org/3/trending';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
import { render } from './render.js';
import { fetchMovies } from './fetchMovie';
import { fetchTrends } from './fetchTrends.js';
import { pagination } from './paginFunction.js';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
const paginationBoxElem = document.querySelector('.js-pagination');
const form = document.querySelector('.form-js');
const inputEl = document.querySelector('.form-input');
const notif = document.querySelector('.form__notification');

let globalRequest;
let currPageGlobe;

// search function
async function inputRequest(e) {
  e.preventDefault();
  let request = inputEl.value.trim();
  if (!request) {
    return;
  }
  try {
    const data = await fetchMovies(page = 1, request);
    // console.log('hello try');
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
  // console.log(globalRequest);
  let resp;
  if (globalRequest) {
    loaderOn();
    resp = await fetchMovies(currPageGlobe, globalRequest);
    window.onload = loaderOff();
    currPageGlobe = resp.page;
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
  }else if (evt.target.textContent === '🡺') {
    // currPageGlobe = JSON.parse(localStorage.getItem("current_movies")).page;
    console.log('Arrov>-' ,currPageGlobe);
    getMovies((currPageGlobe += 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  }
  else {
    const actualPage = evt.target.textContent;
    // currPageGlobe = actualPage;
    console.log('in current - ', currPageGlobe);
    getMovies(actualPage).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  }
}
