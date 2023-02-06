import { render } from './render.js';
import { fetchMovies } from './fetchMovie';
import { fetchTrends } from './fetchTrends.js';
import { pagination } from './paginFunction.js';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import { LANG, logo, library, home, CURRENT_MOVIES, GLOBALREQUEST } from './local.js';
import { scrollToTop } from "./btn-up.js";
// import { onLangChange } from './lang-switch';
// import { langControlElem } from './lang-switch';
const logoElem = document.querySelector('.page-header__logo')
const langControlElem = document.querySelector('.lang__control');
export const paginationBoxElem = document.querySelector('.js-pagination');
const form = document.querySelector('.form-js');
const inputEl = document.querySelector('.form-input');
const notif = document.querySelector('.form__notification');
let searchLangGlobal;
let globalRequest = localStorage.getItem(GLOBALREQUEST);
let currPageGlobe = 1;
let page = 1;
let lang;

logoElem.addEventListener('click', async () => {
  globalRequest = null;
  localStorage.setItem(GLOBALREQUEST, '')
  page = 1;
  loaderOn();
  resp = await fetchTrends(page);
  currPageGlobe = resp.page;
  render(resp);
  window.onload = loaderOff();
  pagination(resp.page, resp.total_pages);
})

async function inputRequest(e) {
  e.preventDefault();
  let request = inputEl.value.trim();
  lang = localStorage.getItem(LANG);
  if (!request) {
    return;
  }
  if (!lang) {
    lang = 'en-US';
  } else {
    lang = localStorage.getItem(LANG);
  }
  localStorage.setItem(GLOBALREQUEST, request);
  try {
    const data = await fetchMovies(page, request, lang);
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
  }
}

async function getMovies(page = 1) {
  let resp;
  if (globalRequest) {
    loaderOn();
    resp = await fetchMovies(page, globalRequest, lang);
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
  let searchLangGlobal;
  if (langControlElem.classList.contains('checked')) {
    logo.textContent = 'Фільмотека';
    library.textContent = 'МОЯ БІБЛІОТЕКА';
    home.textContent = 'ГОЛОВНА';
    searchLangGlobal = 'en';
  } else {
    logo.textContent = 'Filmoteka';
    library.textContent = 'MY LIBRARY';
    home.textContent = 'HOME';
    searchLangGlobal = 'uk';
  }
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
    getMovies((currPageGlobe -= 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
      scrollToTop();
    });
  } else if (evt.target.textContent === '🡺') {
    getMovies((currPageGlobe += 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
    scrollToTop();
  } else {
    const actualPage = evt.target.textContent;
    getMovies(actualPage).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
    scrollToTop();
  }
}
form.addEventListener('submit', inputRequest);
