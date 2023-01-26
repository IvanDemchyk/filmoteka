const API_KEY = '0b11624b950ea9c4284f61844023b09c';
const BASE_URL = 'https://api.themoviedb.org/3/trending';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieListElem = document.querySelector('.js-film__list');
const paginationBoxElem = document.querySelector('.js-pagination');

let currPageGlobe;

function getTrendingMovies(page = 1) {
  return trendingMovies = fetch(`${BASE_URL}/movie/week?api_key=${API_KEY}&page=${page}`)
    .then(resp => {

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }).catch(err => console.log(err));

}
getTrendingMovies().then(data => {
  createMarkup(data.results);
  pagination(data.page, data.total_pages);
});

function createMarkup(arr) {
  const markup = arr.map(({
    poster_path,
    title,
    release_date,
    vote_average,
    genre_ids
  }) => {
    return `<li class="film__item">
          <img class="film__item-img" src="${IMG_URL}${poster_path}">
          <h2 class="film__item-headline">${title}</h2>
          <div class="film__list-inner">
            <p class="film__item-genre">${genre_ids}</p>
            <p class="film__item-year">${release_date}</p>
            <p class="film__item-rate">${vote_average}</p>
          </div>
        </li>`
  }).join('');

  movieListElem.innerHTML = markup;
}

paginationBoxElem.addEventListener("click", paginationHandler);

function pagination(currPage, allPages) {

  let markupControls = '';
  let beforeTwoPages = currPage - 2;
  let beforeOnePage = currPage - 1;
  let afterOnePage = currPage + 1;
  let afterTwoPage = currPage + 2;
  currPageGlobe = currPage;

  if (currPage > 1) {
    markupControls += `<li class=' arrows'>&#129144;</li>`;
    markupControls += `<li class="firstInt">1</li>`;
  }

  if (currPage > 4) {
    markupControls += `<li class="dots">...</li>`;
  }

  if (currPage > 3) {
    markupControls += `<li class="two-left">${beforeTwoPages}</li>`;
  }

  if (currPage > 2) {
    markupControls += `<li>${beforeOnePage}</li>`;
  }

  markupControls += `<li class='active'>${currPage}</li>`;

  if (allPages - 1 > currPage) {
    markupControls += `<li >${afterOnePage}</li>`;
  }

  if (allPages - 2 > currPage) {
    markupControls += `<li >${afterTwoPage}</li>`;
  }

  if (allPages - 3 > currPage) {
    markupControls += `<li class="dots">...</li>`;
  }

  if (allPages > currPage) {
    markupControls += `<li class="lastInt">${allPages}</li>`;
    markupControls += `<li class=' arrows'>&#129146</li>`;
  }

  paginationBoxElem.innerHTML = markupControls;
}

function paginationHandler(evt) {

  console.log(evt.target);
  if (evt.target.nodeName !== 'LI') {
    return;
  }

  if (evt.target.textContent === "...") {
    return;
  }

  if (evt.target.textContent === "🡸") {
    getTrendingMovies(currPageGlobe -= 1).then(data => {
      createMarkup(data.results);
      pagination(data.page, date.total_pages);
    })
  }

  if (evt.target.textContent === "🡺") {
    getTrendingMovies(currPageGlobe += 1).then(data => {
      createMarkup(data.results);
      pagination(data.page, data.total_pages);
    })
  }

  const actualPage = evt.target.textContent;

  getTrendingMovies(actualPage).then(data => {
    createMarkup(data.results);
    pagination(data.page, data.total_pages);
  })

}