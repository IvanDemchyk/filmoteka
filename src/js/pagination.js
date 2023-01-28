const API_KEY = '0b11624b950ea9c4284f61844023b09c';
const BASE_URL = 'https://api.themoviedb.org/3/trending';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
import { render } from './render.js';
import { fetchMovies } from './fetchMovie';
import { fetchTrends } from './fetchTrends.js';
import { globalRequest } from "./searchRequest"
// import {currPageGlobe} from './paginFunction'
import { pagination } from './paginFunction.js';
const paginationBoxElem = document.querySelector('.js-pagination');

let currPageGlobe;

async function getTrendingMovies(page = 1) {
console.log(globalRequest);
  let resp;
  if (globalRequest) {
    resp = await fetchMovies(page, globalRequest);

    return resp;
  } else {
    resp = await fetchTrends(page);
    return resp;
 }

}


getTrendingMovies().then(data => {
  render(data);
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
    getTrendingMovies((currPageGlobe -= 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  }

  else if (evt.target.textContent === '🡺') {
    getTrendingMovies((currPageGlobe += 1)).then(data => {
      render(data);
      pagination(data.page, data.total_pages);
    });
  } else {
    const actualPage = evt.target.textContent;
    getTrendingMovies(actualPage).then(data => {
    render(data);
    pagination(data.page, data.total_pages);
  });
  }
  
}
