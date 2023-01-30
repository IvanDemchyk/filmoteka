import { fetchTrends } from './fetchTrends';

const refs = {
  slider: document.querySelector('.slider'),
  btnPrev: document.querySelector('.slider__btn--prev'),
  btnNext: document.querySelector('.slider__btn--next'),
  sliderList: document.querySelector('.slider__list'),
  sliderItems: document.getElementsByClassName('slider__item'),
};
refs.btnPrev.addEventListener('click', onClickPrev);
refs.btnNext.addEventListener('click', onClickNext);

const page = 1;

let sliderWidth = refs.sliderList.clientWidth;
console.log(sliderWidth);
let offset = 0;

function onClickNext() {
  offset += sliderWidth;
  if (offset > sliderWidth * 3) {
    offset = 0;
  }

  refs.sliderList.style.left = -offset + 'px';
}

function onClickPrev() {
  offset -= sliderWidth;
  if (offset < 0) {
    offset = sliderWidth * 3;
  }
  refs.sliderList.style.left = -offset + 'px';
}

function createSliderItems(data) {
  let markup = data
    .map(
      ({
        poster_path,
        name,
        title,
        genre_ids,
        overview,
        release_date,
        id,
        vote_average,
      }) => {
        return `
<li class="slider__item" id='${id}'>
      <a class="slider__link" href="">
        <img class="slider__photo" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" loading="lazy" />
        <p class="slider__rating">Rating: ${vote_average}</p>
      </a>
    </li>
        `;
      }
    )
    .join('');
  return markup;
}

fetchTrends(page).then(res => {
  console.log(res);
  refs.sliderList.insertAdjacentHTML(
    'beforeend',
    createSliderItems(res.results)
  );
});
