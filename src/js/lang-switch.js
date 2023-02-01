import { card, LANG, logo, library, home } from './local.js';

export const langControlElem = document.querySelector('.lang__control');
const langSwithElem = document.querySelector('.lang');
// const logo = document.querySelector('.page-header__logo-title');
export let searchLangGlobal;

const ukranian = 'uk-UA';
const english = 'en-US';

let currentLang = localStorage.getItem(LANG);
storageLang(currentLang);

langSwithElem.addEventListener('click', onLangChange);

export function onLangChange(evt) {
  if (evt.target.classList.contains('lang__control')) {
    langControlElem.classList.toggle('checked');
  }

  if (langControlElem.classList.contains('checked')) {
    logo.textContent = 'Фільмотека';
    library.textContent = 'МОЯ БІБЛІОТЕКА';
    home.textContent = 'ГОЛОВНА';
    searchLangGlobal = 'en';
    localStorage.setItem(LANG, ukranian);
  } else {
    logo.textContent = 'Filmoteka';
    library.textContent = 'MY LIBRARY';
    home.textContent = 'HOME';
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
