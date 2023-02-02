import { card, LANG, logo, library, home } from './local.js';

const langControlElem = document.querySelector('.lang__control');
const langSwithElem = document.querySelector('.lang');
const placeholderElem = document.querySelector('.form-input');

// const logo = document.querySelector('.page-header__logo-title');
export let searchLangGlobal;
console.log(langControlElem)
const ukranian = 'uk-UA';
const english = 'en-US';

let currentLang = localStorage.getItem(LANG);
storageLang(currentLang);

langSwithElem.addEventListener('click', onLangChange);

export function onLangChange(evt) {
  if (evt.target.classList.contains('lang__control') || evt.target.classList.contains('lang__value')) {
    langControlElem.classList.toggle('checked');
  }

  if (langControlElem.classList.contains('checked')) {
    logo.textContent = 'Фільмотека';
    library.textContent = 'МОЯ БІБЛІОТЕКА';
    home.textContent = 'ГОЛОВНА';
    placeholderElem.setAttribute("placeholder","Пошук фільмів");
    searchLangGlobal = 'en';
    localStorage.setItem(LANG, ukranian);
  } else {
    logo.textContent = 'Filmoteka';
    library.textContent = 'MY LIBRARY';
    home.textContent = 'HOME';
    placeholderElem.setAttribute("placeholder","Movie search");
    searchLangGlobal = 'uk';
    localStorage.setItem(LANG, english);
  }
}

function storageLang(currentLang = 'english') {
  if (currentLang === null) {
    return;
  }

  if (currentLang === english) {
    searchLangGlobal = 'en';
    langControlElem.classList.remove('checked');
  } else {
    searchLangGlobal = 'uk';
    langControlElem.classList.add('checked');
  }
}
